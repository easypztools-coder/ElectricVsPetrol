import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Fuel Prices June 2026: Petrol 143.9p, Diesel 151.9p — EV Running Cost Impact",
  description:
    "UK petrol prices averaged 143.9p/litre in June 2026 and diesel 151.9p/litre. At these prices a 40 MPG petrol car costs 16.3p per mile — and a home-charging EV costs 8p per mile.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/fuel-prices/june-2026",
  },
};

export default function FuelPricesJune2026Page() {
  const PETROL = 143.9;
  const DIESEL = 151.9;
  const LITRES_PER_GALLON = 4.54609;

  function petrolPpm(mpg: number, ppl: number) {
    return ((ppl / 100) * LITRES_PER_GALLON) / mpg * 100;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/fuel-prices" className="text-ev-blue hover:underline">Fuel Prices</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">June 2026</li>
        </ol>
      </nav>

      <div className="mb-2">
        <span className="text-xs font-medium bg-ev-amber/10 text-ev-amber px-2.5 py-0.5 rounded-full">
          June 2026
        </span>
      </div>
      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        UK Fuel Prices June 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Last updated: 19 June 2026 · Source: CMA Fuel Finder
      </p>

      {/* Price headline */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="border border-border-light rounded-2xl p-5 text-center">
          <p className="text-xs text-ev-grey mb-2">Unleaded petrol</p>
          <p className="text-4xl font-bold text-ev-amber">{PETROL}p</p>
          <p className="text-xs text-ev-grey mt-1">per litre · UK average</p>
        </div>
        <div className="border border-border-light rounded-2xl p-5 text-center">
          <p className="text-xs text-ev-grey mb-2">Diesel</p>
          <p className="text-4xl font-bold text-ev-amber">{DIESEL}p</p>
          <p className="text-xs text-ev-grey mt-1">per litre · UK average</p>
        </div>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            What June 2026 fuel prices mean per mile
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border-light">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-off-white">
                  <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">Fuel type / MPG</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">p/mile</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">Annual cost (10k mi)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Petrol — 50 MPG (efficient)", ppm: petrolPpm(50, PETROL) },
                  { label: "Petrol — 40 MPG (average)", ppm: petrolPpm(40, PETROL) },
                  { label: "Petrol — 30 MPG (older/SUV)", ppm: petrolPpm(30, PETROL) },
                  { label: "Diesel — 60 MPG (efficient)", ppm: petrolPpm(60, DIESEL) },
                  { label: "Diesel — 50 MPG (average)", ppm: petrolPpm(50, DIESEL) },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-off-white/50"}>
                    <td className="py-2.5 px-4 font-medium text-navy">{row.label}</td>
                    <td className="py-2.5 px-4 text-right text-ev-amber font-semibold">{row.ppm.toFixed(1)}p</td>
                    <td className="py-2.5 px-4 text-right text-ev-grey">£{Math.round(row.ppm * 10000 / 100)}</td>
                  </tr>
                ))}
                <tr className="bg-ev-green/5 border-t-2 border-ev-green/20">
                  <td className="py-2.5 px-4 font-medium text-navy">EV — home charging (28p/kWh, 3.5 mi/kWh)</td>
                  <td className="py-2.5 px-4 text-right text-ev-green font-bold">8.0p</td>
                  <td className="py-2.5 px-4 text-right text-ev-green font-bold">£800</td>
                </tr>
                <tr className="bg-ev-green/5">
                  <td className="py-2.5 px-4 font-medium text-navy">EV — overnight tariff (7p/kWh, 3.5 mi/kWh)</td>
                  <td className="py-2.5 px-4 text-right text-ev-green font-bold">2.0p</td>
                  <td className="py-2.5 px-4 text-right text-ev-green font-bold">£200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Context: UK fuel price history
          </h2>
          <p className="mb-4">
            UK petrol prices peaked at 191p/litre in July 2022 following the
            Russian invasion of Ukraine and subsequent energy market disruption.
            Prices fell through 2023 and have stabilised in the 140–155p/litre
            range through 2025 and into 2026.
          </p>
          <p>
            At current prices the running cost saving of an EV versus a 40 MPG
            petrol car is approximately 8.3p per mile — or £830 per year at
            10,000 miles. This saving was as high as £1,400 per year in 2022
            when petrol prices were near their peak.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Local fuel prices vary significantly
          </h2>
          <p className="mb-4">
            The UK averages above mask significant regional variation. Supermarket
            forecourts in major urban centres typically undercut the national average
            by 5–10p/litre. Rural and motorway service forecourts typically charge
            10–20p/litre more.
          </p>
          <p>
            The CMA Fuel Finder tool, which powers the local fuel price data on
            this site, allows you to see current prices at forecourts near any
            UK postcode.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-6">
        <p className="text-sm font-medium text-navy mb-2">
          Calculate your running cost saving at today&apos;s prices
        </p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the cost calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <div className="mt-10 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">Why local fuel prices matter for EV savings →</Link></li>
          <li><Link href="/faq/is-ev-cheaper-than-petrol-uk" className="text-ev-blue hover:underline">Is an EV cheaper than petrol in the UK? →</Link></li>
          <li><Link href="/guides/ev-vs-petrol-running-costs" className="text-ev-blue hover:underline">EV vs Petrol Running Costs guide →</Link></li>
        </ul>
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
              { "@type": "ListItem", position: 3, name: "June 2026", item: "https://electricvspetrol.co.uk/fuel-prices/june-2026" },
            ],
          }),
        }}
      />
    </div>
  );
}
