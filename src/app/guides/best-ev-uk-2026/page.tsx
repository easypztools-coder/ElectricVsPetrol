import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Electric Cars UK 2026: Top Picks by Category | ElectricVsPetrol",
  description:
    "Tesla Model 3 (6.4p/mile) is our top overall pick. MG4 from £26,995 is best value. Ioniq 6 leads on range. Our 2026 data-led guide ranks the best UK EVs by category — no marketing, just numbers.",
  alternates: {
    canonical:
      "https://electricvspetrol.co.uk/guides/best-ev-uk-2026",
  },
};

const categories = [
  {
    name: "Best overall EV",
    pick: "Tesla Model 3 (Highland) Long Range RWD",
    why: "Combines best-in-class efficiency (4.1 mi/kWh), 360+ mile WLTP range, access to the Supercharger network, competitive pricing from £40,990, and strong residual values. The Highland refresh improved ride quality, reduced wind noise, and added ventilated seats.",
    costPerMile: "6.4p (home, 26.1p/kWh)",
  },
  {
    name: "Best value EV",
    pick: "MG4 Standard Range",
    why: "At £26,995, the MG4 is the cheapest EV that still delivers a proper driving experience. 4.0 mi/kWh efficiency keeps running costs low, and its 51kWh battery provides enough real-world range for daily use. Direct rival to the Volkswagen Golf in size, but £10,000+ cheaper to buy and cheaper to run.",
    costPerMile: "6.5p (home, 26.1p/kWh)",
  },
  {
    name: "Best range EV",
    pick: "Hyundai Ioniq 6 Long Range RWD",
    why: "The Ioniq 6's aerodynamic shape delivers the best real-world efficiency of any EV on sale at 4.2 mi/kWh, translating to 320+ miles of genuine mixed-driving range. The 800V architecture charges from 10–80% in 18 minutes at 220kW+ chargers.",
    costPerMile: "6.2p (home, 26.1p/kWh)",
  },
  {
    name: "Best EV for high mileage",
    pick: "Tesla Model 3 Long Range AWD",
    why: "For drivers covering 20,000+ miles per year, the Model 3 LR AWD combines 4.0 mi/kWh efficiency, 325-mile real-world range, and 250kW Supercharger access — minimising both fuel cost and charging time on long trips.",
    costPerMile: "6.5p (home, 26.1p/kWh)",
  },
  {
    name: "Best small / city EV",
    pick: "MG4 Standard Range",
    why: "For city driving where you rarely exceed 30–50 miles per day, the MG4 is hard to beat. Its efficient powertrain and low purchase price make it the most cost-effective small EV for UK drivers who can charge at home.",
    costPerMile: "6.5p (home, 26.1p/kWh)",
  },
  {
    name: "Best family EV SUV",
    pick: "Tesla Model Y Long Range AWD",
    why: "Combines SUV practicality (854L boot, optional 7 seats) with genuine efficiency (3.5 mi/kWh), 300-mile real-world range, and the Supercharger network. The best option for families who need space without compromising running costs.",
    costPerMile: "7.5p (home, 26.1p/kWh)",
  },
  {
    name: "Best company car EV",
    pick: "BMW i4 eDrive40",
    why: "The 2% BIK rate saves higher-rate taxpayers thousands compared to a 25%+ rated petrol 3 Series. Combined with strong efficiency (3.6 mi/kWh), 295-mile real-world range, and a premium interior, it's the best choice for company car drivers who spend long hours behind the wheel.",
    costPerMile: "7.3p (home, 26.1p/kWh)",
  },
];

const faqItems = [
  {
    q: "What is the best electric car in the UK in 2026?",
    a: "The Tesla Model 3 (Highland) Long Range RWD is the best all-round EV in the UK for 2026, combining class-leading efficiency, Supercharger network access, competitive pricing, and strong resale values. For the best value, the MG4 Standard Range at £26,995 offers compelling running costs and decent range for the price.",
  },
  {
    q: "Which EV has the longest real-world range?",
    a: "The Hyundai Ioniq 6 Long Range RWD offers the best real-world efficiency at 4.2 miles/kWh, giving approximately 320+ miles of mixed driving range. The Tesla Model 3 Long Range RWD and Mercedes EQS also offer 350+ mile official range, but the Ioniq 6's real-world efficiency advantage is significant.",
  },
  {
    q: "What is the cheapest EV to buy in the UK in 2026?",
    a: "The Dacia Spring (around £15,000) is the cheapest new EV in the UK, but it has limited range and slow charging. The MG4 Standard Range at £26,995 is the cheapest EV that works as a primary car for most drivers, offering decent range (218 miles WLTP), fast charging capability, and surprisingly good driving dynamics.",
  },
  {
    q: "Should I buy an EV in 2026 or wait?",
    a: "With battery prices falling, charging infrastructure improving rapidly, and the 2030 ban on new petrol/diesel car sales approaching, 2026 is a strong time to buy. The main reason to wait would be if you expect a specific model refresh or price drop. Technology is improving, but the financial savings from running an EV instead of petrol are available now.",
  },
];

export default function BestEvUk2026Page() {
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
            <Link href="/guides" className="text-ev-blue hover:underline">
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            Best EV UK 2026
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Best EV UK 2026: The Ultimate Guide
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Last updated: July 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        &ldquo;What&rsquo;s the best electric car?&rdquo; is the wrong question. The right
        question is: what&rsquo;s the best electric car <em>for you</em>? This guide
        breaks down the best EV in every category based on real-world data,
        not marketing claims.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          See the running costs for any EV
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Use the EV vs Petrol Cost Calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="border border-border-light rounded-2xl p-6 hover:border-ev-blue/40 transition-colors"
          >
            <span className="inline-block text-xs font-semibold text-ev-blue bg-ev-blue/10 px-2.5 py-1 rounded-full mb-3">
              {cat.name}
            </span>
            <h2
              className="text-xl font-bold text-navy mb-2 font-display"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              {cat.pick}
            </h2>
            <p className="text-sm text-ev-grey mb-3 leading-relaxed">
              {cat.why}
            </p>
            <p className="text-xs text-ev-green font-semibold">
              Running cost: {cat.costPerMile}
            </p>
          </div>
        ))}
      </div>

      {/* How to choose */}
      <section className="mt-12 space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="how-to-choose">
          <h2
            id="how-to-choose"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How to choose the best EV for you
          </h2>
          <p className="mb-4">
            The &ldquo;best&rdquo; EV depends entirely on your budget, driving
            patterns, and charging access. Here&rsquo;s a quick decision framework:
          </p>
          <ul className="space-y-2">
            {[
              "If you have home charging and want the lowest running cost: choose an efficient EV like the Ioniq 6 or Model 3, and switch to an overnight tariff.",
              "If budget is your main concern: the MG4 offers the best balance of price, efficiency, and practicality.",
              "If you drive 20,000+ miles per year: prioritise efficiency (miles/kWh) and DC charging speed — the Model 3 LR and Ioniq 6 lead here.",
              "If you need a family SUV: the Model Y or Kia EV6 offer space without terrible efficiency.",
              "If it&rsquo;s a company car: any EV with 2% BIK beats any petrol or diesel on tax alone — the BMW i4 and Tesla Model 3 are top choices.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-ev-blue mt-1 flex-shrink-0">→</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>

      {/* FAQ */}
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
                name: "Best EV UK 2026",
                item: "https://electricvspetrol.co.uk/guides/best-ev-uk-2026",
              },
            ],
          }),
        }}
      />

      {/* Related links */}
      <div className="mt-10 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/ev" className="text-ev-blue hover:underline">
              Full EV model running costs →
            </Link>
          </li>
          <li>
            <Link href="/guides/cheapest-evs-to-run-uk-2026" className="text-ev-blue hover:underline">
              Cheapest EVs to Run UK 2026 →
            </Link>
          </li>
          <li>
            <Link href="/guides/best-ev-for-high-mileage" className="text-ev-blue hover:underline">
              Best EV for High Mileage →
            </Link>
          </li>
          <li>
            <Link href="/#calculator" className="text-ev-blue hover:underline">
              EV vs Petrol Cost Calculator →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}