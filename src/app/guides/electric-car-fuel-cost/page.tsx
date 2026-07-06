import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electric Car Fuel Cost UK 2026 | How Much Does It Cost to Charge?",
  description:
    "Home charging costs 7–8p per mile. Public rapid charging can reach 20p/mile. See the exact electric car fuel cost per mile, per week and per year based on current 2026 UK electricity prices.",
  alternates: {
    canonical:
      "https://electricvspetrol.co.uk/guides/electric-car-fuel-cost",
  },
};

const faqItems = [
  {
    q: "How much does it cost to 'fuel' an electric car in the UK in 2026?",
    a: "The cost depends entirely on where you charge. At a standard home tariff of 28p/kWh, a typical EV costs 7–8p per mile. On an overnight EV tariff (7p/kWh), this drops to 2p per mile. At a public rapid charger (60–80p/kWh), it can rise to 17–23p per mile — comparable to or higher than petrol.",
  },
  {
    q: "What is the average annual electricity cost for an EV in the UK?",
    a: "At 10,000 miles per year with 80% home charging at 28p/kWh and 20% public charging at 60p/kWh, the average EV costs around £700–£1,000 per year in electricity. Switching to an overnight tariff can reduce this to £300–£500 per year. At 20,000 miles per year, expect approximately £1,400–£2,000 per year.",
  },
  {
    q: "Is charging an EV cheaper than petrol or diesel in 2026?",
    a: "For most home chargers, yes — significantly. An EV at 3.5 miles/kWh and 28p/kWh home charging costs 8p per mile, about half the 14p per mile of a 45 MPG petrol car. Even at 50% home charging, the EV is usually cheaper. Only at 100% public rapid charging does the EV approach or exceed the cost of petrol per mile.",
  },
  {
    q: "How much does it cost to fully charge an electric car in the UK?",
    a: "Charging a 60kWh battery from empty to full costs approximately £16.80 at home on a standard tariff (28p/kWh), £4.20 on an overnight EV tariff (7p/kWh), or £36–£48 on a public rapid charger (60–80p/kWh). Most drivers never charge from empty to full — typical top-ups use smaller amounts.",
  },
];

export default function ElectricCarFuelCostPage() {
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
            <Link href="/guides" className="text-ev-blue hover:underline">
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            Electric Car Fuel Cost
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Electric Car Fuel Cost UK 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Last updated: June 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Unlike a petrol or diesel car where fuel prices are displayed on every
        forecourt, the cost of &ldquo;fuel&rdquo; for an electric car depends on
        where you charge, when you charge, and which tariff you're on.
        Here's what you can expect to pay in 2026.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          Calculate your exact electric car fuel cost
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Use the EV Cost Calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="cost-per-mile">
          <h2
            id="cost-per-mile"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Cost per mile: the full range
          </h2>
          <div className="bg-off-white border border-border-light rounded-xl p-4 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3 border border-border-light">
                <p className="text-xs text-ev-grey mb-1">Home (overnight tariff)</p>
                <p className="text-2xl font-bold text-ev-green font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                  2p
                </p>
                <p className="text-xs text-ev-grey">per mile at 7p/kWh</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-border-light">
                <p className="text-xs text-ev-grey mb-1">Home (standard tariff)</p>
                <p className="text-2xl font-bold text-ev-green font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                  8p
                </p>
                <p className="text-xs text-ev-grey">per mile at 28p/kWh</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-border-light">
                <p className="text-xs text-ev-grey mb-1">Public rapid charger</p>
                <p className="text-2xl font-bold text-ev-amber font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                  20p
                </p>
                <p className="text-xs text-ev-grey">per mile at 70p/kWh</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-ev-grey">
            Based on a typical EV efficiency of 3.5 miles/kWh. Your actual cost
            will vary with efficiency, driving style, and temperature.
          </p>
        </section>

        <section aria-labelledby="annual-costs">
          <h2
            id="annual-costs"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Annual fuel cost comparison
          </h2>
          <div className="bg-off-white border border-border-light rounded-xl p-4 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-ev-grey mb-1">10,000 miles per year</p>
                <div className="space-y-1">
                  <p className="flex justify-between"><span>Petrol (45 MPG)</span><span className="font-bold text-ev-amber">~£1,440/yr</span></p>
                  <p className="flex justify-between"><span>EV (80% home)</span><span className="font-bold text-ev-green">~£549/yr</span></p>
                  <p className="flex justify-between"><span>EV (overnight tariff)</span><span className="font-bold text-ev-green">~£171/yr</span></p>
                  <p className="flex justify-between"><span>EV (public only)</span><span className="font-bold text-ev-amber">~£1,714/yr</span></p>
                </div>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">20,000 miles per year</p>
                <div className="space-y-1">
                  <p className="flex justify-between"><span>Petrol (45 MPG)</span><span className="font-bold text-ev-amber">~£2,878/yr</span></p>
                  <p className="flex justify-between"><span>EV (80% home)</span><span className="font-bold text-ev-green">~£1,099/yr</span></p>
                  <p className="flex justify-between"><span>EV (overnight tariff)</span><span className="font-bold text-ev-green">~£343/yr</span></p>
                  <p className="flex justify-between"><span>EV (public only)</span><span className="font-bold text-ev-amber">~£3,429/yr</span></p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-ev-grey">
            Petrol at 143.9p/litre. EV at 3.5 mi/kWh. Home rate 28p/kWh. Public 60p/kWh. Overnight 7p/kWh (80% home scenario uses 80% home / 20% public split).
          </p>
        </section>

        <section aria-labelledby="charging-costs">
          <h2
            id="charging-costs"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Cost to fully charge common EVs in 2026
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-2 pr-3 text-xs text-ev-grey font-medium">EV Model</th>
                  <th className="text-right py-2 pr-3 text-xs text-ev-grey font-medium">Battery</th>
                  <th className="text-right py-2 pr-3 text-xs text-ev-grey font-medium">Home (28p)</th>
                  <th className="text-right py-2 pr-3 text-xs text-ev-grey font-medium">Overnight (7p)</th>
                  <th className="text-right py-2 text-xs text-ev-grey font-medium">Public (70p)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "MG4 Standard Range", bat: "51 kWh", home: "£14.28", night: "£3.57", pub: "£35.70" },
                  { model: "Tesla Model 3 RWD", bat: "60 kWh", home: "£16.80", night: "£4.20", pub: "£42.00" },
                  { model: "Hyundai Ioniq 5 SR", bat: "58 kWh", home: "£16.24", night: "£4.06", pub: "£40.60" },
                  { model: "Kia EV6 LR RWD", bat: "77 kWh", home: "£21.56", night: "£5.39", pub: "£53.90" },
                  { model: "Tesla Model Y LR", bat: "75 kWh", home: "£21.00", night: "£5.25", pub: "£52.50" },
                  { model: "BMW i4 eDrive40", bat: "81 kWh", home: "£22.68", night: "£5.67", pub: "£56.70" },
                ].map((row) => (
                  <tr key={row.model} className="border-b border-border-light">
                    <td className="py-2 pr-3 font-medium text-navy">{row.model}</td>
                    <td className="py-2 pr-3 text-right text-ev-grey">{row.bat}</td>
                    <td className="py-2 pr-3 text-right font-semibold text-navy">{row.home}</td>
                    <td className="py-2 pr-3 text-right font-bold text-ev-green">{row.night}</td>
                    <td className="py-2 text-right text-ev-amber">{row.pub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ev-grey mt-2">
            Full charge from 0–100%. Most drivers charge from 20–80% on rapid chargers, which costs roughly 60% of the full amount shown.
          </p>
        </section>

        <section aria-labelledby="saving-tips">
          <h2
            id="saving-tips"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How to reduce your electric car fuel cost
          </h2>
          <ul className="space-y-2">
            {[
              "Switch to an overnight EV tariff — this is the single biggest factor. At 7p/kWh, you cut your fuel cost by 75% compared to a standard tariff.",
              "Charge at home as much as possible. Even one public rapid charging session per week can push your blended rate up significantly.",
              "Pre-condition the battery while plugged in — warming the battery before charging improves efficiency, especially in winter.",
              "Drive efficiently: smoother acceleration, lower motorway speeds, and using regenerative braking all improve miles per kWh.",
              "Check if your workplace offers free or subsidised charging — this can eliminate fuel costs entirely for commuting miles.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-ev-blue mt-1 flex-shrink-0">→</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mt-12 pt-10 border-t border-border-light">
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
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
                name: "Guides",
                item: "https://electricvspetrol.co.uk/guides",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Electric Car Fuel Cost",
                item: "https://electricvspetrol.co.uk/guides/electric-car-fuel-cost",
              },
            ],
          }),
        }}
      />

      {/* Related links */}
      <div className="mt-10 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/#calculator" className="text-ev-blue hover:underline">
              EV vs Petrol Cost Calculator →
            </Link>
          </li>
          <li>
            <Link href="/guides/ev-vs-petrol-running-costs" className="text-ev-blue hover:underline">
              EV vs Petrol Running Costs Guide →
            </Link>
          </li>
          <li>
            <Link href="/guides/cheapest-evs-to-run-uk-2026" className="text-ev-blue hover:underline">
              Cheapest EVs to Run UK 2026 →
            </Link>
          </li>
          <li>
            <Link href="/compare" className="text-ev-blue hover:underline">
              Specific car comparisons →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}