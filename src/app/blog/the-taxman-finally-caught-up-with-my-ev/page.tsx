import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Taxman Finally Caught Up With My EV | EV Ian — ElectricVsPetrol Blog",
  description: "My renewal reminder arrived with an actual number on it this year. EV Ian works through what VED and BIK now cost an EV owner in 2026, and whether it changes anything.",
  alternates: { canonical: "https://electricvspetrol.co.uk/blog/the-taxman-finally-caught-up-with-my-ev" },
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
          <li aria-current="page" className="text-navy">The Taxman Finally Caught Up With My EV</li>
        </ol>
      </nav>

      <div className="mb-4">
        <span className="inline-block text-xs font-semibold text-ev-blue bg-ev-blue/8 px-3 py-1.5 rounded-full">
          Running Costs
        </span>
      </div>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        The Taxman Finally Caught Up With My EV
      </h1>

      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border-light">
        <Link href="/author/ev-ian" className="w-9 h-9 rounded-full bg-ev-blue/10 flex items-center justify-center text-ev-blue font-bold text-sm hover:bg-ev-blue/20 transition-colors">EI</Link>
        <div>
          <Link href="/author/ev-ian" className="text-sm font-medium text-navy hover:text-ev-blue transition-colors">EV Ian</Link>
          <p className="text-xs text-ev-grey">30 August 2026 · 6 min read</p>
        </div>
      </div>

      <div className="prose-content space-y-5 text-ev-grey leading-relaxed">
        <p>
          My car tax renewal reminder arrived last week with a number on it. An actual, non-zero number. For a moment I assumed it was an error — some DVLA database still hadn&apos;t got the memo that my Model 3 doesn&apos;t burn petrol — and then I remembered, with the specific dread of someone who writes a website about this exact topic, that I&apos;d written about this change happening. I had simply filed the knowledge somewhere it wasn&apos;t doing me any good.
        </p>

        <p>
          For anyone who missed it: electric cars stopped being exempt from Vehicle Excise Duty on 1 April 2025. Every EV that used to sail through renewal at £0 now pays the same standard rate as everything else on the road. I knew this. I had, in fact, put it in a guide. And yet the reminder letter still produced a small betrayed noise from somewhere in my chest.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          The number itself was fine, actually
        </h2>

        <p>
          Here is the plot twist, if you can call it that: the number was small. Genuinely, boringly small, next to what I save on fuel every month. I&apos;d spent the intervening ten minutes bracing for something dramatic and got a bill roughly equivalent to what I&apos;d spend on two tanks of petrol I no longer buy. The car doesn&apos;t list at over £40,000, so I avoided the expensive car supplement that a chunk of the EV market now pays for five years — that one does add up, and if you&apos;re shopping near that threshold it&apos;s worth checking before you sign anything.
        </p>

        <p>
          What actually annoyed me wasn&apos;t the money. It was that the exemption had become part of my mental arithmetic for &quot;why an EV is obviously the correct choice,&quot; and now that line item is gone, and I had to go and check whether the whole argument still holds up. Spoiler: it does, comfortably, but I want to show my working because I did actually redo it.
        </p>

        {/* Data callout */}
        <div className="bg-off-white border border-border-light rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-navy mb-4">What actually changed, roughly</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center border-b border-border-light pb-3">
              <span className="text-ev-grey">EV VED, pre-April 2025</span>
              <span className="font-bold text-ev-green">£0/year</span>
            </div>
            <div className="flex justify-between items-center border-b border-border-light pb-3">
              <span className="text-ev-grey">EV VED, now</span>
              <span className="font-bold text-navy">Standard rate (same as petrol)</span>
            </div>
            <div className="flex justify-between items-center border-b border-border-light pb-3">
              <span className="text-ev-grey">Home charging saving vs 40 MPG petrol</span>
              <span className="font-bold text-ev-green">~£900–£1,100/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-ev-grey">Net effect on the case for switching</span>
              <span className="font-bold text-ev-grey">Basically unchanged</span>
            </div>
          </div>
        </div>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          The tax that actually matters, if you get a car through work
        </h2>

        <p>
          While I was in a spreadsheet mood, I also went and checked the Benefit-in-Kind rate for this tax year, because a reader emailed me asking whether it was still worth salary-sacrificing an EV given &quot;everything changing.&quot; It went up again — it&apos;s on a published year-by-year schedule, 1 percentage point higher each year — and for 2026/27 it sits at 4%. Compare that to a petrol car at the top of its CO2 scale, taxed at up to 37%, and the gap is still enormous. On a fairly ordinary £45,000 company car, that&apos;s the difference between a few hundred pounds a year in tax and several thousand. VED lost EVs a small, symbolic advantage. BIK has not moved an inch on the thing that actually matters for company car and salary sacrifice drivers.
        </p>

        <p>
          I wrote up the full VED mechanics and the BIK schedule properly, with the actual worked numbers, because doing it in a blog post with wounded pride as the primary narrative device felt like it needed a companion piece with less emotion in it. If you want the reference version rather than the version where I complain about a letter, they&apos;re linked below.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          So, does it change anything?
        </h2>

        <p>
          No. Which is slightly annoying to admit after building up a whole letter-based grievance, but the fuel saving is still the dominant number by a wide margin, and the BIK gap for anyone with a company car is, if anything, still the single biggest reason to make the switch. The taxman caught up. He just didn&apos;t catch up very far.
        </p>
      </div>

      <div className="mt-10 pt-6 border-t border-border-light">
        <p className="text-xs text-ev-grey">
          For the full breakdown, see the{" "}
          <Link href="/guides/electric-car-tax-ved-2026" className="text-ev-blue hover:underline">
            Electric Car Tax (VED) 2026 guide
          </Link>{" "}
          and the{" "}
          <Link href="/guides/ev-company-car-tax-bik-2026" className="text-ev-blue hover:underline">
            EV Company Car Tax (BIK) 2026 guide
          </Link>
          , or{" "}
          <Link href="/#calculator" className="text-ev-blue hover:underline">
            calculate your own EV running costs →
          </Link>
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "The Taxman Finally Caught Up With My EV",
            datePublished: "2026-08-30",
            dateModified: "2026-08-30",
            author: { "@type": "Person", name: "EV Ian", url: "https://electricvspetrol.co.uk/author/ev-ian" },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            url: "https://electricvspetrol.co.uk/blog/the-taxman-finally-caught-up-with-my-ev",
          }),
        }}
      />
    </article>
  );
}
