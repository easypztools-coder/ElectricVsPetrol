import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hybrid vs Petrol Running Costs UK: The Complete 2026 Guide",
  description:
    "Compare standard hybrids and plug-in hybrids against petrol-only cars in the UK. Learn when a HEV helps, when a PHEV saves money, and when petrol still wins.",
  alternates: {
    canonical:
      "https://electricvspetrol.co.uk/guides/hybrid-vs-petrol-running-costs",
  },
};

const faqItems = [
  {
    q: "Are hybrid cars cheaper to run than petrol cars in the UK?",
    a: "A standard hybrid can be cheaper to run than an equivalent petrol car if your driving includes frequent stop-start traffic, short urban trips, and a lot of low-speed motoring. The electric motor recovers some energy during braking and helps the engine spend more time in its efficient range. The saving is usually modest rather than dramatic, because the hybrid still depends on petrol most of the time.",
  },
  {
    q: "Do plug-in hybrids actually save money?",
    a: "They can, but only if you charge them regularly and keep the journeys short enough to stay inside the EV-only range. A plug-in hybrid with a 20 to 40 mile battery range can do a large share of local commuting on electricity alone. Once the battery is depleted, however, it behaves much more like a regular petrol hybrid and the running-cost advantage falls sharply.",
  },
  {
    q: "What happens to a PHEV when the battery runs out?",
    a: "When the battery is depleted, the car switches to hybrid mode and the petrol engine does most of the work. In that state a PHEV often returns real-world fuel economy closer to a conventional petrol car than a pure EV. Drivers who rarely plug in should not expect EV-like costs from a plug-in hybrid.",
  },
  {
    q: "Should I compare a hybrid against a petrol car or an EV?",
    a: "If you can charge at home or work, it is worth comparing a hybrid against both petrol and EV options. A hybrid may be the easier transition if you want lower consumption without worrying about charging access. But if your trips fit within a PHEV's electric range, a full EV can still be cheaper to run over the year.",
  },
];

export default function HybridVsPetrolRunningCostsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            Hybrid vs Petrol Running Costs
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Hybrid vs Petrol Running Costs UK: The Complete 2026 Guide
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        Last updated: July 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Hybrid cars sit between traditional petrol motoring and full EV ownership.
        That makes them useful for some drivers and frustrating for others. The key
        question is not whether a hybrid is clever, but whether the electric part is
        doing enough of the work to justify the extra cost of the technology.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          Compare the numbers for your own car
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Use the EV vs Petrol Cost Calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="hybrid-basics">
          <h2
            id="hybrid-basics"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            What a standard hybrid actually saves
          </h2>
          <p className="mb-4">
            A standard hybrid, often called an HEV, does not plug in. It uses a
            small battery and electric motor to assist the petrol engine rather than
            replace it. In UK driving, that usually means better efficiency in town,
            smoother stop-start traffic, and a more efficient launch from rest.
          </p>
          <p className="mb-4">
            The economics are fairly simple. If a petrol hatchback does 45 MPG and a
            comparable hybrid does 60 MPG, the hybrid cuts fuel use by roughly a
            quarter. That can be worthwhile for drivers doing lots of city miles,
            school runs, or short trips where a cold engine would otherwise spend a
            lot of time in inefficient conditions.
          </p>
          <p>
            On faster A-roads and motorways, the gap tends to narrow. Once the engine
            is running steadily at cruise, the hybrid system has less opportunity to
            recover energy, so the fuel economy advantage becomes smaller. In other
            words: HEVs help most when the driving cycle gives the electric motor a
            chance to intervene often.
          </p>
        </section>

        <section aria-labelledby="phev-economics">
          <h2
            id="phev-economics"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Plug-in hybrid economics: where the trapdoors are
          </h2>
          <p className="mb-4">
            PHEVs are more complicated. They have a much larger battery than a
            standard hybrid and can travel a short distance on electricity alone,
            usually somewhere in the 20 to 40 mile range in the real world. If your
            routine is mostly local, and you recharge frequently, a PHEV can spend a
            lot of time driving like a small EV.
          </p>
          <p className="mb-4">
            That only works if you actually charge it. A plug-in hybrid that is rarely
            plugged in becomes a heavy petrol car carrying the weight of a battery it
            is not using. In that case the fuel economy can fall below expectation,
            because the car is dragging extra mass around without receiving the main
            benefit of electric-only driving.
          </p>
          <p className="mb-4">
            Charging cost matters too. A small PHEV battery might only need 8 to 12
            kWh to refill, so the electricity bill for a full charge is modest. But if
            you are paying public charging prices for that electricity, the cost per
            mile can rise quickly and eat into the advantage. The PHEV case is strongest
            for drivers with a cheap home tariff or reliable workplace charging.
          </p>
          <p>
            Once the battery is depleted, the car behaves like a petrol hybrid and the
            economics move back toward the HEV case. That means a PHEV can be very
            cheap for a driver who plugs in every day, moderately cheaper than petrol
            for someone who charges occasionally, and barely better than petrol for a
            driver who never plugs it in at all.
          </p>
        </section>

        <section aria-labelledby="which-drivers-benefit">
          <h2
            id="which-drivers-benefit"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Who should choose a hybrid instead of pure petrol?
          </h2>
          <p className="mb-4">
            Hybrids make sense when your driving is stop-start, your annual mileage is
            moderate, and you want lower fuel use without changing how you refuel. They
            are also attractive if you are not ready for home charging or do not want
            to rely on public infrastructure for your day-to-day driving.
          </p>
          <p className="mb-4">
            A PHEV makes more sense when you have predictable short trips and regular
            charging access. Think commuters with a short round trip, company-car
            drivers who can top up overnight, or households where the second car does
            most of the local mileage. For those drivers, the electric range can cover
            a large portion of annual miles, with petrol acting as backup.
          </p>
          <p>
            If you drive long motorway distances, rarely plug in, or regularly exceed a
            PHEV&apos;s electric range, the advantage gets much smaller. In that case a
            conventional petrol car may be simpler, cheaper to buy, and easier to
            predict. The answer is not always &quot;buy the most efficient powertrain&quot;; it
            is &quot;buy the one that fits your actual pattern of use&quot;.
          </p>
        </section>

        <section aria-labelledby="link-back">
          <h2
            id="link-back"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Use the main EV comparison as a benchmark
          </h2>
          <p className="mb-4">
            The EV vs petrol guide is still the best reference point if you are trying
            to understand the size of the fuel-saving gap. Hybrids usually shrink the
            difference between petrol and EV ownership, but they do not remove it.
            Using the calculator alongside that guide makes it easier to see whether a
            hybrid is a sensible compromise or just a step that adds complexity.
          </p>
          <p>
            For a broader comparison, start with the <Link href="/guides/ev-vs-petrol-running-costs" className="text-ev-blue hover:underline">main EV vs petrol guide</Link>, then run your own numbers in the <Link href="/#calculator" className="text-ev-blue hover:underline">calculator</Link>. If local petrol pricing matters to your decision, the <Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">local fuel prices guide</Link> shows why postcode-level data changes the result. For a side-by-side breakdown with your own mileage and fuel figures already filled in, use the <Link href="/guides/hybrid-vs-petrol-calculator" className="text-ev-blue hover:underline">hybrid vs petrol calculator</Link>.
          </p>
        </section>
      </div>

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
                name: "Hybrid vs Petrol Running Costs",
                item: "https://electricvspetrol.co.uk/guides/hybrid-vs-petrol-running-costs",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
