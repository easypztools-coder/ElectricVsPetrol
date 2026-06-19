import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best EV for High Mileage UK 2026: Which Electric Cars Save the Most?",
  description:
    "High mileage drivers save the most from switching to an EV — but only if they pick the right model. This guide covers which EVs have the range, charging speed, and efficiency to suit 15,000–30,000 miles per year.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/best-ev-for-high-mileage",
  },
};

const highMileagePicks = [
  {
    model: "Tesla Model 3 Long Range",
    efficiency: "4.2 mi/kWh",
    realRange: "325 miles",
    dcCharging: "250kW",
    annualAt20k: "£1,320",
    why: "Best-in-class efficiency and the Supercharger network make it the default choice for high mileage. The Long Range variant's 325-mile real-world range minimises charging stops.",
  },
  {
    model: "Hyundai Ioniq 6 Long Range",
    efficiency: "4.2 mi/kWh",
    realRange: "320 miles",
    dcCharging: "220kW",
    annualAt20k: "£1,320",
    why: "Matches the Model 3 on efficiency. The 800V charging architecture is among the fastest available for non-Tesla motorway charging.",
  },
  {
    model: "BMW i4 eDrive40",
    efficiency: "3.6 mi/kWh",
    realRange: "295 miles",
    dcCharging: "205kW",
    annualAt20k: "£1,556",
    why: "The best option for high-mileage company car drivers — 2% BIK rate versus 25%+ for a petrol 3 Series saves thousands per year. Premium driving experience sustained over long distances.",
  },
  {
    model: "Polestar 2 Long Range",
    efficiency: "3.5 mi/kWh",
    realRange: "310 miles",
    dcCharging: "205kW",
    annualAt20k: "£1,600",
    why: "Strong real-world range from the 78kWh battery. Reliable on long motorway runs without range anxiety, and 205kW charging keeps stops under 30 minutes.",
  },
  {
    model: "Tesla Model Y Long Range AWD",
    efficiency: "3.5 mi/kWh",
    realRange: "300 miles",
    dcCharging: "250kW",
    annualAt20k: "£1,600",
    why: "The practicality of an SUV with genuinely high-mileage capability. Best for high-mileage families or those who need boot space alongside the efficiency.",
  },
];

const faqItems = [
  {
    q: "Is a high mileage EV cheaper to run than a diesel in 2026?",
    a: "Yes, in most cases. At 20,000 miles per year and 80% home charging, the best EVs cost around £1,300–£1,600 in electricity. A diesel at 55 MPG and 151.9p/litre (£6.91/gallon) costs approximately £2,510 per year — a saving of £900–£1,200 per year. The saving increases further for company car drivers due to BIK tax differences.",
  },
  {
    q: "What real-world range do I need for high mileage EV driving?",
    a: "For high mileage use with primarily motorway driving, aim for at least 250 miles of real-world range. This allows comfortable 150–180 mile segments between charging stops at motorway services, with buffer. 300+ miles is better if you do routes without frequent service areas or want maximum flexibility.",
  },
  {
    q: "Does battery degradation affect high mileage EVs significantly?",
    a: "Modern EVs using NMC batteries (Tesla, Hyundai, Kia) typically lose 2–4% battery capacity per year under normal use. After 5 years of high mileage, you might expect 10–15% less range than new. LFP battery EVs (some BYD models, some Teslas) can be charged to 100% daily without significant additional degradation.",
  },
  {
    q: "What charging speed do I need for high mileage motorway driving?",
    a: "For regular motorway driving, look for minimum 150kW DC charging — ideally 200kW+. The Korean 800V EVs (Ioniq 5, Ioniq 6, EV6, EV9) and Tesla on V3 Superchargers offer 220–250kW, meaning a 20-minute stop adds 100–150 miles of range. At 50kW (old rapid chargers) the same stop adds only 25–35 miles.",
  },
];

export default function BestEvForHighMileagePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Best EV for High Mileage</li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Best EV for High Mileage UK 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Last updated: June 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        High mileage drivers stand to save the most from switching to an EV —
        the running cost difference compounds dramatically at 15,000–30,000 miles
        per year. But not all EVs are suited to it. Range, charging speed, and
        real-world efficiency all matter more when you&apos;re covering serious miles.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">Calculate your high-mileage saving</p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the cost calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            What makes an EV good for high mileage?
          </h2>
          <p className="mb-4">
            Three things matter above all else for high mileage EV driving:
          </p>
          <div className="space-y-4">
            {[
              { label: "Real-world range", desc: "WLTP figures are optimistic. At motorway speeds in UK weather, expect 20–30% less. Aim for 250+ miles real-world range to make charging stops practical." },
              { label: "DC fast charging speed", desc: "You'll be charging at motorway services. At 150kW+ you can add 100 miles in under 20 minutes. At 50kW (the old 'rapid' chargers), the same stop adds only 25 miles." },
              { label: "Real-world efficiency", desc: "Efficiency determines your pence-per-mile running cost. The best models achieve 4+ miles/kWh; SUVs and larger vehicles are typically 3.0–3.5 miles/kWh." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-ev-blue mt-1 flex-shrink-0">→</span>
                <div>
                  <strong className="text-navy">{item.label}:</strong>{" "}
                  <span className="text-sm">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Best EVs for high mileage UK drivers
          </h2>
          <p className="mb-6 text-sm">
            Annual electricity cost calculated at 20,000 miles, 80% home charging (28p/kWh), 20% public rapid (60p/kWh).
          </p>
          <div className="space-y-4">
            {highMileagePicks.map((pick, i) => (
              <div key={pick.model} className="border border-border-light rounded-2xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-ev-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <h3
                      className="font-bold text-navy font-display"
                      style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
                    >
                      {pick.model}
                    </h3>
                  </div>
                  <span className="text-sm font-bold text-ev-green">{pick.annualAt20k}/yr</span>
                </div>
                <div className="flex gap-4 text-xs text-ev-grey mb-3">
                  <span>Efficiency: <strong className="text-navy">{pick.efficiency}</strong></span>
                  <span>Range: <strong className="text-navy">{pick.realRange}</strong></span>
                  <span>DC: <strong className="text-navy">{pick.dcCharging}</strong></span>
                </div>
                <p className="text-sm text-ev-grey">{pick.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Company car drivers: the BIK advantage
          </h2>
          <p className="mb-4">
            For company car drivers, the BIK (Benefit in Kind) tax difference is
            often the single largest financial factor — larger even than fuel savings.
          </p>
          <div className="bg-off-white border border-border-light rounded-xl p-4 text-sm">
            <div className="grid grid-cols-3 gap-2 text-center font-medium text-ev-grey mb-2 text-xs uppercase tracking-wide">
              <span>Vehicle</span>
              <span>BIK Rate</span>
              <span>40% taxpayer cost/yr</span>
            </div>
            {[
              { v: "BMW 3 Series 320i", bik: "25%", cost: "~£5,475" },
              { v: "BMW i4 eDrive40", bik: "2%", cost: "~£1,079" },
              { v: "Tesla Model 3 LR", bik: "2%", cost: "~£820" },
              { v: "Hyundai Ioniq 6", bik: "2%", cost: "~£780" },
            ].map((row) => (
              <div key={row.v} className="grid grid-cols-3 gap-2 text-center text-sm py-1 border-t border-border-light">
                <span className="text-left text-navy font-medium">{row.v}</span>
                <span className="text-ev-grey">{row.bik}</span>
                <span className={row.bik === "2%" ? "text-ev-green font-bold" : "text-ev-amber font-bold"}>{row.cost}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-ev-grey mt-2">BIK rates for 2026/27 tax year. P11D values approximate.</p>
        </section>
      </div>

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

      <div className="mt-10 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/ev" className="text-ev-blue hover:underline">All EV running costs by model →</Link></li>
          <li><Link href="/compare/tesla-model-3-vs-bmw-3-series" className="text-ev-blue hover:underline">Tesla Model 3 vs BMW 3 Series →</Link></li>
          <li><Link href="/guides/cheapest-evs-to-run-uk-2026" className="text-ev-blue hover:underline">Cheapest EVs to run UK 2026 →</Link></li>
          <li><Link href="/#calculator" className="text-ev-blue hover:underline">EV vs Petrol Cost Calculator →</Link></li>
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" },
              { "@type": "ListItem", position: 3, name: "Best EV for High Mileage UK 2026", item: "https://electricvspetrol.co.uk/guides/best-ev-for-high-mileage" },
            ],
          }),
        }}
      />
    </div>
  );
}
