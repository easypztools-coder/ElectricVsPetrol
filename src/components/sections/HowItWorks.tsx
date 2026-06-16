const steps = [
  {
    number: "01",
    title: "Tell us your driving details",
    description:
      "Enter your annual mileage, current car MPG, fuel type, and postcode. These form the baseline for your petrol or diesel running costs.",
  },
  {
    number: "02",
    title: "We calculate real running costs",
    description:
      "We use UK pump prices, your home electricity tariff, public charging rate, and EV efficiency to calculate true cost per mile for both options.",
  },
  {
    number: "03",
    title: "You see the true cost comparison",
    description:
      "Get a clear annual saving or cost difference, cost per mile for EV vs petrol, break-even point, and a 10-year cumulative cost chart.",
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-bold text-navy font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How the calculation works
          </h2>
          <p className="mt-3 text-ev-grey max-w-2xl mx-auto">
            We use the same cost-per-mile approach that fleet managers use.
            Every assumption is visible and adjustable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector line between steps (desktop) */}
              {i < steps.length - 1 && (
                <span
                  className="hidden md:block absolute top-6 left-[calc(50%+3rem)] right-[-calc(50%-3rem)] h-px bg-border-light"
                  aria-hidden="true"
                />
              )}

              <div className="bg-white rounded-2xl border border-border-light shadow-sm p-6 flex flex-col gap-4 h-full">
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-ev-blue text-white font-bold text-sm font-display"
                  style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
                >
                  {step.number}
                </span>
                <div>
                  <h3
                    className="text-lg font-bold text-navy mb-2 font-display"
                    style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-ev-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-navy/5 border border-navy/10 rounded-2xl p-6 max-w-3xl mx-auto">
          <p className="text-sm text-ev-grey text-center leading-relaxed">
            <strong className="text-navy">Want to understand the maths?</strong>{" "}
            Read our{" "}
            <a href="/methodology" className="text-ev-blue hover:underline">
              methodology page
            </a>{" "}
            for the full formulas, data sources, and limitations. All calculation
            logic runs in your browser — nothing is stored on a server.
          </p>
        </div>
      </div>
    </section>
  );
}
