import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Running Costs Northern Ireland 2026 | ElectricVsPetrol.co.uk",
  description:
    "EV running costs in Northern Ireland: the UK's lowest public charger density (58 per 100,000 people), the NIE Networks notification rule, and current home charger grant status.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-running-costs-northern-ireland",
  },
};

const faqItems = [
  {
    q: "Is Northern Ireland a good place to own an EV?",
    a: "Charging is the honest limiting factor. Northern Ireland has the lowest public charger density of any UK region — 58 chargers per 100,000 people against a UK average of 168 and Scotland's 218 — and the fewest rapid or ultra-rapid units in absolute terms, at 368. Belfast and larger towns have more usable coverage than rural areas, so home charging matters more here than almost anywhere else in the UK.",
  },
  {
    q: "Are fuel prices different in Northern Ireland?",
    a: "Yes. Northern Ireland often sees local fuel price differences that matter because many drivers cover longer rural distances and may have fewer supermarket forecourt options than urban drivers elsewhere. A higher pump price can materially change the annual comparison against an EV, especially if the EV can be charged cheaply at home.",
  },
  {
    q: "Is there a grant for a home charger in Northern Ireland?",
    a: "Not if you own your home and have a driveway — the old Electric Vehicle Homecharge Scheme ended UK-wide in April 2022 and has not been replaced, and there is no separate NI-specific scheme filling that gap. The UK-wide EV chargepoint grant is still open, but only for renters and flat owners with dedicated off-street parking: 75% of installation cost up to £500, running until 31 March 2027. Separately, NI law requires your installer to notify NIE Networks before or when the charger goes in — this is a legal step, not optional paperwork.",
  },
  {
    q: "Can I compare rural Northern Ireland fairly with the calculator?",
    a: "Yes. Enter your postcode so the calculator can look up local fuel prices and better reflect the prices you are likely to pay. That is especially important in rural parts of Northern Ireland where a national average would be too optimistic.",
  },
];

export default function EvRunningCostsNorthernIrelandPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">EV Running Costs Northern Ireland</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        EV Running Costs Northern Ireland 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Last updated: July 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Northern Ireland has its own EV adoption story: less densely distributed charging
        than the biggest mainland metros, but often very strong motivation to consider an
        EV because long rural driving and local fuel price variation can make petrol
        ownership expensive. The question is less about whether EVs work here and more
        about what charging access you can realistically rely on.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">Use your postcode for local prices</p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the EV vs Petrol Cost Calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Charging access: the weakest public network in the UK</h2>
          <p className="mb-4">Northern Ireland has the lowest public charging density of any UK region: 58 chargers per 100,000 people, against a UK average of 168 and Scotland&apos;s 218, and only 368 rapid or ultra-rapid chargers in total — the fewest of any region (<a href="https://www.gov.uk/government/statistics/electric-vehicle-public-charging-infrastructure-statistics-january-2026/electric-vehicle-public-charging-infrastructure-statistics-january-2026" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">DfT/Zapmap, January 2026</a>). Belfast and larger towns have more usable coverage, but rural and cross-county travel still requires real planning.</p>
          <p className="mb-4">Given that network gap, the case for an EV in Northern Ireland leans more heavily on home charging than almost anywhere else in the UK. If you have to rely on public rapid charging as your main source of electricity, cost per mile moves close to petrol quickly. If you can use a cheaper AC charge point at home overnight, the gap swings firmly back in the EV&apos;s favour — which is why the calculator lets you test home and public charging assumptions rather than a single national number.</p>
          <p>For most Northern Ireland drivers, the right question is not whether public charging exists, but whether it exists in the places and at the times you actually need it — and whether you can avoid relying on it day-to-day.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Home charger grants and the NIE Networks rule</h2>
          <p className="mb-4">If you own your home and have a driveway, there is currently no grant available — the old Electric Vehicle Homecharge Scheme ended UK-wide in April 2022 and Northern Ireland has no separate scheme replacing it (<a href="https://www.infrastructure-ni.gov.uk/articles/electric-vehicle-chargepoint-and-infrastructure-grants" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">Department for Infrastructure NI</a>). The UK-wide EV chargepoint grant is still open for renters and flat owners with dedicated off-street parking: 75% of installation cost up to £500, running until 31 March 2027.</p>
          <p className="mb-4">One requirement is specific to Northern Ireland and easy to miss: it is a legal obligation to notify NIE Networks of a home charger installation. A competent OZEV-registered installer should handle this as part of the job, but it is worth confirming before work starts rather than assuming it is automatic.</p>
          <p>Given how thin the public network is, whether you can get a home charger installed — driveway access, notification sorted, cost budgeted — is usually the single biggest factor in whether an EV makes financial sense here.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Fuel price variation and regional driving patterns</h2>
          <p className="mb-4">Fuel prices in Northern Ireland can vary enough to matter, especially for drivers who do longer daily routes or rely on local forecourts that are not competing with supermarket sites. When petrol is more expensive, the EV running-cost advantage becomes stronger; when local charging is also cheap, the overall economics can improve very quickly.</p>
          <p className="mb-4">This is particularly relevant for drivers covering rural routes or regular inter-town journeys. A car that looks acceptable on a national average may look materially better once the real local fuel price and the real charging tariff are put into the same comparison. That is exactly the kind of case where postcode-level inputs make the result more useful.</p>
          <p>Local price variation is not an edge case here. It is part of the decision itself.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>What to do next</h2>
          <p>Start with the <Link href="/#calculator" className="text-ev-blue hover:underline">main calculator</Link> and enter your postcode to use local fuel pricing. Then read the <Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">local fuel prices guide</Link> to understand why the same mileage can produce a different result by region. You can also compare this page with the Scottish and Welsh guides for a wider view.</p>
        </section>
      </div>

      <p className="mt-8 text-xs text-ev-grey/70">
        Sources:{" "}
        <a href="https://www.gov.uk/government/statistics/electric-vehicle-public-charging-infrastructure-statistics-january-2026/electric-vehicle-public-charging-infrastructure-statistics-january-2026" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">DfT/Zapmap EV charging infrastructure statistics, January 2026</a>
        {" · "}
        <a href="https://www.infrastructure-ni.gov.uk/articles/electric-vehicle-chargepoint-and-infrastructure-grants" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">Department for Infrastructure NI</a>
        {" · "}
        <a href="https://www.find-government-grants.service.gov.uk/grants/electric-vehicle-chargepoint-grant-for-renters-and-flat-owners-2" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK EV chargepoint grant</a>
      </p>

      <section aria-labelledby="faq-heading" className="mt-12 pt-10 border-t border-border-light">
        <h2 id="faq-heading" className="text-2xl font-bold text-navy mb-6 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Frequently asked questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (<div key={item.q}><h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3><p className="text-sm text-ev-grey leading-relaxed">{item.a}</p></div>))}
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/guides/ev-running-costs-scotland" className="text-ev-blue hover:underline">EV Running Costs Scotland →</Link></li>
          <li><Link href="/guides/ev-running-costs-wales" className="text-ev-blue hover:underline">EV Running Costs Wales →</Link></li>
          <li><Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">Local Fuel Prices →</Link></li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" }, { "@type": "ListItem", position: 3, name: "EV Running Costs Northern Ireland", item: "https://electricvspetrol.co.uk/guides/ev-running-costs-northern-ireland" } ] }) }} />
    </div>
  );
}
