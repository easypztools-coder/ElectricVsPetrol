import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cheapest EVs to Run in the UK 2026: Pence Per Mile Ranked",
  description:
    "Which electric car costs the least per mile to run in the UK in 2026? We rank 20+ EVs by pence per mile based on real-world efficiency data and current UK electricity prices.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/cheapest-evs-to-run-uk-2026",
  },
};

const cheapestEvs = [
  { rank: 1, model: "Hyundai Ioniq 6 SR RWD", miPerKwh: 4.2, ppm: 6.7, annual10k: 800, priceGbp: 38995 },
  { rank: 2, model: "Tesla Model 3 Highland RWD", miPerKwh: 4.1, ppm: 6.8, annual10k: 829, priceGbp: 40990 },
  { rank: 3, model: "MG4 Standard Range", miPerKwh: 4.0, ppm: 7.0, annual10k: 860, priceGbp: 26995 },
  { rank: 4, model: "BYD Dolphin Comfort", miPerKwh: 4.0, ppm: 7.0, annual10k: 860, priceGbp: 28490 },
  { rank: 5, model: "Fiat 500e (42kWh)", miPerKwh: 4.0, ppm: 7.0, annual10k: 860, priceGbp: 34995 },
  { rank: 6, model: "Mini Cooper E", miPerKwh: 3.8, ppm: 7.4, annual10k: 900, priceGbp: 31110 },
  { rank: 7, model: "Cupra Born 77kWh", miPerKwh: 3.8, ppm: 7.4, annual10k: 900, priceGbp: 33905 },
  { rank: 8, model: "Renault Megane E-Tech", miPerKwh: 3.8, ppm: 7.4, annual10k: 900, priceGbp: 34895 },
  { rank: 9, model: "Kia EV6 SR RWD", miPerKwh: 3.8, ppm: 7.4, annual10k: 900, priceGbp: 38745 },
  { rank: 10, model: "Polestar 2 LR Single Motor", miPerKwh: 3.5, ppm: 8.0, annual10k: 980, priceGbp: 45900 },
];

const faqItems = [
  {
    q: "What is the cheapest EV to run per mile in the UK in 2026?",
    a: "The Hyundai Ioniq 6 Standard Range RWD and Tesla Model 3 (2024 Highland) are the most efficient EVs in the UK market at 4.1–4.2 miles per kWh. At a standard home tariff of 28p/kWh, this equates to approximately 6.7–6.8p per mile — roughly half the cost of a 40 MPG petrol car.",
  },
  {
    q: "How much does it cost to run an EV per year in the UK?",
    a: "At 10,000 miles per year with 80% home charging (28p/kWh) and 20% public rapid charging (60p/kWh), the most efficient EVs cost £700–£900 per year. Average EVs cost £900–£1,200 per year. Less efficient larger EVs and SUVs cost £1,200–£1,600 per year at 10,000 miles.",
  },
  {
    q: "Is the MG4 the cheapest EV to buy and run?",
    a: "The MG4 Standard Range at £26,995 offers among the best combination of low purchase price and efficient running costs (4.0 miles/kWh, 7p per mile). It's not the absolute cheapest per mile — the Ioniq 6 and Model 3 are more efficient — but no other EV matches its combination of low price and sub-8p running costs.",
  },
  {
    q: "Do overnight EV tariffs make a significant difference?",
    a: "Yes, dramatically. On a standard tariff at 28p/kWh, the Ioniq 6 costs 6.7p per mile. On an overnight EV tariff like Octopus Go at 7p/kWh, this drops to 1.7p per mile — less than a quarter of the standard rate. At 10,000 miles per year this difference amounts to £500 annually.",
  },
];

export default function CheapestEvsToRunPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Cheapest EVs to Run 2026</li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Cheapest EVs to Run in the UK 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Last updated: June 2026 · Based on 28p/kWh home charging
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Not all EVs cost the same per mile. Efficiency varies from under 3 miles/kWh
        in large SUVs to over 4 miles/kWh in the most aerodynamic models.
        Here&apos;s the definitive UK ranking.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          See costs for your own electricity rate
        </p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the cost calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Top 10 cheapest EVs to run: pence per mile ranked
          </h2>
          <p className="text-sm text-ev-grey mb-4">
            Based on real-world efficiency data. Cost per mile calculated at 28p/kWh home charging. Annual cost at 10,000 miles, 80% home / 20% public (60p/kWh).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-2 pr-3 text-xs text-ev-grey font-medium">#</th>
                  <th className="text-left py-2 pr-3 text-xs text-ev-grey font-medium">Model</th>
                  <th className="text-right py-2 pr-3 text-xs text-ev-grey font-medium">mi/kWh</th>
                  <th className="text-right py-2 pr-3 text-xs text-ev-grey font-medium">p/mile</th>
                  <th className="text-right py-2 pr-3 text-xs text-ev-grey font-medium">Annual (10k mi)</th>
                  <th className="text-right py-2 text-xs text-ev-grey font-medium">From</th>
                </tr>
              </thead>
              <tbody>
                {cheapestEvs.map((ev) => (
                  <tr key={ev.rank} className="border-b border-border-light hover:bg-off-white transition-colors">
                    <td className="py-2.5 pr-3">
                      <span className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${
                        ev.rank <= 3 ? "bg-ev-green text-white" : "bg-off-white text-ev-grey border border-border-light"
                      }`}>
                        {ev.rank}
                      </span>
                    </td>
                    <td className="py-2.5 pr-3 font-medium text-navy">{ev.model}</td>
                    <td className="py-2.5 pr-3 text-right text-ev-grey">{ev.miPerKwh}</td>
                    <td className="py-2.5 pr-3 text-right font-bold text-ev-green">{ev.ppm}p</td>
                    <td className="py-2.5 pr-3 text-right font-semibold text-navy">£{ev.annual10k}</td>
                    <td className="py-2.5 text-right text-ev-grey">£{ev.priceGbp.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ev-grey mt-2">
            Prices correct at June 2026. Real-world efficiency varies with driving style, speed, and temperature.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            The MG4: best value combination
          </h2>
          <p className="mb-4">
            While the Ioniq 6 and Model 3 are slightly more efficient, the MG4 at
            £26,995 offers the best combination of low purchase price and competitive
            running costs. Its 4.0 miles/kWh efficiency gives identical running costs
            to the 500e and BYD Dolphin, at a fraction of the price of a comparable
            German hatchback.
          </p>
          <p>
            The annual saving versus a Volkswagen Golf 1.5 eTSI at 44 MPG is
            approximately £630. At the £26,995 purchase price, that&apos;s a rapid
            payback on any premium over an equivalent petrol hatchback.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            The overnight tariff difference
          </h2>
          <p className="mb-4">
            If you can switch to a dedicated EV overnight tariff like Octopus Go
            (typically 7p/kWh off-peak), the running cost landscape changes dramatically.
          </p>
          <div className="bg-off-white border border-border-light rounded-xl p-4 text-sm">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-ev-grey mb-1">Ioniq 6 — standard tariff</p>
                <p className="text-xl font-bold text-ev-green">6.7p/mile</p>
                <p className="text-xs text-ev-grey">£800/year at 10k miles</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">Ioniq 6 — overnight tariff</p>
                <p className="text-xl font-bold text-ev-green">1.7p/mile</p>
                <p className="text-xs text-ev-grey">£200/year at 10k miles</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">Golf petrol (44 MPG)</p>
                <p className="text-xl font-bold text-ev-amber">14.9p/mile</p>
                <p className="text-xs text-ev-grey">£1,490/year at 10k miles</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-ev-grey mt-2">
            Octopus Go off-peak rate 7p/kWh; standard tariff 28p/kWh; petrol 143.9p/litre.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            EVs to avoid if running cost is your priority
          </h2>
          <p className="mb-4">
            Larger, heavier SUVs and performance EVs are significantly more expensive
            to run per mile:
          </p>
          <ul className="space-y-2 text-sm">
            {[
              "Kia EV9 (3.0 mi/kWh) — 9.3p/mile home, £1,140/year at 10k miles",
              "BMW iX3 / iX (2.8–3.2 mi/kWh) — 8.8–10p/mile home",
              "Audi e-tron / Q8 e-tron (2.5–2.8 mi/kWh) — 10–11.2p/mile home",
              "Mercedes EQS 580 (2.5 mi/kWh) — 11.2p/mile home",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-ev-amber mt-0.5 flex-shrink-0">!</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            These are still cheaper than equivalent petrol models — but the running
            cost advantage is smaller, and the purchase premium is often larger.
          </p>
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

      <div className="mt-10 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/ev" className="text-ev-blue hover:underline">Full EV model running costs →</Link></li>
          <li><Link href="/compare/mg4-vs-volkswagen-golf" className="text-ev-blue hover:underline">MG4 vs Volkswagen Golf comparison →</Link></li>
          <li><Link href="/guides/best-ev-for-high-mileage" className="text-ev-blue hover:underline">Best EVs for high mileage drivers →</Link></li>
          <li><Link href="/#calculator" className="text-ev-blue hover:underline">EV vs Petrol Cost Calculator →</Link></li>
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
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" },
              { "@type": "ListItem", position: 3, name: "Cheapest EVs to Run UK 2026", item: "https://electricvspetrol.co.uk/guides/cheapest-evs-to-run-uk-2026" },
            ],
          }),
        }}
      />
    </div>
  );
}
