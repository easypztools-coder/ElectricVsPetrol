import type { Metadata } from "next";
import Link from "next/link";
import { evVehicles, iceVehicles } from "@/lib/data/vehicles";

export const metadata: Metadata = {
  title: "UK EV Running Cost Index: Q3 2026 Report | ElectricVsPetrol",
  description:
    "Independent, programmatic index of electric car running costs vs petrol & diesel in the UK. Average pence-per-mile metrics, top savings, and press stats.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-running-cost-index-q3-2026",
  },
};

// ── Constants ──────────────────────────────────────────────────────────────
const LITRES_PER_GALLON = 4.54609;
const PETROL_PRICE = 153.5; // p/litre, July 2026
const DIESEL_PRICE = 168.6; // p/litre, July 2026
const HOME_RATE = 26.1;     // p/kWh (Ofgem price cap July-Sept 2026)
const NIGHT_RATE = 7.0;     // p/kWh (Overnight EV tariff average)
const PUBLIC_RATE = 79.0;   // p/kWh (Public rapid average)

export default function EvRunningCostIndexPage() {
  // ── Database Computations ──────────────────────────────────────────────────
  const validEvs = evVehicles.filter((e) => e.milesPerKwh > 0);
  const avgEvMilesPerKwh = validEvs.reduce((acc, cur) => acc + cur.milesPerKwh, 0) / validEvs.length;

  const validPetrol = iceVehicles.filter((i) => i.fuelType === "petrol");
  const avgPetrolMpg = validPetrol.reduce((acc, cur) => acc + cur.realWorldMpg, 0) / validPetrol.length;

  const validDiesel = iceVehicles.filter((i) => i.fuelType === "diesel");
  const avgDieselMpg = validDiesel.reduce((acc, cur) => acc + cur.realWorldMpg, 0) / validDiesel.length;

  // Running costs per mile (ppm)
  const evPpmHome = HOME_RATE / avgEvMilesPerKwh;
  const evPpmNight = NIGHT_RATE / avgEvMilesPerKwh;
  const evPpmPublic = PUBLIC_RATE / avgEvMilesPerKwh;
  const evPpmBlended = (0.8 * HOME_RATE + 0.2 * PUBLIC_RATE) / avgEvMilesPerKwh; // 80% home, 20% public

  const petrolPpm = (PETROL_PRICE * LITRES_PER_GALLON) / avgPetrolMpg;
  const dieselPpm = (DIESEL_PRICE * LITRES_PER_GALLON) / avgDieselMpg;

  // Annual costs at 10,000 miles
  const annualPetrol = petrolPpm * 100;
  const annualDiesel = dieselPpm * 100;
  const annualEvBlended = evPpmBlended * 100;
  const annualEvNight = evPpmNight * 100;

  const avgAnnualSaving = annualPetrol - annualEvBlended;
  const maxAnnualSaving = annualPetrol - annualEvNight;

  // Top 3 most efficient EVs from database
  const topEvs = [...validEvs]
    .sort((a, b) => b.milesPerKwh - a.milesPerKwh)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2">
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
          <li aria-current="page" className="text-navy font-medium">
            EV Cost Index Q3 2026
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-ev-blue bg-ev-blue/10 px-3 py-1 rounded-full mb-3">
          UK Market Data Report
        </div>
        <h1 
          className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          UK EV Running Cost Index: Q3 2026 Report
        </h1>
        <p className="text-lg text-ev-grey leading-relaxed max-w-3xl">
          An independent, database-led calculation of real-world electric car running costs versus petrol and diesel alternatives. Reflects fuel prices and Ofgem electricity price cap rates for Q3 2026.
        </p>
      </header>

      {/* ── Key Insights Banners ── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" aria-label="Key index metrics">
        <div className="bg-white border border-border-light rounded-2xl p-6 shadow-sm">
          <p className="text-xs font-semibold text-ev-grey uppercase tracking-wide mb-1">Avg. EV Cost per Mile</p>
          <p 
            className="text-4xl font-bold text-ev-blue font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {evPpmBlended.toFixed(1)}p
          </p>
          <p className="text-xs text-ev-grey mt-2">
            Blended tariff average (80% home charging, 20% public rapid).
          </p>
        </div>

        <div className="bg-white border border-border-light rounded-2xl p-6 shadow-sm">
          <p className="text-xs font-semibold text-ev-grey uppercase tracking-wide mb-1">Avg. Petrol Cost per Mile</p>
          <p 
            className="text-4xl font-bold text-ev-amber font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            {petrolPpm.toFixed(1)}p
          </p>
          <p className="text-xs text-ev-grey mt-2">
            Based on UK petrol average of {PETROL_PRICE}p/litre and {avgPetrolMpg.toFixed(1)} real MPG.
          </p>
        </div>

        <div className="bg-ev-green/5 border border-ev-green/20 rounded-2xl p-6 shadow-sm">
          <p className="text-xs font-semibold text-ev-green uppercase tracking-wide mb-1">Average Annual Saving</p>
          <p 
            className="text-4xl font-bold text-ev-green font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            £{Math.round(avgAnnualSaving).toLocaleString("en-GB")}
          </p>
          <p className="text-xs text-ev-grey mt-2">
            Saved per year at 10,000 miles compared to average petrol vehicle.
          </p>
        </div>
      </section>

      {/* ── Graphic Visual Breakdown ── */}
      <section className="bg-white border border-border-light rounded-2xl p-6 sm:p-8 mb-12" aria-label="Visual cost breakdown">
        <h2 
          className="text-2xl font-bold text-navy mb-6 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Running Cost Comparison: Pence Per Mile
        </h2>
        
        <div className="space-y-6">
          {/* Petrol */}
          <div>
            <div className="flex justify-between text-sm font-semibold text-navy mb-2">
              <span>Average Petrol Vehicle ({avgPetrolMpg.toFixed(0)} MPG)</span>
              <span className="text-ev-amber">{petrolPpm.toFixed(1)}p / mile</span>
            </div>
            <div className="w-full bg-border-light h-3.5 rounded-full overflow-hidden">
              <div className="bg-ev-amber h-full rounded-full" style={{ width: "100%" }} />
            </div>
          </div>

          {/* Diesel */}
          <div>
            <div className="flex justify-between text-sm font-semibold text-navy mb-2">
              <span>Average Diesel Vehicle ({avgDieselMpg.toFixed(0)} MPG)</span>
              <span className="text-ev-grey">{dieselPpm.toFixed(1)}p / mile</span>
            </div>
            <div className="w-full bg-border-light h-3.5 rounded-full overflow-hidden">
              <div className="bg-ev-grey h-full rounded-full" style={{ width: `${(dieselPpm / petrolPpm) * 100}%` }} />
            </div>
          </div>

          {/* EV Blended */}
          <div>
            <div className="flex justify-between text-sm font-semibold text-navy mb-2">
              <span>Average EV (Blended: 80% Home, 20% Public)</span>
              <span className="text-ev-blue">{evPpmBlended.toFixed(1)}p / mile</span>
            </div>
            <div className="w-full bg-border-light h-3.5 rounded-full overflow-hidden">
              <div className="bg-ev-blue h-full rounded-full" style={{ width: `${(evPpmBlended / petrolPpm) * 100}%` }} />
            </div>
          </div>

          {/* EV Smart Tariff */}
          <div>
            <div className="flex justify-between text-sm font-semibold text-navy mb-2">
              <span>Average EV (100% Overnight Smart Tariff @ 7p/kWh)</span>
              <span className="text-ev-green">{evPpmNight.toFixed(1)}p / mile</span>
            </div>
            <div className="w-full bg-border-light h-3.5 rounded-full overflow-hidden">
              <div className="bg-ev-green h-full rounded-full" style={{ width: `${(evPpmNight / petrolPpm) * 100}%` }} />
            </div>
          </div>
        </div>

        <p className="text-xs text-ev-grey mt-6 leading-relaxed">
          Calculations are derived from {validEvs.length} electric vehicles and {iceVehicles.length} combustion vehicles in our database. Petrol price: {PETROL_PRICE}p/litre. Diesel price: {DIESEL_PRICE}p/litre. Electricity: 26.1p/kWh standard, 7p/kWh overnight.
        </p>
      </section>

      {/* ── Table: Comprehensive Cost Breakdown ── */}
      <section className="mb-12">
        <h2 
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Programmatic Cost index Table
        </h2>
        <div className="overflow-x-auto border border-border-light rounded-2xl bg-white">
          <table className="w-full text-sm border-collapse text-left">
            <thead>
              <tr className="bg-off-white border-b border-border-light text-xs font-semibold text-navy uppercase tracking-wider">
                <th className="p-4">Fuel & Charging Scenario</th>
                <th className="p-4 text-right">Pence/Mile</th>
                <th className="p-4 text-right">Cost per 10k Miles</th>
                <th className="p-4 text-right text-ev-green">Annual Saving</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              <tr>
                <td className="p-4 font-medium text-navy">Average Petrol Car</td>
                <td className="p-4 text-right font-semibold text-ev-amber">{petrolPpm.toFixed(1)}p</td>
                <td className="p-4 text-right">£{Math.round(annualPetrol).toLocaleString("en-GB")}</td>
                <td className="p-4 text-right text-ev-grey">—</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-navy">Average Diesel Car</td>
                <td className="p-4 text-right font-semibold text-ev-grey">{dieselPpm.toFixed(1)}p</td>
                <td className="p-4 text-right">£{Math.round(annualDiesel).toLocaleString("en-GB")}</td>
                <td className="p-4 text-right text-ev-grey">—</td>
              </tr>
              <tr className="bg-ev-blue/5">
                <td className="p-4 font-medium text-navy">EV Blended Tariff (80/20)</td>
                <td className="p-4 text-right font-semibold text-ev-blue">{evPpmBlended.toFixed(1)}p</td>
                <td className="p-4 text-right">£{Math.round(annualEvBlended).toLocaleString("en-GB")}</td>
                <td className="p-4 text-right font-bold text-ev-green">
                  +£{Math.round(avgAnnualSaving).toLocaleString("en-GB")}
                </td>
              </tr>
              <tr className="bg-ev-green/5">
                <td className="p-4 font-medium text-navy">EV Smart Overnight Tariff (100% Home)</td>
                <td className="p-4 text-right font-semibold text-ev-green">{evPpmNight.toFixed(1)}p</td>
                <td className="p-4 text-right">£{Math.round(annualEvNight).toLocaleString("en-GB")}</td>
                <td className="p-4 text-right font-bold text-ev-green">
                  +£{Math.round(maxAnnualSaving).toLocaleString("en-GB")}
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-navy">EV Standard Home Charging (100% Home)</td>
                <td className="p-4 text-right font-semibold text-navy">{evPpmHome.toFixed(1)}p</td>
                <td className="p-4 text-right">£{Math.round(evPpmHome * 100).toLocaleString("en-GB")}</td>
                <td className="p-4 text-right font-bold text-ev-green">
                  +£{Math.round(annualPetrol - (evPpmHome * 100)).toLocaleString("en-GB")}
                </td>
              </tr>
              <tr className="bg-ev-amber/5">
                <td className="p-4 font-medium text-navy">EV Public Rapid Charging Only (100% Public)</td>
                <td className="p-4 text-right font-semibold text-ev-amber">{evPpmPublic.toFixed(1)}p</td>
                <td className="p-4 text-right">£{Math.round(evPpmPublic * 100).toLocaleString("en-GB")}</td>
                <td className={`p-4 text-right font-bold ${annualPetrol - (evPpmPublic * 100) > 0 ? "text-ev-green" : "text-ev-amber"}`}>
                  {annualPetrol - (evPpmPublic * 100) > 0 ? "+" : "−"}
                  £{Math.round(Math.abs(annualPetrol - (evPpmPublic * 100))).toLocaleString("en-GB")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Top 3 Most Efficient Models ── */}
      <section className="mb-12">
        <h2 
          className="text-2xl font-bold text-navy mb-4 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Top 3 Most Cost-Effective EVs (Q3 2026)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topEvs.map((ev, index) => {
            const ppmVal = HOME_RATE / ev.milesPerKwh;
            const annCost = ppmVal * 100;
            const saving = annualPetrol - annCost;
            return (
              <div key={ev.slug} className="bg-white border border-border-light rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-2xl font-black text-slate-100 select-none">
                  #{index + 1}
                </div>
                <h3 className="text-base font-bold text-navy mb-1">{ev.displayName}</h3>
                <p className="text-xs text-ev-grey mb-3">{ev.segment}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-ev-grey">Efficiency:</span>
                    <span className="font-semibold text-navy">{ev.milesPerKwh} mi/kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ev-grey">Pence/Mile:</span>
                    <span className="font-semibold text-ev-blue">{ppmVal.toFixed(1)}p</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ev-grey">Annual Saving:</span>
                    <span className="font-semibold text-ev-green">£{Math.round(saving)}</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border-light">
                  <Link href={`/ev/${ev.slug}`} className="text-xs font-semibold text-ev-blue hover:underline">
                    View cost breakdown →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Press & Journalist Toolkit (Link Magnet) ── */}
      <section className="bg-navy rounded-2xl p-6 sm:p-8 text-white shadow-xl">
        <h2 
          className="text-xl font-bold mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Motoring Press & Journalist Toolkit
        </h2>
        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          Need independent data or quotes regarding UK EV running costs? Motoring journalists and news sites are free to cite the calculations and figures from this index.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ev-blue mb-3">Key Stats to Copy & Cite:</h3>
          <ul className="text-xs text-slate-200 space-y-2.5">
            <li>
              • <strong>Average EV cost per mile (UK blended rate):</strong> {evPpmBlended.toFixed(1)}p per mile (vs {petrolPpm.toFixed(1)}p for petrol).
            </li>
            <li>
              • <strong>Standard home charging cost:</strong> {evPpmHome.toFixed(1)}p per mile.
            </li>
            <li>
              • <strong>Overnight smart EV tariff rate:</strong> {evPpmNight.toFixed(1)}p per mile (saves £{Math.round(maxAnnualSaving)}/yr vs petrol).
            </li>
            <li>
              • <strong>Average public rapid charging cost:</strong> {evPpmPublic.toFixed(1)}p per mile.
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ev-blue bg-white hover:bg-slate-100 transition-colors px-4 py-2 rounded-xl"
          >
            Use Interactive Calculator
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

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
              {
                "@type": "ListItem",
                position: 3,
                name: "UK EV Running Cost Index: Q3 2026 Report",
                item: "https://electricvspetrol.co.uk/guides/ev-running-cost-index-q3-2026",
              },
            ],
          }),
        }}
      />

      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "UK EV Running Cost Index: Q3 2026 Report",
            description:
              "An independent, database-led calculation of real-world electric car running costs versus petrol and diesel alternatives. Reflects fuel prices and Ofgem electricity price cap rates for Q3 2026.",
            url: "https://electricvspetrol.co.uk/guides/ev-running-cost-index-q3-2026",
            datePublished: "2026-07-01",
            dateModified: "2026-08-01",
            author: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
              logo: {
                "@type": "ImageObject",
                url: "https://electricvspetrol.co.uk/favicon.svg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://electricvspetrol.co.uk/guides/ev-running-cost-index-q3-2026",
            },
            image: "https://electricvspetrol.co.uk/opengraph-image",
          }),
        }}
      />
    </div>
  );
}
