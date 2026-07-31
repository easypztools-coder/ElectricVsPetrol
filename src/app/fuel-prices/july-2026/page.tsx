import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Fuel Prices July 2026: Petrol 153.5p, Diesel 168.6p — EV Running Cost Impact",
  description:
    "UK petrol prices jumped to 153.5p/litre in July 2026 and diesel to 168.6p/litre. At these prices a 40 MPG petrol car costs 17.4p per mile — and a home-charging EV costs 7.5p per mile.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/fuel-prices/july-2026",
  },
};

export default function FuelPricesJuly2026Page() {
  const PETROL = 153.5;
  const DIESEL = 168.6;
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
          <li aria-current="page" className="text-navy">July 2026</li>
        </ol>
      </nav>

      <div className="mb-2">
        <span className="text-xs font-medium bg-ev-amber/10 text-ev-amber px-2.5 py-0.5 rounded-full">
          July 2026
        </span>
      </div>
      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        UK Fuel Prices July 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Last updated: 30 July 2026 · Source: RAC Fuel Watch
      </p>

      <div className="bg-ev-amber/5 border border-ev-amber/20 rounded-2xl p-5 mb-8">
        <p className="text-sm text-navy leading-relaxed">
          Petrol and diesel both rose sharply through July — diesel climbed
          around 4p in ten days, petrol nearly 3p — while the Ofgem price cap
          that took effect on 1 July cut the standard home electricity rate
          from 28p/kWh to 26.1p/kWh. The combination has pushed the EV home-charging
          advantage to its widest point in some time. Read the{" "}
          <Link href="/blog/petrol-prices-spike-electricity-cap-falls-july-2026" className="text-ev-blue hover:underline">
            full breakdown on the blog
          </Link>.
        </p>
      </div>

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
            What July 2026 fuel prices mean per mile
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
                  <td className="py-2.5 px-4 font-medium text-navy">EV — home charging (26.1p/kWh, 3.5 mi/kWh)</td>
                  <td className="py-2.5 px-4 text-right text-ev-green font-bold">7.5p</td>
                  <td className="py-2.5 px-4 text-right text-ev-green font-bold">£746</td>
                </tr>
                <tr className="bg-ev-green/5">
                  <td className="py-2.5 px-4 font-medium text-navy">EV — overnight tariff (7p/kWh, 3.5 mi/kWh)</td>
                  <td className="py-2.5 px-4 text-right text-ev-green font-bold">2.0p</td>
                  <td className="py-2.5 px-4 text-right text-ev-green font-bold">£200</td>
                </tr>
                <tr className="bg-ev-amber/5">
                  <td className="py-2.5 px-4 font-medium text-navy">EV — public rapid only (79p/kWh, 3.5 mi/kWh)</td>
                  <td className="py-2.5 px-4 text-right text-ev-amber font-bold">22.6p</td>
                  <td className="py-2.5 px-4 text-right text-ev-amber font-bold">£2,257</td>
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
            Context: a good month for home charging, a bad one for public-only EV drivers
          </h2>
          <p className="mb-4">
            UK petrol prices peaked at 191p/litre in July 2022 following the
            Russian invasion of Ukraine and subsequent energy market disruption,
            then fell and stabilised through 2023–2025. The rise to 153.5p/litre
            this month is the sharpest short-term increase since that period.
          </p>
          <p className="mb-4">
            At current prices the running cost saving of a home-charging EV versus
            a 40 MPG petrol car is approximately 9.9p per mile — or around £990
            per year at 10,000 miles — noticeably wider than a month ago, mostly
            because the Ofgem price cap cut the standard electricity rate at the
            same time petrol rose.
          </p>
          <p>
            The picture is very different for drivers who rely entirely on public
            rapid charging: at 79p/kWh, averaged across UK rapid and ultra-rapid
            networks in mid-2026, an EV without home charging access now costs
            more per mile than most petrol cars. Whether an EV saves you money in
            July 2026 depends more than ever on whether you can charge at home.
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
          <li><Link href="/blog/petrol-prices-spike-electricity-cap-falls-july-2026" className="text-ev-blue hover:underline">Petrol prices spike, electricity cap falls — what it means for EV savings →</Link></li>
          <li><Link href="/fuel-prices/june-2026" className="text-ev-blue hover:underline">June 2026 fuel prices (previous month) →</Link></li>
          <li><Link href="/guides/local-fuel-prices" className="text-ev-blue hover:underline">Why local fuel prices matter for EV savings →</Link></li>
          <li><Link href="/faq/is-ev-cheaper-than-petrol-uk" className="text-ev-blue hover:underline">Is an EV cheaper than petrol in the UK? →</Link></li>
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
              { "@type": "ListItem", position: 3, name: "July 2026", item: "https://electricvspetrol.co.uk/fuel-prices/july-2026" },
            ],
          }),
        }}
      />
    </div>
  );
}
