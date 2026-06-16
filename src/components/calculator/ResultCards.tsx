"use client";

import type { CalculatorInputs, CalculatorResults } from "@/lib/types/costCalculator";
import Card from "@/components/ui/Card";
import { formatCurrency, formatPencePerMile } from "@/lib/calculations/evPetrolCost";

interface ResultCardsProps {
  results: CalculatorResults;
  inputs: CalculatorInputs;
}

function StatCard({
  label,
  value,
  sub,
  variant,
  icon,
}: {
  label: string;
  value: string;
  sub?: string;
  variant: "saving" | "cost" | "ev" | "default";
  icon?: string;
}) {
  return (
    <Card variant={variant} padding="md" className="flex flex-col gap-1">
      {icon && <span className="text-2xl mb-1" aria-hidden="true">{icon}</span>}
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

export default function ResultCards({ results, inputs }: ResultCardsProps) {
  const {
    annualSaving,
    monthlySaving,
    fiveYearSaving,
    evIsCheaper,
    evCostPerMile,
    petrolCostPerMile,
    breakEvenYears,
    breakEvenMiles,
    blendedElectricityRatePence,
    petrolCostPerYear,
    evCostPerYear,
  } = results;

  const fuelLabel = inputs.fuelType === "diesel" ? "Diesel" : "Petrol";

  return (
    <section aria-label="Calculation results">
      {/* ── Status banner ── */}
      <div
        className={[
          "rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
          evIsCheaper
            ? "bg-ev-green/10 border border-ev-green/30"
            : "bg-ev-amber/10 border border-ev-amber/30",
        ].join(" ")}
        role="status"
        aria-live="polite"
      >
        <div>
          <p
            className={`text-lg font-bold font-display ${
              evIsCheaper ? "text-ev-green" : "text-ev-amber"
            }`}
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {evIsCheaper
              ? `You could save ${formatCurrency(Math.abs(annualSaving))} per year by switching to an EV`
              : `An EV may cost ${formatCurrency(Math.abs(annualSaving))} more per year with your current assumptions`}
          </p>
          <p className="text-sm text-ev-grey mt-0.5">
            {evIsCheaper
              ? "Based on your mileage, charging habits and local prices."
              : "High public charging reliance or expensive electricity can reduce EV savings. Try increasing home charging %."}
          </p>
        </div>
        <span
          className={`text-3xl font-bold font-display whitespace-nowrap ${
            evIsCheaper ? "text-ev-green" : "text-ev-amber"
          }`}
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          {evIsCheaper ? "EV wins" : "EV costs more"}
        </span>
      </div>

      {/* ── Primary stat cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard
          label="Annual saving"
          value={
            evIsCheaper
              ? formatCurrency(annualSaving)
              : `-${formatCurrency(Math.abs(annualSaving))}`
          }
          sub="vs your current fuel costs"
          variant={evIsCheaper ? "saving" : "cost"}
        />
        <StatCard
          label="Monthly saving"
          value={
            evIsCheaper
              ? formatCurrency(monthlySaving)
              : `-${formatCurrency(Math.abs(monthlySaving))}`
          }
          sub="per month"
          variant={evIsCheaper ? "saving" : "cost"}
        />
        <StatCard
          label="5-year saving"
          value={
            evIsCheaper
              ? formatCurrency(fiveYearSaving)
              : `-${formatCurrency(Math.abs(fiveYearSaving))}`
          }
          sub="running costs only"
          variant={evIsCheaper ? "saving" : "cost"}
        />
        <StatCard
          label={breakEvenYears && evIsCheaper ? "Break-even" : "EV cost / yr"}
          value={
            breakEvenYears && evIsCheaper
              ? `${breakEvenYears.toFixed(1)} yrs`
              : formatCurrency(evCostPerYear)
          }
          sub={
            breakEvenYears && evIsCheaper
              ? `~${Math.round(breakEvenMiles!).toLocaleString("en-GB")} miles`
              : "annual electricity cost"
          }
          variant="ev"
        />
      </div>

      {/* ── Cost per mile comparison ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Card variant="ev" padding="md">
          <p className="text-xs font-medium text-ev-grey uppercase tracking-wide mb-1">
            EV cost per mile
          </p>
          <p
            className="text-2xl font-bold text-ev-blue font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {formatPencePerMile(evCostPerMile)}
          </p>
          <p className="text-xs text-ev-grey mt-1">
            Blended electricity: {blendedElectricityRatePence.toFixed(1)}p/kWh (
            {inputs.homeChargePercent}% home)
          </p>
        </Card>

        <Card variant="cost" padding="md">
          <p className="text-xs font-medium text-ev-grey uppercase tracking-wide mb-1">
            {fuelLabel} cost per mile
          </p>
          <p
            className="text-2xl font-bold text-ev-amber font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {formatPencePerMile(petrolCostPerMile)}
          </p>
          <p className="text-xs text-ev-grey mt-1">
            Annual fuel: {formatCurrency(petrolCostPerYear)} at{" "}
            {inputs.fuelPricePencePerLitre}p/litre
          </p>
        </Card>
      </div>

      {/* ── Assumptions note ── */}
      <div className="text-xs text-ev-grey bg-white/70 border border-border-light rounded-xl p-4">
        <strong className="text-navy">Assumptions & limitations:</strong> These
        results cover fuel and electricity running costs only. They exclude
        insurance, road tax, servicing, depreciation, and finance. EV efficiency
        (
        {inputs.evMilesPerKwh} mi/kWh) and real-world MPG may differ from
        manufacturer figures. Fuel prices are snapshots and vary daily.
        {breakEvenYears && evIsCheaper && (
          <>
            {" "}
            Break-even uses a £{inputs.evPricePremium.toLocaleString("en-GB")}{" "}
            EV price premium assumption.
          </>
        )}
      </div>
    </section>
  );
}
