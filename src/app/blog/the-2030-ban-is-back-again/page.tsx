import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 2030 Ban Is Back. Let Me Explain Why I'm Not Actually Celebrating. | EV Ian — ElectricVsPetrol Blog",
  description: "Labour reinstated the 2030 petrol and diesel ban on 4 July 2024. EV Ian should be thrilled. He has concerns. Mostly about the yo-yoing.",
  alternates: { canonical: "https://electricvspetrol.co.uk/blog/the-2030-ban-is-back-again" },
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
          <li aria-current="page" className="text-navy">The 2030 Ban Is Back Again</li>
        </ol>
      </nav>

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-block text-xs font-semibold text-ev-blue bg-ev-blue/8 px-3 py-1.5 rounded-full">
          News
        </span>
      </div>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        The 2030 Ban Is Back. Let Me Explain Why I&apos;m Not Actually Celebrating.
      </h1>

      {/* Byline */}
      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border-light">
        <Link href="/author/ev-ian" className="w-9 h-9 rounded-full bg-ev-blue/10 flex items-center justify-center text-ev-blue font-bold text-sm hover:bg-ev-blue/20 transition-colors">EI</Link>
        <div>
          <Link href="/author/ev-ian" className="text-sm font-medium text-navy hover:text-ev-blue transition-colors">EV Ian</Link>
          <p className="text-xs text-ev-grey">5 July 2024 · 5 min read</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-5 text-ev-grey leading-relaxed">
        <p>
          On 4 July 2024, the newly elected Labour government announced it was reinstating the 2030 ban on new petrol and diesel car sales. This is, objectively, the policy position I have wanted for years. The ban was the right policy. I told my wife it was the right policy many times, at length, including on a car journey to Bristol in 2022 that she has asked me not to bring up again.
        </p>

        <p>
          I am not celebrating. Let me explain.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          A brief and increasingly irritating timeline
        </h2>

        {/* Timeline */}
        <div className="bg-off-white border border-border-light rounded-xl p-5 my-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 text-xs font-semibold text-ev-blue pt-0.5">October 2022</div>
            <div className="text-sm text-ev-grey">Government confirms 2030 ban on new petrol and diesel car sales. Industry begins investing accordingly. Everyone calibrates their plans to 2030.</div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 text-xs font-semibold text-ev-amber pt-0.5">September 2023</div>
            <div className="text-sm text-ev-grey">Rishi Sunak announces the 2030 ban will be delayed to 2035. He frames this as listening to &quot;motorists.&quot; Industry reacts with barely concealed dismay. EV Ian, at a dinner party in Caversham, says &quot;I told you so&quot; to no one in particular.</div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-24 text-xs font-semibold text-ev-green pt-0.5">4 July 2024</div>
            <div className="text-sm text-ev-grey">Labour wins general election and within hours confirms 2030 ban reinstated. Back to where we were in October 2022. Twenty-one months of policy chaos for the same destination.</div>
          </div>
        </div>

        <p>
          This timeline is not a cause for celebration. It is a chronicle of damage. The automotive industry runs on 5-7 year planning cycles. Car manufacturers need to know what regulations look like years ahead in order to commit to production lines, supplier contracts, dealer network investments, and model launches. Between October 2022 and July 2024, the UK government told the industry the deadline was 2030, then 2035, then 2030 again. In under two years.
        </p>

        <p>
          Two Volkswagen executives told trade press in late 2023 that the UK policy reversal had introduced &quot;significant uncertainty&quot; into their market planning. This is corporate language for &quot;you have made our jobs very difficult.&quot;
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          The ZEV mandate: the actual policy doing the actual work
        </h2>

        <p>
          Here&apos;s what most reporting on the &quot;2030 ban&quot; misses: the Zero Emission Vehicle mandate is already in force and has been doing more practical work than the headline ban date.
        </p>

        <p>
          Under the ZEV mandate, 22% of all new cars sold in the UK in 2024 must be zero emission. That figure rises to 28% in 2025, 33% in 2026, escalating to 80% by 2030 and 100% by 2035. Manufacturers who miss their targets face fines of £15,000 per non-compliant vehicle sold beyond quota.
        </p>

        <p>
          This is the mechanism actually driving change. Not the symbolic ban date. The 2030 figure matters as a signal, but the year-on-year ZEV percentages are what&apos;s making manufacturers actually build and discount EVs right now, in 2024. Several manufacturers are already offering substantial discounts on EVs specifically to hit their ZEV mandate numbers. This is directly good for car buyers.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Why the ban may be almost irrelevant by 2030 anyway
        </h2>

        <p>
          Battery costs have fallen roughly 90% since 2010. The upfront price premium of EVs over equivalent petrol cars has been closing steadily. The BYD Seal is already £5,500 cheaper than the equivalent Tesla Model 3 at UK list prices, and the gap between EVs and comparable petrol cars at the mass-market end is shrinking every year.
        </p>

        <p>
          If battery costs keep falling at anything like their historical rate, EVs will reach cost parity with petrol cars at point of purchase by 2027-2028 for most segments. At that point, the question isn&apos;t &quot;are you allowed to buy a petrol car&quot; — it&apos;s &quot;why would you?&quot; Running costs are already substantially in EVs&apos; favour. Capital cost parity removes the final barrier.
        </p>

        <p>
          The 2030 ban, in this scenario, becomes a rule that prohibits something almost nobody would be doing anyway.
        </p>

        <p>
          I want the ban. I always wanted the ban. I just think the two years of policy vacillation have undermined consumer confidence more than any ban could restore, and that the real story is the economics rather than the legislation. The economics are winning. They are winning regardless of which party is in Downing Street.
        </p>

        <p>
          My wife, when I explained all of this, said: &quot;So you&apos;re happy but not happy?&quot; Yes. Correct. That is exactly where I am.
        </p>
      </div>

      {/* Source reference */}
      <div className="mt-10 pt-6 border-t border-border-light">
        <p className="text-xs text-ev-grey">
          Based on Labour government announcement, 4 July 2024. ZEV mandate percentages from Department for Transport official guidance. Timeline sourced from SMMT and BBC reporting.
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
            headline: "The 2030 Ban Is Back. Let Me Explain Why I'm Not Actually Celebrating.",
            datePublished: "2024-07-05",
            dateModified: "2024-07-05",
            author: { "@type": "Person", name: "EV Ian", url: "https://electricvspetrol.co.uk/author/ev-ian" },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            url: "https://electricvspetrol.co.uk/blog/the-2030-ban-is-back-again",
          }),
        }}
      />
    </article>
  );
}
