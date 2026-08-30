import type { Metadata } from "next";
import Link from "next/link";
import { RelatedContent } from "@/components/sections/RelatedContent";

export const metadata: Metadata = {
  title: "EV Running Costs London 2026: ULEZ, Congestion Charge & Charging | ElectricVsPetrol",
  description:
    "How much does an EV actually save a London driver? ULEZ and Congestion Charge exemptions explained, what changed for EVs in late 2025, and how kerbside charging affects the numbers.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/ev-running-costs-london-ulez",
  },
};

const faqItems = [
  {
    q: "Are electric cars exempt from the London ULEZ charge?",
    a: "Yes. All fully electric cars meet the ULEZ emissions standard automatically and are exempt from the £12.50 daily charge that applies to non-compliant petrol (roughly pre-2005) and diesel (roughly pre-2015) vehicles across all London boroughs. This exemption has no announced end date, unlike the Congestion Charge discount below.",
  },
  {
    q: "Do EVs still pay the London Congestion Charge?",
    a: "Increasingly, yes. TfL's 100% Cleaner Vehicle Discount, which let pure electric cars enter the Congestion Charge zone free, has been withdrawn — EVs registering for the discount after the cut-off date now pay the standard £15 daily charge like any other vehicle. Always check the current status directly on TfL's website, since this discount's terms have already changed once and the transition arrangements affect existing versus new registrations differently.",
  },
  {
    q: "How much can a London EV driver still save overall?",
    a: "The ULEZ exemption alone is worth £12.50 a day for anyone who would otherwise drive a non-compliant petrol or diesel car within the zone — over £3,000 a year for a daily commuter, though most petrol cars on the road today are ULEZ-compliant and pay nothing either way. Combined with home or workplace charging savings and, for company car drivers, low BIK tax, an EV can still save a typical London driver a meaningful amount even without the Congestion Charge discount.",
  },
  {
    q: "Is home charging realistic without a driveway in London?",
    a: "It's the single biggest practical constraint for London EV drivers. Kerbside and lamppost charging schemes exist in many boroughs but are typically priced closer to public rates than a home tariff, and availability varies a lot by borough. Drivers without off-street parking should base their savings estimate on realistic public/kerbside charging costs rather than assuming cheap overnight home rates.",
  },
];

export default function EvRunningCostsLondonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="text-ev-blue hover:underline">Guides</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">EV Running Costs London</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-navy mb-4 font-display leading-tight" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
        EV Running Costs London 2026: ULEZ & Congestion Charge
      </h1>

      <p className="text-sm text-ev-grey mb-6 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" /><path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        Last updated: August 2026
      </p>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        London has its own EV cost equation, driven by two things no other UK region has: the London-wide ULEZ and the Congestion Charge. Both were once strongly in EVs&apos; favour; one still is. Here&apos;s the current picture and what it means for the numbers.
      </p>

      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">Run your London-specific numbers</p>
        <Link href="/#calculator" className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm">
          Use the EV vs Petrol Cost Calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>ULEZ: still a clear EV win</h2>
          <p className="mb-4">The Ultra Low Emission Zone covers all London boroughs and charges £12.50 a day for vehicles that don&apos;t meet the required emissions standard — roughly petrol cars registered before 2005 and diesel cars registered before 2015. Fully electric cars automatically meet the standard and pay nothing, with no exemption expiry currently scheduled.</p>
          <p>In practice, most petrol cars on the road today are already ULEZ-compliant, so this exemption matters most for drivers of older vehicles considering an upgrade — for them, switching to an EV removes a real, large daily cost on top of any fuel saving.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Congestion Charge: the free ride for EVs is ending</h2>
          <p className="mb-4">For years, pure electric cars registered for TfL&apos;s Cleaner Vehicle Discount could enter the Congestion Charge zone for free instead of paying the standard £15 daily charge. TfL has withdrawn that 100% discount, meaning EVs are being moved onto the same charge as petrol and diesel cars, with transition arrangements affecting existing versus newly registered vehicles differently.</p>
          <p>
            If you drive into central London regularly, check your vehicle&apos;s current discount status directly on{" "}
            <a href="https://tfl.gov.uk/modes/driving/congestion-charge" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">TfL&apos;s Congestion Charge page</a>{" "}
            rather than assuming the old EV exemption still applies — this is exactly the kind of detail that can throw off a London-specific running-cost estimate if it&apos;s out of date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Charging without a driveway</h2>
          <p className="mb-4">The bigger practical issue for most London EV drivers isn&apos;t ULEZ or the Congestion Charge — it&apos;s that a large share of London homes don&apos;t have off-street parking, so cheap overnight home charging isn&apos;t an option. Kerbside and lamppost charging schemes are expanding across boroughs, but they're typically priced closer to public rapid or destination rates than a domestic tariff, and coverage still varies significantly by borough.</p>
          <p>If you can&apos;t charge at home, base your savings estimate on realistic public charging costs rather than the headline home-charging figures quoted elsewhere on this site — see our <Link href="/guides/is-ev-worth-it-without-home-charger" className="text-ev-blue hover:underline">guide on running an EV without a home charger</Link> for the honest numbers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-4 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Where to go next</h2>
          <p>Start with the <Link href="/#calculator" className="text-ev-blue hover:underline">main calculator</Link>, and if company car tax is relevant to you, the <Link href="/guides/ev-company-car-tax-bik-2026" className="text-ev-blue hover:underline">BIK guide</Link> usually matters more to the overall decision than either London charge.</p>
        </section>
      </div>

      <p className="mt-8 text-xs text-ev-grey/70">
        Sources:{" "}
        <a href="https://tfl.gov.uk/modes/driving/ultra-low-emission-zone" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">TfL: Ultra Low Emission Zone</a>
        {" · "}
        <a href="https://tfl.gov.uk/modes/driving/congestion-charge" className="text-ev-blue hover:underline" target="_blank" rel="noopener noreferrer">TfL: Congestion Charge</a>
      </p>

      <section aria-labelledby="faq-heading" className="mt-12 pt-10 border-t border-border-light">
        <h2 id="faq-heading" className="text-2xl font-bold text-navy mb-6 font-display" style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>Frequently asked questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (<div key={item.q}><h3 className="text-base font-semibold text-navy mb-2">{item.q}</h3><p className="text-sm text-ev-grey leading-relaxed">{item.a}</p></div>))}
        </div>
      </section>

      <RelatedContent
        title="Related regional guides"
        links={[
          { href: "/guides/ev-running-costs-scotland", label: "EV Running Costs Scotland" },
          { href: "/guides/ev-running-costs-wales", label: "EV Running Costs Wales" },
          { href: "/guides/ev-running-costs-northern-ireland", label: "EV Running Costs Northern Ireland" },
          { href: "/guides/is-ev-worth-it-without-home-charger", label: "Is an EV worth it without a home charger?" },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" }, { "@type": "ListItem", position: 2, name: "Guides", item: "https://electricvspetrol.co.uk/guides" }, { "@type": "ListItem", position: 3, name: "EV Running Costs London", item: "https://electricvspetrol.co.uk/guides/ev-running-costs-london-ulez" } ] }) }} />
    </div>
  );
}
