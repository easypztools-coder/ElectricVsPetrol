import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I Drove a BYD Seal. I Have Feelings About This. | EV Ian — ElectricVsPetrol Blog",
  description: "The BYD Seal is £5,500 cheaper than a Tesla Model 3, does 354 miles, and charges at 150kW. EV Ian drove one. The data says buy it. He has not bought it.",
  alternates: { canonical: "https://electricvspetrol.co.uk/blog/i-drove-a-byd-seal-i-have-feelings" },
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
          <li aria-current="page" className="text-navy">I Drove a BYD Seal</li>
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
        I Drove a BYD Seal. I Have Feelings About This.
      </h1>

      {/* Byline */}
      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border-light">
        <div className="w-9 h-9 rounded-full bg-ev-blue/10 flex items-center justify-center text-ev-blue font-bold text-sm">EI</div>
        <div>
          <p className="text-sm font-medium text-navy">EV Ian</p>
          <p className="text-xs text-ev-grey">15 March 2024 · 6 min read</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-5 text-ev-grey leading-relaxed">
        <p>
          I am not a car journalist. I want to be upfront about this. I am a man from Reading who spent three years convincing his wife to let him buy a Tesla Model 3 and who now evangelises about charging costs at dinner parties until people find reasons to leave. My qualifications to review the BYD Seal are, accordingly, limited. I drove one for a weekend through Berkshire and into Wiltshire, and I have opinions, and I cannot decide whether those opinions are rational or defensive.
        </p>

        <p>
          Let me give you the numbers first, because numbers are easier than feelings.
        </p>

        {/* Spec comparison callout */}
        <div className="bg-off-white border border-border-light rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-navy mb-4">BYD Seal RWD vs Tesla Model 3 RWD — key specs</p>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div></div>
            <div className="font-semibold text-ev-blue">BYD Seal</div>
            <div className="font-semibold text-navy">Tesla Model 3</div>
            <div className="text-ev-grey">Price from</div>
            <div className="font-bold text-ev-green">£35,490</div>
            <div className="font-bold text-ev-amber">£40,990</div>
            <div className="text-ev-grey">0–62 mph</div>
            <div>5.9 sec</div>
            <div>5.8 sec</div>
            <div className="text-ev-grey">WLTP range</div>
            <div>354 miles</div>
            <div>333 miles</div>
            <div className="text-ev-grey">DC charging</div>
            <div>150 kW</div>
            <div>170 kW</div>
            <div className="text-ev-grey">Real-world efficiency</div>
            <div>~3.8 mi/kWh</div>
            <div>~3.5 mi/kWh</div>
          </div>
        </div>

        <p>
          The BYD Seal RWD starts at £35,490. The Tesla Model 3 RWD starts at £40,990. That is a £5,500 difference. Over five years, assuming you saved that premium and didn&apos;t spend it on anything, at even a modest interest rate you&apos;re looking at £6,000+ of meaningful financial advantage before you&apos;ve factored in the running costs — where the Seal&apos;s superior real-world efficiency of approximately 3.8 mi/kWh versus the Model 3&apos;s 3.5 mi/kWh extends the gap slightly further.
        </p>

        <p>
          The 0-62 times are essentially identical. 5.9 seconds vs 5.8 seconds. That is not a meaningful difference in any real-world context, unless you are regularly racing a BYD Seal from a standstill, which would be a very specific situation.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          What it was actually like to drive
        </h2>

        <p>
          Good. It was good. That is not a satisfying sentence for me to write, but there it is. The Seal is smooth, quiet, composed on the A4, confident on the M4, and the one-pedal driving mode is well-calibrated. The regenerative braking isn&apos;t as immediately adjustable as I&apos;d like — you get it or you don&apos;t, basically — but it works. The suspension is slightly softer than the Model 3, which some people will prefer and I have decided I don&apos;t, despite the fact that my back is 46 years old and would probably benefit.
        </p>

        <p>
          The interior is where I have the most complex feelings. It is perfectly adequate. The 15.6-inch rotating touchscreen is genuinely clever and a bit of a showpiece. The materials are fine. And yet.
        </p>

        <p>
          And yet it smells different. I cannot tell you precisely how it smells different. It smells like a new car, the same way all new cars smell like new cars, but this new car smell is... new car smell in a slightly different key. This is not a rational observation. I am aware of this. My wife, when I raised it, stared at me for a long moment before returning to her book.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          What the data actually says
        </h2>

        <p>
          The BYD Seal charges at up to 150kW DC. The Model 3 at up to 170kW. In practice, at the rapid chargers I&apos;ve used in the Thames Valley, both cars spend most of their time well below their peak rates anyway — real-world conditions, battery temperature, state of charge. The difference is there but unlikely to matter to the vast majority of UK drivers.
        </p>

        <p>
          BYD is the world&apos;s largest EV manufacturer by sales volume. They make their own batteries, their own chips, their own everything. The blade battery in the Seal has a strong safety record and the company stands behind a 6-year/150,000-mile warranty in the UK. The after-sales network is smaller than Tesla&apos;s, which is a legitimate concern, but growing.
        </p>

        <p>
          Autocar gave it four and a half stars. What Car? gave it Car of the Year 2024. Auto Express loved it. Every data point I have access to says this is an excellent car at a price that undercuts the competition significantly.
        </p>

        <p>
          I have not bought the BYD Seal. I still have the Model 3. I am aware that this makes me exactly the kind of person I mock — somebody who says they want to be data-led and then finds a reason not to be when the data says something inconvenient. The reason I have not bought it is that I have owned the Model 3 for three years, and I like it, and the Supercharger network is very good, and — look. The interior of the BYD smells different, alright? I&apos;m not made of stone.
        </p>

        <p>
          If you&apos;re buying an EV now for the first time, with no loyalty to any ecosystem: the Seal is an extraordinary piece of value engineering. Run the numbers. The numbers are very compelling. I have.
        </p>
      </div>

      {/* Source reference */}
      <div className="mt-10 pt-6 border-t border-border-light">
        <p className="text-xs text-ev-grey">
          Based on BYD Seal UK launch reviews from Autocar, What Car? and Auto Express, published 12–14 March 2024. Specs from BYD UK official press materials.
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
            headline: "I Drove a BYD Seal. I Have Feelings About This.",
            datePublished: "2024-03-15",
            dateModified: "2024-03-15",
            author: { "@type": "Person", name: "EV Ian" },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            url: "https://electricvspetrol.co.uk/blog/i-drove-a-byd-seal-i-have-feelings",
          }),
        }}
      />
    </article>
  );
}
