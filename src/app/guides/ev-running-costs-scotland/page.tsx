import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Running Costs Scotland 2026 | ElectricVsPetrol.co.uk",
  description:
    "EV running costs in Scotland: 218 public chargers per 100,000 people (vs UK average 168), current status of the Home Energy Scotland grant, and how rural fuel prices change the numbers.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-running-costs-scotland",
  },
};

const faqItems = [
  {
    q: "Is Scotland a good place to own an EV?",
    a: "On the public charging numbers, Scotland is ahead of the UK average: 218 public chargers per 100,000 people versus a UK average of 168, and 12,749 public chargers in total — the third-highest of any UK region after Greater London and the South East. Edinburgh, Glasgow, Aberdeen and Dundee have the densest coverage; rural and island areas lag well behind that headline figure. The economics still come down to how often you pay public rapid-charging prices versus cheap home charging.",
  },
  {
    q: "Is the Home Energy Scotland charger grant still open?",
    a: "No, not currently. The Scottish Government's domestic chargepoint grant (up to £400 towards installation, funded by Transport Scotland and administered by the Energy Saving Trust) is closed to new applications and is expected to reopen during the 2026/27 financial year. The related interest-free Used Electric Vehicle Loan is also closed to new applicants. You can register interest for both on the Home Energy Scotland site rather than assuming funding is available today.",
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
        Last updated: July 2026
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
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Public charging in Scotland, by the numbers</h2>
          <p className="mb-4">Scotland has 12,749 public EV chargers in total — the third-highest of any UK region, behind only Greater London and the South East — and 3,241 rapid or ultra-rapid units, the second-highest count in the UK. Measured per person, Scotland comes out ahead of the national picture at 218 chargers per 100,000 population against a UK average of 168 (<a href="https://www.gov.uk/government/statistics/electric-vehicle-public-charging-infrastructure-statistics-january-2026/electric-vehicle-public-charging-infrastructure-statistics-january-2026" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">DfT/Zapmap, January 2026</a>). ChargePlace Scotland remains the backbone of that network, particularly around city centres and strategic trunk-road corridors.</p>
          <p className="mb-4">That headline figure hides a real urban/rural split, though — the count is concentrated around the Central Belt, and coverage thins out fast in the Highlands and islands. The main practical issue there is not just charger count but reliability and speed: a driver using AC charging at home or a destination charger will usually see the best economics, while relying on rapid charging along trunk roads pushes cost per mile up sharply, sometimes close to petrol levels.</p>
          <p>This is why the calculator lets you combine local fuel prices with your own charging assumptions rather than a single national number. It is not enough to know that EV charging exists in Scotland on average — you need to know whether your daily pattern lets you use the cheapest part of the network.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Home charger support and grants: what&apos;s actually open</h2>
          <p className="mb-4">Two Scotland-specific schemes are worth knowing about, and both are currently closed to new applicants. The Scottish Government&apos;s domestic chargepoint grant — up to £400 towards installation, funded by Transport Scotland and administered by the Energy Saving Trust — is closed and expected to reopen during the 2026/27 financial year. The related interest-free Used Electric Vehicle Loan is also closed to new applications (<a href="https://www.homeenergyscotland.org/electric-cars" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">Home Energy Scotland</a>). You can register interest in both so you&apos;re notified when funding reopens.</p>
          <p className="mb-4">In the meantime, the UK-wide EV chargepoint grant still applies in Scotland: 75% of the cost of buying and installing a charge point, up to £500, but only for renters and flat owners with dedicated off-street parking — not homeowners with a driveway. It runs until 31 March 2027 (<a href="https://www.find-government-grants.service.gov.uk/grants/electric-vehicle-chargepoint-grant-for-renters-and-flat-owners-2" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK</a>). Driveway owners installing a charger today are, for now, paying the full cost themselves.</p>
          <p>Home charging is still what makes the EV-vs-petrol comparison decisively favourable even without a grant — a modest overnight tariff cuts running costs to a fraction of petrol, while relying on public charging erodes the advantage quickly. The grant question affects the upfront payback period, not whether home charging is worth having.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Rural versus urban cost differences</h2>
          <p className="mb-4">The national charger-density figures above average out a real split: rural Scotland usually faces two cost pressures at once — higher fuel prices and less convenient charging — while the Central Belt is far better placed for home charging, workplace charging and faster public networks. The same car can look very different on paper depending on which side of that split you&apos;re on.</p>
          <p className="mb-4">This is why local petrol prices matter so much. A rural driver paying a premium at the pump may see a larger EV saving than a city driver, even if both use the same car. The calculator&apos;s postcode lookup helps you capture that difference instead of relying on a national headline figure that misses the point.</p>
          <p>Scotland therefore rewards the driver who checks the local context carefully. The more rural your route, the more you should think in terms of price volatility, charger spacing, and winter range rather than just the EV badge on the car.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Where to go next</h2>
          <p>Start with the <Link href="/#calculator" className="text-ev-blue hover:underline">main calculator</Link> and enter your postcode so the local fuel lookup reflects your area. Then read the <Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">local fuel prices guide</Link> for why those differences matter. If you want to compare Scotland with the rest of the UK, the regional guides below help you see how much geography changes the answer.</p>
        </section>
      </div>

      <p className="mt-8 text-xs text-ev-grey/70">
        Sources:{" "}
        <a href="https://www.gov.uk/government/statistics/electric-vehicle-public-charging-infrastructure-statistics-january-2026/electric-vehicle-public-charging-infrastructure-statistics-january-2026" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">DfT/Zapmap EV charging infrastructure statistics, January 2026</a>
        {" · "}
        <a href="https://www.homeenergyscotland.org/electric-cars" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">Home Energy Scotland</a>
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
