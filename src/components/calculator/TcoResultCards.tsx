"use client";

import { useState } from "react";
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

  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const params = new URLSearchParams();
    if (inputs.postcode) params.set("postcode", inputs.postcode);
    params.set("miles", inputs.annualMiles.toString());
    params.set("fuelType", inputs.fuelType);
    params.set("mpg", inputs.mpg.toString());
    params.set("homeRate", inputs.homeElectricityRatePence.toString());
    params.set("publicRate", inputs.publicChargingRatePence.toString());
    params.set("homeCharge", inputs.homeChargePercent.toString());
    params.set("efficiency", inputs.evMilesPerKwh.toString());
    params.set("fuelPrice", inputs.fuelPricePencePerLitre.toString());
    params.set("mode", "tco");
    params.set("evPremium", inputs.evPricePremium.toString());
    params.set("petrolPrice", inputs.petrolPurchasePrice.toString());
    params.set("years", inputs.ownershipYears.toString());
    params.set("petrolMaint", inputs.petrolMaintenanceAnnual.toString());
    params.set("evMaint", inputs.evMaintenanceAnnual.toString());
    params.set("petrolVed", inputs.petrolVedAnnual.toString());
    params.set("evVed", inputs.evVedAnnual.toString());
    params.set("petrolResale", inputs.petrolResaleValuePercent.toString());
    params.set("evResale", inputs.evResaleValuePercent.toString());

    const url = `${window.location.origin}/?${params.toString()}#calculator`;

    const copyToClipboard = (text: string) => {
      const copyUsingExecCommand = () => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          const successful = document.execCommand("copy");
          document.body.removeChild(textArea);
          return successful;
        } catch (err) {
          document.body.removeChild(textArea);
          return false;
        }
      };

      if (copyUsingExecCommand()) {
        return Promise.resolve();
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
      }

      return Promise.reject(new Error("No clipboard copy method succeeded"));
    };

    copyToClipboard(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Clipboard copy failed:", err);
      });
  };

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

      {/* ── Share results banner ── */}
      <div className="bg-white border border-border-light rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-ev-blue/10 flex items-center justify-center text-ev-blue flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-navy">Share these calculation results</h4>
            <p className="text-xs text-ev-grey">Copy a pre-filled link to share this exact comparison on forums or social media.</p>
          </div>
        </div>
        <button
          onClick={handleShare}
          className={[
            "inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all select-none cursor-pointer",
            copied
              ? "bg-ev-green text-white"
              : "bg-ev-blue/10 text-ev-blue hover:bg-ev-blue/15 active:scale-95"
          ].join(" ")}
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Link copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              Copy share link
            </>
          )}
        </button>
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
