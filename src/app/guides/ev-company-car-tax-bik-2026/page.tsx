import type { Metadata } from "next";
import Link from "next/link";
import { RelatedContent } from "@/components/sections/RelatedContent";

export const metadata: Metadata = {
  title: "EV Company Car Tax (BIK) 2026: Rates & Worked Examples | ElectricVsPetrol",
  description:
    "Electric company cars are taxed at just 4% Benefit-in-Kind in the 2026/27 tax year versus up to 37% for petrol — the single biggest financial reason company car drivers switch to EVs. Full rates and worked examples.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-company-car-tax-bik-2026",
  },
};

const faqItems = [
  {
    q: "What is the BIK rate for electric cars in 2026/27?",
    a: "4% for the 2026/27 tax year (6 April 2026 to 5 April 2027). It was 2% from 2022/23 to 2024/25, then rose to 3% for 2025/26 and 4% for 2026/27, under a schedule of 1 percentage point per year set out by HMRC. It is due to keep rising by 1 point a year in subsequent years — always check the current-year rate on GOV.UK before running the numbers, since future years beyond what's currently legislated could change at a future Budget.",
  },
  {
    q: "How is company car tax calculated for an EV?",
    a: "BIK tax = P11D value (list price including VAT and options, minus any capital contribution) × BIK percentage (4% for a pure EV in 2026/27) × your marginal income tax rate (20%, 40%, or 45%). For example, a £45,000 EV: £45,000 × 4% = £1,800 taxable benefit. A 40% taxpayer pays 40% of that in tax — £720 a year, or £60 a month.",
  },
  {
    q: "How much less tax do you pay on an EV company car than petrol?",
    a: "Substantially less. A petrol car's BIK percentage is based on CO2 emissions and can reach up to 37% for the highest-emission cars — nearly ten times the EV rate. On a like-for-like £45,000 car, a 40% taxpayer might pay £720/year in BIK tax on an EV (at 4%) versus £6,660/year on a high-emission petrol equivalent (at 37%) — a difference of around £5,900 a year, before any running-cost savings.",
  },
  {
    q: "Does BIK tax apply to salary sacrifice EV leases too?",
    a: "Yes — salary sacrifice EV schemes are taxed as a company car benefit using the same BIK percentage and P11D value rules described here. The salary sacrifice saving comes from paying for the lease out of pre-tax and pre-National-Insurance salary, on top of the low EV BIK rate; the two savings stack. See our dedicated salary sacrifice guide for how that calculation works.",
  },
  {
    q: "Do plug-in hybrids (PHEVs) get the same low BIK rate as pure EVs?",
    a: "No. PHEV BIK rates depend on both CO2 emissions and electric-only range, and sit well above the pure-EV rate — typically somewhere in the high single digits to mid-teens percent depending on the model's official electric range. Pure battery-electric vehicles get the lowest band; PHEVs do not.",
  },
];

export default function EvCompanyCarTaxBikPage() {
  const p11dExample = 45000;
  const evPercent = 0.04;
  const petrolPercent = 0.37;
  const higherRate = 0.4;

  const evBenefit = p11dExample * evPercent;
  const petrolBenefit = p11dExample * petrolPercent;
  const evTax = Math.round(evBenefit * higherRate);
  const petrolTax = Math.round(petrolBenefit * higherRate);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">EV Company Car Tax (BIK) 2026</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        EV Company Car Tax (BIK) 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Updated August 2026 · Covers the 2026/27 tax year
      </p>

      <div className="bg-ev-green/5 border border-ev-green/30 rounded-2xl p-5 mb-8">
        <p className="text-xs font-semibold text-ev-green uppercase tracking-wide mb-2">Quick answer</p>
        <p className="text-sm text-navy leading-relaxed">
          Pure electric company cars are taxed at just <strong>4% Benefit-in-Kind (BIK)</strong> for the 2026/27 tax year, rising 1 percentage point each year under HMRC&apos;s published schedule. Petrol and diesel cars are taxed on a sliding CO2-based scale up to 37%. For most company car drivers, this is the single biggest financial reason to choose an EV — often worth more than the fuel saving itself.
        </p>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>How BIK tax works</h2>
          <p className="mb-4">If your employer provides a car you can use privately, HMRC treats that as a taxable benefit. The amount you're taxed on — the "benefit in kind" — is calculated as the car's P11D value (roughly its list price including VAT and factory options, minus any capital contribution you make) multiplied by a BIK percentage set by the car's emissions. You then pay income tax on that benefit at your normal marginal rate: 20%, 40%, or 45%.</p>
          <p>The BIK percentage is where EVs and petrol cars diverge sharply. Petrol and diesel cars are banded by official CO2 emissions in g/km, rising in steps up to a maximum of 37% for the highest-emission cars. Pure electric cars — zero tailpipe emissions — sit in the lowest band on their own separate, much lower schedule.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>The EV BIK rate schedule</h2>
          <div className="overflow-x-auto rounded-xl border border-border-light my-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-off-white">
                  <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">Tax year</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">Pure EV BIK rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: "2022/23 – 2024/25", rate: "2%" },
                  { year: "2025/26", rate: "3%" },
                  { year: "2026/27", rate: "4%", current: true },
                  { year: "2027/28 (scheduled)", rate: "5%" },
                ].map((row) => (
                  <tr key={row.year} className={row.current ? "bg-ev-green/5" : "bg-white"}>
                    <td className="py-2.5 px-4 font-medium text-navy">{row.year}</td>
                    <td className={`py-2.5 px-4 text-right font-semibold ${row.current ? "text-ev-green" : "text-navy"}`}>{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            HMRC set this schedule out several years in advance specifically so employers and drivers could plan fleet and salary sacrifice decisions with confidence. Rates beyond what&apos;s currently legislated could still change at a future Budget, so always confirm the live rate on{" "}
            <a href="https://www.gov.uk/guidance/company-car-benefit-the-appropriate-percentage-480-appendix-2" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK&apos;s company car tax tables</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Worked example: EV vs high-emission petrol at £45,000</h2>
          <p className="mb-4">Take a £{p11dExample.toLocaleString("en-GB")} P11D value car and a 40% (higher-rate) taxpayer:</p>
          <div className="overflow-x-auto rounded-xl border border-border-light my-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-off-white">
                  <th className="text-left py-2.5 px-4 text-xs text-ev-grey font-medium">Car type</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">BIK rate</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">Taxable benefit</th>
                  <th className="text-right py-2.5 px-4 text-xs text-ev-grey font-medium">Annual tax (40%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-ev-green/5">
                  <td className="py-2.5 px-4 font-medium text-navy">Pure EV</td>
                  <td className="py-2.5 px-4 text-right font-semibold text-ev-green">4%</td>
                  <td className="py-2.5 px-4 text-right">£{evBenefit.toLocaleString("en-GB")}</td>
                  <td className="py-2.5 px-4 text-right font-bold text-ev-green">£{evTax.toLocaleString("en-GB")}</td>
                </tr>
                <tr className="bg-ev-amber/5">
                  <td className="py-2.5 px-4 font-medium text-navy">High-emission petrol</td>
                  <td className="py-2.5 px-4 text-right font-semibold text-ev-amber">37%</td>
                  <td className="py-2.5 px-4 text-right">£{petrolBenefit.toLocaleString("en-GB")}</td>
                  <td className="py-2.5 px-4 text-right font-bold text-ev-amber">£{petrolTax.toLocaleString("en-GB")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            That&apos;s a difference of roughly £{(petrolTax - evTax).toLocaleString("en-GB")} a year in tax alone on this example — before counting the fuel savings the same driver would also see from switching to an EV. This is why BIK is usually the dominant factor in a company car decision, bigger than the running-cost saving itself for most drivers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Salary sacrifice stacks on top</h2>
          <p>If your EV is provided through a salary sacrifice scheme rather than a traditional company car, the same BIK rules apply — but you also save income tax and National Insurance on the portion of salary you give up to fund the lease, because that amount never counts as taxable pay in the first place. The two savings — low BIK and pre-tax salary sacrifice — compound, which is why salary sacrifice EV schemes have become one of the most cost-effective ways for UK employees to get a new car. See the <Link href="/guides/ev-salary-sacrifice-uk" className="text-ev-blue hover:underline">salary sacrifice guide</Link> for the full calculation.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Where to go next</h2>
          <p>Read the <Link href="/guides/electric-car-tax-ved-2026" className="text-ev-blue hover:underline">VED guide</Link> for the separate road tax rules that also apply, or use the <Link href="/guides/ev-salary-sacrifice-calculator" className="text-ev-blue hover:underline">salary sacrifice calculator</Link> to combine BIK, salary sacrifice, and running-cost savings into one figure.</p>
        </section>
      </div>

      <p className="mt-8 text-xs text-ev-grey/70">
        Sources:{" "}
        <a href="https://www.gov.uk/guidance/company-car-benefit-the-appropriate-percentage-480-appendix-2" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK company car tax (480: Appendix 2)</a>
        {" · "}
        <a href="https://www.gov.uk/tax-company-benefits" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK: tax on company benefits</a>
      </p>

      <section aria-labelledby="faq-heading" className="mt-12 pt-10 border-t border-border-light">
        <h2 id="faq-heading" className="text-2xl font-bold text-navy mb-6 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Frequently asked questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (<div key={item.q}><h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3><p className="text-sm text-ev-grey leading-relaxed">{item.a}</p></div>))}
        </div>
      </section>

      <RelatedContent
        links={[
          { href: "/guides/ev-salary-sacrifice-uk", label: "EV Salary Sacrifice UK Guide" },
          { href: "/guides/ev-salary-sacrifice-calculator", label: "Salary Sacrifice EV Calculator" },
          { href: "/guides/electric-car-tax-ved-2026", label: "Electric Car Tax (VED) 2026" },
          { href: "/guides/best-ev-uk-2026", label: "Best EV UK 2026" },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" }, { "@type": "ListItem", position: 3, name: "EV Company Car Tax (BIK) 2026", item: "https://electricvspetrol.co.uk/guides/ev-company-car-tax-bik-2026" } ] }) }} />
    </div>
  );
}
