const trustItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 2l1.9 5.8H18l-4.9 3.6 1.9 5.8L10 14.2l-4.9 3 1.9-5.8L2 8.8h6.1L10 2z"
          stroke="#0066FF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    title: "Independent & impartial",
    description: "No car dealership or energy company affiliation.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="#0066FF" strokeWidth="1.5" />
        <path
          d="M7 10l2.5 2.5L13 8"
          stroke="#0066FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Your data stays private",
    description: "Calculations run in your browser. No postcode stored.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="#0066FF" strokeWidth="1.5" />
        <path d="M7 10l3-3 3 3M10 7v6" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Built for UK drivers",
    description: "UK fuel prices, pence per litre, MPG — not miles per gallon US.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 2v16M2 10h16"
          stroke="#0066FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="10" r="7" stroke="#0066FF" strokeWidth="1.5" />
      </svg>
    ),
    title: "Transparent assumptions",
    description: "Every number you see can be adjusted. Nothing hidden.",
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Why trust us"
      className="bg-navy py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-3"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {item.title}
                </p>
                <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
