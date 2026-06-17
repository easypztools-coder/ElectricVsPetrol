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
  {
    q: "How much does it cost to charge an EV at home per mile in the UK?",
    a: "On a standard tariff at ~28p/kWh a typical EV (3.5 mi/kWh) costs ~8p/mile at home. On a dedicated EV overnight tariff like Octopus Go (~7p/kWh) this drops to ~2p/mile — roughly a seventh of the cost of petrol. Choosing the right tariff often has more impact on your annual bill than which EV model you buy.",
  },
  {
    q: "Do electric cars save money if you can't charge at home?",
    a: "Without home charging the economics change significantly. Relying on public rapid charging at 60–80p/kWh puts EV running costs at 17–23p/mile — comparable to or higher than petrol. Drivers without off-street parking should factor this in carefully before switching.",
  },
  {
    q: "What is the cheapest EV tariff in the UK right now?",
    a: "Dedicated EV overnight tariffs are the cheapest way to charge at home. As of 2026, Octopus Go offers off-peak rates around 7–9p/kWh from midnight to 5am. These require a smart meter. Switching from a standard tariff to an EV tariff is often the single highest-impact change you can make to your running costs.",
  },
  {
    q: "Does this calculator include road tax, insurance, and servicing?",
    a: "No — this calculator covers fuel and electricity running costs only. Road tax (VED), insurance, servicing and depreciation vary too widely between vehicles to compare reliably. EVs generally have lower servicing costs (fewer moving parts) but can carry higher insurance premiums and steeper depreciation on some models.",
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
