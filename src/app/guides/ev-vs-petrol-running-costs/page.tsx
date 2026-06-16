import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV vs Petrol Running Costs UK: The Complete 2024 Guide",
  description:
    "A practical UK guide to comparing electric and petrol car running costs. Covers fuel costs, home vs public charging, real-world efficiency, and when an EV saves money.",
  alternates: {
    canonical:
      "https://electricvspetrol.co.uk/guides/ev-vs-petrol-running-costs",
  },
};

const faqItems = [
  {
    q: "How much does it cost per mile to run an EV in the UK?",
    a: "At typical UK home charging rates of around 28p/kWh and an EV efficiency of 3.5 miles/kWh, the electricity cost is roughly 8p per mile. If you rely heavily on public rapid charging at 70p/kWh, that rises to around 20p per mile — comparable to a petrol car.",
  },
  {
    q: "Is it cheaper to run an electric car than a petrol car?",
    a: "For most drivers who can charge at home overnight, yes — often significantly cheaper. A typical 10,000-mile-per-year driver charging 80% at home can save £700–£1,200 per year compared to a petrol car. Drivers who rely on public charging see much smaller savings, or in some cases higher costs.",
  },
  {
    q: "What is the break-even point for buying an EV?",
    a: "The break-even point depends on the price difference between the EV and your petrol car, and your annual running cost saving. With a £2,500 premium and £900/year saving, break-even is around 2.8 years. With a larger £10,000 premium, it could be 10+ years.",
  },
  {
    q: "Does public charging make EVs more expensive than petrol?",
    a: "Yes, it can. Rapid charging on public networks typically costs 60–80p/kWh. At 80p/kWh with an EV doing 3.5 miles/kWh, the electricity cost is 22.9p/mile — higher than many petrol cars. Home charging overnight is essential for EVs to be economically competitive.",
  },
];

export default function EvVsPetrolGuidePage() {
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
          <li>Guides</li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            EV vs Petrol Running Costs
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        EV vs Petrol Running Costs: The UK Driver&apos;s Guide
      </h1>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Fuel prices, electricity tariffs, real-world efficiency, and charging
        behaviour all affect whether switching to an EV saves you money. This
        guide explains the key factors for UK drivers.
      </p>

      {/* CTA */}
      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          Skip the reading — run the numbers for your car
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Use the EV vs Petrol Cost Calculator
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

      {/* Content */}
      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="fuel-cost-section">
          <h2
            id="fuel-cost-section"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            The single biggest factor: where you charge
          </h2>
          <p className="mb-4">
            Home charging and public charging are priced very differently in the
            UK, and this single factor often determines whether an EV is
            economically worthwhile for you.
          </p>
          <p className="mb-4">
            <strong className="text-navy">Home charging</strong> on a standard
            tariff costs around 24–32p/kWh in 2024. On a dedicated EV overnight
            tariff (like Octopus Go), this can fall to 7–10p/kWh during off-peak
            hours. At 28p/kWh and 3.5 miles/kWh, home charging costs about{" "}
            <strong className="text-navy">8p per mile</strong>.
          </p>
          <p>
            <strong className="text-navy">Public rapid charging</strong> on
            networks like Pod Point, Osprey, or Gridserve typically costs
            60–80p/kWh. At 75p/kWh, that&apos;s{" "}
            <strong className="text-navy">21p per mile</strong> — more expensive
            than most petrol cars at 2024 pump prices.
          </p>
        </section>

        <section aria-labelledby="petrol-cost-section">
          <h2
            id="petrol-cost-section"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Petrol and diesel running costs
          </h2>
          <p className="mb-4">
            A petrol car doing 45 MPG at 143.9p/litre costs approximately
            14.4p per mile in fuel. A diesel at 55 MPG and 151.9p/litre costs
            around 12.6p per mile.
          </p>
          <p className="mb-4">
            Annual fuel costs for a 10,000-mile driver at these figures:
          </p>
          <div className="bg-off-white border border-border-light rounded-xl p-4 my-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-ev-grey mb-1">Petrol — 45 MPG</p>
                <p className="text-xl font-bold text-ev-amber">~£1,450/yr</p>
              </div>
              <div>
                <p className="text-ev-grey mb-1">Diesel — 55 MPG</p>
                <p className="text-xl font-bold text-ev-amber">~£1,253/yr</p>
              </div>
              <div>
                <p className="text-ev-grey mb-1">EV — 80% home charging</p>
                <p className="text-xl font-bold text-ev-green">~£549/yr</p>
              </div>
              <div>
                <p className="text-ev-grey mb-1">EV — 50% home charging</p>
                <p className="text-xl font-bold text-ev-green">~£857/yr</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-ev-grey">
            Based on defaults: 10,000 mi/yr, 3.5 mi/kWh EV efficiency, 28p/kWh
            home, 60p/kWh public.
          </p>
        </section>

        <section aria-labelledby="real-world-section">
          <h2
            id="real-world-section"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Real-world EV efficiency
          </h2>
          <p className="mb-4">
            Official WLTP efficiency figures for EVs, like official MPG for
            petrol cars, are measured under test conditions. Real-world
            efficiency is typically lower.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1" aria-hidden="true">→</span>
              <span>
                <strong className="text-navy">Small EVs</strong> (e.g. Fiat 500e,
                Renault Zoe): 3.5–4.5 miles/kWh real-world
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1" aria-hidden="true">→</span>
              <span>
                <strong className="text-navy">Mid-range EVs</strong> (e.g. Tesla
                Model 3, Hyundai Ioniq 6): 3.0–4.0 miles/kWh
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1" aria-hidden="true">→</span>
              <span>
                <strong className="text-navy">Large SUVs / performance EVs</strong>{" "}
                (e.g. Audi e-tron, BMW iX): 2.0–3.0 miles/kWh
              </span>
            </li>
          </ul>
          <p>
            Cold weather significantly reduces EV range and efficiency — factor
            in 15–25% lower efficiency in winter months, particularly at
            motorway speeds.
          </p>
        </section>

        <section aria-labelledby="whole-life-section">
          <h2
            id="whole-life-section"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            What this calculator doesn&apos;t cover
          </h2>
          <p className="mb-4">
            Running costs are only part of the picture. A full cost comparison
            should also consider:
          </p>
          <ul className="space-y-2">
            {[
              "Purchase price and EV premium over an equivalent petrol car",
              "Vehicle Excise Duty (road tax) — EVs are currently exempt from the standard rate",
              "Servicing and maintenance — EVs have fewer moving parts and lower routine maintenance costs",
              "Insurance — varies between models and insurers; EVs can be more expensive to insure",
              "Depreciation — varies widely; EVs are depreciating faster than expected on some models",
              "Home charger installation — typically £750–£1,200 including the unit, sometimes grant-subsidised",
              "Congestion charge and ULEZ — EVs are exempt in London's zones",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-ev-amber flex-shrink-0 mt-0.5">⚠</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* FAQ schema */}
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
              <h3 className="text-base font-semibold text-navy mb-2">
                {item.q}
              </h3>
              <p className="text-sm text-ev-grey leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ structured data */}
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

      {/* Internal links */}
      <div className="mt-10 pt-8 border-t border-border-light">
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
              href="/guides/local-fuel-prices"
              className="text-ev-blue hover:underline"
            >
              Why local fuel prices matter →
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
