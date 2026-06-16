"use client";

import type { CalculatorResults } from "@/lib/types/costCalculator";
import { generateCostProjections, formatCurrency } from "@/lib/calculations/evPetrolCost";

interface CostChartProps {
  results: CalculatorResults;
  years?: number;
}

const CHART_YEARS = [1, 3, 5, 10];

// Chart drawing constants
const W = 580;
const H = 280;
const PAD = { top: 20, right: 20, bottom: 44, left: 72 };
const IW = W - PAD.left - PAD.right;
const IH = H - PAD.top - PAD.bottom;

function toSvgX(year: number, maxYear: number) {
  return PAD.left + (year / maxYear) * IW;
}

function toSvgY(value: number, maxVal: number) {
  return PAD.top + IH - (value / maxVal) * IH;
}

function buildPath(points: [number, number][]): string {
  if (points.length === 0) return "";
  return points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
}

function niceMax(val: number): number {
  const magnitude = Math.pow(10, Math.floor(Math.log10(val)));
  return Math.ceil(val / magnitude) * magnitude;
}

export default function CostChart({ results, years = 10 }: CostChartProps) {
  const projections = generateCostProjections(results, years);
  const maxCost = Math.max(
    ...projections.map((p) => Math.max(p.evCumulative, p.petrolCumulative))
  );
  const yMax = niceMax(maxCost * 1.05);

  const evPoints: [number, number][] = projections.map((p) => [
    toSvgX(p.year, years),
    toSvgY(p.evCumulative, yMax),
  ]);

  const petrolPoints: [number, number][] = projections.map((p) => [
    toSvgX(p.year, years),
    toSvgY(p.petrolCumulative, yMax),
  ]);

  // Y axis ticks (5 divisions)
  const yTicks = Array.from({ length: 6 }, (_, i) => (yMax / 5) * i);

  // X axis labels at selected years
  const xLabels = CHART_YEARS.filter((y) => y <= years);

  const summary = results.evIsCheaper
    ? `After ${years} years, an EV could save you ${formatCurrency(results.annualSaving * years)} in running costs.`
    : `After ${years} years, petrol/diesel is cheaper by ${formatCurrency(Math.abs(results.annualSaving) * years)} in running costs.`;

  return (
    <div className="bg-white rounded-2xl border border-border-light shadow-sm p-6">
      <h3
        className="text-lg font-bold text-navy mb-1 font-display"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Cumulative running cost over {years} years
      </h3>
      <p className="text-sm text-ev-grey mb-4">
        Fuel / electricity costs only — not including depreciation or finance.
      </p>

      {/* Legend */}
      <div className="flex items-center gap-6 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-1 rounded-full bg-ev-blue" />
          <span className="text-navy font-medium">Electric</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-1 rounded-full bg-ev-amber" />
          <span className="text-navy font-medium">
            {results.evIsCheaper ? "Petrol / Diesel" : "Petrol / Diesel"}
          </span>
        </div>
      </div>

      {/* SVG chart */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={summary}
          className="w-full max-w-full"
          style={{ minWidth: 280 }}
        >
          <title>{summary}</title>

          {/* Grid lines */}
          {yTicks.map((tick) => (
            <line
              key={tick}
              x1={PAD.left}
              y1={toSvgY(tick, yMax)}
              x2={PAD.left + IW}
              y2={toSvgY(tick, yMax)}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          ))}

          {/* Y axis labels */}
          {yTicks.map((tick) => (
            <text
              key={tick}
              x={PAD.left - 6}
              y={toSvgY(tick, yMax) + 4}
              textAnchor="end"
              fontSize="11"
              fill="#6B7280"
            >
              {tick >= 1000
                ? `£${(tick / 1000).toFixed(tick >= 10000 ? 0 : 1)}k`
                : `£${tick}`}
            </text>
          ))}

          {/* X axis labels */}
          {xLabels.map((yr) => (
            <text
              key={yr}
              x={toSvgX(yr, years)}
              y={H - PAD.bottom + 18}
              textAnchor="middle"
              fontSize="11"
              fill="#6B7280"
            >
              Year {yr}
            </text>
          ))}

          {/* X axis baseline */}
          <line
            x1={PAD.left}
            y1={PAD.top + IH}
            x2={PAD.left + IW}
            y2={PAD.top + IH}
            stroke="#E5E7EB"
            strokeWidth="1"
          />

          {/* Savings gap shading */}
          {results.evIsCheaper && (
            <polygon
              points={[
                ...evPoints,
                ...[...petrolPoints].reverse(),
              ]
                .map(([x, y]) => `${x},${y}`)
                .join(" ")}
              fill="#16C784"
              fillOpacity="0.08"
            />
          )}

          {/* Petrol line */}
          <path
            d={buildPath(petrolPoints)}
            stroke="#FFB020"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* EV line */}
          <path
            d={buildPath(evPoints)}
            stroke="#0066FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dot markers at key years */}
          {xLabels.map((yr) => {
            const p = projections[yr];
            if (!p) return null;
            return (
              <g key={yr}>
                <circle
                  cx={toSvgX(yr, years)}
                  cy={toSvgY(p.evCumulative, yMax)}
                  r="4"
                  fill="#0066FF"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle
                  cx={toSvgX(yr, years)}
                  cy={toSvgY(p.petrolCumulative, yMax)}
                  r="4"
                  fill="#FFB020"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Text summary for screen readers */}
      <p className="sr-only">{summary}</p>

      {/* Year callouts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-border-light">
        {CHART_YEARS.filter((y) => y <= years).map((yr) => {
          const p = projections[yr];
          if (!p) return null;
          const saving = p.petrolCumulative - p.evCumulative;
          return (
            <div key={yr} className="text-center">
              <p className="text-xs text-ev-grey mb-0.5">Year {yr}</p>
              <p
                className={`text-sm font-bold ${
                  saving >= 0 ? "text-ev-green" : "text-ev-amber"
                }`}
              >
                {saving >= 0
                  ? `+${formatCurrency(saving)}`
                  : `-${formatCurrency(Math.abs(saving))}`}
              </p>
              <p className="text-xs text-ev-grey">
                {saving >= 0 ? "saved" : "extra cost"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
