const faqs = [
  {
    q: "Is it cheaper to run an electric car than petrol in the UK?",
    a: "For most UK drivers who can charge at home, yes — often by £600–£1,200 per year at 10,000 miles. The key variable is where you charge. Home overnight charging at 28p/kWh costs around 8p per mile. Public rapid charging at 75p/kWh costs around 21p per mile — more expensive than many petrol cars. Enter your actual mileage, MPG and postcode above for a personalised answer.",
  },
  {
    q: "How does entering my postcode improve the calculation?",
    a: "When you enter your UK postcode, the calculator looks up live local petrol and diesel prices from forecourts near you using official CMA Fuel Finder data. Petrol prices vary by up to 20p per litre across the UK — that difference alone can shift your annual fuel bill by £100–£200. Without a postcode, the calculator uses a national average as the default.",
  },
  {
    q: "What is a break-even point for an EV?",
    a: "The break-even point is how long it takes for your running cost savings to repay the extra purchase price of an EV versus an equivalent petrol car. For example, if an EV costs £2,500 more to buy and saves you £900 per year in fuel costs, you break even in about 2.8 years. The calculator shows this automatically when the EV is cheaper to run.",
  },
];

export default function HomepageFAQ() {
  return (
    <section aria-labelledby="homepage-faq-heading" className="py-16 bg-off-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="homepage-faq-heading"
          className="text-2xl font-bold text-navy mb-8 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Common questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="bg-white rounded-2xl border border-border-light p-6"
            >
              <h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3>
              <p className="text-sm text-ev-grey leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
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
    </section>
  );
}
