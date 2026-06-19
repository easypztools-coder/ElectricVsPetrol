import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/lib/data/comparisons";
import { findEV, findICE } from "@/lib/data/vehicles";

export const metadata: Metadata = {
  title: "EV vs Petrol Car Comparisons UK 2026",
  description:
    "Compare the running costs of specific electric vs petrol cars — Tesla Model 3 vs BMW 3 Series, MG4 vs Golf, Ioniq 5 vs BMW X3, and more. Real UK fuel prices, not national averages.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/compare",
  },
};

const LITRES_PER_GALLON = 4.54609;
const PETROL_PRICE = 143.9;
const HOME_RATE = 28.0;
const PUBLIC_RATE = 60.0;

function annualSavingAt10k(mpg: number, milesPerKwh: number): number {
  const miles = 10000;
  const litres = (miles / mpg) * LITRES_PER_GALLON;
  const iceCost = litres * (PETROL_PRICE / 100);
  const kWh = miles / milesPerKwh;
  const blended = 0.8 * HOME_RATE + 0.2 * PUBLIC_RATE;
  const evCost = kWh * (blended / 100);
  return iceCost - evCost;
}

const tierLabels: Record<1 | 2 | 3, string> = {
  1: "Most searched",
  2: "Popular comparisons",
  3: "More comparisons",
};

export default function ComparePage() {
  const byTier = ([1, 2, 3] as const).map((t) => ({
    tier: t,
    label: tierLabels[t],
    items: comparisons.filter((c) => c.tier === t),
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            Comparisons
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        EV vs Petrol: Specific Car Comparisons
      </h1>
      <p className="text-lg text-ev-grey mb-10 leading-relaxed max-w-2xl">
        Generic averages don&apos;t answer your question. These pages compare the
        running costs of specific electric and petrol cars — with real UK fuel
        prices and pre-calculated tables at every mileage.
      </p>

      <div className="space-y-12">
        {byTier.map(({ tier, label, items }) => (
          <section key={tier} aria-labelledby={`tier-${tier}-heading`}>
            <h2
              id={`tier-${tier}-heading`}
              className="text-xs font-semibold uppercase tracking-wider text-ev-grey mb-4"
            >
              {label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((pair) => {
                const ev = findEV(pair.evSlug);
                const ice = findICE(pair.iceSlug);
                if (!ev || !ice) return null;
                const saving = annualSavingAt10k(ice.realWorldMpg, ev.milesPerKwh);
                const evCheaper = saving > 0;

                return (
                  <Link
                    key={pair.slug}
                    href={`/compare/${pair.slug}`}
                    className="group block bg-white border border-border-light rounded-2xl p-5 hover:border-ev-blue/40 hover:shadow-sm transition-all"
                  >
                    {/* Segment badge */}
                    <span className="inline-block text-xs font-medium text-ev-blue bg-ev-blue/8 px-2.5 py-1 rounded-full mb-3">
                      {ev.segment}
                    </span>

                    {/* Vehicle names */}
                    <h3 className="font-bold text-navy text-base leading-snug mb-1 group-hover:text-ev-blue transition-colors">
                      {ev.displayName}
                    </h3>
                    <p className="text-sm text-ev-grey mb-3">
                      vs {ice.displayName}
                    </p>

                    {/* Saving callout */}
                    <div
                      className={[
                        "rounded-xl px-3 py-2 flex items-baseline gap-1.5",
                        evCheaper
                          ? "bg-ev-green/8 text-ev-green"
                          : "bg-ev-amber/8 text-ev-amber",
                      ].join(" ")}
                    >
                      <span className="text-lg font-bold font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                        {evCheaper ? "+" : "−"}£
                        {Math.round(Math.abs(saving)).toLocaleString("en-GB")}
                        /yr
                      </span>
                      <span className="text-xs opacity-70">
                        {evCheaper ? "EV saves" : "EV costs more"}
                      </span>
                    </div>

                    <p className="text-xs text-ev-grey mt-2">
                      At 10,000 mi/yr · 80% home charging
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* How these figures are calculated */}
      <div className="mt-12 bg-off-white border border-border-light rounded-2xl p-6">
        <h2
          className="text-base font-bold text-navy mb-2 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          How are these figures calculated?
        </h2>
        <p className="text-sm text-ev-grey leading-relaxed">
          Annual saving figures use{" "}
          <strong className="text-navy">real-world UK fuel prices</strong> —
          {PETROL_PRICE}p/litre petrol, 28p/kWh home electricity, and 60p/kWh
          public charging — at 10,000 miles per year with 80% of EV charging
          at home. Vehicle efficiency figures are real-world UK averages, not
          official WLTP ratings. Use our{" "}
          <Link href="/#calculator" className="text-ev-blue hover:underline">
            full calculator
          </Link>{" "}
          to enter your own mileage, prices and charging split.
        </p>
        <p className="text-xs text-ev-grey mt-2">
          See our{" "}
          <Link href="/methodology" className="text-ev-blue hover:underline">
            methodology
          </Link>{" "}
          for full details.
        </p>
      </div>

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
            ],
          }),
        }}
      />
    </div>
  );
}
