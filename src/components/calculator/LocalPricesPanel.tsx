import type { LocalPrices } from "@/lib/types/costCalculator";
import Card from "@/components/ui/Card";
import EvConnectorIcon from "@/components/icons/EvConnectorIcon";
import PetrolPumpIcon from "@/components/icons/PetrolPumpIcon";

interface LocalPricesPanelProps {
  prices: LocalPrices;
  region?: string;
}

interface PriceRowProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  highlight?: "ev" | "fuel";
}

function PriceRow({ label, value, icon, highlight }: PriceRowProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border-light last:border-0">
      <div className="flex items-center gap-3">
        <span
          className={[
            "flex items-center justify-center w-8 h-8 rounded-lg",
            highlight === "ev"
              ? "bg-ev-blue/10"
              : highlight === "fuel"
                ? "bg-ev-amber/10"
                : "bg-off-white",
          ].join(" ")}
        >
          {icon}
        </span>
        <span className="text-sm font-medium text-navy">{label}</span>
      </div>
      <span
        className={[
          "text-sm font-bold",
          highlight === "ev" ? "text-ev-blue" : "",
          highlight === "fuel" ? "text-ev-amber" : "",
          !highlight ? "text-navy" : "",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}

export default function LocalPricesPanel({
  prices,
  region,
}: LocalPricesPanelProps) {
  return (
    <Card variant="default" padding="md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3
            className="text-base font-bold text-navy font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Reference prices
          </h3>
          {region && (
            <p className="text-xs text-ev-grey mt-0.5">{region} area</p>
          )}
        </div>
        {prices.source === "fallback" && (
          <span className="text-xs bg-ev-amber/10 text-ev-amber font-medium px-2 py-1 rounded-full">
            National average
          </span>
        )}
        {prices.source === "live" && (
          <span className="text-xs bg-ev-green/10 text-ev-green font-medium px-2 py-1 rounded-full">
            Local prices
          </span>
        )}
      </div>

      <div>
        <PriceRow
          label="Unleaded petrol"
          value={`${prices.petrolPencePerLitre}p/litre`}
          icon={<PetrolPumpIcon size={18} color="#FFB020" />}
          highlight="fuel"
        />
        <PriceRow
          label="Diesel"
          value={`${prices.dieselPencePerLitre}p/litre`}
          icon={<PetrolPumpIcon size={18} color="#FFB020" />}
          highlight="fuel"
        />
        <PriceRow
          label="Home electricity"
          value={`${prices.homeElectricityPencePerKwh}p/kWh`}
          icon={<EvConnectorIcon size={18} color="#0066FF" />}
          highlight="ev"
        />
        <PriceRow
          label="Public fast charging"
          value={`${prices.publicChargingPencePerKwh}p/kWh`}
          icon={<EvConnectorIcon size={18} color="#0066FF" />}
          highlight="ev"
        />
      </div>

      <p className="mt-4 text-xs text-ev-grey leading-relaxed">
        Prices can vary significantly by postcode.{" "}
        {prices.source === "fallback"
          ? "Enter your postcode above and click 'Calculate' for local fuel price lookup."
          : "Local fuel price data shown. Live electricity tariff integration planned."}{" "}
        <a
          href="/guides/local-fuel-prices"
          className="text-ev-blue hover:underline"
        >
          Why local prices matter →
        </a>
      </p>
    </Card>
  );
}
