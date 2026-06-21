"use client";

import type {
  CalculatorInputs,
  TcoCalculationResults,
} from "@/lib/types/costCalculator";
import Card from "@/components/ui/Card";
import { formatCurrency } from "@/lib/calculations/evPetrolCost";

interface TcoResultCardsProps {
  results: TcoCalculationResults;
  inputs: CalculatorInputs;
}

function StatCard({
  label,
  value,
  sub,
  variant,
}: {
  label: string;
  value: string;
  sub?: string;
  variant: "saving" | "cost" | "ev" | "default";
}) {
  return (
    <Card variant={variant} padding="md" className="flex flex-col gap-1">
      <p className="text-xs font-medium text-ev-grey uppercase tracking-wide">{label}</p>
      <p
        className={[
          "text-2xl font-bold font-display",
          variant === "saving" ? "text-ev-green" : "",
          variant === "cost" ? "text-ev-amber" : "",
          variant === "ev" ? "text-ev-blue" : "",
          variant === "default" ? "text-navy" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        {value}
      </p>
      {sub && <p className="text-xs text-ev-grey">{sub}</p>}
    </Card>
  );
}

export default function TcoResultCards({ results, inputs }: TcoResultCardsProps) {
  const { baseResults, crossoverYear, totalDifference, ownershipYears } = results;
  const fuelLabel = inputs.fuelType === "diesel" ? "Diesel" : "Petrol";
  const differenceIsPositive = totalDifference >= 0;
  const yearLabel = crossoverYear ? `Year ${crossoverYear}` : `${ownershipYears} years`;

  return (
    <section aria-label="Total cost of ownership results">
      <div
        className={[
          "rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
          differenceIsPositive
            ? "bg-ev-green/10 border border-ev-green/30"
            : "bg-ev-amber/10 border border-ev-amber/30",
        ].join(" ")}
        role="status"
        aria-live="polite"
      >
        <div>
          <p
            className={`text-lg font-bold font-display ${
              differenceIsPositive ? "text-ev-green" : "text-ev-amber"
            }`}
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {crossoverYear
              ? `Your EV breaks even in ${yearLabel}`
              : `Your EV does not break even within ${ownershipYears} years — petrol/diesel remains cheaper over this period`}
          </p>
          <p className="text-sm text-ev-grey mt-0.5">
            {differenceIsPositive
              ? `By the end of year ${ownershipYears}, the EV is ahead by ${formatCurrency(Math.abs(totalDifference))}.`
              : `By the end of year ${ownershipYears}, petrol/diesel is ahead by ${formatCurrency(Math.abs(totalDifference))}.`}
          </p>
        </div>
        <span
          className={`text-3xl font-bold font-display whitespace-nowrap ${
            differenceIsPositive ? "text-ev-green" : "text-ev-amber"
          }`}
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          {differenceIsPositive ? "EV wins" : "Petrol wins"}
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard
          label="End-of-period difference"
          value={
            differenceIsPositive
              ? formatCurrency(totalDifference)
              : `-${formatCurrency(Math.abs(totalDifference))}`
          }
          sub={`after ${ownershipYears} years`}
          variant={differenceIsPositive ? "saving" : "cost"}
        />
        <StatCard
          label="Ownership period"
          value={`${ownershipYears} years`}
          sub="adjustable 1-15 years"
          variant="default"
        />
        <StatCard
          label="EV purchase price"
          value={formatCurrency(results.evPurchasePrice)}
          sub={`derived from your £${inputs.evPricePremium.toLocaleString("en-GB")} EV premium`}
          variant="ev"
        />
        <StatCard
          label={`${fuelLabel} purchase price`}
          value={formatCurrency(results.petrolPurchasePrice)}
          sub="editable assumption"
          variant="default"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Card variant="ev" padding="md">
          <p className="text-xs font-medium text-ev-grey uppercase tracking-wide mb-1">
            EV annual ownership cost
          </p>
          <p
            className="text-2xl font-bold text-ev-blue font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {formatCurrency(baseResults.evCostPerYear + results.evMaintenanceAnnual + results.evVedAnnual)}
          </p>
          <p className="text-xs text-ev-grey mt-1">
            Energy + maintenance + VED, before resale value is factored in.
          </p>
        </Card>

        <Card variant="cost" padding="md">
          <p className="text-xs font-medium text-ev-grey uppercase tracking-wide mb-1">
            {fuelLabel} annual ownership cost
          </p>
          <p
            className="text-2xl font-bold text-ev-amber font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {formatCurrency(baseResults.petrolCostPerYear + results.petrolMaintenanceAnnual + results.petrolVedAnnual)}
          </p>
          <p className="text-xs text-ev-grey mt-1">
            Fuel + maintenance + VED, before resale value is factored in.
          </p>
        </Card>
      </div>

      <div className="text-xs text-ev-grey bg-white/70 border border-border-light rounded-xl p-4">
        <strong className="text-navy">Assumptions & limitations:</strong> This mode adds purchase price, maintenance, VED, and a rough residual value estimate to the running-cost calculation. Insurance, home charger installation, finance, and congestion/ULEZ charges are still excluded. The depreciation inputs are intentionally approximate and should be reviewed before publishing.
      </div>
    </section>
  );
}
