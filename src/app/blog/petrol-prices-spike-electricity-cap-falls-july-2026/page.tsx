import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Petrol Just Spiked. Your Electricity Bill Just Fell. Let Me Explain. | EV Ian — ElectricVsPetrol Blog",
  description: "Petrol and diesel jumped hard in July 2026 while the Ofgem price cap quietly dropped. EV Ian works out what that combination actually does to the EV vs petrol maths — and why public charging is the exception.",
  alternates: { canonical: "https://electricvspetrol.co.uk/blog/petrol-prices-spike-electricity-cap-falls-july-2026" },
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
          <li aria-current="page" className="text-navy">Petrol Spikes, Electricity Cap Falls</li>
        </ol>
      </nav>

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-block text-xs font-semibold text-ev-blue bg-ev-blue/8 px-3 py-1.5 rounded-full">
          Running Costs
        </span>
      </div>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Petrol Just Spiked. Your Electricity Bill Just Fell. Let Me Explain.
      </h1>

      {/* Byline */}
      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border-light">
        <Link href="/author/ev-ian" className="w-9 h-9 rounded-full bg-ev-blue/10 flex items-center justify-center text-ev-blue font-bold text-sm hover:bg-ev-blue/20 transition-colors">EI</Link>
        <div>
          <Link href="/author/ev-ian" className="text-sm font-medium text-navy hover:text-ev-blue transition-colors">EV Ian</Link>
          <p className="text-xs text-ev-grey">30 July 2026 · 6 min read</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-5 text-ev-grey leading-relaxed">
        <p>
          Two things happened this month that, individually, would each be a
          reasonably interesting blog post. Together, they&apos;ve moved the EV-vs-petrol
          number more than anything I&apos;ve written about all year, and almost nobody
          seems to have noticed both at once. So let&apos;s do both at once.
        </p>

        <p>
          Thing one: petrol and diesel got noticeably more expensive, fast.
          Thing two: the Ofgem price cap — the thing that sets the default
          electricity rate most people are quietly paying — went down. Petrol up,
          electricity down, in the same fortnight. If you&apos;ve been charging at
          home, this is the best month for your running costs in a while. If
          you&apos;ve been relying on public rapid charging, it is very much not,
          and I want to be honest about that part too.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          What actually happened
        </h2>

        <div className="bg-off-white border border-border-light rounded-xl p-5 my-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-28 text-xs font-semibold text-ev-blue pt-0.5">1 July 2026</div>
            <div className="text-sm text-ev-grey">The new Ofgem price cap takes effect. The standard variable electricity unit rate drops to 26.11p/kWh for July–September, down from 28p/kWh — a genuine fall, not a typo.</div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-28 text-xs font-semibold text-ev-amber pt-0.5">Mid-July 2026</div>
            <div className="text-sm text-ev-grey">RAC Fuel Watch reports diesel rising around 4p in ten days and petrol climbing nearly 3p a litre, the sharpest short-term jump since the 2022 energy crisis.</div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-28 text-xs font-semibold text-ev-green pt-0.5">30 July 2026</div>
            <div className="text-sm text-ev-grey">UK averages settle around 153.5p/litre for petrol and 168.6p/litre for diesel — up roughly 10p and 17p respectively since June.</div>
          </div>
        </div>

        <p>
          Two unrelated markets, two regulators, one coincidence of timing. I
          don&apos;t think anyone planned this. I do think it&apos;s worth doing the
          actual sums instead of just vibing about it, which is usually where
          this kind of story ends up on social media.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          The home-charging number got better. Noticeably.
        </h2>

        <p>
          At the new 26.1p/kWh rate, a typical EV doing 3.5 miles/kWh costs
          about 7.5p per mile to charge at home. A petrol car doing 40 MPG now
          costs about 17.4p per mile at the new pump prices. That&apos;s a gap of
          just under 10p per mile — call it £990 a year at 10,000 miles, up
          from roughly £800 back in June. Nobody did anything differently.
          The market just moved in the EV owner&apos;s favour twice in the same
          month.
        </p>

        <p>
          For anyone still on the fence about whether to make the switch, this
          is about as good as the headline comparison has looked all year. I
          ran the <Link href="/#calculator" className="text-ev-blue hover:underline">calculator</Link> with
          current prices and my own commute, and the number moved enough that
          I went and checked it twice, which is not something I usually admit
          to doing in public.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          The bit nobody&apos;s writing headlines about: public charging got worse
        </h2>

        <p>
          Here&apos;s the part that gets left out of the celebratory version of this
          story. Public rapid and ultra-rapid charging averaged 79p/kWh across
          UK networks in mid-2026 — up sharply from where it sat a couple of
          years ago, and a much bigger jump than either petrol or the
          electricity cap moved this month. At 79p/kWh, an EV doing 3.5
          miles/kWh costs about 22.6p per mile. That is <em>more expensive
          than a 40 MPG petrol car</em>, not competitive with one.
        </p>

        <p>
          I did the maths on this properly for the{" "}
          <Link href="/guides/ev-vs-diesel-running-costs" className="text-ev-blue hover:underline">
            EV vs diesel guide
          </Link>{" "}
          and the result surprised me: once public charging makes up half your
          miles or more, a diesel now works out cheaper than an EV, which was
          not true a year ago. Home charging isn&apos;t just the cheaper option
          any more — for a lot of driving patterns, it&apos;s the only option that
          still makes the EV case at all.
        </p>

        <p>
          The cheapest network, Tesla Supercharger, is still down around
          62p/kWh. The most expensive PAYG rates on InstaVolt and BP Pulse sit
          nearer 90p/kWh. If you&apos;re charging in public regularly, which
          network you use has become a genuinely large chunk of your annual
          running cost — not a rounding error.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          So what should you actually do with this
        </h2>

        <p>
          If you can charge at home, this month is a genuine, measurable
          improvement in your running costs and there&apos;s nothing more to it
          than that. Enjoy it. If you can&apos;t charge at home and you&apos;ve been
          assuming public rapid charging keeps you roughly petrol-competitive,
          it&apos;s worth checking that assumption now rather than at your next
          service. It may no longer be true, and for some driving patterns it
          has flipped outright.
        </p>

        <p>
          Either way, national averages hide a lot. Your own numbers depend on
          your mileage, your tariff, and how much of your charging actually
          happens at home versus on the road. That&apos;s what the calculator is
          for — I&apos;d rather you ran your own figures than trusted my averages.
        </p>
      </div>

      {/* Source reference */}
      <div className="mt-10 pt-6 border-t border-border-light">
        <p className="text-xs text-ev-grey">
          Ofgem price cap change effective 1 July 2026. RAC Fuel Watch data,
          July 2026. Zapmap UK charging price index, June 2026.{" "}
          <Link href="/fuel-prices/july-2026" className="text-ev-blue hover:underline ml-1">
            See the full July 2026 fuel price breakdown →
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
            headline: "Petrol Just Spiked. Your Electricity Bill Just Fell. Let Me Explain.",
            datePublished: "2026-07-30",
            dateModified: "2026-07-30",
            author: { "@type": "Person", name: "EV Ian", url: "https://electricvspetrol.co.uk/author/ev-ian" },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            url: "https://electricvspetrol.co.uk/blog/petrol-prices-spike-electricity-cap-falls-july-2026",
          }),
        }}
      />
    </article>
  );
}
