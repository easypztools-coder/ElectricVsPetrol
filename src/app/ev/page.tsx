import type { Metadata } from "next";
import Link from "next/link";
import { evModels } from "@/lib/data/evPageData";

export const metadata: Metadata = {
  title: "Electric Car Running Costs UK 2026: Real-World Cost Per Mile by Model",
  description:
    "Real-world running costs for 25+ electric cars on sale in the UK in 2026. See pence per mile, annual electricity cost at 10,000 miles, and charging speed — updated with current UK electricity prices.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/ev",
  },
};

const segments = [
  "compact hatchback",
  "executive saloon",
  "executive gran coupé",
  "executive fastback",
  "compact crossover",
  "compact SUV",
  "premium compact hatchback",
  "premium compact SUV",
  "premium city car",
  "compact premium SUV",
  "mid-size SUV",
  "mid-size crossover SUV",
  "full-size luxury saloon",
  "large family SUV",
];

function pencePerMile(milesPerKwh: number, rate = 28): number {
  return (1 / milesPerKwh) * rate;
}

function groupBySegment(models: typeof evModels) {
  const groups: Record<string, typeof evModels> = {};
  for (const m of models) {
    if (!groups[m.segment]) groups[m.segment] = [];
    groups[m.segment].push(m);
  }
  return groups;
}

const SEGMENT_LABELS: Record<string, string> = {
  "compact hatchback": "Compact Hatchbacks",
  "premium compact hatchback": "Premium Compact Hatchbacks",
  "premium city car": "Premium City Cars",
  "executive saloon": "Executive Saloons",
  "executive gran coupé": "Executive Gran Coupés",
  "executive fastback": "Executive Fastbacks",
  "compact crossover": "Compact Crossovers",
  "compact SUV": "Compact SUVs",
  "premium compact SUV": "Premium Compact SUVs",
  "compact premium SUV": "Compact Premium SUVs",
  "mid-size crossover SUV": "Mid-Size Crossover SUVs",
  "mid-size SUV": "Mid-Size SUVs",
  "full-size luxury saloon": "Full-Size Luxury Saloons",
  "large family SUV": "Large Family SUVs",
};

export default function EVIndexPage() {
  const groups = groupBySegment(evModels);
  const orderedSegments = segments.filter((s) => groups[s]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Electric Car Running Costs</li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Electric Car Running Costs UK 2026
      </h1>
      <p className="text-lg text-ev-grey mb-4 leading-relaxed">
        Real-world pence-per-mile costs for 25+ EVs on sale in the UK, based on
        actual efficiency data and current electricity prices. Select any model
        to see detailed running cost analysis.
      </p>
      <p className="text-sm text-ev-grey mb-10">
        Standard home tariff: 28p/kWh. To see costs on your own tariff,{" "}
        <Link href="/#calculator" className="text-ev-blue hover:underline">
          use the calculator
        </Link>
        .
      </p>

      <div className="space-y-12">
        {orderedSegments.map((segment) => (
          <section key={segment}>
            <h2
              className="text-xl font-bold text-navy mb-4 font-display"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              {SEGMENT_LABELS[segment] ?? segment}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groups[segment].map((ev) => {
                const ppm = pencePerMile(ev.milesPerKwh);
                const annualGbp = ((10000 / ev.milesPerKwh) * 28) / 100;
                return (
                  <Link
                    key={ev.slug}
                    href={`/ev/${ev.slug}`}
                    className="block border border-border-light rounded-2xl p-5 hover:border-ev-blue/40 hover:bg-ev-blue/3 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs text-ev-grey mb-0.5">{ev.make}</p>
                        <h3 className="text-base font-bold text-navy group-hover:text-ev-blue transition-colors font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                          {ev.model}
                        </h3>
                        {ev.variant && (
                          <p className="text-xs text-ev-grey mt-0.5">{ev.variant}</p>
                        )}
                      </div>
                      <span className="text-xs bg-ev-blue/8 text-ev-blue px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                        {ev.milesPerKwh} mi/kWh
                      </span>
                    </div>

                    <div className="flex items-end gap-4 mt-4">
                      <div>
                        <p className="text-xs text-ev-grey mb-0.5">Cost per mile</p>
                        <p className="text-lg font-bold text-ev-green">
                          {ppm.toFixed(1)}p
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-ev-grey mb-0.5">Annual (10k mi)</p>
                        <p className="text-lg font-bold text-navy">
                          £{Math.round(annualGbp)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-ev-grey mb-0.5">Real-world range</p>
                        <p className="text-base font-semibold text-navy">
                          {ev.realWorldRangeMiles} mi
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/compare" className="text-ev-blue hover:underline">
              Head-to-head comparisons: EV vs specific petrol rivals →
            </Link>
          </li>
          <li>
            <Link href="/guides/ev-vs-petrol-running-costs" className="text-ev-blue hover:underline">
              Guide: EV vs Petrol Running Costs 2026 →
            </Link>
          </li>
          <li>
            <Link href="/#calculator" className="text-ev-blue hover:underline">
              EV vs Petrol Cost Calculator →
            </Link>
          </li>
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" },
              { "@type": "ListItem", position: 2, name: "Electric Car Running Costs", item: "https://electricvspetrol.co.uk/ev" },
            ],
          }),
        }}
      />
    </div>
  );
}
