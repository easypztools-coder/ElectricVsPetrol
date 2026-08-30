import type { Metadata } from "next";
import Link from "next/link";
import { RelatedContent } from "@/components/sections/RelatedContent";

export const metadata: Metadata = {
  title: "Used EV Buying Guide UK 2026: Battery Health, Warranty & Cost Checks | ElectricVsPetrol",
  description:
    "Buying a used electric car? Here's what to check on battery health, remaining warranty, charging cables and running costs before you buy — plus why a used EV is often the best-value way into electric driving.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/used-ev-buying-guide-uk",
  },
};

const faqItems = [
  {
    q: "Is buying a used EV a good idea?",
    a: "For most buyers, yes — often the best-value way into electric driving. New EVs carry a purchase premium and depreciate most steeply in their first 2–3 years; buying at that point lets you skip the steepest part of the depreciation curve while still benefiting from a battery that, on current evidence, has plenty of life left. A used EV also gives you real, independently reported running costs rather than a manufacturer's optimistic range figures.",
  },
  {
    q: "How do I check battery health on a used EV?",
    a: "Ask the seller for a battery health report — many dealers now provide one from tools like Aviloo, Recurrent, or the manufacturer's own diagnostic app, showing State of Health (SoH) as a percentage of original capacity. If one isn't available, an independent EV specialist garage can run a battery health check for a modest fee before you buy, which is money well spent on a higher-value used EV purchase.",
  },
  {
    q: "What's a normal amount of battery degradation for a used EV?",
    a: "Most EV batteries lose capacity slowly and predictably — typically in the range of 1–3% per year of use, tapering off over time, though this varies by model, climate, and charging habits (frequent rapid charging and consistently charging to 100% can accelerate wear slightly). A 4–5 year old EV showing 90%+ of its original range is a normal, healthy result, not a red flag.",
  },
  {
    q: "Does the manufacturer battery warranty transfer to a used EV?",
    a: "Yes, in almost all cases — EV battery warranties (typically 8 years or 100,000 miles, whichever comes first) are attached to the vehicle, not the original owner, so they transfer automatically to subsequent buyers. Always check the original registration date and current mileage against the warranty terms before buying, since a car nearing either limit loses that safety net soon after purchase.",
  },
  {
    q: "Does a used EV still qualify for cheap running costs?",
    a: "Yes — running costs depend on your electricity tariff and the car's efficiency (miles per kWh), not on whether the car is new or used. A well-chosen used EV with good real-world efficiency can be just as cheap to run as a brand new one, and since 2022-onward EVs have largely stabilised in range and efficiency, a 2–3 year old used EV is very close to a new one on running costs.",
  },
];

export default function UsedEvBuyingGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Used EV Buying Guide</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        Used EV Buying Guide UK 2026
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Last updated: August 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        A used EV skips the steepest years of depreciation while still delivering the same low running costs as a new one. The catch is that battery health, warranty status, and charging equipment need a different checklist than buying a used petrol car. Here's what actually matters.
      </p>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>1. Get a battery health check</h2>
          <p className="mb-4">This is the single most important check on a used EV, and it has no direct equivalent for petrol cars. Ask for a State of Health (SoH) reading — a percentage of the battery's original usable capacity — either from a dealer-provided report or an independent EV specialist. A 4–5 year old EV showing 90%+ SoH is a normal, healthy result; anything showing significantly worse than that for its age is worth investigating further or negotiating on price.</p>
          <p>Be wary of listings with no battery information at all on cars over 3–4 years old — it's a five-minute check for a seller to arrange, and its absence is worth asking about directly.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>2. Check the remaining battery warranty</h2>
          <p className="mb-4">Almost all EV batteries carry an 8-year/100,000-mile manufacturer warranty (terms vary slightly by brand) that transfers automatically to used buyers. Check the original registration date and current mileage against both limits — a car with 3 years and 40,000 miles of warranty left is a much safer buy than one with a few months and a few thousand miles remaining, even if the asking price looks similar.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>3. Confirm charging cables and connector type are included</h2>
          <p>Used EV listings sometimes omit whether the original Type 2 charging cable and any rapid-charging (CCS) adapter are included — replacements aren't cheap. Confirm what's included before agreeing a price, and check the connector standard is compatible with the public charging network you're most likely to use.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>4. Verify real-world range, not the WLTP figure</h2>
          <p>Official WLTP range figures are a useful comparison point between models but consistently overstate real-world range, particularly in cold weather and at motorway speeds. Look for independent long-term range reports for the specific model and year you're considering, and treat any car being sold on its "WLTP range" alone with some scepticism.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>5. Run the actual running-cost numbers</h2>
          <p className="mb-4">A used EV's running costs depend on its real-world efficiency (miles per kWh) and your electricity tariff — not on how much it originally cost new. Once you've narrowed down a model, check its efficiency against our vehicle database and run your own numbers.</p>
          <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
            Use the EV vs Petrol Cost Calculator
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>6. Factor in VED and tax status</h2>
          <p>Since April 2025, used EVs are no longer VED-exempt — check what rate applies to the specific car's registration date, since the rules differ for cars registered before and after that change. See our <Link href="/guides/electric-car-tax-ved-2026" className="text-ev-blue hover:underline">VED guide</Link> for the detail.</p>
        </section>
      </div>

      <section aria-labelledby="faq-heading" className="mt-12 pt-10 border-t border-border-light">
        <h2 id="faq-heading" className="text-2xl font-bold text-navy mb-6 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Frequently asked questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (<div key={item.q}><h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3><p className="text-sm text-ev-grey leading-relaxed">{item.a}</p></div>))}
        </div>
      </section>

      <RelatedContent
        links={[
          { href: "/guides/ev-depreciation-vs-petrol", label: "EV vs Petrol Depreciation" },
          { href: "/guides/electric-car-tax-ved-2026", label: "Electric Car Tax (VED) 2026" },
          { href: "/guides/cheapest-evs-to-run-uk-2026", label: "Cheapest EVs to Run in the UK 2026" },
          { href: "/ev", label: "Browse EV model cost breakdowns" },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" }, { "@type": "ListItem", position: 3, name: "Used EV Buying Guide", item: "https://electricvspetrol.co.uk/guides/used-ev-buying-guide-uk" } ] }) }} />
    </div>
  );
}
