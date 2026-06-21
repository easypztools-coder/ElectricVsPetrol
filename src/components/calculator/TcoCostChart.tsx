"use client";

import type { CalculatorInputs, TcoCalculationResults } from "@/lib/types/costCalculator";
import { formatCurrency } from "@/lib/calculations/evPetrolCost";

interface TcoCostChartProps {
  results: TcoCalculationResults;
  inputs: CalculatorInputs;
}

const W = 580;
const H = 300;
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
  if (val <= 0) return 1;
  const magnitude = Math.pow(10, Math.floor(Math.log10(val)));
  return Math.ceil(val / magnitude) * magnitude;
}

function uniqueYears(years: number[]) {
  return Array.from(new Set(years)).sort((a, b) => a - b);
}

export default function TcoCostChart({ results, inputs }: TcoCostChartProps) {
  const { projections, crossoverYear, ownershipYears } = results;
  const fuelLabel = inputs.fuelType === "diesel" ? "Diesel" : "Petrol";
  const maxCost = Math.max(
    ...projections.map((p) => Math.max(p.evCumulative, p.petrolCumulative))
  );
  const yMax = niceMax(maxCost * 1.05);

  const evPoints: [number, number][] = projections.map((p) => [
    toSvgX(p.year, ownershipYears),
    toSvgY(p.evCumulative, yMax),
  ]);

  const petrolPoints: [number, number][] = projections.map((p) => [
    toSvgX(p.year, ownershipYears),
    toSvgY(p.petrolCumulative, yMax),
  ]);

  const yTicks = Array.from({ length: 6 }, (_, i) => (yMax / 5) * i);
  const labelYears = uniqueYears([1, 3, 5, 10, ownershipYears].filter((year) => year <= ownershipYears));
  const crossoverPoint = crossoverYear ? projections[crossoverYear] : null;
  const summary = crossoverYear
    ? `Your EV breaks even in Year ${crossoverYear}.`
    : `Your EV does not break even within ${ownershipYears} years.`;

  return (
    <div className="bg-white rounded-2xl border border-border-light shadow-sm p-6">
      <h3
        className="text-lg font-bold text-navy mb-1 font-display"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Full cost of ownership over {ownershipYears} years
      </h3>
      <p className="text-sm text-ev-grey mb-4">
        Includes purchase price, running costs, maintenance, VED, and a rough resale value estimate.
      </p>

      <div className="flex items-center gap-6 mb-4 text-sm flex-wrap">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-1 rounded-full bg-ev-blue" />
          <span className="text-navy font-medium">EV total cost</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-1 rounded-full bg-ev-amber" />
          <span className="text-navy font-medium">{fuelLabel} total cost</span>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={summary}
          className="w-full max-w-full"
          style={{ minWidth: 300 }}
        >
          <title>{summary}</title>

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

          {labelYears.map((year) => (
            <text
              key={year}
              x={toSvgX(year, ownershipYears)}
              y={H - PAD.bottom + 18}
              textAnchor="middle"
              fontSize="11"
              fill="#6B7280"
            >
              Year {year}
            </text>
          ))}

          <line
            x1={PAD.left}
            y1={PAD.top + IH}
            x2={PAD.left + IW}
            y2={PAD.top + IH}
            stroke="#E5E7EB"
            strokeWidth="1"
          />

          <path
            d={buildPath(petrolPoints)}
            stroke="#FFB020"
            strokeWidth="2.75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d={buildPath(evPoints)}
            stroke="#0066FF"
            strokeWidth="2.75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {crossoverPoint && (
            <g>
              <line
                x1={toSvgX(crossoverPoint.year, ownershipYears)}
                y1={PAD.top}
                x2={toSvgX(crossoverPoint.year, ownershipYears)}
                y2={PAD.top + IH}
                stroke="#9CA3AF"
                strokeDasharray="4 4"
                strokeWidth="1.25"
              />
              <circle
                cx={toSvgX(crossoverPoint.year, ownershipYears)}
                cy={toSvgY(crossoverPoint.evCumulative, yMax)}
                r="5"
                fill="#0066FF"
                stroke="white"
                strokeWidth="1.5"
              />
              <circle
                cx={toSvgX(crossoverPoint.year, ownershipYears)}
                cy={toSvgY(crossoverPoint.petrolCumulative, yMax)}
                r="5"
                fill="#FFB020"
                stroke="white"
                strokeWidth="1.5"
              />
              <text
                x={toSvgX(crossoverPoint.year, ownershipYears)}
                y={PAD.top + 12}
                textAnchor="middle"
                fontSize="11"
                fill="#374151"
              >
                Break-even
              </text>
            </g>
          )}

          {labelYears.map((year) => {
            const point = projections[year];
            if (!point) return null;
            return (
              <g key={year}>
                <circle
                  cx={toSvgX(year, ownershipYears)}
                  cy={toSvgY(point.evCumulative, yMax)}
                  r="4"
                  fill="#0066FF"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle
                  cx={toSvgX(year, ownershipYears)}
                  cy={toSvgY(point.petrolCumulative, yMax)}
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

      <p className="sr-only">{summary}</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-border-light">
        {labelYears.map((year) => {
          const point = projections[year];
          if (!point) return null;
          const saving = point.petrolCumulative - point.evCumulative;
          return (
            <div key={year} className="text-center">
              <p className="text-xs text-ev-grey mb-0.5">Year {year}</p>
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
