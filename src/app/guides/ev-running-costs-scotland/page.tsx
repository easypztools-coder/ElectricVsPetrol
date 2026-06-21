import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Running Costs Scotland 2026 | ElectricVsPetrol.co.uk",
  description:
    "A Scotland-specific guide to EV running costs, including ChargePlace Scotland, rural charging realities, home charger support, and local petrol price variation.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-running-costs-scotland",
  },
};

const faqItems = [
  {
    q: "Is Scotland a good place to own an EV?",
    a: "It can be, especially if you can charge at home or use predictable destination charging. Major cities such as Edinburgh, Glasgow, Aberdeen and Dundee have better public charging density than many rural areas, and Scotland's public network is familiar to EV drivers because ChargePlace Scotland has long provided a visible backbone. The economics still depend on how often you pay public rapid charging prices versus cheap home charging.",
  },
  {
    q: "What is ChargePlace Scotland?",
    a: "ChargePlace Scotland is the public charging network associated with many Scottish charge points. It is useful because it gives drivers a familiar starting point for public charging access, but pricing and connector types can vary by site. It helps to check each location before you rely on it for a long journey.",
  },
  {
    q: "Are fuel prices different in Scotland?",
    a: "Yes. Rural and island forecourts in Scotland can be materially more expensive than supermarket forecourts in the Central Belt, and the difference can be large enough to move an EV-versus-petrol comparison by hundreds of pounds per year. That is why postcode-level pricing is more useful than a UK average.",
  },
  {
    q: "Can I use the calculator with a Scottish postcode?",
    a: "Yes. Enter your postcode in the calculator and it will use your location for a local fuel price lookup, so the comparison reflects the prices you are more likely to pay. That is especially useful in rural Scotland where national averages can understate petrol costs.",
  },
];

export default function EvRunningCostsScotlandPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">EV Running Costs Scotland</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        EV Running Costs Scotland 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Last updated: June 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Scotland is one of the most interesting EV markets in the UK because the mix
        of dense urban charging in the Central Belt and long-distance rural driving in
        the Highlands produces very different economics. A driver in Glasgow with a
        driveway and an overnight tariff will see a very different answer from a driver
        in a remote village relying on public charging and expensive forecourt fuel.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">Run your Scotland-specific numbers</p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the EV vs Petrol Cost Calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Public charging in Scotland</h2>
          <p className="mb-4">Scotland has benefited from early public charging investment, and that matters because a lot of the country is built around long-distance travel and mixed urban-rural usage. ChargePlace Scotland helped create a visible public network, especially around city centres and strategic corridors. That does not mean every town or island is easy to charge in, but it does mean many drivers can plan a trip with more confidence than they could a few years ago.</p>
          <p className="mb-4">The main practical issue is not just charger count but charger reliability and speed. A driver who can use reliable AC charging at home or destination chargers will usually see the best economics. A driver who has to rely on rapid charging on trunk roads will see the cost per mile rise sharply, sometimes to levels that look much closer to petrol motoring.</p>
          <p>For that reason, Scotland is a good example of why the calculator lets you combine local fuel prices with your own charging assumptions. It is not enough to know that EV charging exists; you need to know whether your daily pattern lets you use the cheapest part of the network.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Home charger support and grants</h2>
          <p className="mb-4">Scotland has often had stronger support than other parts of the UK for home-charger adoption, including interest-free loan style support through Home Energy Scotland where eligible. The exact terms can change, but the broader point remains: Scottish drivers sometimes have access to more generous support than they expect, especially when local schemes or energy-efficiency programmes are available.</p>
          <p className="mb-4">That matters because home charging is what usually makes the EV-vs-petrol comparison decisively favourable. Even a modest overnight tariff can cut EV running costs to a fraction of petrol, while a public-only charging pattern erodes the advantage quickly. If you can use an interest-free scheme to reduce the upfront cost of charger installation, the payback period becomes even shorter.</p>
          <p>Before you assume you cannot charge at home, check whether your property type, local authority, or energy programme unlocks a scheme. In Scotland, that extra step is often worth taking.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Rural versus urban cost differences</h2>
          <p className="mb-4">Rural Scotland usually has two cost pressures at once: higher fuel prices and less convenient charging. That combination makes petrol cars more expensive to run and can make public-charging EV ownership less convenient. Urban Scotland, by contrast, is often better placed for home charging, workplace charging and faster public networks, so the same car can look far better on paper.</p>
          <p className="mb-4">This is why local petrol prices matter so much. A rural driver paying a premium at the pump may see a larger EV saving than a city driver, even if both use the same car. The calculator's postcode lookup helps you capture that difference instead of relying on a national headline figure that misses the point.</p>
          <p>Scotland therefore rewards the driver who checks the local context carefully. The more rural your route, the more you should think in terms of price volatility, charger spacing, and winter range rather than just the EV badge on the car.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Where to go next</h2>
          <p>Start with the <Link href="/#calculator" className="text-ev-blue hover:underline">main calculator</Link> and enter your postcode so the local fuel lookup reflects your area. Then read the <Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">local fuel prices guide</Link> for why those differences matter. If you want to compare Scotland with the rest of the UK, the regional guides below help you see how much geography changes the answer.</p>
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
          <li><Link href="/guides/ev-running-costs-wales" className="text-ev-blue hover:underline">EV Running Costs Wales →</Link></li>
          <li><Link href="/guides/ev-running-costs-northern-ireland" className="text-ev-blue hover:underline">EV Running Costs Northern Ireland →</Link></li>
          <li><Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">Local Fuel Prices →</Link></li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" }, { "@type": "ListItem", position: 3, name: "EV Running Costs Scotland", item: "https://electricvspetrol.co.uk/guides/ev-running-costs-scotland" } ] }) }} />
    </div>
  );
}
