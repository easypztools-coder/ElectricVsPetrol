import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Charge a Tesla at Home UK? (2026)",
  description:
    "Charging a Tesla at home in the UK costs between £4.20 and £35.00 for a full charge depending on your tariff and model. We break down the exact figures for Model 3, Model Y, and Model S.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/faq/how-much-does-it-cost-to-charge-a-tesla-at-home-uk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const teslaModels = [
  { model: "Model 3 RWD (Highland)", battery: 60, realWorldMiPerKwh: 4.1 },
  { model: "Model Y RWD", battery: 75, realWorldMiPerKwh: 3.7 },
  { model: "Model S Long Range", battery: 100, realWorldMiPerKwh: 3.2 },
];

const tariffs = [
  { label: "Octopus Go (off-peak)", rate: 7 },
  { label: "Standard tariff", rate: 26.1 },
  { label: "Peak standard tariff", rate: 35 },
];

const faqItems = [
  {
    q: "How much does a full charge cost for a Tesla Model 3 at home?",
    a: "A Tesla Model 3 RWD (Highland, 60kWh battery) costs between £4.20 and £21.00 for a full charge from empty, depending on your electricity tariff. On the current 26.1p/kWh Ofgem price cap tariff, a full charge costs approximately £15.66. On an overnight EV tariff like Octopus Go at 7p/kWh, it costs around £4.20.",
  },
  {
    q: "How much does it cost to charge a Tesla Model Y at home?",
    a: "A Tesla Model Y RWD (75kWh battery) costs between £5.25 and £26.25 for a full charge from empty. At the current 26.1p/kWh tariff, a full charge costs approximately £19.58. On an overnight EV tariff at 7p/kWh, it costs £5.25.",
  },
  {
    q: "Is charging a Tesla at home cheaper than petrol?",
    a: "Yes, significantly cheaper for most drivers — and more so than a few months ago. At the current 26.1p/kWh Ofgem price cap tariff, a Tesla Model 3 costs approximately 6.4p per mile to run — versus 15–20p per mile for a comparable petrol saloon at July 2026 fuel prices. On a cheap overnight tariff at 7p/kWh, this drops to 1.7p per mile.",
  },
  {
    q: "What is the cheapest way to charge a Tesla at home in the UK?",
    a: "The cheapest option is a dedicated overnight EV electricity tariff like Octopus Go, which charges around 7p/kWh during off-peak hours (typically 00:30–04:30). To access these tariffs you need a smart meter. A standard home charger (7.4kW wallbox) will fill a Model 3 from 20–80% in under 6 hours — comfortably within the off-peak window.",
  },
];

export default function TeslaHomeChargingCostPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Tesla Home Charging Cost UK</li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        How Much Does It Cost to Charge a Tesla at Home in the UK?
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Updated July 2026 · UK electricity prices current
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        The answer depends on your Tesla model and electricity tariff. Here are
        the exact figures for every combination.
      </p>

      {/* Cost table */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Full charge cost by model and tariff
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border-light">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-off-white">
                <th className="text-left py-3 px-4 text-xs text-ev-grey font-medium">Tesla model</th>
                <th className="text-right py-3 px-4 text-xs text-ev-grey font-medium">Battery</th>
                {tariffs.map((t) => (
                  <th key={t.rate} className="text-right py-3 px-4 text-xs text-ev-grey font-medium">
                    {t.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teslaModels.map((tm, i) => (
                <tr key={tm.model} className={i % 2 === 0 ? "bg-white" : "bg-off-white/50"}>
                  <td className="py-3 px-4 font-medium text-navy">{tm.model}</td>
                  <td className="py-3 px-4 text-right text-ev-grey">{tm.battery} kWh</td>
                  {tariffs.map((t) => (
                    <td key={t.rate} className={`py-3 px-4 text-right font-semibold ${t.rate === 7 ? "text-ev-green" : "text-navy"}`}>
                      £{((tm.battery * t.rate) / 100).toFixed(2)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ev-grey mt-2">
          Cost calculated from 0% to 100% of usable battery capacity.
          In practice, most owners charge 20–80% for battery health.
        </p>
      </section>

      {/* Cost per mile */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Tesla running cost per mile
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border-light">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-off-white">
                <th className="text-left py-3 px-4 text-xs text-ev-grey font-medium">Tesla model</th>
                <th className="text-right py-3 px-4 text-xs text-ev-grey font-medium">Efficiency</th>
                {tariffs.map((t) => (
                  <th key={t.rate} className="text-right py-3 px-4 text-xs text-ev-grey font-medium">
                    {t.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teslaModels.map((tm, i) => (
                <tr key={tm.model} className={i % 2 === 0 ? "bg-white" : "bg-off-white/50"}>
                  <td className="py-3 px-4 font-medium text-navy">{tm.model}</td>
                  <td className="py-3 px-4 text-right text-ev-grey">{tm.realWorldMiPerKwh} mi/kWh</td>
                  {tariffs.map((t) => (
                    <td key={t.rate} className={`py-3 px-4 text-right font-semibold ${t.rate === 7 ? "text-ev-green" : "text-navy"}`}>
                      {((1 / tm.realWorldMiPerKwh) * t.rate).toFixed(1)}p/mi
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          Compare Tesla running costs against your current car
        </p>
        <Link
          href="/#calculator?efficiency=4.1"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
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
          <li><Link href="/ev/tesla-model-3" className="text-ev-blue hover:underline">Tesla Model 3 running costs in detail →</Link></li>
          <li><Link href="/ev/tesla-model-y" className="text-ev-blue hover:underline">Tesla Model Y running costs in detail →</Link></li>
          <li><Link href="/compare/tesla-model-3-vs-bmw-3-series" className="text-ev-blue hover:underline">Tesla Model 3 vs BMW 3 Series →</Link></li>
          <li><Link href="/compare/tesla-model-y-vs-bmw-x3" className="text-ev-blue hover:underline">Tesla Model Y vs BMW X3 →</Link></li>
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
              { "@type": "ListItem", position: 2, name: "How Much Does It Cost to Charge a Tesla at Home UK?", item: "https://electricvspetrol.co.uk/faq/how-much-does-it-cost-to-charge-a-tesla-at-home-uk" },
            ],
          }),
        }}
      />
    </div>
  );
}
