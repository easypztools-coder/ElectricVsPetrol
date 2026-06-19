import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Fuel Prices 2026: Petrol and Diesel Price Updates | ElectricVsPetrol",
  description:
    "Current UK petrol and diesel prices and what they mean for EV vs petrol running costs. Monthly price updates with analysis of how fuel price changes affect the EV break-even calculation.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/fuel-prices",
  },
};

export default function FuelPricesIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Fuel Prices</li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        UK Fuel Prices 2026
      </h1>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        UK petrol and diesel prices, and what they mean for EV vs petrol running
        costs. Updated monthly.
      </p>

      {/* Current prices card */}
      <div className="bg-off-white border border-border-light rounded-2xl p-6 mb-8">
        <p className="text-xs font-semibold text-ev-grey uppercase tracking-wide mb-4">Current UK average prices (June 2026)</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-ev-grey mb-1">Unleaded petrol</p>
            <p className="text-3xl font-bold text-ev-amber">143.9p</p>
            <p className="text-xs text-ev-grey mt-1">per litre</p>
          </div>
          <div>
            <p className="text-xs text-ev-grey mb-1">Diesel</p>
            <p className="text-3xl font-bold text-ev-amber">151.9p</p>
            <p className="text-xs text-ev-grey mt-1">per litre</p>
          </div>
        </div>
        <p className="text-xs text-ev-grey mt-4">
          Source: CMA Fuel Finder / BEIS pump price data. Updated regularly.
        </p>
      </div>

      {/* What this means */}
      <div className="space-y-8 text-ev-grey leading-relaxed mb-10">
        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            What current fuel prices mean for EV running costs
          </h2>
          <p className="mb-4">
            At 143.9p/litre for petrol, a car doing 40 MPG costs{" "}
            <strong className="text-navy">16.3p per mile</strong> in fuel.
            A car doing 50 MPG costs <strong className="text-navy">13.1p per mile</strong>.
            A diesel at 55 MPG costs <strong className="text-navy">12.6p per mile</strong>.
          </p>
          <p>
            At a standard 28p/kWh home tariff, an EV doing 3.5 miles/kWh costs{" "}
            <strong className="text-navy">8p per mile</strong>. On a dedicated overnight
            tariff at 7p/kWh, this drops to <strong className="text-navy">2p per mile</strong>.
          </p>
        </section>
      </div>

      {/* Monthly updates */}
      <section>
        <h2
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Monthly fuel price updates
        </h2>
        <div className="space-y-3">
          <Link
            href="/fuel-prices/june-2026"
            className="flex items-center justify-between p-4 border border-border-light rounded-xl hover:border-ev-blue/40 transition-colors"
          >
            <div>
              <p className="font-medium text-navy">June 2026</p>
              <p className="text-sm text-ev-grey">Petrol 143.9p · Diesel 151.9p</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-ev-grey">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="mt-10 bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-6">
        <p className="text-sm font-medium text-navy mb-2">
          See how today&apos;s fuel prices affect your running cost comparison
        </p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the cost calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" },
              { "@type": "ListItem", position: 2, name: "Fuel Prices", item: "https://electricvspetrol.co.uk/fuel-prices" },
            ],
          }),
        }}
      />
    </div>
  );
}
