import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is an EV Cheaper Than Petrol in the UK 2026? The Honest Answer",
  description:
    "Is an EV actually cheaper to run than a petrol car in the UK in 2026? The answer depends on where you charge. We explain the numbers for home chargers, public charging, and everything in between.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/faq/is-ev-cheaper-than-petrol-uk",
  },
};

const faqItems = [
  {
    q: "Is an EV cheaper than petrol to run in the UK in 2026?",
    a: "For drivers who charge at home, yes — often significantly cheaper, and the gap has widened recently. At the current 26.1p/kWh Ofgem price cap rate and an EV efficiency of 3.5–4.0 miles/kWh, an EV costs 6.5–7.5p per mile. A petrol car averaging 40 MPG at 153.5p/litre (July 2026) costs approximately 17.4p per mile. This is a saving of roughly 10–11p per mile — or £1,000–£1,100 per year at 10,000 miles. Drivers who rely primarily on public rapid charging (averaging 79p/kWh across UK networks in mid-2026) pay around 22–23p per mile — more expensive than most petrol cars.",
  },
  {
    q: "How much cheaper is an EV than petrol per year?",
    a: "At 10,000 miles per year with 80% home charging: a typical EV costs £750–£950 in electricity. A petrol car at 40 MPG costs approximately £1,740 in fuel at July 2026 prices. The saving is typically £800–£1,000 per year at this mileage. At 20,000 miles per year, the annual saving for a home-charging EV owner roughly doubles to £1,600–£2,000.",
  },
  {
    q: "Does buying an EV save money overall?",
    a: "The running cost saving is real, but EVs typically cost more to buy than equivalent petrol cars. The break-even point — when the accumulated fuel savings outweigh the purchase premium — depends on the price difference and your annual mileage. A £2,500 premium with £990/year saving breaks even in about 2.5 years. A £10,000 premium with the same saving takes around 10 years — longer than many people keep a car.",
  },
  {
    q: "Is EV or petrol cheaper if I don't have a home charger?",
    a: "Without a home charger, the economics are much less clear than they used to be. Public rapid charging in the UK averaged 79p/kWh across networks in mid-2026, with the cheapest (Tesla Supercharger, around 62p/kWh) to the most expensive (InstaVolt, BP Pulse, around 90p/kWh). At the 79p average and 3.5 miles/kWh, you're paying around 22.6p per mile — higher than a 40 MPG petrol car at 17.4p per mile. The EV advantage only returns if you have access to cheaper charging (workplace, kerbside, or the lower-priced rapid networks).",
  },
  {
    q: "Are EVs cheaper to run than petrol or diesel?",
    a: "Compared to petrol at 153.5p/litre: home-charging EVs are cheaper at most mileages. Compared to diesel at 168.6p/litre: a 55 MPG diesel costs around 13.9p per mile, closer to EV home-charging rates but still more expensive. For efficient diesel drivers (50+ MPG with a home charger) the running cost saving of switching to an EV is smaller — though the BIK tax benefit for company car drivers makes EVs compelling regardless.",
  },
];

export default function IsEvCheaperThanPetrolUKPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Is EV Cheaper Than Petrol UK?</li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Is an EV Cheaper Than Petrol in the UK?
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Updated July 2026 · Based on current UK fuel and electricity prices
      </p>

      {/* Quick answer */}
      <div className="bg-ev-green/5 border border-ev-green/30 rounded-2xl p-5 mb-8">
        <p className="text-xs font-semibold text-ev-green uppercase tracking-wide mb-2">Quick answer</p>
        <p className="text-sm text-navy leading-relaxed">
          <strong>Yes, if you charge at home — and the gap just got wider.</strong> An EV costs
          6.5–7.5p per mile on the current 26.1p/kWh Ofgem price cap rate versus
          14–23p per mile for petrol and diesel — a saving of roughly 10–13p per mile.
          At 10,000 miles this is £900–£1,300 per year. Without a home charger,
          public rapid charging (averaging 79p/kWh in mid-2026) costs about 22–23p
          per mile — more than most petrol cars.
        </p>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            The cost per mile comparison: EV vs petrol
          </h2>
          <div className="bg-off-white border border-border-light rounded-xl p-4 my-4">
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="text-xs font-semibold text-ev-grey uppercase tracking-wide mb-3">EV (home charging)</h3>
                <div className="space-y-2">
                  {[
                    { label: "Overnight tariff (7p/kWh)", value: "2p/mile", highlight: true },
                    { label: "Standard tariff (26.1p/kWh)", value: "7.5p/mile", highlight: false },
                    { label: "Peak tariff (35p/kWh)", value: "10p/mile", highlight: false },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center">
                      <span className="text-ev-grey text-xs">{row.label}</span>
                      <span className={`font-bold text-sm ${row.highlight ? "text-ev-green" : "text-navy"}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-ev-grey uppercase tracking-wide mb-3">EV (public charging)</h3>
                <div className="space-y-2">
                  {[
                    { label: "Destination AC (35p/kWh)", value: "10p/mile", highlight: false },
                    { label: "Cheapest network e.g. Tesla (62p/kWh)", value: "17.7p/mile", highlight: false },
                    { label: "Rapid average (79p/kWh)", value: "22.6p/mile", highlight: false },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center">
                      <span className="text-ev-grey text-xs">{row.label}</span>
                      <span className="font-bold text-sm text-ev-amber">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-ev-grey uppercase tracking-wide mb-3">Petrol</h3>
                <div className="space-y-2">
                  {[
                    { label: "50 MPG efficient petrol", value: "14.0p/mile" },
                    { label: "40 MPG average petrol", value: "17.4p/mile" },
                    { label: "30 MPG urban petrol", value: "23.3p/mile" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center">
                      <span className="text-ev-grey text-xs">{row.label}</span>
                      <span className="font-bold text-sm text-ev-amber">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-ev-grey uppercase tracking-wide mb-3">Diesel</h3>
                <div className="space-y-2">
                  {[
                    { label: "60 MPG efficient diesel", value: "12.8p/mile" },
                    { label: "50 MPG average diesel", value: "15.3p/mile" },
                    { label: "40 MPG urban diesel", value: "19.2p/mile" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center">
                      <span className="text-ev-grey text-xs">{row.label}</span>
                      <span className="font-bold text-sm text-ev-amber">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-ev-grey">
            EV efficiency: 3.5 mi/kWh. Petrol: 153.5p/litre. Diesel: 168.6p/litre. July 2026 prices.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Annual saving at different mileages
          </h2>
          <p className="mb-4">
            Assuming EV at 7.5p/mile (home charging) vs petrol at 17.4p/mile (40 MPG):
          </p>
          <div className="overflow-x-auto rounded-xl border border-border-light">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-off-white">
                  <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">Annual mileage</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">EV cost (home)</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">Petrol cost</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">Annual saving</th>
                </tr>
              </thead>
              <tbody>
                {[8000, 10000, 12000, 15000, 20000].map((miles, i) => {
                  const evCost = Math.round(miles * 0.075);
                  const petrolCost = Math.round(miles * 0.174);
                  const saving = petrolCost - evCost;
                  return (
                    <tr key={miles} className={i % 2 === 0 ? "bg-white" : "bg-off-white/50"}>
                      <td className="py-2.5 px-4 font-medium text-navy">{miles.toLocaleString()} miles</td>
                      <td className="py-2.5 px-4 text-right text-ev-grey">£{evCost}</td>
                      <td className="py-2.5 px-4 text-right text-ev-amber font-medium">£{petrolCost}</td>
                      <td className="py-2.5 px-4 text-right font-bold text-ev-green">£{saving}/yr</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 my-10">
        <p className="text-sm text-navy font-medium mb-2">
          Calculate for your exact situation
        </p>
        <p className="text-sm text-ev-grey mb-3">
          Enter your mileage, actual fuel costs, and charging habits for a personalised figure.
        </p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the EV vs Petrol Cost Calculator
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
          <li><Link href="/guides/ev-vs-petrol-running-costs" className="text-ev-blue hover:underline">Full guide: EV vs Petrol Running Costs 2026 →</Link></li>
          <li><Link href="/guides/is-ev-worth-it-without-home-charger" className="text-ev-blue hover:underline">Is an EV worth it without a home charger? →</Link></li>
          <li><Link href="/compare" className="text-ev-blue hover:underline">Compare specific EVs vs petrol cars →</Link></li>
          <li><Link href="/faq/cheapest-ev-to-run-uk" className="text-ev-blue hover:underline">What&apos;s the cheapest EV to run in the UK? →</Link></li>
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
              { "@type": "ListItem", position: 2, name: "Is EV Cheaper Than Petrol UK?", item: "https://electricvspetrol.co.uk/faq/is-ev-cheaper-than-petrol-uk" },
            ],
          }),
        }}
      />
    </div>
  );
}
