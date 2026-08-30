import type { Metadata } from "next";
import Link from "next/link";
import { RelatedContent } from "@/components/sections/RelatedContent";

export const metadata: Metadata = {
  title: "EV Depreciation vs Petrol 2026: Which Loses Value Faster? | ElectricVsPetrol",
  description:
    "Do electric cars really depreciate faster than petrol cars? We look at why early EVs lost value quickly, why that's changed for newer models, and how to factor depreciation into your total cost of ownership.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-depreciation-vs-petrol",
  },
};

const faqItems = [
  {
    q: "Do EVs depreciate faster than petrol cars?",
    a: "It depends heavily on the model and age. Early-generation EVs (roughly 2013–2019) often depreciated faster than equivalent petrol cars, driven by rapid battery and range improvements that made older models look outdated quickly, plus buyer uncertainty about battery health. Newer EVs (2022 onward) with larger, more durable batteries and mature charging infrastructure have generally seen depreciation curves much closer to — and in some cases better than — equivalent petrol cars, especially for popular, high-demand models.",
  },
  {
    q: "Why did older EVs lose value so quickly?",
    a: "Three main reasons: fast-moving technology meant a 3-year-old EV often had noticeably worse range than a new one at the same price point; buyers were nervous about battery degradation and replacement cost, even though real-world battery failure rates have proven low; and government incentives on new EVs (like the former plug-in car grant) reduced the relative appeal of used ones. All three factors have weakened significantly as the EV market has matured.",
  },
  {
    q: "Does battery health affect EV resale value?",
    a: "Yes, and it's the main EV-specific factor that doesn't exist for petrol cars. Most EV batteries retain the large majority of their original capacity even after 5+ years and 60,000+ miles, but buyers understandably want reassurance. A car with a battery health report or remaining manufacturer battery warranty (typically 8 years/100,000 miles) will hold value better than one without documented battery condition.",
  },
  {
    q: "Should depreciation change whether I buy an EV or petrol car?",
    a: "It's one input, not the whole picture. Even where an EV depreciates somewhat faster, the gap has narrowed for recent models and is often outweighed by lower running costs and (for company car drivers) far lower Benefit-in-Kind tax over a typical 3–4 year ownership period. If resale value is a priority, favour high-demand mainstream EV models over niche ones — demand is the biggest single driver of used values for any car, electric or not.",
  },
];

export default function EvDepreciationVsPetrolPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">EV Depreciation vs Petrol</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        EV Depreciation vs Petrol: Which Loses Value Faster?
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Last updated: August 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        "EVs lose value faster than petrol cars" was a fair criticism a few years ago — and it's the most common objection raised against buying one. It's a less accurate one for cars built since around 2022. Depreciation is also the largest single cost of owning almost any car, EV or petrol, so it's worth understanding properly rather than going on outdated headlines.
      </p>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Why early EVs depreciated quickly</h2>
          <p className="mb-4">Three things combined to hurt early EV resale values. First, the technology moved fast: a 2016 EV with 100 miles of real-world range looked obsolete next to a 2019 model with double that, in a way that petrol cars — where the core technology barely changes year to year — never experience. Second, buyers were (reasonably, at the time) uncertain about battery degradation and the cost of eventual replacement, which suppressed demand for older used EVs even when the batteries were fine. Third, incentives on new EVs, like the former UK plug-in car grant, made new EVs relatively better value than used ones for a period, pulling used prices down.</p>
          <p>None of these pressures has gone away entirely, but all three have weakened substantially as the market has matured.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>What's changed for newer EVs</h2>
          <p className="mb-4">Range and technology have largely stabilised: a 2023–2026 mainstream EV typically offers 200–300+ real-world miles, a figure that isn't moving as dramatically year over year as it once did, which removes much of the "instantly outdated" effect. Battery durability has also proven itself in the real world — large fleets of high-mileage EVs (taxis, ride-hail vehicles) have now racked up hundreds of thousands of miles with capacity loss typically in the range of a few percent per year, far better than early fears suggested.</p>
          <p>The result is that popular, mainstream EV models now depreciate at rates broadly comparable to equivalent petrol cars over a typical 3-year ownership period — sometimes better, particularly where the petrol equivalent faces its own headwinds from tightening emissions rules and shrinking future demand.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>What still drives EV resale value specifically</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Battery health documentation.</strong> A car sold with a battery health report or verified remaining warranty reassures buyers and typically commands a better price than one without.</li>
            <li><strong>Remaining manufacturer warranty.</strong> Most EV batteries carry an 8-year/100,000-mile warranty from new — a used EV still well within that window is a materially safer buy than one just outside it.</li>
            <li><strong>Model popularity and charging network compatibility.</strong> As with any car, mainstream, high-demand models hold value better than niche ones. For EVs specifically, models compatible with widely available charging standards have an edge over those requiring adapters.</li>
            <li><strong>Brand and public perception</strong> still matters as much for EVs as for petrol cars — a well-regarded model from an established manufacturer tends to hold value better than an unproven one, regardless of powertrain.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Putting it into the total cost of ownership</h2>
          <p className="mb-4">Depreciation is usually the single largest cost of owning any car over a few years — often larger than fuel, tax, and maintenance combined. If you're weighing an EV against a petrol equivalent, it's worth checking indicative resale forecasts for both specific models rather than relying on general "EVs depreciate faster" assumptions that may no longer apply to the car you're actually considering.</p>
          <p>Even where depreciation is a wash between an EV and its petrol equivalent, the EV usually still wins on running costs (home charging) and, for company car drivers, dramatically wins on <Link href="/guides/ev-company-car-tax-bik-2026" className="text-ev-blue hover:underline">Benefit-in-Kind tax</Link> — both of which are more predictable and easier to calculate in advance than resale value.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Considering a used EV?</h2>
          <p>If depreciation has already happened — i.e. you're buying used rather than new — you benefit from someone else having absorbed the steepest part of the curve. Read our <Link href="/guides/used-ev-buying-guide-uk" className="text-ev-blue hover:underline">used EV buying guide</Link> for what to check on battery health and warranty before buying.</p>
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
          { href: "/guides/used-ev-buying-guide-uk", label: "Used EV Buying Guide UK" },
          { href: "/guides/ev-company-car-tax-bik-2026", label: "EV Company Car Tax (BIK) 2026" },
          { href: "/guides/best-ev-uk-2026", label: "Best EV UK 2026" },
          { href: "/compare", label: "Compare specific EVs vs petrol cars" },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" }, { "@type": "ListItem", position: 3, name: "EV Depreciation vs Petrol", item: "https://electricvspetrol.co.uk/guides/ev-depreciation-vs-petrol" } ] }) }} />
    </div>
  );
}
