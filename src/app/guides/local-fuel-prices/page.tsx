import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Local Fuel Prices: Why They Matter for EV vs Petrol Savings 2026",
  description:
    "Petrol varies by 20p/litre across the UK — enough to shift your annual fuel bill by £200. Discover why local prices (not national averages) give you a far more accurate EV vs petrol result.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/local-fuel-prices",
  },
};

const faqItems = [
  {
    q: "How much do petrol prices vary across the UK?",
    a: "According to BEIS data, petrol prices at UK forecourts vary by as much as 15–20p per litre between the cheapest and most expensive areas. Supermarket forecourts typically undercut branded forecourts by 5–8p/litre. In remote areas of Scotland, Northern Ireland and rural Wales prices can be 10–15p higher than major urban centres.",
  },
  {
    q: "Why does my postcode affect my EV vs petrol calculation?",
    a: "Petrol prices vary by up to 20p/litre across the UK — that difference alone shifts your annual fuel bill by £100–£200 on a 10,000-mile, 45-MPG car. When you enter your postcode the calculator fetches live local prices from nearby forecourts using official CMA Fuel Finder data, giving you a result based on prices you'd actually pay.",
  },
  {
    q: "What is the cheapest way to charge an EV at home in the UK?",
    a: "A specialist EV overnight tariff such as Octopus Go offers rates as low as 7p/kWh during off-peak hours (typically midnight to 5am). Compared to the current standard tariff at 26.1p/kWh (the Ofgem price cap rate), this cuts home-charging cost from ~7.5p/mile to ~2p/mile — making home overnight charging dramatically cheaper than any alternative.",
  },
  {
    q: "Is public rapid charging cheaper or more expensive than petrol?",
    a: "At current UK public rapid-charging prices, averaging 79p/kWh in mid-2026, the electricity cost is around 22.6p/mile for an EV doing 3.5 miles/kWh — more expensive than most petrol cars, which cost around 17p/mile at July 2026 prices. EV economics depend heavily on home-charging access.",
  },
];

export default function LocalFuelPricesGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/guides" className="text-ev-blue hover:underline">Guides</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            Local Fuel Prices
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        UK Local Fuel Prices: Why They Matter for EV vs Petrol Savings 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Last updated: July 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Petrol prices vary by up to 20p per litre across the UK. Electricity
        tariffs can differ even more dramatically. Using a national average gives
        you a rough answer — but local pricing gives you the right answer.
      </p>

      {/* CTA */}
      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          See how local prices affect your comparison
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Enter your postcode in the calculator
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 7h8M8 4l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="petrol-variation">
          <h2
            id="petrol-variation"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How much do petrol prices vary across the UK?
          </h2>
          <p className="mb-4">
            According to BEIS (Department for Energy Security and Net Zero) data,
            petrol prices at UK forecourts vary by as much as 15–20p per litre
            between the cheapest and most expensive areas on any given day.
          </p>
          <p className="mb-4">
            Supermarket forecourts — which account for a growing share of UK
            fuel sales — typically undercut branded forecourts by 5–8p per litre.
            In remote areas of Scotland, Northern Ireland, and rural Wales,
            prices can be 10–15p per litre higher than in major urban centres.
          </p>

          <div className="bg-off-white border border-border-light rounded-xl p-5 my-4">
            <h3 className="text-sm font-semibold text-navy mb-3">
              Typical UK petrol price ranges (illustrative)
            </h3>
            <div className="space-y-2">
              {[
                {
                  region: "Supermarket forecourt, major city",
                  range: "145–150p/litre",
                },
                {
                  region: "Branded forecourt, suburban",
                  range: "153–160p/litre",
                },
                {
                  region: "Motorway service station",
                  range: "165–175p/litre",
                },
                {
                  region: "Remote rural / island areas",
                  range: "158–175p/litre",
                },
              ].map((row) => (
                <div
                  key={row.region}
                  className="flex items-center justify-between text-sm"
                >
                  <span>{row.region}</span>
                  <span className="font-semibold text-ev-amber">
                    {row.range}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-ev-grey mt-3">
              Illustrative ranges — check PetrolPrices.com or AA Fuel Prices
              for current local data.
            </p>
          </div>

          <p>
            A 10p/litre difference on a 10,000-mile, 45-MPG car equates to
            approximately{" "}
            <strong className="text-navy">£101 per year</strong> in extra fuel
            costs — enough to materially shift the EV vs petrol comparison.
          </p>
        </section>

        <section aria-labelledby="electricity-variation">
          <h2
            id="electricity-variation"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Electricity price variation is even larger
          </h2>
          <p className="mb-4">
            Home electricity tariffs in the UK range from about 22p/kWh on
            some fixed-rate deals to over 35p/kWh on standard variable tariffs.
            Specialist EV overnight tariffs can be as low as 7p/kWh (e.g.
            Octopus Go off-peak rate).
          </p>
          <p className="mb-4">
            The difference between charging at 7p/kWh overnight vs paying 79p/kWh
            at a rapid public charger is dramatic:
          </p>

          <div className="bg-off-white border border-border-light rounded-xl p-5 my-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                {
                  label: "EV overnight tariff",
                  rate: "7p/kWh",
                  ppm: "2.0p/mile",
                  color: "text-ev-green",
                },
                {
                  label: "Standard home tariff",
                  rate: "26.1p/kWh",
                  ppm: "7.5p/mile",
                  color: "text-ev-blue",
                },
                {
                  label: "Public rapid charging",
                  rate: "79p/kWh",
                  ppm: "22.6p/mile",
                  color: "text-ev-amber",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-border-light bg-white rounded-xl p-4"
                >
                  <p className="text-xs text-ev-grey mb-2">{item.label}</p>
                  <p className={`text-xl font-bold font-display ${item.color}`} style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                    {item.rate}
                  </p>
                  <p className="text-xs text-ev-grey mt-1">
                    {item.ppm} at 3.5 mi/kWh
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p>
            This means the charging rate you use has a bigger impact on EV
            running costs than the cost of electricity itself — or indeed the
            efficiency of the EV. The calculator lets you adjust both rates and
            set the home vs public split.
          </p>
        </section>

        <section aria-labelledby="postcode-lookup">
          <h2
            id="postcode-lookup"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Postcode-based pricing: how it works
          </h2>
          <p className="mb-4">
            Our calculator accepts a UK postcode to look up your geographic
            location. Currently this is used to:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1" aria-hidden="true">→</span>
              Identify your region (e.g. London, South West, Scotland)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1" aria-hidden="true">→</span>
              Fetch live local petrol and diesel prices from forecourts within
              10 km of your postcode
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1" aria-hidden="true">→</span>
              Identify proximity to major public charging networks
            </li>
          </ul>
          <p className="mb-4">
            The postcode is sent to the free{" "}
            <a
              href="https://postcodes.io"
              className="text-ev-blue hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              postcodes.io
            </a>{" "}
            API to retrieve your geographic coordinates and region. It is not
            stored on our servers. Read our{" "}
            <Link href="/privacy" className="text-ev-blue hover:underline">
              privacy policy
            </Link>{" "}
            for details.
          </p>
          <p>
            When you enter your postcode and click Calculate, the calculator
            fetches live local petrol and diesel prices from forecourts near
            you using official CMA Fuel Finder data. If no nearby stations are
            found, it falls back to national averages — you can then adjust the
            price manually using PetrolPrices.com or your local supermarket app.
          </p>
        </section>

        <section aria-labelledby="adjust-manually">
          <h2
            id="adjust-manually"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Adjusting prices manually
          </h2>
          <p className="mb-4">
            For even more accuracy beyond the automatic postcode lookup, you can
            also override prices manually:
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-sm">
              <span className="font-medium text-navy">Checking your local pump price</span> — apps
              like PetrolPrices.com, Waze, or GasBuddy show prices at your
              nearest forecourts.
            </li>
            <li className="text-sm">
              <span className="font-medium text-navy">Finding your electricity unit rate</span> —
              check your last energy bill, or look at your energy provider&apos;s
              online account.
            </li>
            <li className="text-sm">
              <span className="font-medium text-navy">Identifying your public charging rate</span> —
              check the network app you use most frequently (Osprey, Gridserve,
              Pod Point, Blink, etc.).
            </li>
            <li className="text-sm">
              <span className="font-medium text-navy">Setting your home charge %</span> — be
              realistic. Drivers without a home charger, or without off-street
              parking, may charge mostly in public.
            </li>
          </ol>
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

      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "UK Local Fuel Prices: Why They Matter for EV vs Petrol Savings 2026",
            description:
              "Petrol varies by 20p/litre across the UK — enough to shift your annual fuel bill by £200. Discover why local prices (not national averages) give you a far more accurate EV vs petrol result.",
            url: "https://electricvspetrol.co.uk/guides/local-fuel-prices",
            datePublished: "2025-05-01",
            dateModified: "2026-07-30",
            author: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
              logo: {
                "@type": "ImageObject",
                url: "https://electricvspetrol.co.uk/favicon.svg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://electricvspetrol.co.uk/guides/local-fuel-prices",
            },
            image: "https://electricvspetrol.co.uk/opengraph-image",
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
              { "@type": "ListItem", position: 3, name: "Local Fuel Prices", item: "https://electricvspetrol.co.uk/guides/local-fuel-prices" },
            ],
          }),
        }}
      />

      {/* Internal links */}
      <div className="mt-12 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/#calculator"
              className="text-ev-blue hover:underline"
            >
              EV vs Petrol Cost Calculator →
            </Link>
          </li>
          <li>
            <Link
              href="/compare"
              className="text-ev-blue hover:underline"
            >
              Specific car comparisons: see how local prices affect each model →
            </Link>
          </li>
          <li>
            <Link
              href="/guides/ev-vs-petrol-running-costs"
              className="text-ev-blue hover:underline"
            >
              EV vs Petrol Running Costs guide →
            </Link>
          </li>
          <li>
            <Link href="/methodology" className="text-ev-blue hover:underline">
              Full methodology and formulas →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
