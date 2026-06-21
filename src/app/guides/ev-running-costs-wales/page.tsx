import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Running Costs Wales 2026 | ElectricVsPetrol.co.uk",
  description:
    "A Wales-specific guide to EV running costs, including rural charging access, home charger support, public charging gaps, and regional fuel price variation.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-running-costs-wales",
  },
};

const faqItems = [
  {
    q: "Is Wales a good place to own an EV?",
    a: "It can be, but the answer depends heavily on whether you live in a city corridor or a rural county. Cardiff, Swansea and Newport generally have better public charging access than many rural parts of Mid and North Wales, and that difference affects both convenience and cost. The best outcomes still come from home charging, especially on a cheap overnight tariff.",
  },
  {
    q: "Do Welsh drivers face different fuel prices?",
    a: "Yes. Fuel prices can vary across Wales, with rural and tourist-heavy areas often paying more than urban forecourts or supermarket sites. That matters because a higher pump price increases the petrol car's annual cost and can improve the EV saving if you can charge cheaply.",
  },
  {
    q: "Are there Welsh grants or loans for home chargers?",
    a: "There is not one single Wales-wide support scheme that every driver can rely on in the way people sometimes expect. Instead, availability often depends on UK-wide grant eligibility, local authority programmes, and occasionally regional or energy-provider support. It is worth checking what your council offers before assuming home charging is out of reach.",
  },
  {
    q: "Can I use the calculator if I live in a rural Welsh area?",
    a: "Yes. The postcode lookup is particularly useful in Wales because rural fuel prices and charger access can differ sharply from urban assumptions. Enter your postcode so the local fuel price lookup reflects what you are actually likely to pay.",
  },
];

export default function EvRunningCostsWalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">EV Running Costs Wales</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        EV Running Costs Wales 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Last updated: June 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Wales combines some of the UK's best EV adoption opportunities with some of the
        toughest access challenges. Along the M4 corridor and in city centres, a driver
        can often find enough charging infrastructure to make an EV straightforward. In
        rural mid-Wales, on the other hand, longer journeys, fewer chargers and higher
        fuel prices can change the calculation completely.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">Enter your postcode for local pricing</p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the EV vs Petrol Cost Calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Charging access in Wales</h2>
          <p className="mb-4">Public charging is improving, but access is uneven. City drivers in Cardiff, Swansea, Newport and the south-east corridor usually have more options than drivers in the hills and valleys. That matters because the economics of an EV depend on whether you can charge cheaply and predictably.</p>
          <p className="mb-4">In rural Wales, the challenge is not only charger count but also trip planning. A charger that looks convenient on a map may still add a large detour if your route is already remote. For many drivers, the practical solution is still home charging or regular destination charging, with public rapid charging used as backup rather than the main plan.</p>
          <p>The calculator is helpful here because it lets you enter your own postcode and see the difference between a generic national assumption and the local reality on the ground.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Home charger support and local schemes</h2>
          <p className="mb-4">Wales does not have a single headline interest-free loan scheme that every driver can point to in the same way as a well-known national offer. Instead, support often comes from a mix of UK-wide grant eligibility, local authority initiatives, and occasional energy-provider or community-energy programmes. The mix changes over time, so it is worth checking what is available in your area before assuming the upfront cost is fixed.</p>
          <p className="mb-4">That variability makes planning harder, but it also means there can be surprise savings if you look beyond the obvious. Even a modest grant or council-supported installation can shorten the payback period enough to make home charging more attractive than relying on public networks. Once home charging is available, the EV running-cost advantage usually becomes much more pronounced.</p>
          <p>For families in Wales, the key question is often whether a charger can be installed at all, not whether an EV is theoretically cheaper per mile. If the charger works, the economics improve quickly.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Rural miles, tourist traffic and pump prices</h2>
          <p className="mb-4">Wales has a strong seasonal element to fuel demand. Tourist-heavy routes, rural forecourts, and locations far from supermarket competition can all push pump prices higher. That does not just affect petrol drivers; it also matters for comparing an EV to petrol because the higher the local petrol price, the stronger the case for a cheap-to-charge EV.</p>
          <p className="mb-4">This is why the national-average approach is often too blunt. A driver in a rural county who pays more at the pump may see a much bigger annual saving from an EV than a driver in a city with cheaper forecourts. The calculator's postcode lookup helps you avoid building a decision around a price you do not actually pay.</p>
          <p>In Wales, local fuel price context is not a minor adjustment. It can change the answer enough to influence whether a car looks worth buying at all.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Next steps</h2>
          <p>Start with the <Link href="/#calculator" className="text-ev-blue hover:underline">calculator</Link> and enter your postcode so the fuel lookup matches your area. Then read the <Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">local fuel prices guide</Link> to see why the same car can look different from one county to the next. You can also compare Wales with the other regional guides below.</p>
        </section>
      </div>

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
          <li><Link href="/guides/ev-running-costs-northern-ireland" className="text-ev-blue hover:underline">EV Running Costs Northern Ireland →</Link></li>
          <li><Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">Local Fuel Prices →</Link></li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" }, { "@type": "ListItem", position: 3, name: "EV Running Costs Wales", item: "https://electricvspetrol.co.uk/guides/ev-running-costs-wales" } ] }) }} />
    </div>
  );
}
