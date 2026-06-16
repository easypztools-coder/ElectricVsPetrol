import type { Metadata } from "next";
import CostCalculator from "@/components/calculator/CostCalculator";
import HowItWorks from "@/components/sections/HowItWorks";
import TrustStrip from "@/components/sections/TrustStrip";
import WhyLocalPrices from "@/components/sections/WhyLocalPrices";

export const metadata: Metadata = {
  title: "EV vs Petrol Cost Calculator UK | ElectricVsPetrol.co.uk",
  description:
    "Compare electric and petrol running costs using UK mileage, fuel prices, electricity rates and charging assumptions. See cost per mile, annual savings and break-even point.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero + Calculator ──────────────────────────────────── */}
      <section
        className="bg-white border-b border-border-light"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* ── Hero copy ── */}
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-ev-blue bg-ev-blue/8 px-3 py-1.5 rounded-full mb-6">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-ev-blue"
                  aria-hidden="true"
                />
                Independent · UK-specific · Data-led
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl font-bold text-navy leading-tight font-display"
                style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
              >
                Would an EV actually{" "}
                <span className="text-ev-blue">save</span> you money?
              </h1>

              <p className="mt-5 text-lg text-ev-grey leading-relaxed max-w-lg">
                Compare electric vs petrol running costs using real local UK
                prices. See your true cost per mile, annual savings, and
                break-even point.
              </p>

              {/* Trust microcopy */}
              <div className="mt-8 flex flex-col gap-2">
                {[
                  "Independent. Transparent. Data-led.",
                  "Built for UK drivers.",
                  "Calculations run in your browser — nothing stored.",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg
                      className="text-ev-green flex-shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-ev-grey">{item}</span>
                  </div>
                ))}
              </div>

              {/* Key stats callout */}
              <div className="mt-10 grid grid-cols-2 gap-4 max-w-sm">
                <div className="bg-off-white border border-border-light rounded-xl p-4">
                  <p className="text-xs text-ev-grey mb-1">Avg. EV saving/yr</p>
                  <p
                    className="text-xl font-bold text-ev-green font-display"
                    style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
                  >
                    ~£900
                  </p>
                  <p className="text-xs text-ev-grey">10k miles, 80% home</p>
                </div>
                <div className="bg-off-white border border-border-light rounded-xl p-4">
                  <p className="text-xs text-ev-grey mb-1">EV cost per mile</p>
                  <p
                    className="text-xl font-bold text-ev-blue font-display"
                    style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
                  >
                    ~4.3p
                  </p>
                  <p className="text-xs text-ev-grey">vs ~14p petrol</p>
                </div>
              </div>

              <p className="mt-3 text-xs text-ev-grey/60">
                * Illustrative defaults. Your results will vary.
              </p>
            </div>

            {/* ── Calculator ── */}
            <div>
              <CostCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────── */}
      <HowItWorks />

      {/* ── Why local prices matter ─────────────────────────────── */}
      <WhyLocalPrices />

      {/* ── Trust strip ─────────────────────────────────────────── */}
      <TrustStrip />

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section className="py-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Ready to see your numbers?
          </h2>
          <p className="text-ev-grey mb-8">
            Fuel prices, electricity rates, and charging habits vary enormously.
            The only way to know if an EV saves you money is to run your own
            numbers.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center justify-center gap-2 bg-ev-blue text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-sm"
          >
            Calculate my true cost
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 9h10M10 5l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="mt-4 text-xs text-ev-grey">
            Results are estimates, not financial advice. See our{" "}
            <a href="/methodology" className="text-ev-blue hover:underline">
              methodology
            </a>{" "}
            for full assumptions.
          </p>
        </div>
      </section>

      {/* ── Structured data ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "EV vs Petrol Cost Calculator",
            url: "https://electricvspetrol.co.uk",
            description:
              "Compare electric and petrol running costs using UK mileage, fuel prices, electricity rates and charging assumptions.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "GBP",
            },
            provider: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
          }),
        }}
      />
    </>
  );
}
