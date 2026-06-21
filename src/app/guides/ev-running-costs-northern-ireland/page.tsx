import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Running Costs Northern Ireland 2026 | ElectricVsPetrol.co.uk",
  description:
    "A Northern Ireland-specific guide to EV running costs, including rural charging realities, home charger support, public charging access, and fuel price variation.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-running-costs-northern-ireland",
  },
};

const faqItems = [
  {
    q: "Is Northern Ireland a good place to own an EV?",
    a: "It can be, but the economics depend heavily on where you live and how often you travel outside the main urban centres. Belfast and some larger towns have better charging access than rural areas, but the network is less dense than in parts of mainland Britain. That makes home charging and route planning especially important.",
  },
  {
    q: "Are fuel prices different in Northern Ireland?",
    a: "Yes. Northern Ireland often sees local fuel price differences that matter because many drivers cover longer rural distances and may have fewer supermarket forecourt options than urban drivers elsewhere. A higher pump price can materially change the annual comparison against an EV, especially if the EV can be charged cheaply at home.",
  },
  {
    q: "What about grants or support for home chargers?",
    a: "The main support is usually through UK-wide grant routes where eligible, plus occasional local or utility-led schemes. Northern Ireland drivers should check current grant availability carefully, because support changes and not every property or driveway is eligible. If you can get a home charger installed, the running-cost case for an EV becomes much stronger.",
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
        Last updated: June 2026
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
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Charging access and public network realities</h2>
          <p className="mb-4">Public charging is improving, but Northern Ireland is still a place where your exact home and work pattern matters a lot. Belfast and larger towns have more obvious charging options, while rural and cross-county travel can still require more planning. That means the economics of an EV often improve dramatically when the driver can fall back on home charging, workplace charging or regular destination charging.</p>
          <p className="mb-4">If you have to rely on public rapid charging as your main source of electricity, the cost per mile can move closer to petrol quickly. If you can use a cheaper AC charge point at home overnight, the gap usually swings back in favour of the EV. This is why the calculator lets you test home and public charging assumptions instead of assuming a one-size-fits-all answer.</p>
          <p>For most Northern Ireland drivers, the right question is not whether public charging exists, but whether it exists in the places and at the times you actually need it.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Home charging support and installation costs</h2>
          <p className="mb-4">Support for home chargers usually comes through UK-wide grant routes where eligible, plus occasional local or utility-driven programmes. The details change, so it is worth checking current eligibility rather than assuming you will pay the full installation cost yourself. If you can get a charger installed, the economics become far easier to justify because overnight charging is the cheapest way to run an EV.</p>
          <p className="mb-4">Northern Ireland drivers often need to think hard about property type and driveway access. A driveway or dedicated parking space makes the home-charging case much better. Without that access, a driver may still switch to an EV, but only if nearby charging is reliable and affordable enough to offset the convenience gap.</p>
          <p>Where a home charger is feasible, the payback can be fast. Where it is not, the decision needs much more careful modelling of charging convenience and public tariff costs.</p>
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
