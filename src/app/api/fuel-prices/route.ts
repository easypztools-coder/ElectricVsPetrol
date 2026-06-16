import { NextRequest, NextResponse } from "next/server";

const BASE = process.env.FUEL_FINDER_API_BASE_URL ?? "";
const TOKEN_URL = process.env.FUEL_FINDER_TOKEN_URL ?? "";
const CLIENT_ID = process.env.FUEL_FINDER_CLIENT_ID ?? "";
const CLIENT_SECRET = process.env.FUEL_FINDER_CLIENT_SECRET ?? "";

// ── In-memory cache ────────────────────────────────────────────────────────────
// Token: refreshed every 50 min (API tokens expire at 60 min)
// Price data: refreshed every hour
// Station locations: refreshed every 24 hours

interface TokenCache {
  token: string;
  expiresAt: number;
}

interface StationLocation {
  node_id: string;
  latitude: number;
  longitude: number;
}

interface FuelPrice {
  fuel_type: string;
  price: number;
}

interface PriceRecord {
  node_id: string;
  fuel_prices: FuelPrice[];
}

interface DataCache {
  stations: StationLocation[];
  stationsAt: number;
  prices: PriceRecord[];
  pricesAt: number;
}

let tokenCache: TokenCache | null = null;
let dataCache: DataCache | null = null;

const TOKEN_TTL = 50 * 60 * 1000;
const PRICES_TTL = 60 * 60 * 1000;
const STATIONS_TTL = 24 * 60 * 60 * 1000;

async function getToken(): Promise<string> {
  const now = Date.now();
  if (tokenCache && now < tokenCache.expiresAt) {
    return tokenCache.token;
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    scope: "fuelfinder.read",
  });

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Token request failed: ${res.status}`);

  const json = await res.json();
  const token: string = json.data.access_token;

  tokenCache = { token, expiresAt: now + TOKEN_TTL };
  return token;
}

async function fetchBatches<T>(
  path: string,
  token: string
): Promise<T[]> {
  const results: T[] = [];
  for (let batch = 1; ; batch++) {
    const res = await fetch(`${BASE}${path}?batch-number=${batch}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) break;
    const data = await res.json();
    if (!Array.isArray(data)) break;
    results.push(...(data as T[]));
    if (data.length < 500) break;
  }
  return results;
}

async function getData(token: string): Promise<DataCache> {
  const now = Date.now();

  const needStations = !dataCache || now - dataCache.stationsAt > STATIONS_TTL;
  const needPrices = !dataCache || now - dataCache.pricesAt > PRICES_TTL;

  if (!needStations && !needPrices && dataCache) return dataCache;

  interface RawStation {
    node_id: string;
    location?: { latitude?: number; longitude?: number };
  }

  const [rawStations, prices] = await Promise.all([
    needStations
      ? fetchBatches<RawStation>("/api/v1/pfs", token)
      : Promise.resolve(null),
    needPrices
      ? fetchBatches<PriceRecord>("/api/v1/pfs/fuel-prices", token)
      : Promise.resolve(null),
  ]);

  const stations: StationLocation[] =
    rawStations !== null
      ? rawStations
          .filter(
            (s) =>
              s.location?.latitude !== undefined &&
              s.location?.longitude !== undefined
          )
          .map((s) => ({
            node_id: s.node_id,
            latitude: s.location!.latitude!,
            longitude: s.location!.longitude!,
          }))
      : (dataCache?.stations ?? []);

  dataCache = {
    stations,
    stationsAt: rawStations !== null ? now : (dataCache?.stationsAt ?? 0),
    prices: prices ?? dataCache?.prices ?? [],
    pricesAt: prices !== null ? now : (dataCache?.pricesAt ?? 0),
  };

  return dataCache;
}

function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function average(values: number[]): number | null {
  if (values.length === 0) return null;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

export async function GET(request: NextRequest) {
  const lat = parseFloat(request.nextUrl.searchParams.get("lat") ?? "");
  const lon = parseFloat(request.nextUrl.searchParams.get("lon") ?? "");

  if (isNaN(lat) || isNaN(lon)) {
    return NextResponse.json(
      { error: "lat and lon query params are required" },
      { status: 400 }
    );
  }

  try {
    const token = await getToken();
    const { stations, prices } = await getData(token);

    // Build price map: node_id → fuel_prices[]
    const priceMap = new Map(prices.map((p) => [p.node_id, p.fuel_prices]));

    // Find stations within 10 km radius
    const RADIUS_KM = 10;
    const nearbyPrices: { e10: number[]; b7: number[] } = {
      e10: [],
      b7: [],
    };

    for (const station of stations) {
      if (haversineKm(lat, lon, station.latitude, station.longitude) > RADIUS_KM)
        continue;

      const fuelPrices = priceMap.get(station.node_id);
      if (!fuelPrices) continue;

      for (const fp of fuelPrices) {
        if (fp.fuel_type === "E10") nearbyPrices.e10.push(fp.price);
        if (fp.fuel_type === "B7_STANDARD") nearbyPrices.b7.push(fp.price);
      }
    }

    // Expand radius to 25 km if fewer than 3 stations found
    if (nearbyPrices.e10.length < 3) {
      const WIDER_KM = 25;
      for (const station of stations) {
        const dist = haversineKm(lat, lon, station.latitude, station.longitude);
        if (dist <= RADIUS_KM || dist > WIDER_KM) continue;

        const fuelPrices = priceMap.get(station.node_id);
        if (!fuelPrices) continue;

        for (const fp of fuelPrices) {
          if (fp.fuel_type === "E10") nearbyPrices.e10.push(fp.price);
          if (fp.fuel_type === "B7_STANDARD") nearbyPrices.b7.push(fp.price);
        }
      }
    }

    const petrol = average(nearbyPrices.e10);
    const diesel = average(nearbyPrices.b7);

    if (petrol === null && diesel === null) {
      return NextResponse.json(
        { error: "No fuel price data found near this location" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        petrolPencePerLitre: petrol !== null ? Math.round(petrol * 10) / 10 : null,
        dieselPencePerLitre: diesel !== null ? Math.round(diesel * 10) / 10 : null,
        stationCount: nearbyPrices.e10.length,
        source: "fuel-finder",
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=300",
        },
      }
    );
  } catch (err) {
    console.error("[fuel-prices]", err);
    return NextResponse.json(
      { error: "Failed to fetch fuel prices" },
      { status: 500 }
    );
  }
}
