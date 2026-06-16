import type { LocalPrices } from "@/lib/types/costCalculator";
import Card from "@/components/ui/Card";

interface LocalPricesPanelProps {
  prices: LocalPrices;
  region?: string;
}

export default function LocalPricesPanel({
  prices,
  region,
}: LocalPricesPanelProps) {
  return (
    <Card variant="default" padding="sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3
            className="text-sm font-semibold text-navy font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Reference prices
          </h3>
          {region && (
            <p className="text-xs text-ev-grey mt-0.5">{region} area</p>
          )}
        </div>
        {prices.source === "live" && (
          <span className="text-xs bg-ev-green/10 text-ev-green font-medium px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
            Live
          </span>
        )}
        {prices.source === "fallback" && (
          <span className="text-xs bg-ev-amber/10 text-ev-amber font-medium px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
            Avg.
          </span>
        )}
      </div>

      {/* Fuel */}
      <div className="mb-3">
        <p className="text-xs font-medium text-ev-grey/60 uppercase tracking-wide mb-1.5">
          Fuel
        </p>
        <div className="space-y-1.5">
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-navy">Petrol</span>
            <span className="text-xs font-semibold text-ev-amber">
              {prices.petrolPencePerLitre}p/l
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-navy">Diesel</span>
            <span className="text-xs font-semibold text-ev-amber">
              {prices.dieselPencePerLitre}p/l
            </span>
          </div>
        </div>
      </div>

      {/* Electricity */}
      <div>
        <p className="text-xs font-medium text-ev-grey/60 uppercase tracking-wide mb-1.5">
          Electricity
        </p>
        <div className="space-y-1.5">
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-navy">Home</span>
            <span className="text-xs font-semibold text-ev-blue">
              {prices.homeElectricityPencePerKwh}p/kWh
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-navy">Public</span>
            <span className="text-xs font-semibold text-ev-blue">
              {prices.publicChargingPencePerKwh}p/kWh
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-3 text-xs text-ev-grey/70 leading-relaxed">
        {prices.source === "fallback"
          ? "UK national averages. Enter postcode for local prices."
          : "Live local fuel prices from nearby forecourts."}{" "}
        <a href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">
          Why this matters →
        </a>
      </p>
    </Card>
  );
}
