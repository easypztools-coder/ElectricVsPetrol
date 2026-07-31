import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { evModels, findEVModel } from "@/lib/data/evPageData";
import { comparisons } from "@/lib/data/comparisons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return evModels.map((ev) => ({ slug: ev.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ev = findEVModel(slug);
  if (!ev) return {};
  const ppm = ((1 / ev.milesPerKwh) * 26.1).toFixed(1);
  return {
    title: `${ev.displayName} Running Costs UK 2026: ${ppm}p Per Mile | ElectricVsPetrol`,
    description: `Real-world running costs for the ${ev.displayName} in the UK — ${ev.milesPerKwh} miles/kWh, ${ppm}p per mile at standard home tariff, ${ev.realWorldRangeMiles}-mile real-world range. Updated July 2026.`,
    alternates: {
      canonical: `https://electricvspetrol.co.uk/ev/${slug}`,
    },
  };
}

const HOME_RATE = 26.1;
const PUBLIC_RATE = 79;
const MILEAGES = [8000, 10000, 12000, 15000, 20000];

function annualCost(miles: number, milesPerKwh: number, homePct: number): number {
  const kWh = miles / milesPerKwh;
  const blended = (homePct / 100) * HOME_RATE + ((100 - homePct) / 100) * PUBLIC_RATE;
  return (kWh * blended) / 100;
}

export default async function EVModelPage({ params }: Props) {
  const { slug } = await params;
  const ev = findEVModel(slug);
  if (!ev) notFound();

  const ppm = (1 / ev.milesPerKwh) * HOME_RATE;
  const relatedComparisons = comparisons.filter(
    (c) => c.evSlug === ev.slug
  );

  const faqItems = [
    {
      q: `How much does the ${ev.displayName} cost per mile in the UK?`,
      a: `At a standard home tariff of 26.1p/kWh (the Ofgem price cap rate for July–September 2026), the ${ev.displayName} costs approximately ${ppm.toFixed(1)}p per mile. On an overnight EV tariff at 7p/kWh, this drops to ${((1 / ev.milesPerKwh) * 7).toFixed(1)}p per mile.`,
    },
    {
      q: `What is the real-world range of the ${ev.displayName}?`,
      a: `The ${ev.displayName} has a real-world range of approximately ${ev.realWorldRangeMiles} miles in typical UK mixed driving conditions. The official WLTP figure is ${ev.wltpRangeMiles} miles, which is measured under standardised test conditions and is typically higher than real-world performance.`,
    },
    {
      q: `How fast does the ${ev.displayName} charge?`,
      a: `The ${ev.displayName} supports up to ${ev.maxDcChargeKw}kW DC fast charging via ${ev.chargePort}. AC home charging is also supported. The charge time from 10–80% varies depending on the available charger speed.`,
    },
    {
      q: `How much does it cost to run a ${ev.displayName} per year in the UK?`,
      a: `At 10,000 miles per year and 80% home charging (26.1p/kWh) with 20% public charging (79p/kWh), the ${ev.displayName} costs approximately £${Math.round(annualCost(10000, ev.milesPerKwh, 80))} per year in electricity.`,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/ev" className="text-ev-blue hover:underline">Electric Cars</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">{ev.displayName}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-2">
        <span className="text-xs font-medium bg-ev-blue/8 text-ev-blue px-2.5 py-0.5 rounded-full">
          {ev.segment}
        </span>
      </div>
      <h1
        className="text-4xl font-bold text-navy mb-2 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        {ev.displayName} Running Costs UK 2026
      </h1>
      <p className="text-sm text-ev-grey mb-2">{ev.variant}</p>
      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Last updated: July 2026
      </p>

      {/* Key stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Cost per mile", value: `${ppm.toFixed(1)}p`, sub: "home 26.1p/kWh" },
          { label: "Annual (10k mi)", value: `£${Math.round(annualCost(10000, ev.milesPerKwh, 80))}`, sub: "80% home" },
          { label: "Real-world range", value: `${ev.realWorldRangeMiles} mi`, sub: `WLTP: ${ev.wltpRangeMiles} mi` },
          { label: "Peak DC charge", value: `${ev.maxDcChargeKw}kW`, sub: ev.chargePort.split(" ")[0] },
        ].map((stat) => (
          <div key={stat.label} className="border border-border-light rounded-xl p-3 text-center">
            <p className="text-xs text-ev-grey mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-navy">{stat.value}</p>
            <p className="text-xs text-ev-grey mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Intro */}
      <div className="prose prose-sm max-w-none text-ev-grey mb-8 leading-relaxed space-y-4">
        <p>{ev.intro}</p>
      </div>

      {/* Running costs section */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Running costs: {ev.displayName}
        </h2>
        <p className="text-ev-grey leading-relaxed mb-6">{ev.runningCostNote}</p>

        {/* Annual cost table */}
        <div className="overflow-x-auto rounded-xl border border-border-light">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-off-white">
                <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">Annual mileage</th>
                <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">100% home (26.1p)</th>
                <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">80% home / 20% public</th>
                <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">50/50 split</th>
              </tr>
            </thead>
            <tbody>
              {MILEAGES.map((miles, i) => (
                <tr key={miles} className={i % 2 === 0 ? "bg-white" : "bg-off-white/50"}>
                  <td className="py-2.5 px-4 font-medium text-navy">{miles.toLocaleString()} miles</td>
                  <td className="py-2.5 px-4 text-right text-ev-grey">£{Math.round(annualCost(miles, ev.milesPerKwh, 100))}</td>
                  <td className="py-2.5 px-4 text-right font-semibold text-ev-green">£{Math.round(annualCost(miles, ev.milesPerKwh, 80))}</td>
                  <td className="py-2.5 px-4 text-right text-ev-grey">£{Math.round(annualCost(miles, ev.milesPerKwh, 50))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ev-grey mt-2">
          Public charging rate: 79p/kWh. Costs calculated on real-world efficiency of {ev.milesPerKwh} mi/kWh.
        </p>
      </section>

      {/* Charging section */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Charging
        </h2>
        <p className="text-ev-grey leading-relaxed mb-4">{ev.chargingNote}</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-off-white border border-border-light rounded-xl p-4">
            <p className="text-xs text-ev-grey mb-1">Battery capacity</p>
            <p className="text-lg font-bold text-navy">{ev.batteryKwh} kWh</p>
          </div>
          <div className="bg-off-white border border-border-light rounded-xl p-4">
            <p className="text-xs text-ev-grey mb-1">Peak DC charge</p>
            <p className="text-lg font-bold text-navy">{ev.maxDcChargeKw}kW</p>
          </div>
          <div className="bg-off-white border border-border-light rounded-xl p-4">
            <p className="text-xs text-ev-grey mb-1">Charge port</p>
            <p className="text-sm font-semibold text-navy">{ev.chargePort}</p>
          </div>
          <div className="bg-off-white border border-border-light rounded-xl p-4">
            <p className="text-xs text-ev-grey mb-1">Efficiency</p>
            <p className="text-lg font-bold text-navy">{ev.milesPerKwh} mi/kWh</p>
          </div>
        </div>
      </section>

      {/* Key fact */}
      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-xs font-semibold text-ev-blue uppercase tracking-wide mb-2">Key fact</p>
        <p className="text-sm text-navy leading-relaxed">{ev.keyFact}</p>
      </div>

      {/* Best for / less ideal for */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Who is the {ev.model} best suited for?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-ev-green/30 bg-ev-green/5 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-ev-green mb-3">Best for</h3>
            <ul className="space-y-2">
              {ev.bestFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ev-grey">
                  <span className="text-ev-green mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-ev-amber/30 bg-ev-amber/5 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-ev-amber mb-3">Less ideal for</h3>
            <ul className="space-y-2">
              {ev.lessIdealFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ev-grey">
                  <span className="text-ev-amber mt-0.5 flex-shrink-0">!</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="border border-ev-blue/20 bg-ev-blue/5 rounded-2xl p-6 mb-10">
        <h3
          className="text-lg font-bold text-navy mb-2 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Compare against your current car
        </h3>
        <p className="text-sm text-ev-grey mb-4">
          Enter your mileage, charging habits, and fuel cost to see exactly what
          switching to the {ev.model} would save you.
        </p>
        <Link
          href={`/#calculator?efficiency=${ev.milesPerKwh}`}
          className="inline-flex items-center gap-1.5 bg-ev-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-ev-blue/90 transition-colors"
        >
          Calculate your saving
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Related comparisons */}
      {relatedComparisons.length > 0 && (
        <section className="mb-10">
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {ev.model} head-to-head comparisons
          </h2>
          <div className="space-y-3">
            {relatedComparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="flex items-center justify-between p-4 border border-border-light rounded-xl hover:border-ev-blue/40 transition-colors"
              >
                <span className="text-sm font-medium text-navy">{comp.slug.replace(/-vs-/g, " vs ").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-ev-grey">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mt-8 pt-8 border-t border-border-light">
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
              <h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3>
              <p className="text-sm text-ev-grey leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/ev" className="text-ev-blue hover:underline">All EV running costs →</Link></li>
          <li><Link href="/compare" className="text-ev-blue hover:underline">EV vs petrol comparisons →</Link></li>
          <li><Link href="/guides/cheapest-evs-to-run-uk-2026" className="text-ev-blue hover:underline">Cheapest EVs to run UK 2026 →</Link></li>
        </ul>
      </div>

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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" },
              { "@type": "ListItem", position: 2, name: "Electric Cars", item: "https://electricvspetrol.co.uk/ev" },
              { "@type": "ListItem", position: 3, name: ev.displayName, item: `https://electricvspetrol.co.uk/ev/${ev.slug}` },
            ],
          }),
        }}
      />
    </div>
  );
}
