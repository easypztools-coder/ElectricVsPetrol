import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is an EV Worth It Without a Home Charger? UK Guide 2026",
  description:
    "No driveway? You can still own an EV — but the economics change significantly. This UK guide explains what to expect from public charging costs, overnight tariffs, and the break-even picture without a home charger.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/is-ev-worth-it-without-home-charger",
  },
};

const faqItems = [
  {
    q: "Can I own an EV without a home charger in the UK?",
    a: "Yes — but it changes the economics significantly, more so than it used to. Without home charging you'll rely on public networks, which averaged 79p/kWh across the UK in mid-2026 versus 26.1p/kWh at home on the current Ofgem price cap rate. This narrows or eliminates the running cost saving versus petrol — and on public rapid charging alone, an EV is now typically more expensive per mile than a petrol car. The convenience picture also changes: instead of 'plug in every night', you're planning charging stops into your routine.",
  },
  {
    q: "How much does public EV charging cost compared to petrol?",
    a: "At the current public rapid charging average of 79p/kWh and an EV doing 3.5 miles/kWh, electricity costs 22.6p per mile — comparable to a petrol car doing around 31 MPG at July 2026 pump prices, and more than most petrol cars average. On slower destination AC charging at 30–40p/kWh, costs drop to 8.6–11.4p per mile, which remains cheaper than petrol.",
  },
  {
    q: "What about charging at work or using lamp post chargers?",
    a: "Workplace charging (where provided free or cheaply) can substitute effectively for home charging. Lamp post chargers in residential streets typically offer 3.6–7kW AC charging at rates between 30–55p/kWh — slower but cheaper than rapid chargers. If you can access these regularly, the economic case improves significantly.",
  },
  {
    q: "Is it worth switching to an EV if I use a communal car park?",
    a: "It depends on whether your car park has EV chargers, or is likely to get them. Many new-build developments now include EV charging. If you have reliable access to AC charging at work, or can charge on nearby residential streets, an EV can work well without a dedicated home charger.",
  },
];

export default function IsEvWorthItWithoutHomeChargerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/guides" className="text-ev-blue hover:underline">Guides</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">EV Without Home Charger</li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Is an EV Worth It Without a Home Charger?
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Last updated: July 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        About 40% of UK households don&apos;t have off-street parking — which means
        no dedicated home charger. The received wisdom is that EVs don&apos;t make
        sense in this situation. The truth is more nuanced.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          Run the numbers for your situation
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Use the EV vs Petrol Cost Calculator
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
            The cost reality of public-only charging
          </h2>
          <p className="mb-4">
            Home charging costs 26.1p/kWh on the current Ofgem price cap rate
            (July–September 2026). Public
            rapid charging averaged 79p/kWh across UK networks in mid-2026, with
            a range of roughly 62–90p/kWh depending on the network. This is a
            2–3× difference in the price of electricity, which changes the
            running cost calculation fundamentally.
          </p>
          <div className="bg-off-white border border-border-light rounded-xl p-4 my-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-ev-grey mb-1">EV — home charging (26.1p/kWh)</p>
                <p className="text-xl font-bold text-ev-green">7.5p/mile</p>
              </div>
              <div>
                <p className="text-ev-grey mb-1">EV — public rapid (79p/kWh)</p>
                <p className="text-xl font-bold text-ev-amber">22.6p/mile</p>
              </div>
              <div>
                <p className="text-ev-grey mb-1">Petrol — 40 MPG</p>
                <p className="text-xl font-bold text-ev-amber">17.4p/mile</p>
              </div>
              <div>
                <p className="text-ev-grey mb-1">Diesel — 50 MPG</p>
                <p className="text-xl font-bold text-ev-amber">15.3p/mile</p>
              </div>
            </div>
          </div>
          <p>
            On public rapid charging only, an EV costs{" "}
            <strong className="text-navy">more per mile than most petrol cars</strong>.
            The economic case for EVs depends heavily on access to cheap charging.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Alternatives to a home charger
          </h2>
          <p className="mb-4">
            A dedicated home charger is the ideal scenario, but it&apos;s not the
            only way to get cheap electricity into an EV.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Workplace charging",
                desc: "If your employer provides free or subsidised EV charging, this can effectively replace home charging for weekday energy needs. Many employers now offer this as a benefit. The energy cost is often 0–10p/kWh — better than even the cheapest overnight home tariff.",
              },
              {
                title: "Lamp post and kerbside chargers",
                desc: "Local authorities across the UK are installing lamp post and kerbside chargers at 3.6–7kW. Rates vary — some councils charge 30–40p/kWh, others as low as 10p/kWh. Coverage is patchy but growing. Suitable for slow overnight top-ups rather than rapid charging.",
              },
              {
                title: "Destination charging",
                desc: "Supermarkets (Tesco, M&S, Lidl), gyms, hotels, and car parks increasingly offer AC charging while you're parked for another reason. Rates range from free to around 40p/kWh. If your regular shopping trip takes 90 minutes, that's 12–15 miles of range on a 7kW charger.",
              },
              {
                title: "Shared driveway agreements",
                desc: "Some EV owners without their own parking negotiate informal agreements with neighbours to charge occasionally. Not for everyone, but worth considering in the right relationship.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-off-white border border-border-light rounded-xl p-4">
                <h3 className="text-sm font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-sm text-ev-grey">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            The verdict: who should and shouldn&apos;t make the switch
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-ev-green/30 bg-ev-green/5 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-ev-green mb-2">Works well if you have:</h3>
              <ul className="space-y-1.5 text-sm text-ev-grey">
                {[
                  "Free or cheap workplace charging",
                  "Local kerbside charging at reasonable rates",
                  "Low annual mileage (under 8,000/year)",
                  "Flexible daily schedule for charging top-ups",
                  "Access to destination charging regularly",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-ev-green mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-ev-amber/30 bg-ev-amber/5 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-ev-amber mb-2">Challenging if you:</h3>
              <ul className="space-y-1.5 text-sm text-ev-grey">
                {[
                  "Do high annual mileage (12,000+ miles)",
                  "Have no access to cheap daytime charging",
                  "Must rely on public rapid chargers regularly",
                  "Drive long daily distances requiring frequent top-ups",
                  "Regularly park away from any charging infrastructure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-ev-amber mt-0.5">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            What about the government&apos;s EV chargepoint grant?
          </h2>
          <p className="mb-4">
            The EV chargepoint grant provides up to 75% of the
            cost of a home charger installation (capped at £500, raised from £350
            in April 2026), but it&apos;s only available to renters and flat owners with
            dedicated off-street parking. If you don&apos;t have off-street parking, you
            cannot use this grant.
          </p>
          <p>
            Some local authorities have their own schemes for residents without
            off-street parking — worth checking with your council before ruling
            out home charging entirely.
          </p>
        </section>
      </div>

      {/* FAQ section */}
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

      {/* Related */}
      <div className="mt-10 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/guides/ev-vs-petrol-running-costs" className="text-ev-blue hover:underline">EV vs Petrol Running Costs Guide →</Link></li>
          <li><Link href="/guides/cheapest-evs-to-run-uk-2026" className="text-ev-blue hover:underline">Cheapest EVs to Run in the UK 2026 →</Link></li>
          <li><Link href="/#calculator" className="text-ev-blue hover:underline">EV vs Petrol Cost Calculator →</Link></li>
          <li><Link href="/compare" className="text-ev-blue hover:underline">Compare specific EV vs petrol models →</Link></li>
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
              { "@type": "ListItem", position: 3, name: "Is an EV Worth It Without a Home Charger?", item: "https://electricvspetrol.co.uk/guides/is-ev-worth-it-without-home-charger" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Is an EV Worth It Without a Home Charger? UK Guide 2026",
            url: "https://electricvspetrol.co.uk/guides/is-ev-worth-it-without-home-charger",
            datePublished: "2026-06-19",
            dateModified: "2026-07-30",
            author: { "@type": "Organization", name: "ElectricVsPetrol.co.uk", url: "https://electricvspetrol.co.uk" },
            publisher: { "@type": "Organization", name: "ElectricVsPetrol.co.uk", url: "https://electricvspetrol.co.uk" },
          }),
        }}
      />
    </div>
  );
}
