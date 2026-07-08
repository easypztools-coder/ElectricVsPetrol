import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VW Is Closing Factories. Should You Still Buy an ID.4? | EV Ian — ElectricVsPetrol Blog",
  description: "Volkswagen announced potential closure of German factories including Wolfsburg for the first time in 87 years. EV Ian explains what this actually means for ID.4 buyers. Spoiler: less than the headlines suggest.",
  alternates: { canonical: "https://electricvspetrol.co.uk/blog/vw-is-closing-factories-should-you-still-buy-an-id4" },
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
          <li aria-current="page" className="text-navy">VW Is Closing Factories</li>
        </ol>
      </nav>

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-block text-xs font-semibold text-ev-blue bg-ev-blue/8 px-3 py-1.5 rounded-full">
          Opinion
        </span>
      </div>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        VW Is Closing Factories. Should You Still Buy an ID.4?
      </h1>

      {/* Byline */}
      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border-light">
        <Link href="/author/ev-ian" className="w-9 h-9 rounded-full bg-ev-blue/10 flex items-center justify-center text-ev-blue font-bold text-sm hover:bg-ev-blue/20 transition-colors">EI</Link>
        <div>
          <Link href="/author/ev-ian" className="text-sm font-medium text-navy hover:text-ev-blue transition-colors">EV Ian</Link>
          <p className="text-xs text-ev-grey">29 October 2024 · 5 min read</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-5 text-ev-grey leading-relaxed">
        <p>
          Volkswagen Group announced in late September that it is considering closing up to three German manufacturing plants — including, potentially, the Wolfsburg factory where VW has been making cars since 1938. The company mooted cuts of up to 35,000 jobs. This is, by any measure, serious news. VW has never closed a German plant in 87 years of existence.
        </p>

        <p>
          My inbox has received several messages along the lines of &quot;does this mean I shouldn&apos;t buy an ID.4?&quot; and I want to answer this properly rather than with the dismissive hand-wave it might tempt. Because the worry is understandable, even if the conclusion people are reaching is wrong.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          What&apos;s actually happening at VW
        </h2>

        <p>
          Volkswagen Group — which includes VW, Audi, Porsche, Seat, Skoda, Cupra, Lamborghini, Bentley, and several others — is facing a structural squeeze between rising production costs and falling revenue. In H1 2024, EV sales across VW Group in Europe were significantly below expectations, partly because Germany ended its government EV purchase incentives (the Umweltbonus) abruptly in December 2023. The German market dropped around 36% in EV registrations in January 2024 as a direct consequence.
        </p>

        <p>
          VW also has a cost base problem that predates any EV market softening. German manufacturing is expensive. The company has been trying to negotiate with unions to cut labour costs, and those negotiations are difficult. The factory closure announcement is partly industrial relations pressure — a very German form of negotiating tactic — and partly genuine recognition that the company needs to make fewer cars in fewer places.
        </p>

        <p>
          This is a corporate restructuring story. It is not an &quot;EVs have failed&quot; story, despite how some outlets are choosing to frame it.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          What this means for existing ID.4 owners: nothing
        </h2>

        <p>
          Let me be direct. If you own an ID.4 right now, today, nothing has changed. The car still works. The software still updates over the air. The UK dealer network, run by independent franchisees who have their own businesses to protect, is still operational. Parts supply is a function of VW Group&apos;s global manufacturing operation, which remains very much intact.
        </p>

        <p>
          I&apos;ve seen this panic before, when smaller EV startups have had difficulties. Rivian stock drops 20%, and people ask whether their Rivian is about to become an expensive paperweight. The comparison doesn&apos;t apply here. Volkswagen Group has revenues of approximately €293 billion per year. It is one of the largest manufacturers on earth. The warranty on your ID.4 is backed by that entity. It will be honoured.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          What this might mean for people buying an ID.4 now
        </h2>

        <p>
          Here is where it actually gets interesting. VW Group needs to hit sales volumes. It has inventory. It has ZEV mandate obligations across European markets. Manufacturers under financial pressure and carrying stock tend to discount.
        </p>

        <p>
          The ID.4 has already been available with significant dealer and manufacturer contributions throughout 2024 — deals of £3,000–£5,000 off list price are findable if you&apos;re willing to negotiate, particularly on pre-registered stock. A company fighting for margin and market share is, paradoxically, often a better time to buy than a company riding high with waiting lists.
        </p>

        <p>
          Now, I should be fair here. The ID.4 is not the most efficient EV in its class. It does roughly 2.8–3.0 miles per kWh in real-world driving, which sits behind the Tesla Model Y&apos;s 3.2–3.5 mi/kWh and some way behind the Hyundai Ioniq 5. That efficiency gap matters to running costs. At 24.5p/kWh, the difference between 2.9 mi/kWh and 3.5 mi/kWh is about 2.5p per mile — which across 10,000 miles per year is £250 annually.
        </p>

        <p>
          Though I&apos;ll say — and I want to be fair — the Ioniq 5 and Model Y are in a different price bracket before incentives. The ID.4 is competing on a different set of terms. It&apos;s a known quantity, with an established dealer network, a straightforward infotainment system that has improved significantly with recent software updates, and the kind of after-sales infrastructure that gives people who are new to EVs something reliable to lean on.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          The verdict
        </h2>

        <p>
          Buy the ID.4 if the package works for you. The VW corporate difficulties are real, but they are a manufacturer restructuring around a market transition, not a company in existential crisis. The warranty is solid. The car is solid. The deal you might get right now could be better than it will be in 18 months when things stabilise.
        </p>

        <p>
          The people who should be nervous are VW&apos;s German factory workers and the shareholders. Not the people with an ID.4 on the driveway in Swindon. Their car is fine.
        </p>
      </div>

      {/* Source reference */}
      <div className="mt-10 pt-6 border-t border-border-light">
        <p className="text-xs text-ev-grey">
          Based on VW Group announcements September–October 2024, widely reported by Reuters, BBC, and Autocar. German EV incentive cancellation data from KBA (Kraftfahrt-Bundesamt). VW Group revenue from 2023 annual report.
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
            headline: "VW Is Closing Factories. Should You Still Buy an ID.4?",
            datePublished: "2024-10-29",
            dateModified: "2024-10-29",
            author: { "@type": "Person", name: "EV Ian", url: "https://electricvspetrol.co.uk/author/ev-ian" },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            url: "https://electricvspetrol.co.uk/blog/vw-is-closing-factories-should-you-still-buy-an-id4",
          }),
        }}
      />
    </article>
  );
}
