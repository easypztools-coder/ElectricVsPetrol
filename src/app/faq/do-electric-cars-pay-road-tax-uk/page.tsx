import type { Metadata } from "next";
import Link from "next/link";
import { RelatedContent } from "@/components/sections/RelatedContent";

export const metadata: Metadata = {
  title: "Do Electric Cars Pay Road Tax (VED) in the UK? 2026 Answer",
  description:
    "Do electric cars pay road tax in the UK? Since 1 April 2025, yes — here's the short answer and what changed.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/faq/do-electric-cars-pay-road-tax-uk",
  },
};

const faqItems = [
  {
    q: "Do electric cars pay road tax (VED) in the UK?",
    a: "Yes, since 1 April 2025. Electric cars lost their VED exemption from that date: new EVs pay the lowest first-year rate then the standard flat annual rate from year two, the same structure petrol and diesel cars already use. EVs registered before April 2025 that were previously VED-free moved onto the standard rate too.",
  },
  {
    q: "How much road tax does an electric car pay?",
    a: "The same standard annual rate that applies to almost every car regardless of fuel type, plus an expensive car supplement for five years if the list price was over £40,000. Exact figures are reviewed most Budgets and typically rise with RPI each April — check GOV.UK's vehicle tax rate tables for the current year's amount.",
  },
  {
    q: "Does road tax change whether an EV saves money overall?",
    a: "Only slightly. VED is a few hundred pounds a year for most cars, EV or petrol — small next to the £800–£1,600 a year most home-charging EV owners typically save on fuel.",
  },
];

export default function DoElectricCarsPayRoadTaxPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Do Electric Cars Pay Road Tax?</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        Do Electric Cars Pay Road Tax (VED) in the UK?
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Updated August 2026
      </p>

      <div className="bg-ev-green/5 border border-ev-green/30 rounded-2xl p-5 mb-8">
        <p className="text-xs font-semibold text-ev-green uppercase tracking-wide mb-2">Quick answer</p>
        <p className="text-sm text-navy leading-relaxed">
          <strong>Yes.</strong> Since 1 April 2025, electric cars pay Vehicle Excise Duty (VED) on the same structure as petrol and diesel cars: the lowest first-year rate, then the standard flat annual rate from year two, plus an expensive car supplement if the list price was over £40,000. The long-standing EV exemption ended on that date.
        </p>
      </div>

      <section aria-labelledby="faq-heading" className="pt-2">
        <h2 id="faq-heading" className="text-2xl font-bold text-navy mb-6 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Frequently asked questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (<div key={item.q}><h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3><p className="text-sm text-ev-grey leading-relaxed">{item.a}</p></div>))}
        </div>
      </section>

      <RelatedContent
        links={[
          { href: "/guides/electric-car-tax-ved-2026", label: "Full guide: Electric Car Tax (VED) 2026" },
          { href: "/guides/ev-company-car-tax-bik-2026", label: "EV Company Car Tax (BIK) 2026" },
          { href: "/faq/is-ev-cheaper-than-petrol-uk", label: "Is an EV cheaper than petrol in the UK?" },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Do Electric Cars Pay Road Tax?", item: "https://electricvspetrol.co.uk/faq/do-electric-cars-pay-road-tax-uk" } ] }) }} />
    </div>
  );
}
