import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "One In Five Public Chargers Was Broken This Summer. Let's Actually Talk About This. | EV Ian — ElectricVsPetrol Blog",
  description: "Which? found 14% of public charge point attempts failed in summer 2024. BP Pulse hit 1 in 4. EV Ian won't pretend this isn't a problem — but he will contextualise it thoroughly.",
  alternates: { canonical: "https://electricvspetrol.co.uk/blog/one-in-five-public-chargers-was-broken" },
};

export default function BlogPost() {
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blog" className="text-ev-blue hover:underline">Blog</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">One In Five Public Chargers Was Broken</li>
        </ol>
      </nav>

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-block text-xs font-semibold text-ev-blue bg-ev-blue/8 px-3 py-1.5 rounded-full">
          Numbers
        </span>
      </div>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        One In Five Public Chargers Was Broken This Summer. Let&apos;s Actually Talk About This.
      </h1>

      {/* Byline */}
      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border-light">
        <Link href="/author/ev-ian" className="w-9 h-9 rounded-full bg-ev-blue/10 flex items-center justify-center text-ev-blue font-bold text-sm hover:bg-ev-blue/20 transition-colors">EI</Link>
        <div>
          <Link href="/author/ev-ian" className="text-sm font-medium text-navy hover:text-ev-blue transition-colors">EV Ian</Link>
          <p className="text-xs text-ev-grey">18 September 2024 · 6 min read</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-5 text-ev-grey leading-relaxed">
        <p>
          Which? published an investigation this week finding that 14% of public charge point attempts in the UK resulted in failure — the charger being broken, out of service, or non-functional at the point of use. Some networks performed considerably worse than that average. BP Pulse recorded failure rates as high as 1 in 4 at certain sites.
        </p>

        <p>
          I am going to be straight with you: this is a problem. Not a made-up problem. Not a Daily Mail problem invented to make EVs look bad. An actual, documented, happening-right-now problem that affects real people and undermines confidence in the transition to electric vehicles.
        </p>

        <p>
          I want to say that clearly before I start contextualising it, because the EV community&apos;s tendency is to immediately leap to &quot;yes but actually—&quot; whenever critical data appears, and that tendency has not served us well. The headline is real. Now let me give you the context, because context matters too.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Where most EV charging actually happens
        </h2>

        <p>
          The most important statistic in this entire conversation comes from OZEV — the Office for Zero Emission Vehicles — whose 2024 data shows that <strong className="text-navy">82% of all EV charging sessions in the UK happen at home</strong>. Eighty-two percent. Four out of every five charges plugged in at the driver&apos;s own home, overnight, on their own schedule, using electricity they pay for at their own rate.
        </p>

        <p>
          This matters enormously for how you interpret the public charging reliability data. If you have a driveway and a home charger, the state of the BP Pulse network at Moto Corley is, in practical terms, a fairly marginal concern. You use public charging maybe 18% of the time, and mostly for longer trips where you have some planning flexibility.
        </p>

        <p>
          The people for whom the 14% failure rate is genuinely devastating are the people who cannot charge at home — flat dwellers, terraced-house residents without off-street parking, renters whose landlords won&apos;t install a charger. For them, public charging isn&apos;t a backup. It&apos;s the only option. A 1-in-4 failure rate on BP Pulse isn&apos;t an inconvenience. It&apos;s a structural barrier to EV adoption. That is the real policy problem here, and it&apos;s separate from the question of &quot;should I buy an EV if I have a driveway,&quot; which has a different answer.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Which networks are actually reliable?
        </h2>

        <p>
          Not all public networks are created equal, and the Which? data confirmed what experienced EV drivers already knew from bitter experience. The headline failure rate of 14% is an average masking very significant differences between networks.
        </p>

        {/* Network reliability callout */}
        <div className="bg-off-white border border-border-light rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-navy mb-4">Public charging reliability — summer 2024</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-ev-grey">Tesla Supercharger (open network)</span>
              <span className="font-semibold text-ev-green">Highest reliability</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-ev-grey">Osprey</span>
              <span className="font-semibold text-ev-green">Highest reliability</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-ev-grey">Gridserve Electric Forecourt</span>
              <span className="font-semibold text-ev-green">99%+ uptime (reported)</span>
            </div>
            <div className="flex items-center justify-between text-sm border-t border-border-light pt-3">
              <span className="text-ev-grey">Industry average (Which? sample)</span>
              <span className="font-semibold text-ev-amber">~14% failure rate</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-ev-grey">BP Pulse (worst sites)</span>
              <span className="font-semibold text-ev-amber">Up to 1 in 4 failing</span>
            </div>
          </div>
        </div>

        <p>
          The Tesla Supercharger network and Osprey Charging both performed significantly above the industry average in reliability. Gridserve, whose Electric Forecourt sites are purpose-built charging destinations rather than afterthoughts bolted to car park walls, reports uptime figures above 99% — and anecdotally, my own experience at the Reading Gridserve site has been uniformly excellent. Every charger working. Every time.
        </p>

        <p>
          BP Pulse is the cautionary tale. The network inherited a large estate of older, legacy charge points when BP acquired Polar Network — hardware that was installed years ago and never properly upgraded. Old units, poor maintenance schedules, software that hasn&apos;t kept pace, and a customer service operation that has been, in the diplomatic language of multiple consumer surveys, &quot;challenging.&quot; They know this. They are, reportedly, working on it. The pace of improvement has not matched the scale of the problem.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Should this stop you buying an EV?
        </h2>

        <p>
          If you have a driveway: no. Your 82%-of-sessions home charging experience will be entirely unaffected by BP Pulse&apos;s reliability statistics. For the other 18%, stick to Tesla Superchargers, Osprey, and Gridserve for anything important — the reliability data gives you a clear steer on where to point your navigation.
        </p>

        <p>
          If you cannot charge at home: this matters more. A lot more. The 14% average failure rate would give me serious pause if I had no home charging option. I would want to know that my local public charging provision came from the reliable end of the spectrum before committing to an EV. Some urban areas have excellent provision. Others are still relying on aging Pod Point and BP Pulse hardware that was installed under contracts from a different era of the market.
        </p>

        <p>
          The chargepoint.com app and Zap-Map both let you filter by network and show real-time availability and recent user reports. Use them. Doing five minutes of local network research before buying an EV could save you a significant amount of frustration.
        </p>

        <p>
          The problem is real. The solution isn&apos;t &quot;don&apos;t buy an EV.&quot; It&apos;s &quot;use the networks that work, push for faster improvement on the ones that don&apos;t, and make sure government investment in charging infrastructure goes to the areas that actually need it.&quot; Which is, admittedly, less of a headline than &quot;one in five chargers broken&quot; — but it&apos;s what the data actually supports.
        </p>
      </div>

      {/* Source reference */}
      <div className="mt-10 pt-6 border-t border-border-light">
        <p className="text-xs text-ev-grey">
          Based on Which? investigation published mid-September 2024. Home charging share from OZEV Electric Vehicle Charging Device Statistics, 2024. Gridserve uptime from company-published operational data.
          <Link href="/#calculator" className="text-ev-blue hover:underline ml-1">
            Calculate your own EV running costs →
          </Link>
        </p>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "One In Five Public Chargers Was Broken This Summer. Let's Actually Talk About This.",
            datePublished: "2024-09-18",
            dateModified: "2024-09-18",
            author: { "@type": "Person", name: "EV Ian", url: "https://electricvspetrol.co.uk/author/ev-ian" },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            url: "https://electricvspetrol.co.uk/blog/one-in-five-public-chargers-was-broken",
          }),
        }}
      />
    </article>
  );
}
