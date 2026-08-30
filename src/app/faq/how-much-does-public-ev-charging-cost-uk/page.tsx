import type { Metadata } from "next";
import Link from "next/link";
import { RelatedContent } from "@/components/sections/RelatedContent";

export const metadata: Metadata = {
  title: "How Much Does Public EV Charging Cost in the UK? 2026 Answer",
  description:
    "Public EV charging costs 62p–90p/kWh in the UK depending on the network. Here's the quick answer and how it compares to home charging and petrol.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/faq/how-much-does-public-ev-charging-cost-uk",
  },
};

const faqItems = [
  {
    q: "How much does public EV charging cost in the UK?",
    a: "Rapid and ultra-rapid public charging averaged around 79p/kWh in mid-2026, ranging from about 62p/kWh (Tesla Supercharger, the cheapest widely available network) to around 90p/kWh (InstaVolt, BP Pulse). That works out to roughly 17.7p–25.7p per mile at typical EV efficiency, compared with 6.5–7.5p per mile for home charging.",
  },
  {
    q: "Is public charging cheaper than home charging?",
    a: "No — public rapid charging typically costs 3–4x more per kWh than home charging, mainly because public chargers pay commercial electricity rates with 20% VAT (versus 5% domestic VAT) and no Ofgem price cap protection.",
  },
  {
    q: "Is public EV charging cheaper than petrol?",
    a: "It depends on the network. At the cheapest rates (around 62p/kWh) it's still somewhat cheaper per mile than average petrol. At the most expensive rapid networks (around 90p/kWh) it can cost more per mile than petrol.",
  },
];

export default function HowMuchDoesPublicEvChargingCostPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Public EV Charging Cost</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        How Much Does Public EV Charging Cost in the UK?
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Updated August 2026
      </p>

      <div className="bg-ev-amber/5 border border-ev-amber/30 rounded-2xl p-5 mb-8">
        <p className="text-xs font-semibold text-ev-amber uppercase tracking-wide mb-2">Quick answer</p>
        <p className="text-sm text-navy leading-relaxed">
          <strong>62p–90p/kWh</strong>, averaging around <strong>79p/kWh</strong> across UK rapid and ultra-rapid networks in mid-2026 — roughly 3–4x the cost of home charging on the current Ofgem price cap rate. At typical EV efficiency, that's about 17.7p–25.7p per mile.
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
          { href: "/guides/public-ev-charging-costs-uk", label: "Full guide: Public EV Charging Costs UK" },
          { href: "/guides/is-ev-worth-it-without-home-charger", label: "Is an EV worth it without a home charger?" },
          { href: "/faq/is-ev-cheaper-than-petrol-uk", label: "Is an EV cheaper than petrol in the UK?" },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Public EV Charging Cost", item: "https://electricvspetrol.co.uk/faq/how-much-does-public-ev-charging-cost-uk" } ] }) }} />
    </div>
  );
}
