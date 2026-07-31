import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cheapest EV to Run in the UK 2026: Which Electric Car Costs the Least?",
  description:
    "The cheapest EV to run in the UK in 2026 is the Hyundai Ioniq 6 at 6.2p per mile, closely followed by the Tesla Model 3 at 6.4p per mile. Full ranked list with annual cost at 10,000 miles.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/faq/cheapest-ev-to-run-uk",
  },
};

const faqItems = [
  {
    q: "What is the cheapest EV to run in the UK in 2026?",
    a: "The Hyundai Ioniq 6 Standard Range RWD is the cheapest EV to run per mile in the UK in 2026, at approximately 6.2p per mile on the current 26.1p/kWh Ofgem price cap home tariff. Its real-world efficiency of 4.2 miles per kWh — partly thanks to its world-record 0.21 Cd drag coefficient — gives it the edge over the Tesla Model 3 (6.4p/mile at 4.1 mi/kWh). On an overnight EV tariff at 7p/kWh, both models drop to under 2p per mile.",
  },
  {
    q: "Which affordable EVs are the cheapest to run?",
    a: "In the budget EV category (under £30,000), the MG4 and BYD Dolphin both achieve 4.0 miles/kWh — giving a running cost of 6.5p per mile on the current home tariff. Both undercut most petrol equivalents by 10p+ per mile. The MG4 Standard Range starts at £26,995, making it the most cost-effective new EV purchase in the UK when combining low purchase price with low running costs.",
  },
  {
    q: "Is it cheaper to run an EV or a petrol car in the UK in 2026?",
    a: "For home-charging EV owners, yes — significantly cheaper, and more so than a few months ago. At the current 26.1p/kWh Ofgem price cap rate, the average EV costs 6–8p per mile. A petrol car averaging 40 MPG at 153.5p/litre (July 2026) costs approximately 17.4p per mile. This represents a saving of roughly 10–11p per mile, or £1,000–£1,100 per year at 10,000 miles. Drivers without home charging who rely on public rapid charging (averaging 79p/kWh) pay around 22–23p per mile — more than a petrol car.",
  },
  {
    q: "How much does it cost to run the cheapest EV per year in the UK?",
    a: "The Ioniq 6 SR costs approximately £873 per year in electricity at 10,000 miles with 80% home charging at 26.1p/kWh and 20% public charging at 79p/kWh. On a dedicated overnight tariff (7p/kWh for 100% of charging), the annual cost drops to around £200 — a remarkable figure for any motorised transport.",
  },
];

export default function CheapestEvToRunUKPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Cheapest EV to Run UK</li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        What Is the Cheapest EV to Run in the UK in 2026?
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Updated July 2026
      </p>

      {/* Direct answer */}
      <div className="bg-ev-green/5 border border-ev-green/30 rounded-2xl p-5 mb-8">
        <p className="text-xs font-semibold text-ev-green uppercase tracking-wide mb-2">Quick answer</p>
        <p className="text-sm text-navy leading-relaxed">
          The <strong>Hyundai Ioniq 6 Standard Range RWD</strong> is the cheapest EV to run
          per mile in the UK at <strong>6.2p per mile</strong> (26.1p/kWh home tariff).
          The <strong>Tesla Model 3 Highland</strong> is close behind at <strong>6.4p per mile</strong>.
          For lowest purchase price + running costs combined, the <strong>MG4</strong> at
          £26,995 and <strong>6.5p per mile</strong> is the best budget option.
        </p>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Ranked: cheapest EVs to run per mile in 2026
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border-light">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-off-white">
                  <th className="text-left py-3 px-4 text-xs text-ev-grey font-medium">#</th>
                  <th className="text-left py-3 px-4 text-xs text-ev-grey font-medium">Model</th>
                  <th className="text-right py-3 px-4 text-xs text-ev-grey font-medium">p/mile</th>
                  <th className="text-right py-3 px-4 text-xs text-ev-grey font-medium">Annual (10k mi)</th>
                  <th className="text-right py-3 px-4 text-xs text-ev-grey font-medium">From</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, model: "Hyundai Ioniq 6 SR RWD", ppm: 6.2, annual: 873, price: "£38,995" },
                  { rank: 2, model: "Tesla Model 3 RWD (Highland)", ppm: 6.4, annual: 895, price: "£40,990" },
                  { rank: 3, model: "MG4 Standard Range", ppm: 6.5, annual: 917, price: "£26,995" },
                  { rank: 4, model: "BYD Dolphin Comfort", ppm: 6.5, annual: 917, price: "£28,490" },
                  { rank: 5, model: "Fiat 500e (42kWh)", ppm: 6.5, annual: 917, price: "£34,995" },
                  { rank: 6, model: "Cupra Born 77kWh", ppm: 6.9, annual: 965, price: "£33,905" },
                  { rank: 7, model: "Mini Cooper E", ppm: 6.9, annual: 965, price: "£31,110" },
                  { rank: 8, model: "Renault Megane E-Tech EV60", ppm: 6.9, annual: 965, price: "£34,895" },
                ].map((row) => (
                  <tr key={row.rank} className={row.rank % 2 === 0 ? "bg-off-white/50" : "bg-white"}>
                    <td className="py-3 px-4">
                      <span className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${row.rank <= 3 ? "bg-ev-green text-white" : "bg-off-white text-ev-grey border border-border-light"}`}>
                        {row.rank}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-medium text-navy">{row.model}</td>
                    <td className="py-3 px-4 text-right font-bold text-ev-green">{row.ppm}p</td>
                    <td className="py-3 px-4 text-right font-semibold text-navy">£{row.annual}</td>
                    <td className="py-3 px-4 text-right text-ev-grey">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ev-grey mt-2">
            Cost per mile based on 26.1p/kWh home charging. Annual cost: 10,000 miles, 80% home / 20% public (79p/kWh).
          </p>
        </section>
      </div>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 my-10">
        <p className="text-sm text-navy font-medium mb-2">
          See costs on your own tariff and mileage
        </p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the cost calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

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
          <li><Link href="/guides/cheapest-evs-to-run-uk-2026" className="text-ev-blue hover:underline">Cheapest EVs to Run UK 2026 — full guide →</Link></li>
          <li><Link href="/ev" className="text-ev-blue hover:underline">All EV running costs by model →</Link></li>
          <li><Link href="/ev/hyundai-ioniq-6" className="text-ev-blue hover:underline">Hyundai Ioniq 6 running costs →</Link></li>
          <li><Link href="/ev/mg4" className="text-ev-blue hover:underline">MG4 running costs →</Link></li>
          <li><Link href="/compare/mg4-vs-volkswagen-golf" className="text-ev-blue hover:underline">MG4 vs VW Golf comparison →</Link></li>
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
              { "@type": "ListItem", position: 2, name: "Cheapest EV to Run UK 2026", item: "https://electricvspetrol.co.uk/faq/cheapest-ev-to-run-uk" },
            ],
          }),
        }}
      />
    </div>
  );
}
