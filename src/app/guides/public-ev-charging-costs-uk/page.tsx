import type { Metadata } from "next";
import Link from "next/link";
import { RelatedContent } from "@/components/sections/RelatedContent";

export const metadata: Metadata = {
  title: "Public EV Charging Costs UK 2026: Network Prices Compared | ElectricVsPetrol",
  description:
    "How much does public EV charging cost in the UK? Rapid and ultra-rapid network prices compared, pence-per-mile breakdowns, and how public charging changes the EV vs petrol running-cost picture.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/public-ev-charging-costs-uk",
  },
};

const networkPrices = [
  { network: "Tesla Supercharger", rate: 62, note: "Cheapest widely available network; lower for Tesla owners on some tariffs" },
  { network: "GRIDSERVE", rate: 74, note: "Motorway hub network, ultra-rapid" },
  { network: "Osprey Charging", rate: 76, note: "Urban and destination rapid" },
  { network: "Rapid/ultra-rapid average", rate: 79, note: "Blended UK average across major networks", highlight: true },
  { network: "BP Pulse", rate: 85, note: "Widespread rapid/ultra-rapid coverage" },
  { network: "InstaVolt", rate: 90, note: "Pay-as-you-go, no subscription required" },
];

const faqItems = [
  {
    q: "How much does public EV charging cost in the UK?",
    a: "Rapid and ultra-rapid public charging in the UK averaged around 79p/kWh in mid-2026, with a range from about 62p/kWh (Tesla Supercharger, the cheapest widely available network) to around 90p/kWh (InstaVolt, BP Pulse). At 3.5 miles/kWh, that's roughly 17.7p–25.7p per mile, compared with 6.5–7.5p per mile for home charging on the Ofgem price cap rate.",
  },
  {
    q: "Is public charging cheaper than petrol?",
    a: "It depends which network you use. At the cheapest end (around 62p/kWh) public charging is still somewhat cheaper per mile than an average 40 MPG petrol car. At the expensive end (around 90p/kWh) it works out more expensive than petrol. This is the opposite of home charging, which comfortably beats petrol at almost any price on the current Ofgem cap.",
  },
  {
    q: "Why is public charging so much more expensive than home charging?",
    a: "Public charge point operators pay commercial electricity rates (which don't benefit from the domestic Ofgem price cap), plus VAT at 20% rather than the 5% domestic rate, plus the capital cost of installing and maintaining rapid hardware and grid connections. Home charging on a domestic tariff benefits from the lower VAT rate and, on overnight tariffs, from off-peak wholesale pricing — which is why the gap between home and public charging is so wide.",
  },
  {
    q: "Do subscription plans make public charging cheaper?",
    a: "Often, yes. Most major networks (BP Pulse, Osprey, InstaVolt, Ionity) offer a monthly subscription that cuts the per-kWh rate by roughly 10–20% in exchange for a flat fee, which is worth it if you charge publicly more than occasionally. Pay-as-you-go rates — the ones most often quoted — are the ceiling price, not the best available price.",
  },
  {
    q: "Can I avoid public rapid charging prices entirely?",
    a: "Not always, but you can minimise exposure to them. Destination charging (AC, typically at supermarkets, car parks, and some workplaces) is usually cheaper than rapid DC charging — often 35–45p/kWh — and workplace charging is sometimes free or subsidised. The EV vs petrol comparison is best made using your realistic mix of home, workplace, and public charging rather than assuming either 100% home or 100% public.",
  },
];

export default function PublicEvChargingCostsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Public EV Charging Costs UK</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        Public EV Charging Costs UK 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Last updated: August 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Home charging is what makes EVs cheap to run. Public charging is a different story — rapid and ultra-rapid network prices vary enormously, and at the expensive end they can wipe out the EV cost advantage entirely. Here's what the major UK networks actually charge, and how to think about the cost if you rely on public charging some or all of the time.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">Compare your real mix of home and public charging</p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the EV vs Petrol Cost Calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>UK rapid charging network prices compared</h2>
          <div className="overflow-x-auto rounded-xl border border-border-light my-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-off-white">
                  <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">Network</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">p/kWh (PAYG)</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">p/mile (3.5 mi/kWh)</th>
                  <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">Note</th>
                </tr>
              </thead>
              <tbody>
                {networkPrices.map((row, i) => (
                  <tr key={row.network} className={row.highlight ? "bg-ev-blue/5" : i % 2 === 0 ? "bg-white" : "bg-off-white/50"}>
                    <td className="py-2.5 px-4 font-medium text-navy">{row.network}</td>
                    <td className={`py-2.5 px-4 text-right font-semibold ${row.highlight ? "text-ev-blue" : "text-ev-amber"}`}>{row.rate}p</td>
                    <td className="py-2.5 px-4 text-right text-navy">{(row.rate / 3.5).toFixed(1)}p</td>
                    <td className="py-2.5 px-4 text-ev-grey text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ev-grey/70">
            Illustrative pay-as-you-go rates, mid-2026. Actual prices vary by charger speed, location, and time of day — always check the live price on the charger or app before plugging in.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Why home and public charging costs are so far apart</h2>
          <p className="mb-4">Domestic electricity in the UK is taxed at 5% VAT and, for most households, priced under the Ofgem price cap. Public charge points pay commercial electricity rates with no price cap protection and 20% VAT — four times the domestic rate — on top of the cost of installing and maintaining rapid hardware and grid connections. That combination is why public rapid charging can cost 3–4x more per kWh than a home overnight tariff.</p>
          <p>This is also why the "is an EV cheaper than petrol" answer depends so heavily on where you charge. A driver who charges almost entirely at home sees a large, reliable saving. A driver without off-street parking who relies on public rapid charging may see little saving, or even pay more than petrol, depending on which network they use most.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Ways to reduce public charging costs</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Use destination AC charging where possible.</strong> Supermarket, car park, and workplace AC chargers are typically 35–45p/kWh — much closer to home rates than rapid DC.</li>
            <li><strong>Subscribe if you charge publicly often.</strong> Monthly plans on networks like BP Pulse, Osprey, and InstaVolt typically cut the per-kWh rate by 10–20%.</li>
            <li><strong>Check for workplace charging.</strong> Many employers now offer free or subsidised charging, which can materially change the economics for commuters.</li>
            <li><strong>Compare networks on route-planning apps</strong> like Zapmap or A Better Routeplanner before a long trip — prices vary enough between adjacent chargers to be worth the extra minute of checking.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Where to go next</h2>
          <p>If you don&apos;t have a driveway or home charger, read <Link href="/guides/is-ev-worth-it-without-home-charger" className="text-ev-blue hover:underline">is an EV worth it without a home charger?</Link> for a fuller breakdown of who still comes out ahead. Otherwise, run your own numbers with a realistic home/public mix in the <Link href="/#calculator" className="text-ev-blue hover:underline">calculator</Link>.</p>
        </section>
      </div>

      <section aria-labelledby="faq-heading" className="mt-12 pt-10 border-t border-border-light">
        <h2 id="faq-heading" className="text-2xl font-bold text-navy mb-6 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Frequently asked questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (<div key={item.q}><h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3><p className="text-sm text-ev-grey leading-relaxed">{item.a}</p></div>))}
        </div>
      </section>

      <RelatedContent
        links={[
          { href: "/guides/is-ev-worth-it-without-home-charger", label: "Is an EV worth it without a home charger?" },
          { href: "/guides/electric-car-fuel-cost", label: "Electric Car Fuel Cost UK 2026" },
          { href: "/blog/the-great-british-supercharger-queue", label: "The Great British Supercharger Queue" },
          { href: "/faq/is-ev-cheaper-than-petrol-uk", label: "Is an EV cheaper than petrol in the UK?" },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" }, { "@type": "ListItem", position: 3, name: "Public EV Charging Costs UK", item: "https://electricvspetrol.co.uk/guides/public-ev-charging-costs-uk" } ] }) }} />
    </div>
  );
}
