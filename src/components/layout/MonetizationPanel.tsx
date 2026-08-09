"use client";

import { affiliateLinks } from "@/lib/data/affiliates";

interface MonetizationPanelProps {
  evName?: string;
}

export default function MonetizationPanel({ evName }: MonetizationPanelProps) {
  const evSubject = evName ? evName : "your new electric car";

  return (
    <section className="my-10" aria-label="EV owner savings & offers">
      <div className="mb-6">
        <h2 
          className="text-2xl font-bold text-navy font-display mb-1"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Maximize Your EV Savings
        </h2>
        <p className="text-sm text-ev-grey">
          Motoring experts recommend checking these three high-value offers to lock in the lowest cost of ownership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ── Card 1: Octopus Energy ── */}
        <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0e1b3d] to-[#1d1233] border border-fuchsia-500/20 p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-fuchsia-500/10 hover:shadow-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/5 rounded-full blur-2xl group-hover:bg-fuchsia-500/10 transition-colors duration-300" />
          
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-400 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full px-2.5 py-1 mb-4">
              <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-pulse" />
              £50 Welcome Bonus
            </div>
            
            <h3 
              className="text-lg font-bold text-white mb-2 font-display"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              Intelligent Octopus EV Tariff
            </h3>
            
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Charge {evName ? `your ${evName}` : "your EV"} at the UK's lowest overnight rate of <strong className="text-fuchsia-300">7p/kWh</strong>. 
            </p>

            <ul className="text-xs text-slate-400 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-fuchsia-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>Save up to £800/yr vs standard rates</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-fuchsia-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>Automatic smart home charging</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-fuchsia-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>100% green energy certification</span>
              </li>
            </ul>
          </div>

          <a 
            href={affiliateLinks.octopusEnergy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 transition-all shadow-md group-hover:scale-[1.02]"
          >
            Claim £50 Credit & Switch →
          </a>
        </div>

        {/* ── Card 2: Charger Installation ── */}
        <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#fafbfe] to-[#edf3fe] border border-ev-blue/15 p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-ev-blue/10 hover:shadow-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-ev-blue/5 rounded-full blur-2xl group-hover:bg-ev-blue/10 transition-colors duration-300" />

          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-ev-blue bg-ev-blue/8 border border-ev-blue/15 rounded-full px-2.5 py-1 mb-4">
              <span className="w-1.5 h-1.5 bg-ev-blue rounded-full" />
              Fully Approved
            </div>

            <h3 
              className="text-lg font-bold text-navy mb-2 font-display"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              Smart Home Charger Installation
            </h3>

            <p className="text-xs text-ev-grey mb-4 leading-relaxed">
              Standard professional installation quote from <strong className="text-ev-blue">£899</strong> (Ohme, Pod Point, Hypervolt).
            </p>

            <ul className="text-xs text-ev-grey space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ev-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>Fast 7kW charging (3x vs wall socket)</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ev-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>Lock, schedule & monitor via smartphone</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ev-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>OZEV homeowner grant checker</span>
              </li>
            </ul>
          </div>

          <a 
            href={affiliateLinks.chargerInstallation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-ev-blue to-blue-600 hover:from-blue-500 hover:to-blue-600 transition-all shadow-md group-hover:scale-[1.02]"
          >
            Get Charger Quote →
          </a>
        </div>

        {/* ── Card 3: Salary Sacrifice ── */}
        <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b132b] to-[#122245] border border-emerald-500/20 p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/10 hover:shadow-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-300" />

          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1 mb-4">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              Tax Saving Offer
            </div>

            <h3 
              className="text-lg font-bold text-white mb-2 font-display"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              EV Salary Sacrifice Lease
            </h3>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Lease {evName ? `a ${evName}` : "an EV"} directly from pre-tax gross salary and save up to <strong className="text-emerald-300">45%</strong>.
            </p>

            <ul className="text-xs text-slate-400 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>Zero upfront deposit required</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>Includes insurance, road tax & servicing</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>Locked 2% BiK company car rate</span>
              </li>
            </ul>
          </div>

          <a 
            href={affiliateLinks.salarySacrifice.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md group-hover:scale-[1.02]"
          >
            Calculate Lease Savings →
          </a>
        </div>
      </div>
    </section>
  );
}
