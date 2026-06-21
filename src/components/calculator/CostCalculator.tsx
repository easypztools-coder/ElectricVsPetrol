"use client";

import { useState, useCallback, useRef } from "react";
import type {
  CalculatorInputs,
  CalculatorResults,
  CalculatorViewMode,
  LocalPrices,
  ValidationErrors,
} from "@/lib/types/costCalculator";
import {
  calculateEvPetrolCosts,
  calculateTcoCosts,
  DEFAULT_EV_MAINTENANCE_ANNUAL,
  DEFAULT_EV_RESALE_VALUE_PERCENT,
  DEFAULT_EV_VED_ANNUAL,
  DEFAULT_OWNERSHIP_YEARS,
  validateInputs,
  DEFAULT_EV_PRICE_PREMIUM,
  DEFAULT_PETROL_MAINTENANCE_ANNUAL,
  DEFAULT_PETROL_PURCHASE_PRICE,
  DEFAULT_PETROL_RESALE_VALUE_PERCENT,
  DEFAULT_PETROL_VED_ANNUAL,
} from "@/lib/calculations/evPetrolCost";
import { lookupPostcode } from "@/lib/data/postcodeProvider";
import { FALLBACK_PRICES } from "@/lib/data/fuelPriceProvider";
import CalculatorForm from "./CalculatorForm";
import LocalPricesPanel from "./LocalPricesPanel";
import ResultCards from "./ResultCards";
import CostChart from "./CostChart";
import TcoResultCards from "./TcoResultCards";
import TcoCostChart from "./TcoCostChart";
import Card from "@/components/ui/Card";

const DEFAULT_INPUTS: CalculatorInputs = {
  postcode: "",
  annualMiles: 10000,
  fuelType: "petrol",
  mpg: 45,
  homeElectricityRatePence: 28.0,
  publicChargingRatePence: 60.0,
  homeChargePercent: 80,
  evMilesPerKwh: 3.5,
  fuelPricePencePerLitre: 143.9,
  evPricePremium: DEFAULT_EV_PRICE_PREMIUM,
  petrolPurchasePrice: DEFAULT_PETROL_PURCHASE_PRICE,
  ownershipYears: DEFAULT_OWNERSHIP_YEARS,
  petrolMaintenanceAnnual: DEFAULT_PETROL_MAINTENANCE_ANNUAL,
  evMaintenanceAnnual: DEFAULT_EV_MAINTENANCE_ANNUAL,
  petrolVedAnnual: DEFAULT_PETROL_VED_ANNUAL,
  evVedAnnual: DEFAULT_EV_VED_ANNUAL,
  petrolResaleValuePercent: DEFAULT_PETROL_RESALE_VALUE_PERCENT,
  evResaleValuePercent: DEFAULT_EV_RESALE_VALUE_PERCENT,
};

export default function CostCalculator({
  initialOverrides,
}: {
  initialOverrides?: Partial<CalculatorInputs>;
} = {}) {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    ...DEFAULT_INPUTS,
    ...initialOverrides,
  });
  const [mode, setMode] = useState<CalculatorViewMode>("quick");
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [tcoResults, setTcoResults] = useState<ReturnType<typeof calculateTcoCosts> | null>(null);
  const [postcodeRegion, setPostcodeRegion] = useState<string | null>(null);
  const [localPrices, setLocalPrices] = useState<LocalPrices>(FALLBACK_PRICES);
  const [livePricesApplied, setLivePricesApplied] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleInputChange = useCallback(
    (field: keyof CalculatorInputs, value: string | number) => {
      setInputs((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [errors]
  );

  const handleCalculate = useCallback(async () => {
    const validationErrors = validateInputs(inputs, mode);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    setLivePricesApplied(false);

    let resolvedInputs = inputs;

    // Postcode lookup → live local fuel prices
    if (inputs.postcode.trim()) {
      try {
        const postcodeData = await lookupPostcode(inputs.postcode);
        if (postcodeData.isValid) {
          setPostcodeRegion(postcodeData.region);

          if (postcodeData.latitude !== null && postcodeData.longitude !== null) {
            const priceRes = await fetch(
              `/api/fuel-prices?lat=${postcodeData.latitude}&lon=${postcodeData.longitude}`
            );
            if (priceRes.ok) {
              const priceData = await priceRes.json();
              const livePetrol: number | null = priceData.petrolPencePerLitre;
              const liveDiesel: number | null = priceData.dieselPencePerLitre;
              const livePrice =
                inputs.fuelType === "diesel" ? liveDiesel : livePetrol;
              if (livePrice !== null) {
                resolvedInputs = { ...inputs, fuelPricePencePerLitre: livePrice };
                setInputs(resolvedInputs);
                setLivePricesApplied(true);
              }
              if (livePetrol !== null || liveDiesel !== null) {
                setLocalPrices({
                  ...FALLBACK_PRICES,
                  petrolPencePerLitre: livePetrol ?? FALLBACK_PRICES.petrolPencePerLitre,
                  dieselPencePerLitre: liveDiesel ?? FALLBACK_PRICES.dieselPencePerLitre,
                  source: "live",
                });
              }
            }
          }
        }
      } catch {
        // Silently fall back to user-entered price
      }
    }

    if (mode === "tco") {
      const tcoCalcResults = calculateTcoCosts(resolvedInputs);
      setResults(tcoCalcResults.baseResults);
      setTcoResults(tcoCalcResults);
    } else {
      const calcResults = calculateEvPetrolCosts(resolvedInputs);
      setResults(calcResults);
      setTcoResults(null);
    }
    setHasCalculated(true);
    setIsLoading(false);

    // Scroll to results on mobile
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [inputs, mode]);

  return (
    <div id="calculator" className="scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* ── Calculator form column ── */}
        <div className="lg:col-span-3">
          <Card variant="default" padding="lg">
            <div className="mb-6 flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ev-grey mb-2">
                  Calculator mode
                </p>
                <div
                  className="inline-flex rounded-xl border border-border-light bg-off-white p-1"
                  role="tablist"
                  aria-label="Calculator mode"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "quick"}
                    className={[
                      "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                      mode === "quick"
                        ? "bg-white text-navy shadow-sm"
                        : "text-ev-grey hover:text-navy",
                    ].join(" ")}
                    onClick={() => setMode("quick")}
                  >
                    Quick comparison
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "tco"}
                    className={[
                      "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                      mode === "tco"
                        ? "bg-white text-navy shadow-sm"
                        : "text-ev-grey hover:text-navy",
                    ].join(" ")}
                    onClick={() => setMode("tco")}
                  >
                    Full cost over time
                  </button>
                </div>
              </div>

              <h2
                className="text-xl font-bold text-navy font-display"
                style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
              >
                Your driving details
                {postcodeRegion && (
                  <span className="ml-2 text-sm font-normal text-ev-grey">
                    — {postcodeRegion}
                  </span>
                )}
                {livePricesApplied && (
                  <span className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-ev-green bg-ev-green/10 border border-ev-green/30 rounded-full px-2 py-0.5">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true"><circle cx="4" cy="4" r="4"/></svg>
                    Live local prices
                  </span>
                )}
              </h2>
            </div>
            <CalculatorForm
              inputs={inputs}
              errors={errors}
              isLoading={isLoading}
              mode={mode}
              onChange={handleInputChange}
              onCalculate={handleCalculate}
            />
          </Card>
        </div>

        {/* ── Right column: pre-result state or key callout ── */}
        <div className="lg:col-span-2 space-y-4">
          {!hasCalculated ? (
            <PreCalculatePrompt mode={mode} />
          ) : mode === "quick" && results ? (
            <QuickSummary results={results} />
          ) : mode === "tco" && tcoResults ? (
            <TcoSummary results={tcoResults} inputs={inputs} />
          ) : (
            <PreCalculatePrompt mode={mode} />
          )}

          <LocalPricesPanel prices={localPrices} region={postcodeRegion ?? undefined} />
        </div>
      </div>

      {/* ── Results section (appears after calculation) ── */}
      {hasCalculated && results && mode === "quick" && (
        <div ref={resultsRef} className="mt-10 space-y-6 scroll-mt-24">
          <ResultCards results={results} inputs={inputs} />
          <CostChart results={results} years={10} />
        </div>
      )}

      {hasCalculated && tcoResults && mode === "tco" && (
        <div ref={resultsRef} className="mt-10 space-y-6 scroll-mt-24">
          <TcoResultCards results={tcoResults} inputs={inputs} />
          <TcoCostChart results={tcoResults} inputs={inputs} />
        </div>
      )}
    </div>
  );
}

function QuickSummary({ results }: { results: CalculatorResults }) {
  return (
    <div className="space-y-4">
      <div
        className={[
          "rounded-2xl p-5",
          results.evIsCheaper
            ? "bg-ev-green/10 border border-ev-green/30"
            : "bg-ev-amber/10 border border-ev-amber/30",
        ].join(" ")}
      >
        <p className="text-xs font-medium text-ev-grey uppercase tracking-wide mb-1">
          Annual saving
        </p>
        <p
          className={`text-4xl font-bold font-display ${
            results.evIsCheaper ? "text-ev-green" : "text-ev-amber"
          }`}
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          {results.evIsCheaper
            ? `+£${Math.round(results.annualSaving).toLocaleString("en-GB")}`
            : `-£${Math.round(Math.abs(results.annualSaving)).toLocaleString("en-GB")}`}
        </p>
        <p className="text-sm text-ev-grey mt-2">
          {results.evIsCheaper
            ? "EV saves vs petrol/diesel per year"
            : "EV costs more than petrol/diesel per year"}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl border border-border-light p-4">
          <p className="text-xs text-ev-grey mb-1">EV cost/mile</p>
          <p className="text-lg font-bold text-ev-blue">
            {(results.evCostPerMile * 100).toFixed(1)}p
          </p>
        </div>
        <div className="bg-white rounded-xl border border-border-light p-4">
          <p className="text-xs text-ev-grey mb-1">Petrol cost/mile</p>
          <p className="text-lg font-bold text-ev-amber">
            {(results.petrolCostPerMile * 100).toFixed(1)}p
          </p>
        </div>
      </div>

      {results.breakEvenYears && results.evIsCheaper && (
        <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-xl p-4">
          <p className="text-xs text-ev-grey mb-1">Break-even point</p>
          <p className="text-lg font-bold text-navy">
            {results.breakEvenYears.toFixed(1)} years
          </p>
          <p className="text-xs text-ev-grey">
            ~{Math.round(results.breakEvenMiles!).toLocaleString("en-GB")} miles
          </p>
        </div>
      )}
    </div>
  );
}

function TcoSummary({
  results,
  inputs,
}: {
  results: NonNullable<ReturnType<typeof calculateTcoCosts>>;
  inputs: CalculatorInputs;
}) {
  const breakEvenText = results.crossoverYear
    ? `Your EV breaks even in Year ${results.crossoverYear}`
    : `Your EV does not break even within ${results.ownershipYears} years — petrol/diesel remains cheaper over this period`;

  return (
    <div className="space-y-4">
      <div
        className={[
          "rounded-2xl p-5",
          results.totalDifference >= 0
            ? "bg-ev-green/10 border border-ev-green/30"
            : "bg-ev-amber/10 border border-ev-amber/30",
        ].join(" ")}
      >
        <p className="text-xs font-medium text-ev-grey uppercase tracking-wide mb-1">
          Ownership summary
        </p>
        <p
          className={`text-lg font-bold font-display ${
            results.totalDifference >= 0 ? "text-ev-green" : "text-ev-amber"
          }`}
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          {breakEvenText}
        </p>
        <p className="text-sm text-ev-grey mt-2">
          {results.totalDifference >= 0
            ? `At the end of ${results.ownershipYears} years, the EV is ahead by £${Math.abs(
                Math.round(results.totalDifference)
              ).toLocaleString("en-GB")}.`
            : `At the end of ${results.ownershipYears} years, petrol/diesel is ahead by £${Math.abs(
                Math.round(results.totalDifference)
              ).toLocaleString("en-GB")}.`}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl border border-border-light p-4">
          <p className="text-xs text-ev-grey mb-1">EV annual ownership cost</p>
          <p className="text-lg font-bold text-ev-blue">
            £{Math.round(results.baseResults.evCostPerYear + results.evMaintenanceAnnual + results.evVedAnnual).toLocaleString("en-GB")}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-border-light p-4">
          <p className="text-xs text-ev-grey mb-1">{inputs.fuelType === "diesel" ? "Diesel" : "Petrol"} annual ownership cost</p>
          <p className="text-lg font-bold text-ev-amber">
            £{Math.round(results.baseResults.petrolCostPerYear + results.petrolMaintenanceAnnual + results.petrolVedAnnual).toLocaleString("en-GB")}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-border-light p-4 text-sm text-ev-grey leading-relaxed">
        <strong className="text-navy">Need to check before publishing:</strong> the EV VED assumption should be verified against the latest UK tax rules, because zero-emission car tax treatment changes periodically.
      </div>
    </div>
  );
}

function PreCalculatePrompt({ mode }: { mode: CalculatorViewMode }) {
  const isTco = mode === "tco";
  return (
    <Card variant="default" padding="md" className="bg-off-white">
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 bg-ev-blue/10 rounded-2xl flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
              stroke="#0066FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3
            className="font-bold text-navy mb-2 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {isTco ? "Add ownership assumptions" : "Fill in your details"}
          </h3>
          <p className="text-sm text-ev-grey leading-relaxed">
            {isTco
              ? "Switching modes keeps your existing inputs. Add a purchase price, maintenance, VED, and resale estimate to see a full year-by-year ownership comparison."
              : "Enter your annual mileage, current car MPG, and charging assumptions. Click Calculate my true cost to see your personalised EV vs petrol comparison."}
          </p>
        </div>
        <ul className="text-sm text-ev-grey space-y-2">
          {(isTco
            ? [
                "Purchase price, maintenance, VED and rough resale assumptions",
                "Year-by-year total cost comparison",
                "Crossover year, if it happens",
                "Ownership period chart with crossover marker",
              ]
            : [
                "Cost per mile comparison",
                "Annual and 5-year savings",
                "Break-even point",
                "10-year cumulative cost chart",
              ]
          ).map((item) => (
            <li key={item} className="flex items-center gap-2">
              <svg
                className="text-ev-blue flex-shrink-0"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8l3.5 3.5L13 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
