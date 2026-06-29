import { ImageResponse } from "next/og";
import { comparisons, findComparison } from "@/lib/data/comparisons";
import { findEV, findICE } from "@/lib/data/vehicles";
import { vehicleImages } from "@/lib/data/vehicleImages";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Pre-generate for all known slugs at build time
export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

// ── Cost helpers (mirrors compare/[slug]/page.tsx) ──────────────
const LITRES_PER_GALLON = 4.54609;
const PETROL_PRICE = 143.9;
const DIESEL_PRICE = 151.9;

function fuelCost(miles: number, mpg: number, pricePence: number) {
  return (miles / mpg) * LITRES_PER_GALLON * (pricePence / 100);
}

function evCost(miles: number, milesPerKwh: number) {
  const kWh = miles / milesPerKwh;
  const blended = 0.8 * 28 + 0.2 * 60; // 80% home @ 28p, 20% public @ 60p
  return kWh * (blended / 100);
}

// Fetch a remote image and return it as a base64 data URI.
// Wikimedia CDN requires a proper User-Agent; falls back to null on failure.
async function fetchAsDataUrl(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "ElectricVsPetrol/1.0 (https://electricvspetrol.co.uk) OG-image-build",
      },
    });
    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") ?? "image/jpeg";
    const buffer = await res.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    return `data:${contentType};base64,${base64}`;
  } catch {
    return null;
  }
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pair = findComparison(slug);

  if (!pair) return new ImageResponse(<div />, size);

  const ev = findEV(pair.evSlug)!;
  const ice = findICE(pair.iceSlug)!;
  const pricePence = ice.fuelType === "diesel" ? DIESEL_PRICE : PETROL_PRICE;
  const ice10k = fuelCost(10000, ice.realWorldMpg, pricePence);
  const ev10k = evCost(10000, ev.milesPerKwh);
  const saving = Math.round(ice10k - ev10k);

  const [evImgSrc, iceImgSrc] = await Promise.all([
    vehicleImages[ev.slug] ? fetchAsDataUrl(vehicleImages[ev.slug]) : null,
    vehicleImages[ice.slug] ? fetchAsDataUrl(vehicleImages[ice.slug]) : null,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0B132B",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 40px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(0,102,255,0.1)",
              border: "1px solid rgba(0,102,255,0.3)",
              borderRadius: 99,
              padding: "5px 16px",
            }}
          >
            <span style={{ color: "#4D8AFF", fontSize: 14, fontWeight: 700 }}>
              Running Cost Comparison · UK 2026
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.28)", fontSize: 14 }}>
            electricvspetrol.co.uk
          </span>
        </div>

        {/* ── Car panels ── */}
        <div style={{ display: "flex", flex: 1 }}>
          {/* EV panel */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Photo */}
            <div
              style={{
                height: 265,
                overflow: "hidden",
                display: "flex",
                position: "relative",
              }}
            >
              {evImgSrc ? (
                <img
                  src={evImgSrc}
                  style={{
                    width: 599,
                    height: 265,
                    objectFit: "cover",
                    objectPosition: "center 55%",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 599,
                    height: 265,
                    background: "rgba(0,102,255,0.08)",
                    display: "flex",
                  }}
                />
              )}
              {/* Blue tint */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 599,
                  height: 265,
                  background: "rgba(0,102,255,0.14)",
                }}
              />
            </div>

            {/* EV info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "18px 32px",
                gap: 8,
                flex: 1,
                background: "rgba(0,102,255,0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    background: "rgba(0,102,255,0.2)",
                    border: "1px solid rgba(0,102,255,0.5)",
                    borderRadius: 6,
                    padding: "3px 10px",
                    display: "flex",
                  }}
                >
                  <span
                    style={{
                      color: "#4D8AFF",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    ELECTRIC
                  </span>
                </div>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
                  {ev.segment}
                </span>
              </div>
              <span
                style={{
                  color: "white",
                  fontSize: 27,
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                {ev.displayName}
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
                {ev.milesPerKwh} mi/kWh real-world
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 2,
              background: "rgba(255,255,255,0.08)",
              display: "flex",
            }}
          />

          {/* ICE panel */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Photo */}
            <div
              style={{
                height: 265,
                overflow: "hidden",
                display: "flex",
                position: "relative",
              }}
            >
              {iceImgSrc ? (
                <img
                  src={iceImgSrc}
                  style={{
                    width: 599,
                    height: 265,
                    objectFit: "cover",
                    objectPosition: "center 55%",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 599,
                    height: 265,
                    background: "rgba(251,146,60,0.06)",
                    display: "flex",
                  }}
                />
              )}
              {/* Amber tint */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 599,
                  height: 265,
                  background: "rgba(251,146,60,0.1)",
                }}
              />
            </div>

            {/* ICE info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "18px 32px",
                gap: 8,
                flex: 1,
                background: "rgba(251,146,60,0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    background: "rgba(251,146,60,0.15)",
                    border: "1px solid rgba(251,146,60,0.4)",
                    borderRadius: 6,
                    padding: "3px 10px",
                    display: "flex",
                  }}
                >
                  <span
                    style={{
                      color: "#FB923C",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    PETROL
                  </span>
                </div>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
                  {ice.segment}
                </span>
              </div>
              <span
                style={{
                  color: "white",
                  fontSize: 27,
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                {ice.displayName}
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
                {ice.realWorldMpg} MPG real-world
              </span>
            </div>
          </div>
        </div>

        {/* ── Savings footer ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            height: 105,
            padding: "0 40px",
            background:
              saving > 0
                ? "rgba(22,199,132,0.07)"
                : "rgba(255,255,255,0.03)",
            borderTop: `1px solid ${saving > 0 ? "rgba(22,199,132,0.2)" : "rgba(255,255,255,0.08)"}`,
          }}
        >
          {saving > 0 ? (
            <>
              <span
                style={{ color: "#16C784", fontSize: 32, fontWeight: 800 }}
              >
                EV saves approx £{saving.toLocaleString()}/yr
              </span>
              <span style={{ color: "rgba(255,255,255,0.28)", fontSize: 15 }}>
                · 10,000 miles · mainly home charging
              </span>
            </>
          ) : (
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 24 }}>
              Running cost comparison at 10,000 miles/yr
            </span>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
