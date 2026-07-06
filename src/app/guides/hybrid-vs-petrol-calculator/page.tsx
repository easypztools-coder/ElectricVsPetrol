import type { Metadata } from "next";
import Link from "next/link";
import CostCalculatorWithParams from "@/components/calculator/CostCalculatorWithParams";

export const metadata: Metadata = {
  title: "Hybrid vs Petrol Running Cost Calculator UK 2026 | Compare HEV & PHEV",
  description:
    "A standard hybrid typically saves £350–£400/year vs petrol at 10,000 miles. Use our free UK calculator to see your exact saving — works for HEV and PHEV against any petrol car.",
  alternates: {
    canonical:
      "https://electricvspetrol.co.uk/guides/hybrid-vs-petrol-calculator",
  },
};

const faqItems = [
  {
    q: "Is a hybrid car cheaper to run than a petrol car in the UK?",
    a: "A standard hybrid can be 20–30% more fuel-efficient than an equivalent petrol car in stop-start urban driving. At 10,000 miles per year with 60 MPG for a hybrid vs 45 MPG for petrol, the hybrid saves roughly £350–£400 per year in fuel. The saving is smaller on motorway runs where the hybrid system has less opportunity to recover energy.",
  },
  {
    q: "How much does a plug-in hybrid cost to run per mile?",
    a: "A plug-in hybrid (PHEV) costs around 7–10p per mile on electricity if you charge regularly and do short trips within its electric range. Once the battery depletes, it switches to hybrid mode and runs at roughly 40–50 MPG, costing 12–16p per mile. The blended cost depends entirely on how often you charge and how far you drive between charges.",
  },
  {
    q: "Is a hybrid worth it compared to a full EV?",
    a: "A hybrid can be worth it if you cannot charge at home or regularly need to drive beyond the range of current affordable EVs. However, if you can charge at home overnight, a full EV will almost always be cheaper to run per mile — often half the cost of a hybrid per mile — and avoids the complexity of two powertrains.",
  },
  {
    q: "Do hybrids save money on motorway driving?",
    a: "Standard hybrids offer smaller savings on motorway because the regenerative braking advantage is reduced at steady speeds. At 70 MPH, a hybrid may only improve fuel economy by 5–10% compared to an equivalent petrol car. Plug-in hybrids with depleted batteries also revert to petrol-like economy on long motorway trips.",
  },
];

export default function HybridVsPetrolCalculatorPage() {
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
            Hybrid vs Petrol Calculator
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Hybrid vs Petrol Running Cost Calculator
      </h1>

      <p className="text-lg text-ev-grey mb-6 leading-relaxed max-w-2xl">
        Use our calculator to compare a standard hybrid (HEV) or plug-in hybrid
        (PHEV) against a petrol car. Enter your own mileage, fuel prices, and
        hybrid efficiency to see the true difference.
      </p>

      <p className="text-sm text-ev-grey mb-8">
        The calculator works for any car type. For a hybrid, use its real-world
        combined MPG. For a PHEV, use the calculator with your home electricity
        rate to compare the electric portion of your driving.
      </p>

      {/* Calculator section */}
      <div className="mb-10">
        <CostCalculatorWithParams />
      </div>

      {/* Guide content */}
      <div className="max-w-3xl mx-auto mt-16 space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="how-to-use">
          <h2
            id="how-to-use"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How to use this calculator for a hybrid
          </h2>
          <p className="mb-4">
            The calculator above compares an electric car against a petrol car.
            To compare a hybrid against petrol:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">1.</span>
              <span>
                <strong className="text-navy">For a standard hybrid (HEV):</strong>{" "}
                Enter the hybrid's real-world MPG in the petrol car fields.
                A typical hybrid achieves 55–65 MPG in mixed driving. Compare
                that to a non-hybrid petrol car at 40–50 MPG.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">2.</span>
              <span>
                <strong className="text-navy">For a plug-in hybrid (PHEV):</strong>{" "}
                Use the EV fields for miles driven on electric and the petrol
                fields for miles driven as a hybrid. Factor your home charging
                cost into the electricity rate.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">3.</span>
              <span>
                The calculator will show the annual fuel cost for each and the
                difference between them.
              </span>
            </li>
          </ul>
          <p>
            For a dedicated guide on hybrid vs petrol economics, see our{" "}
            <Link
              href="/guides/hybrid-vs-petrol-running-costs"
              className="text-ev-blue hover:underline"
            >
              full hybrid running costs guide
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="typical-savings">
          <h2
            id="typical-savings"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Typical hybrid vs petrol savings
          </h2>
          <div className="bg-off-white border border-border-light rounded-xl p-4 mb-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-xs text-ev-grey mb-1">Petrol (45 MPG)</p>
                <p className="text-xl font-bold text-ev-amber">~£1,450/yr</p>
                <p className="text-xs text-ev-grey">10k miles</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">Hybrid HEV (60 MPG)</p>
                <p className="text-xl font-bold text-ev-green">~£1,090/yr</p>
                <p className="text-xs text-ev-grey">~£360 saved</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">PHEV (80% electric)</p>
                <p className="text-xl font-bold text-ev-green">~£630/yr</p>
                <p className="text-xs text-ev-grey">~£820 saved</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">Full EV (80% home)</p>
                <p className="text-xl font-bold text-ev-green">~£549/yr</p>
                <p className="text-xs text-ev-grey">~£900 saved</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-ev-grey">
            Based on 10,000 mi/yr. Petrol at 143.9p/litre. EV at 28p/kWh home,
            60p/kWh public, 3.5 mi/kWh. PHEV assumes 30 mile electric range,
            40 MPG hybrid mode, charged at home.
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
                name: "Hybrid vs Petrol Calculator",
                item: "https://electricvspetrol.co.uk/guides/hybrid-vs-petrol-calculator",
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
            <Link
              href="/guides/hybrid-vs-petrol-running-costs"
              className="text-ev-blue hover:underline"
            >
              Hybrid vs Petrol Running Costs Guide →
            </Link>
          </li>
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
        </ul>
      </div>
    </div>
  );
}