import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons, findComparison } from "@/lib/data/comparisons";
import { findEV, findICE } from "@/lib/data/vehicles";
import MonetizationPanel from "@/components/layout/MonetizationPanel";

// ── Cost calculation ────────────────────────────────────────────────────────

const LITRES_PER_GALLON = 4.54609;
const PETROL_PRICE = 153.5; // p/litre — RAC Fuel Watch, July 2026
const DIESEL_PRICE = 168.6; // p/litre — RAC Fuel Watch, July 2026

function fuelCost(miles: number, mpg: number, fuelPricePence: number): number {
  return (miles / mpg) * LITRES_PER_GALLON * (fuelPricePence / 100);
}

function evCost(
  miles: number,
  milesPerKwh: number,
  homePercent: number,
  homeRate = 26.1,
  publicRate = 79
): number {
  const kWh = miles / milesPerKwh;
  const blended =
    (homePercent / 100) * homeRate + ((100 - homePercent) / 100) * publicRate;
  return kWh * (blended / 100);
}

// ── Static params / metadata ────────────────────────────────────────────────

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pair = findComparison(slug);
  if (!pair) return {};

  const ev = findEV(pair.evSlug)!;
  const ice = findICE(pair.iceSlug)!;
  const pricePence = ice.fuelType === "diesel" ? DIESEL_PRICE : PETROL_PRICE;
  const ice10k = fuelCost(10000, ice.realWorldMpg, pricePence);
  const ev10k = evCost(10000, ev.milesPerKwh, 80);
  const saving = Math.round(ice10k - ev10k);

  return {
    title: `${ev.displayName} vs ${ice.displayName}: Running Costs UK 2026`,
    description: `How much does it cost to run a ${ev.displayName} vs a ${ice.displayName} in the UK? At 10,000 miles per year the ${ev.displayName} ${saving > 0 ? `saves approximately £${saving.toLocaleString()} per year` : "costs similar amounts"} on fuel when charging mainly at home. Full breakdown with tables.`,
    alternates: {
      canonical: `https://electricvspetrol.co.uk/compare/${slug}`,
    },
    openGraph: {
      title: `${ev.displayName} vs ${ice.displayName}: Running Costs UK 2026`,
      description: `Real UK running cost comparison at multiple mileages and charging scenarios. See which is genuinely cheaper.`,
    },
  };
}

// ── Page ────────────────────────────────────────────────────────────────────

const MILEAGES = [8000, 10000, 12000, 15000, 20000];

const SCENARIOS = [
  { label: "Overnight EV tariff", homePercent: 100, homeRate: 7, publicRate: 79 },
  { label: "Standard home (80% home)", homePercent: 80, homeRate: 26.1, publicRate: 79 },
  { label: "Mixed (50% home)", homePercent: 50, homeRate: 26.1, publicRate: 79 },
  { label: "Public charging only", homePercent: 0, homeRate: 26.1, publicRate: 79 },
] as const;

function fmt(n: number): string {
  return `£${Math.round(n).toLocaleString("en-GB")}`;
}

function ppm(pencePerMile: number): string {
  return `${pencePerMile.toFixed(1)}p`;
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const pair = findComparison(slug);
  if (!pair) notFound();

  const ev = findEV(pair.evSlug)!;
  const ice = findICE(pair.iceSlug)!;
  const pricePence = ice.fuelType === "diesel" ? DIESEL_PRICE : PETROL_PRICE;

  // Reference costs at 10,000 miles, 80% home
  const ref = {
    ice: fuelCost(10000, ice.realWorldMpg, pricePence),
    ev: evCost(10000, ev.milesPerKwh, 80),
  };
  const refSaving = ref.ice - ref.ev;
  const evIsCheaper = refSaving > 0;

  // Cost per mile
  const icePpm = (pricePence * LITRES_PER_GALLON) / ice.realWorldMpg; // pence/mile
  const evPpmHome = 26.1 / ev.milesPerKwh; // standard home tariff
  const evPpmPublic = 79 / ev.milesPerKwh; // public rapid
  const evPpmNight = 7 / ev.milesPerKwh; // overnight EV tariff

  // Break-even (using 10k/yr saving as reference)
  const breakEven =
    pair.evPricePremiumGbp > 0 && refSaving > 0
      ? (pair.evPricePremiumGbp / refSaving).toFixed(1)
      : null;

  // Related comparisons (same EV or same ICE, excluding self)
  const related = comparisons
    .filter(
      (c) =>
        c.slug !== slug &&
        (c.evSlug === pair.evSlug || c.iceSlug === pair.iceSlug)
    )
    .slice(0, 3);

  // FAQs
  const faqItems = [
    {
      q: `How much does a ${ev.displayName} cost to run per mile in the UK?`,
      a: `At a standard UK home electricity rate of 26.1p/kWh (the Ofgem price cap unit rate for July–September 2026) and a real-world efficiency of ${ev.milesPerKwh} miles/kWh, the ${ev.displayName} costs approximately ${ppm(evPpmHome)} per mile when charging at home. On a dedicated overnight EV tariff (around 7p/kWh) this falls to just ${ppm(evPpmNight)} per mile. Relying entirely on public rapid charging — which averaged 79p/kWh in mid-2026 — raises the cost to ${ppm(evPpmPublic)} per mile.`,
    },
    {
      q: `Is the ${ev.displayName} cheaper to run than the ${ice.displayName}?`,
      a: `${evIsCheaper ? "Yes, for most UK drivers who can charge at home." : "It depends on your charging situation."} The ${ice.displayName} costs approximately ${ppm(icePpm)} per mile in ${ice.fuelType} at current UK prices. At home on a standard tariff, the ${ev.displayName} costs ${ppm(evPpmHome)} per mile — a saving of ${ppm(icePpm - evPpmHome)} per mile. At 10,000 miles per year with 80% home charging, the ${ev.displayName} saves around £${Math.round(refSaving).toLocaleString()} per year in fuel costs.`,
    },
    ...(breakEven !== null
      ? [
          {
            q: `How long to break even switching from a ${ice.displayName} to a ${ev.displayName}?`,
            a: `Based on an estimated price premium of £${pair.evPricePremiumGbp.toLocaleString()} for the ${ev.displayName} over the ${ice.displayName}, and annual fuel savings of approximately £${Math.round(refSaving).toLocaleString()} at 10,000 miles per year (80% home charging), the break-even point is around ${breakEven} years. Drivers covering more miles will reach break-even sooner — at 15,000 miles per year the saving is proportionally larger.`,
          },
        ]
      : pair.evPricePremiumGbp <= 0
      ? [
          {
            q: `Is the ${ev.displayName} more or less expensive to buy than the ${ice.displayName}?`,
            a: `The ${ev.displayName} is actually cheaper to buy upfront than the ${ice.displayName} by approximately £${Math.abs(pair.evPricePremiumGbp).toLocaleString()}, meaning you save on both purchase price and running costs — there is no break-even calculation required.`,
          },
        ]
      : []),
    {
      q: `What if I can't charge the ${ev.displayName} at home?`,
      a: `Without home charging, the economics change significantly. Relying on public rapid charging — which averaged 79p/kWh in mid-2026, up sharply from a couple of years ago — puts the ${ev.displayName} at ${ppm(evPpmPublic)} per mile — ${evPpmPublic > icePpm ? `higher than the ${ice.displayName} at ${ppm(icePpm)} per mile` : `still comparable to the ${ice.displayName} at ${ppm(icePpm)} per mile`}. EV running cost savings are almost entirely dependent on home charging access. Drivers without off-street parking should factor this in carefully.`,
    },
  ];

  const calculatorUrl = `/#calculator?mpg=${ice.realWorldMpg}&efficiency=${ev.milesPerKwh}&fuelType=${ice.fuelType}`;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/compare" className="text-ev-blue hover:underline">
              Comparisons
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            {ev.displayName} vs {ice.displayName}
          </li>
        </ol>
      </nav>

      {/* Segment badge */}
      <div className="mb-4">
        <span className="inline-block text-xs font-semibold text-ev-blue bg-ev-blue/8 px-3 py-1.5 rounded-full">
          {ev.segment}
        </span>
      </div>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        {ev.displayName} vs {ice.displayName}: Running Costs UK 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path
            d="M7 4v3.5l2 1.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        Last updated: July 2026 · Based on current UK fuel prices
      </p>

      {/* ── Direct Answer — targets Google Featured Snippet (Position Zero) ── */}
      <p className="text-base text-ev-grey leading-relaxed mb-8 max-w-2xl">
        {evIsCheaper
          ? `Running a ${ev.displayName} in the UK costs approximately ${ppm(evPpmHome)} per mile on home electricity, compared to ${ppm(icePpm)} per mile for the ${ice.displayName} on ${ice.fuelType}. At 10,000 miles per year with 80% home charging, the ${ev.displayName} saves approximately ${fmt(refSaving)} per year in fuel costs${breakEven ? ` — breaking even on the higher purchase price in around ${breakEven} years` : ""}.`
          : `At current UK prices, the ${ice.displayName} costs ${ppm(icePpm)} per mile in ${ice.fuelType}, while the ${ev.displayName} costs ${ppm(evPpmHome)} per mile on home electricity. The fuel cost difference at 10,000 miles per year is approximately ${fmt(Math.abs(refSaving))} — but the ${ev.displayName} is cheaper to run in most home-charging scenarios.`}
      </p>

      {/* Verdict */}
      <div
        className={[
          "rounded-2xl p-5 mb-8",
          evIsCheaper
            ? "bg-ev-green/8 border border-ev-green/25"
            : "bg-ev-amber/8 border border-ev-amber/25",
        ].join(" ")}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-ev-grey mb-1">
          At 10,000 miles/yr · 80% home charging
        </p>
        <p
          className={`text-3xl font-bold font-display mb-1 ${
            evIsCheaper ? "text-ev-green" : "text-ev-amber"
          }`}
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          {evIsCheaper ? "+" : "−"}
          {fmt(Math.abs(refSaving))}/yr
        </p>
        <p className="text-sm text-ev-grey">
          {evIsCheaper
            ? `The ${ev.displayName} saves you approximately ${fmt(refSaving)} per year in fuel costs.`
            : `The ${ice.displayName} is cheaper to run by approximately ${fmt(Math.abs(refSaving))} per year.`}
        </p>
        {breakEven && (
          <p className="text-sm text-ev-grey mt-1">
            Break-even on the higher purchase price:{" "}
            <strong className="text-navy">~{breakEven} years</strong>
          </p>
        )}
        {pair.evPricePremiumGbp < 0 && (
          <p className="text-sm text-ev-grey mt-1">
            The {ev.displayName} is also{" "}
            <strong className="text-navy">
              £{Math.abs(pair.evPricePremiumGbp).toLocaleString()} cheaper
            </strong>{" "}
            to buy — no break-even required.
          </p>
        )}
      </div>

      {/* Cost per mile strip */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-off-white border border-border-light rounded-xl p-4">
          <p className="text-xs text-ev-grey mb-1">{ice.displayName} fuel cost</p>
          <p
            className="text-2xl font-bold text-ev-amber font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {ppm(icePpm)}/mile
          </p>
          <p className="text-xs text-ev-grey mt-1">
            {ice.realWorldMpg} MPG · {pricePence}p/litre
          </p>
        </div>
        <div className="bg-off-white border border-border-light rounded-xl p-4">
          <p className="text-xs text-ev-grey mb-1">
            {ev.displayName} (home tariff)
          </p>
          <p
            className="text-2xl font-bold text-ev-blue font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {ppm(evPpmHome)}/mile
          </p>
          <p className="text-xs text-ev-grey mt-1">
            {ev.milesPerKwh} mi/kWh · 26.1p/kWh
          </p>
        </div>
      </div>

      {/* Main cost table */}
      <section aria-labelledby="cost-table-heading" className="mb-10">
        <h2
          id="cost-table-heading"
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Annual fuel cost comparison
        </h2>
        <p className="text-sm text-ev-grey mb-4">
          The table below uses{" "}
          <strong className="text-navy">real-world efficiency</strong> figures
          for both vehicles and current UK fuel prices. EV costs assume 80% home
          charging (26.1p/kWh) and 20% public rapid charging (79p/kWh).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border-light">
                <th className="text-left py-2.5 pr-4 text-navy font-semibold text-xs uppercase tracking-wide">
                  Miles/yr
                </th>
                <th className="text-right py-2.5 pr-4 text-ev-amber font-semibold text-xs uppercase tracking-wide">
                  {ice.displayName}
                </th>
                <th className="text-right py-2.5 pr-4 text-ev-blue font-semibold text-xs uppercase tracking-wide">
                  {ev.displayName}
                </th>
                <th className="text-right py-2.5 text-ev-green font-semibold text-xs uppercase tracking-wide">
                  EV saves
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {MILEAGES.map((miles) => {
                const ice10 = fuelCost(miles, ice.realWorldMpg, pricePence);
                const ev10 = evCost(miles, ev.milesPerKwh, 80);
                const saving10 = ice10 - ev10;
                return (
                  <tr
                    key={miles}
                    className={miles === 10000 ? "bg-off-white" : ""}
                  >
                    <td className="py-2.5 pr-4 text-navy font-medium">
                      {miles.toLocaleString("en-GB")}
                      {miles === 10000 && (
                        <span className="ml-1.5 text-xs text-ev-grey font-normal">
                          (avg)
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 pr-4 text-right text-ev-amber font-semibold">
                      {fmt(ice10)}
                    </td>
                    <td className="py-2.5 pr-4 text-right text-ev-blue font-semibold">
                      {fmt(ev10)}
                    </td>
                    <td
                      className={`py-2.5 text-right font-semibold ${
                        saving10 > 0 ? "text-ev-green" : "text-ev-amber"
                      }`}
                    >
                      {saving10 > 0 ? "+" : "−"}
                      {fmt(Math.abs(saving10))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ev-grey mt-3">
          Petrol: {pricePence}p/litre · Home electricity: 26.1p/kWh · Public
          rapid: 79p/kWh
        </p>
      </section>

      {/* Charging scenarios */}
      <section aria-labelledby="charging-heading" className="mb-10">
        <h2
          id="charging-heading"
          className="text-2xl font-bold text-navy mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          {ev.displayName} cost by charging scenario
        </h2>
        <p className="text-sm text-ev-grey mb-5">
          Charging behaviour has more impact on EV running costs than almost any
          other variable. Here&apos;s how the {ev.displayName} compares at
          10,000 miles per year across four scenarios:
        </p>

        <div className="space-y-3">
          {SCENARIOS.map((scenario) => {
            const evAnnual = evCost(
              10000,
              ev.milesPerKwh,
              scenario.homePercent,
              scenario.homeRate,
              scenario.publicRate
            );
            const icAnnual = fuelCost(10000, ice.realWorldMpg, pricePence);
            const scenarioSaving = icAnnual - evAnnual;
            const positive = scenarioSaving > 0;

            return (
              <div
                key={scenario.label}
                className="bg-off-white border border-border-light rounded-xl p-4 flex items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy truncate">
                    {scenario.label}
                  </p>
                  <p className="text-xs text-ev-grey">
                    {fmt(evAnnual)}/yr ·{" "}
                    {(
                      ((scenario.homePercent / 100) * scenario.homeRate +
                        ((100 - scenario.homePercent) / 100) *
                          scenario.publicRate) /
                      ev.milesPerKwh
                    ).toFixed(1)}
                    p/mile
                  </p>
                </div>
                <div
                  className={`text-right flex-shrink-0 font-semibold text-sm ${
                    positive ? "text-ev-green" : "text-ev-amber"
                  }`}
                >
                  {positive ? "+" : "−"}
                  {fmt(Math.abs(scenarioSaving))}
                  <span className="text-xs font-normal opacity-70">/yr</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-ev-grey mt-3">
          Saving vs {ice.displayName} at 10,000 mi/yr and {pricePence}
          p/litre.
        </p>
      </section>

      {/* Vehicle specs */}
      <section aria-labelledby="specs-heading" className="mb-10">
        <h2
          id="specs-heading"
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Key specs
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-off-white border border-border-light rounded-xl p-4">
            <p className="text-xs text-ev-grey mb-2 font-medium">
              {ev.displayName}
            </p>
            <p className="text-xs text-ev-grey">{ev.variant}</p>
            <div className="mt-3 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-ev-grey">Real-world efficiency</span>
                <span className="font-semibold text-navy">
                  {ev.milesPerKwh} mi/kWh
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ev-grey">Home charging cost</span>
                <span className="font-semibold text-ev-blue">
                  {ppm(evPpmHome)}/mile
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ev-grey">EV tariff cost</span>
                <span className="font-semibold text-ev-green">
                  {ppm(evPpmNight)}/mile
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ev-grey">Public rapid cost</span>
                <span className="font-semibold text-ev-amber">
                  {ppm(evPpmPublic)}/mile
                </span>
              </div>
            </div>
          </div>

          <div className="bg-off-white border border-border-light rounded-xl p-4">
            <p className="text-xs text-ev-grey mb-2 font-medium">
              {ice.displayName}
            </p>
            <p className="text-xs text-ev-grey">{ice.variant}</p>
            <div className="mt-3 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-ev-grey">Real-world MPG</span>
                <span className="font-semibold text-navy">
                  {ice.realWorldMpg} MPG
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ev-grey">Fuel type</span>
                <span className="font-semibold text-navy capitalize">
                  {ice.fuelType}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ev-grey">Fuel price</span>
                <span className="font-semibold text-ev-amber">
                  {pricePence}p/litre
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ev-grey">Fuel cost/mile</span>
                <span className="font-semibold text-ev-amber">
                  {ppm(icePpm)}/mile
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm font-semibold text-navy mb-1">
          Get a personalised result for your actual mileage
        </p>
        <p className="text-sm text-ev-grey mb-3">
          The figures above use national average fuel prices. Enter your postcode
          to get live local prices, or adjust the MPG and efficiency for your
          specific trim level.
        </p>
        <Link
          href={calculatorUrl}
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Open calculator pre-filled for this comparison
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 7h8M8 4l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <MonetizationPanel evName={ev.displayName} />

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="mt-2 pt-10 border-t border-border-light"
      >
        <h2
          id="faq-heading"
          className="text-2xl font-bold text-navy mb-6 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div key={item.q}>
              <h3 className="text-base font-semibold text-navy mb-2">
                {item.q}
              </h3>
              <p className="text-sm text-ev-grey leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related comparisons */}
      {related.length > 0 && (
        <div className="mt-10 pt-8 border-t border-border-light">
          <h3 className="text-sm font-semibold text-navy mb-4">
            Related comparisons
          </h3>
          <ul className="space-y-2 text-sm">
            {related.map((r) => {
              const relEv = findEV(r.evSlug);
              const relIce = findICE(r.iceSlug);
              if (!relEv || !relIce) return null;
              return (
                <li key={r.slug}>
                  <Link
                    href={`/compare/${r.slug}`}
                    className="text-ev-blue hover:underline"
                  >
                    {relEv.displayName} vs {relIce.displayName} →
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="mt-8 pt-8 border-t border-border-light">
        <ul className="space-y-1.5 text-sm">
          <li>
            <Link
              href="/guides/ev-vs-petrol-running-costs"
              className="text-ev-blue hover:underline"
            >
              EV vs Petrol Running Costs: The Complete UK Guide →
            </Link>
          </li>
          <li>
            <Link
              href="/methodology"
              className="text-ev-blue hover:underline"
            >
              Full methodology and calculation formulas →
            </Link>
          </li>
          <li>
            <Link href="/compare" className="text-ev-blue hover:underline">
              All vehicle comparisons →
            </Link>
          </li>
        </ul>
      </div>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://electricvspetrol.co.uk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Comparisons",
                item: "https://electricvspetrol.co.uk/compare",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${ev.displayName} vs ${ice.displayName}`,
                item: `https://electricvspetrol.co.uk/compare/${slug}`,
              },
            ],
          }),
        }}
      />
    </div>
  );
}
