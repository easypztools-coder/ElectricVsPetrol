import type { Metadata } from "next";
import Link from "next/link";
import CostCalculatorWithParams from "@/components/calculator/CostCalculatorWithParams";

export const metadata: Metadata = {
  title: "Salary Sacrifice Electric Car Calculator UK 2026 | Compare Your Savings",
  description:
    "See how much you can save with a salary sacrifice electric car scheme in the UK. Use our calculator to compare running costs and understand the tax benefits of salary sacrifice EV leasing.",
  alternates: {
    canonical:
      "https://electricvspetrol.co.uk/guides/ev-salary-sacrifice-calculator",
  },
};

const faqItems = [
  {
    q: "How much can I save with an EV salary sacrifice scheme?",
    a: "The saving varies by tax band, lease cost, and employer arrangement. A higher-rate (40%) taxpayer leasing a £500/month EV through salary sacrifice saves roughly £200/month in Income Tax and National Insurance compared to paying from net salary. Combined with lower fuel costs, the total monthly saving can be £300–£400.",
  },
  {
    q: "How does salary sacrifice compare to a personal EV lease?",
    a: "Salary sacrifice almost always beats a personal lease on monthly cost for the same car because you pay from gross salary before tax. The difference is most significant for higher-rate taxpayers. However, salary sacrifice schemes bundle insurance, maintenance, and breakdown cover — so the comparison should include those costs.",
  },
  {
    q: "What happens to running costs on a salary sacrifice EV?",
    a: "Running costs (electricity) are nearly always separate from the salary sacrifice payment. You still pay for charging separately, which means the running cost savings of an EV stack on top of the lease savings. A driver saving £200/month on the lease via salary sacrifice can also save £50–£80/month on fuel with home charging.",
  },
  {
    q: "Is salary sacrifice worth it if I can't charge at home?",
    a: "It can still be worth it if your employer offers workplace charging or if you have reliable access to public charging. The lease saving from salary sacrifice is independent of your charging situation. However, the total value is lower if you're paying public charging rates — make sure to factor this into your decision.",
  },
];

export default function EvSalarySacrificeCalculatorPage() {
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
            Salary Sacrifice EV Calculator
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Salary Sacrifice Electric Car Calculator
      </h1>

      <p className="text-lg text-ev-grey mb-6 leading-relaxed max-w-2xl">
        Salary sacrifice EV leasing can significantly reduce your monthly outlay
        compared to paying from net salary. Use the running cost calculator below
        to see the fuel-cost side of the equation, alongside the salary sacrifice
        guide for the lease-cost side.
      </p>

      <p className="text-sm text-ev-grey mb-8">
        The savings work in two layers: (1) the lease cost is lower because you
        pay from gross salary before tax, and (2) the running cost is lower
        because electricity costs less per mile than petrol. Both savings stack
        together.
      </p>

      {/* Calculator section */}
      <div className="mb-10">
        <CostCalculatorWithParams />
      </div>

      {/* Guide content */}
      <div className="max-w-3xl mx-auto mt-16 space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="salary-sacrifice-overview">
          <h2
            id="salary-sacrifice-overview"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Typical salary sacrifice savings by tax band
          </h2>
          <div className="bg-off-white border border-border-light rounded-xl p-4 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs text-ev-grey mb-1">Basic rate (20%)</p>
                <p className="text-2xl font-bold text-ev-green font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                  ~20%
                </p>
                <p className="text-xs text-ev-grey">saved on lease cost</p>
                <p className="text-xs text-ev-grey mt-1">~£100/mo on £500 lease</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">Higher rate (40%)</p>
                <p className="text-2xl font-bold text-ev-green font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                  ~40%
                </p>
                <p className="text-xs text-ev-grey">saved on lease cost</p>
                <p className="text-xs text-ev-grey mt-1">~£200/mo on £500 lease</p>
              </div>
              <div>
                <p className="text-xs text-ev-grey mb-1">Additional rate (45%)</p>
                <p className="text-2xl font-bold text-ev-green font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                  ~45%
                </p>
                <p className="text-xs text-ev-grey">saved on lease cost</p>
                <p className="text-xs text-ev-grey mt-1">~£225/mo on £500 lease</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-ev-grey">
            Savings are approximate and assume Income Tax + Employee NI + Employer NI
            are avoided on the sacrificed salary. Actual savings depend on your specific
            scheme provider, bundled services, and employer NI pass-through.
          </p>
        </section>

        <section aria-labelledby="stacked-savings">
          <h2
            id="stacked-savings"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How the two savings stack together
          </h2>
          <div className="bg-off-white border border-border-light rounded-xl p-4 mb-4">
            <p className="text-sm font-medium text-navy mb-2">
              Example: Higher-rate taxpayer, 10,000 miles/year, 80% home charging
            </p>
            <div className="space-y-1 text-sm">
              <p className="flex justify-between">
                <span>Personal lease (after-tax cost)</span>
                <span className="font-bold text-navy">£500/mo</span>
              </p>
              <p className="flex justify-between">
                <span>Salary sacrifice (before-tax saving)</span>
                <span className="font-bold text-ev-green">−£200/mo</span>
              </p>
              <p className="flex justify-between">
                <span>Petrol fuel cost (45 MPG, 10k mi/yr)</span>
                <span className="font-bold text-ev-amber">£121/mo</span>
              </p>
              <p className="flex justify-between">
                <span>EV charging cost (80% home, 3.5 mi/kWh)</span>
                <span className="font-bold text-ev-green">−£46/mo</span>
              </p>
              <div className="border-t border-border-light pt-1 mt-1">
                <p className="flex justify-between font-bold">
                  <span>Total monthly benefit</span>
                  <span className="text-ev-green">~£275/mo saved</span>
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-ev-grey">
            Based on £500/mo lease, £500/mo gross salary sacrifice, 40% tax + 2% NI + 13.8% employer NI.
            Petrol at 143.9p/litre. EV at 28p/kWh home / 60p/kWh public. Running costs are approximate.
          </p>
        </section>

        <section aria-labelledby="using-calculator">
          <h2
            id="using-calculator"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Use the calculator for the running-cost side
          </h2>
          <p className="mb-4">
            The calculator above shows the fuel-cost difference between an EV and
            a petrol or diesel car. For salary sacrifice decision-making:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">1.</span>
              <span className="text-sm">Get a salary sacrifice quote from your employer for the EV you're considering.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">2.</span>
              <span className="text-sm">Compare it to a personal lease or PCP quote for the same car.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">3.</span>
              <span className="text-sm">Use the calculator above to work out the running-cost saving (EV vs the petrol car you currently drive).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1 flex-shrink-0">4.</span>
              <span className="text-sm">Add the lease saving and the fuel saving together for your total monthly benefit.</span>
            </li>
          </ul>
          <p>
            For a detailed explanation of how salary sacrifice works in the UK,
            including eligibility, BIK considerations, and employer rules, see
            our{" "}
            <Link
              href="/guides/ev-salary-sacrifice-uk"
              className="text-ev-blue hover:underline"
            >
              full EV salary sacrifice UK guide
            </Link>
            .
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
                name: "Salary Sacrifice EV Calculator",
                item: "https://electricvspetrol.co.uk/guides/ev-salary-sacrifice-calculator",
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
              href="/guides/ev-salary-sacrifice-uk"
              className="text-ev-blue hover:underline"
            >
              EV Salary Sacrifice UK Guide →
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
          <li>
            <Link
              href="/guides/cheapest-evs-to-run-uk-2026"
              className="text-ev-blue hover:underline"
            >
              Cheapest EVs to Run UK 2026 →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}