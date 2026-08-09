import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Guides UK — Electric Car Costs & Fuel Prices",
  description:
    "Practical UK guides to electric car running costs, local fuel prices, and how to calculate whether an EV saves you money. Independent, data-led.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides",
  },
};

const guides = [
  {
    href: "/guides/ev-running-cost-index-q3-2026",
    title: "UK EV Running Cost Index: Q3 2026 Report",
    description:
      "Comprehensive UK fuel price and electricity index. Programmatic averages, top-5 rankings, and motorist saving metrics.",
    badge: "Running Costs",
  },
  {
    href: "/guides/ev-vs-petrol-running-costs",
    title: "EV vs Petrol Running Costs: The Complete 2026 UK Guide",
    description:
      "Home charging vs public charging, real-world efficiency, petrol and diesel cost calculations, and the factors that determine whether an EV saves you money.",
    badge: "Running Costs",
  },
  {
    href: "/guides/cheapest-evs-to-run-uk-2026",
    title: "Cheapest EVs to Run in the UK 2026: Pence Per Mile Ranked",
    description:
      "Which electric car costs the least per mile? We rank 20+ EVs by real-world efficiency and annual running cost at current UK electricity prices.",
    badge: "Running Costs",
  },
  {
    href: "/guides/best-ev-for-high-mileage",
    title: "Best EV for High Mileage UK 2026: Which Models Save the Most?",
    description:
      "High mileage drivers save the most from switching to an EV — but only if they pick the right model. Range, charging speed, and efficiency all matter more at 15,000+ miles per year.",
    badge: "High Mileage",
  },
  {
    href: "/guides/is-ev-worth-it-without-home-charger",
    title: "Is an EV Worth It Without a Home Charger? UK Guide 2026",
    description:
      "No driveway? The economics change significantly. This guide explains what to expect from public charging costs and who can still make an EV work without off-street parking.",
    badge: "Charging",
  },
  {
    href: "/guides/local-fuel-prices",
    title: "UK Local Fuel Prices: Why They Matter for EV vs Petrol Savings 2026",
    description:
      "Petrol prices vary by up to 20p/litre across the UK. Electricity tariffs vary even more. Learn how to use local pricing for an accurate EV vs petrol comparison.",
    badge: "Fuel Prices",
  },
  {
    href: "/guides/hybrid-vs-petrol-running-costs",
    title: "Hybrid vs Petrol Running Costs UK: The Complete 2026 Guide",
    description:
      "Standard hybrids, plug-in hybrids, and when they actually make financial sense compared with a petrol car.",
    badge: "Hybrid",
  },
  {
    href: "/guides/ev-salary-sacrifice-uk",
    title: "EV Salary Sacrifice UK Guide 2026",
    description:
      "How salary sacrifice EV leasing works, who qualifies, and how to stack lease savings with lower running costs.",
    badge: "Finance",
  },
  {
    href: "/guides/ev-running-costs-scotland",
    title: "EV Running Costs Scotland 2026",
    description:
      "ChargePlace Scotland, rural charging access, local support, and why Scottish fuel prices change the EV comparison.",
    badge: "Region",
  },
  {
    href: "/guides/ev-running-costs-wales",
    title: "EV Running Costs Wales 2026",
    description:
      "Charging access, rural fuel pricing, and how Wales-specific conditions affect EV running costs.",
    badge: "Region",
  },
  {
    href: "/guides/ev-running-costs-northern-ireland",
    title: "EV Running Costs Northern Ireland 2026",
    description:
      "Rural charging access, local fuel price variation, and the Northern Ireland EV running-cost picture.",
    badge: "Region",
  },
  // New Phase 2 pages
  {
    href: "/guides/hybrid-vs-petrol-calculator",
    title: "Hybrid vs Petrol Running Cost Calculator UK",
    description:
      "Calculate whether a standard hybrid (HEV) or plug-in hybrid (PHEV) saves you money compared to a petrol car. Enter your own MPG and fuel prices.",
    badge: "Calculator",
  },
  {
    href: "/guides/ev-vs-diesel-running-costs",
    title: "Electric Car vs Diesel Running Cost Calculator UK 2026",
    description:
      "Compare EV running costs against diesel cars. See how much you save with home charging versus current diesel fuel prices.",
    badge: "Calculator",
  },
  {
    href: "/guides/electric-car-fuel-cost",
    title: "Electric Car Fuel Cost UK 2026 | Cost Per Mile & Full Charge",
    description:
      "How much does it cost to charge an EV in the UK in 2026? Per-mile costs at home, public, and overnight tariff rates. Annual running cost estimates.",
    badge: "Running Costs",
  },
  {
    href: "/guides/best-ev-uk-2026",
    title: "Best EV UK 2026 | Which Electric Car Should You Buy?",
    description:
      "The best EV for every buyer: best overall, best value, best range, best for families, best for company car drivers. Real-world data, not marketing.",
    badge: "Buying Guide",
  },
  {
    href: "/guides/ev-salary-sacrifice-calculator",
    title: "Salary Sacrifice EV Calculator | Compare Your Savings UK 2026",
    description:
      "See how salary sacrifice EV leasing stacks with running-cost savings. Calculator and tax-band comparisons for basic, higher, and additional rate taxpayers.",
    badge: "Calculator",
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            Guides
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        EV Guides for UK Drivers
      </h1>
      <p className="text-lg text-ev-grey mb-10 leading-relaxed">
        Independent, data-led guides to electric car running costs, fuel
        pricing, and the real economics of switching to an EV in the UK.
      </p>

      <div className="space-y-6">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group block bg-white border border-border-light rounded-2xl p-6 hover:border-ev-blue/40 hover:shadow-sm transition-all"
          >
            <span className="inline-block text-xs font-semibold text-ev-blue bg-ev-blue/10 px-2.5 py-1 rounded-full mb-3">
              {guide.badge}
            </span>
            <h2
              className="text-lg font-bold text-navy mb-2 group-hover:text-ev-blue transition-colors font-display"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              {guide.title}
            </h2>
            <p className="text-sm text-ev-grey leading-relaxed">
              {guide.description}
            </p>
            <p className="mt-3 text-xs font-semibold text-ev-blue">
              Read guide →
            </p>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5">
        <p className="text-sm text-navy font-medium mb-2">
          Ready to run the numbers for your car?
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

      {/* BreadcrumbList schema */}
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
            ],
          }),
        }}
      />
      {/* CollectionPage schema — signals to Google that this is a curated hub
          of topically authoritative articles, improving E-E-A-T classification. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "EV Guides for UK Drivers",
            description:
              "Independent, data-led guides to electric car running costs, local fuel prices, and the real economics of switching to an EV in the UK.",
            url: "https://electricvspetrol.co.uk/guides",
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            hasPart: guides.map((guide) => ({
              "@type": "Article",
              name: guide.title,
              description: guide.description,
              url: `https://electricvspetrol.co.uk${guide.href}`,
            })),
          }),
        }}
      />
    </div>
  );
}
