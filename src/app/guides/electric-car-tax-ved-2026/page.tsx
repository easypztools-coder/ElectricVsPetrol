import type { Metadata } from "next";
import Link from "next/link";
import { RelatedContent } from "@/components/sections/RelatedContent";

export const metadata: Metadata = {
  title: "Electric Car Tax (VED) 2026: What EV Owners Now Pay | ElectricVsPetrol",
  description:
    "Electric cars stopped being exempt from Vehicle Excise Duty (VED) on 1 April 2025. Here's what EV owners actually pay now, how it compares to petrol VED, and the £40,000 expensive car supplement explained.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/electric-car-tax-ved-2026",
  },
};

const faqItems = [
  {
    q: "Do electric cars pay road tax (VED) in the UK now?",
    a: "Yes. Since 1 April 2025, electric cars lost their long-standing VED exemption. New EVs registered from that date pay the lowest first-year rate, then move onto the standard annual rate from their second year, exactly like petrol and diesel cars. EVs registered before April 2025 that were previously VED-free also moved onto the standard rate from April 2025.",
  },
  {
    q: "How much VED do electric cars pay?",
    a: "New EVs registered on or after 1 April 2025 pay the lowest first-year VED rate (the same band that applies to the lowest-emission petrol and hybrid cars), then the standard flat annual rate from year two onward — the same standard rate that applies to almost every car regardless of fuel type. Rates are set in the Budget and typically rise each April in line with RPI, so check GOV.UK for the exact figure in the current tax year rather than relying on a fixed number here.",
  },
  {
    q: "Do EVs over £40,000 pay the expensive car supplement?",
    a: "Yes. From 1 April 2025, electric cars with a list price over £40,000 are liable for the expensive car supplement (sometimes called the 'luxury car tax') for five years starting from their second year of registration, on top of the standard rate — the same rule that has applied to expensive petrol and diesel cars since 2017. Because many EVs are priced above £40,000, this supplement affects a larger share of EV buyers than petrol buyers.",
  },
  {
    q: "Does the VED change affect the running-cost saving of switching to an EV?",
    a: "It reduces it slightly but doesn't come close to reversing it. VED for most cars, EV or petrol, is a few hundred pounds a year — small next to the £800–£1,600 a year most home-charging EV owners save on fuel versus petrol. The bigger practical impact of the change is on used-EV buyers, who should factor VED into total cost of ownership for the first time, and on buyers close to the £40,000 threshold, where crossing it adds five years of extra supplement.",
  },
];

export default function ElectricCarTaxVedPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Electric Car Tax (VED) 2026</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        Electric Car Tax (VED) 2026: What EV Owners Now Pay
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Last updated: August 2026 · VED rules changed 1 April 2025
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-8">
        <p className="text-xs font-semibold text-ev-blue uppercase tracking-wide mb-2">Quick answer</p>
        <p className="text-sm text-navy leading-relaxed">
          Electric cars are no longer exempt from Vehicle Excise Duty. Since 1 April 2025, new EVs pay the lowest first-year rate, then the same standard flat annual rate as petrol and diesel cars from year two. EVs priced over £40,000 also pay the expensive car supplement for five years, just like expensive petrol cars have since 2017. It&apos;s a real cost, but a small one next to typical fuel savings.
        </p>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Why EVs pay VED now</h2>
          <p className="mb-4">For years, zero-emission cars paid £0 VED as an incentive to encourage EV adoption. That exemption ended on 1 April 2025, announced at the 2022 Autumn Statement and confirmed in subsequent Budgets: as EV market share grew, the Treasury judged the exemption was costing too much in lost revenue to justify continuing it indefinitely, and moved EVs onto the same VED structure as every other car.</p>
          <p>The change applies in three ways: new EVs registered from 1 April 2025 pay VED from day one; EVs first registered between 1 April 2017 and 31 March 2025 (previously £0/year) moved onto the standard rate from April 2025; and EVs registered before 1 April 2017 moved onto a small flat annual rate. If your EV was VED-free before, it almost certainly isn&apos;t anymore.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>How much do EVs actually pay?</h2>
          <p className="mb-4">The structure has two parts, and it&apos;s the same structure petrol and diesel cars already used:</p>
          <div className="overflow-x-auto rounded-xl border border-border-light my-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-off-white">
                  <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">VED component</th>
                  <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">Applies to</th>
                  <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">EV treatment since April 2025</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-2.5 px-4 font-medium text-navy">First-year rate</td>
                  <td className="py-2.5 px-4">New cars, paid once at registration</td>
                  <td className="py-2.5 px-4">Lowest band — the same rate as the lowest-emission petrol/hybrid cars</td>
                </tr>
                <tr className="bg-off-white/50">
                  <td className="py-2.5 px-4 font-medium text-navy">Standard rate</td>
                  <td className="py-2.5 px-4">Every car, from year two onward</td>
                  <td className="py-2.5 px-4">Same flat annual rate as petrol/diesel/hybrid cars</td>
                </tr>
                <tr className="bg-ev-amber/5">
                  <td className="py-2.5 px-4 font-medium text-navy">Expensive car supplement</td>
                  <td className="py-2.5 px-4">Cars with list price over £40,000</td>
                  <td className="py-2.5 px-4">Applies for 5 years from year two, same as petrol/diesel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            Both the standard rate and the expensive car supplement are reviewed in most Budgets and typically move with RPI inflation each April, so the exact pound figure changes from one tax year to the next for every car, not just EVs. Rather than quote a number here that may already be out of date, check the current rates directly on{" "}
            <a href="https://www.gov.uk/vehicle-tax-rate-tables" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK&apos;s vehicle tax rate tables</a>, or use the{" "}
            <a href="https://www.gov.uk/check-vehicle-tax" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">vehicle tax checker</a> with your specific registration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>The £40,000 threshold catches more EVs than petrol cars</h2>
          <p className="mb-4">The expensive car supplement isn&apos;t new — it&apos;s applied to petrol and diesel cars over £40,000 since 2017. What&apos;s new is that EVs are no longer exempt from it. Because a larger proportion of EVs on sale (particularly larger SUVs and premium saloons) are priced above £40,000 than the equivalent petrol market, this rule affects EV buyers disproportionately compared with how it affected petrol buyers.</p>
          <p>The list price used for the threshold is the manufacturer&apos;s published price before any discount, not what you actually paid — so a heavily discounted £42,000 EV can still trigger the supplement even if you paid under £40,000 for it. If you&apos;re choosing between two similarly priced trims either side of the threshold, it&apos;s worth checking whether crossing it adds five years of supplement to your running costs.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Does this change the EV vs petrol running-cost picture?</h2>
          <p className="mb-4">Barely. VED for most cars — EV or petrol — now sits in the low hundreds of pounds a year, a fraction of the £800–£1,600 a year most home-charging EV owners save on fuel compared with an equivalent petrol car. The change removes one of the smaller EV-specific tax advantages, but it doesn&apos;t touch the two things that actually drive the comparison: your electricity tariff and how many miles you drive.</p>
          <p>Where it matters more is for company car and salary sacrifice drivers, because VED sits alongside — and is separate from — Benefit-in-Kind (BIK) tax, which remains dramatically lower for EVs than petrol cars and is the bigger financial lever for fleet and salary sacrifice decisions.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Where to go next</h2>
          <p>If you&apos;re comparing an EV against a petrol car through work, read the <Link href="/guides/ev-company-car-tax-bik-2026" className="text-ev-blue hover:underline">company car tax (BIK) guide</Link> — it&apos;s the tax that actually moves the needle for most drivers. For the full running-cost picture including fuel and electricity, use the <Link href="/#calculator" className="text-ev-blue hover:underline">main calculator</Link>.</p>
        </section>
      </div>

      <p className="mt-8 text-xs text-ev-grey/70">
        Sources:{" "}
        <a href="https://www.gov.uk/vehicle-tax-rate-tables" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK vehicle tax rate tables</a>
        {" · "}
        <a href="https://www.gov.uk/vehicle-tax" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK vehicle tax overview</a>
      </p>

      <section aria-labelledby="faq-heading" className="mt-12 pt-10 border-t border-border-light">
        <h2 id="faq-heading" className="text-2xl font-bold text-navy mb-6 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Frequently asked questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (<div key={item.q}><h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3><p className="text-sm text-ev-grey leading-relaxed">{item.a}</p></div>))}
        </div>
      </section>

      <RelatedContent
        links={[
          { href: "/guides/ev-company-car-tax-bik-2026", label: "EV Company Car Tax (BIK) 2026" },
          { href: "/guides/ev-salary-sacrifice-uk", label: "EV Salary Sacrifice UK Guide" },
          { href: "/guides/ev-depreciation-vs-petrol", label: "EV vs Petrol Depreciation" },
          { href: "/faq/is-ev-cheaper-than-petrol-uk", label: "Is an EV cheaper than petrol in the UK?" },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" }, { "@type": "ListItem", position: 3, name: "Electric Car Tax (VED) 2026", item: "https://electricvspetrol.co.uk/guides/electric-car-tax-ved-2026" } ] }) }} />
    </div>
  );
}
