import type { Metadata } from "next";
import Link from "next/link";
import CostCalculatorWithParams from "@/components/calculator/CostCalculatorWithParams";

export const metadata: Metadata = {
  title: "Electric Car vs Diesel Running Cost Calculator UK 2026 | EV vs Diesel",
  description:
    "Compare electric car vs diesel running costs in the UK. Use our calculator to see how much you save with an EV vs a diesel car at current UK fuel prices and electricity rates.",
  alternates: {
    canonical:
      "https://electricvspetrol.co.uk/guides/ev-vs-diesel-running-costs",
  },
};

const faqItems = [
  {
    q: "Is an electric car cheaper to run than a diesel in the UK in 2026?",
    a: "Yes, in most cases. At 10,000 miles per year with 80% home charging at 28p/kWh and a diesel at 55 MPG and 151.9p/litre, the EV saves approximately £700–£1,000 per year in fuel costs. The gap is largest for high-mileage drivers and those on overnight EV tariffs.",
  },
  {
    q: "How much does it cost to run an EV vs diesel per mile?",
    a: "An EV at 3.5 miles/kWh with 80% home charging (28p/kWh) costs about 8p per mile. A diesel at 55 MPG and 151.9p/litre costs about 12.6p per mile. On an overnight EV tariff (7p/kWh), the EV drops to just 2p per mile.",
  },
  {
    q: "Are diesels still worth buying for high mileage in 2026?",
    a: "Diesel remains competitive for very high mileage drivers (20,000+ miles/year) who do mostly motorway driving and cannot charge at home. However, the combination of home charging and a high-mileage EV usually produces larger savings, especially when you factor in lower maintenance costs and the 2% BIK tax rate for company car drivers.",
  },
  {
    q: "Is EV cheaper than diesel with public charging only?",
    a: "If you rely entirely on public rapid charging at 60–80p/kWh, the running cost advantage over diesel narrows significantly or disappears. At 70p/kWh and 3.5 mi/kWh, an EV costs 20p/mile — more than a 55 MPG diesel at 12.6p/mile. Home charging is essential for EVs to beat diesel on running costs.",
  },
];

export default function EvVsDieselRunningCostsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <Link href="/guides" className="text-ev-blue hover:underline">
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            EV vs Diesel Calculator
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Electric Car vs Diesel Running Cost Calculator
      </h1>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed max-w-2xl">
        Compare the running costs of an electric car against a diesel car using
        current UK diesel prices and electricity rates. Enter your own mileage,
        fuel consumption, and charging habits to see the true difference.
      </p>

      {/* Calculator section */}
      <div className="mb-10">
        <CostCalculatorWithParams />
      </div>

      {/* Guide content */}
      <div className="max-w-3xl mx-auto mt-16 space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="diesel-vs-ev-heading">
          <h2
            id="diesel-vs-ev-heading"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            EV vs diesel: the headline numbers
          </h2>
          <div className="bg-off-white border border-border-light rounded-xl p-4 mb-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-xs text-ev-grey mb-1">Diesel (55 MPG)</p>
                <p className="text-xl font-bold text-ev-amber">~£2,510/yr</p>
                <p className="text-xs text-ev-grey">20k miles</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">EV (80% home)</p>
                <p className="text-xl font-bold text-ev-green">~£1,099/yr</p>
                <p className="text-xs text-ev-grey">~£1,411 saved</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">EV (50% home)</p>
                <p className="text-xl font-bold text-ev-green">~£1,714/yr</p>
                <p className="text-xs text-ev-grey">~£796 saved</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">EV (public only)</p>
                <p className="text-xl font-bold text-ev-amber">~£2,400/yr</p>
                <p className="text-xs text-ev-grey">~£110 saved</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-ev-grey">
            Based on 20,000 mi/yr. Diesel at 151.9p/litre. EV at 3.5 mi/kWh,
            28p/kWh home, 60p/kWh public.
          </p>
        </section>

        <section aria-labelledby="diesel-calculator-tips">
          <h2
            id="diesel-calculator-tips"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How to use this calculator for diesel
          </h2>
          <p className="mb-4">
            The calculator above compares an EV against a petrol car by default.
            To compare against diesel instead:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">1.</span>
              <span>
                Enter your diesel car's <strong className="text-navy">real-world MPG</strong> in the petrol car fields. Many modern diesel cars achieve 50–65 MPG on motorway runs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">2.</span>
              <span>
                Adjust the <strong className="text-navy">fuel price</strong> to match current UK diesel prices (typically around 151.9p/litre in June 2026).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">3.</span>
              <span>
                Set your <strong className="text-navy">annual mileage</strong> — diesel tends to be more economical at high mileage, so use your realistic figure.
              </span>
            </li>
          </ul>
          <p>
            For a broader comparison covering petrol, diesel, and EV running costs
            in detail, see our{" "}
            <Link
              href="/guides/ev-vs-petrol-running-costs"
              className="text-ev-blue hover:underline"
            >
              main EV vs petrol running costs guide
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="diesel-outlook">
          <h2
            id="diesel-outlook"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            The diesel outlook in 2026
          </h2>
          <p className="mb-4">
            Diesel still makes sense for a shrinking set of drivers: very high
            mileage motorway users who cannot charge at home, and those who need
            a large estate or SUV where EV equivalents remain expensive. For most
            other use cases, the running cost advantage of an EV has become too
            large to ignore.
          </p>
          <p className="mb-4">
            Company car drivers face a particularly stark choice. The 2% BIK rate
            for EVs compared to 25%+ for diesel company cars means thousands of
            pounds of tax difference per year — often dwarfing the fuel saving
            itself.
          </p>
          <p>
            If you're considering an EV, check our{" "}
            <Link
              href="/guides/best-ev-for-high-mileage"
              className="text-ev-blue hover:underline"
            >
              best EV for high mileage
            </Link>{" "}
            guide and use the calculator above to run your own numbers.
          </p>
        </section>
      </div>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="max-w-3xl mx-auto mt-12 pt-10 border-t border-border-light"
      >
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://electricvspetrol.co.uk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Guides",
                item: "https://electricvspetrol.co.uk/guides",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "EV vs Diesel Running Costs",
                item: "https://electricvspetrol.co.uk/guides/ev-vs-diesel-running-costs",
              },
            ],
          }),
        }}
      />

      {/* Related links */}
      <div className="max-w-3xl mx-auto mt-10 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/#calculator" className="text-ev-blue hover:underline">
              Main EV vs Petrol Cost Calculator →
            </Link>
          </li>
          <li>
            <Link
              href="/guides/ev-vs-petrol-running-costs"
              className="text-ev-blue hover:underline"
            >
              EV vs Petrol Running Costs Guide →
            </Link>
          </li>
          <li>
            <Link
              href="/guides/best-ev-for-high-mileage"
              className="text-ev-blue hover:underline"
            >
              Best EV for High Mileage UK →
            </Link>
          </li>
          <li>
            <Link
              href="/compare"
              className="text-ev-blue hover:underline"
            >
              Specific car comparisons →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}