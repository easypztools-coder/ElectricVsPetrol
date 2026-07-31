import type { LocalPrices } from "@/lib/types/costCalculator";

// ── Fallback / sample data ────────────────────────────────────────────────────
// These are approximate UK national averages used when no live data is available.
// Source: RAC Fuel Watch (fuel, July 2026), Ofgem price cap (electricity, Jul-Sep
// 2026), Zapmap charging price index (public rapid/ultra-rapid, June 2026).
// Updated manually — review quarterly alongside the Ofgem price cap change.
export const FALLBACK_PRICES: LocalPrices = {
  petrolPencePerLitre: 153.5,
  dieselPencePerLitre: 168.6,
  homeElectricityPencePerKwh: 26.1,
  publicChargingPencePerKwh: 79.0,
  source: "fallback",
};

// ── Provider interface ────────────────────────────────────────────────────────
// Future live integrations (e.g. Fuel Finder / BEIS open data) should implement
// this contract and swap in via an environment variable flag.
export interface FuelPriceProvider {
  getFuelPricesNearPostcode(postcode: string): Promise<LocalPrices>;
}

// ── Fallback provider ─────────────────────────────────────────────────────────
export const fallbackFuelPriceProvider: FuelPriceProvider = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getFuelPricesNearPostcode(_postcode: string): Promise<LocalPrices> {
    // In a live implementation this would:
    // 1. Exchange env credentials for a bearer token via FUEL_FINDER_TOKEN_URL
    // 2. Query FUEL_FINDER_API_BASE_URL with the postcode
    // 3. Parse and return local prices
    // All of this should happen server-side only (API route / server action).
    return FALLBACK_PRICES;
  },
};

// ── Active provider (swap this to a live provider once available) ─────────────
export const fuelPriceProvider: FuelPriceProvider = fallbackFuelPriceProvider;

export async function getFuelPricesNearPostcode(
  postcode: string
): Promise<LocalPrices> {
  return fuelPriceProvider.getFuelPricesNearPostcode(postcode);
}

// ── Environment variable placeholders (server-side only) ─────────────────────
// FUEL_FINDER_CLIENT_ID
// FUEL_FINDER_CLIENT_SECRET
// FUEL_FINDER_TOKEN_URL
// FUEL_FINDER_API_BASE_URL
