import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ofgem Dropped the Price Cap. Here's What It Actually Means For Your EV Bill. | EV Ian — ElectricVsPetrol Blog",
  description: "Ofgem set the Q1 2025 energy price cap at 24.5p/kWh, down from 25.4p in Q4 2024. EV Ian ran the numbers immediately. They are good numbers.",
  alternates: { canonical: "https://electricvspetrol.co.uk/blog/ofgem-price-cap-what-it-means-for-ev-owners" },
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
          <li aria-current="page" className="text-navy">Ofgem Price Cap and Your EV Bill</li>
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
        Ofgem Dropped the Price Cap. Here&apos;s What It Actually Means For Your EV Bill.
      </h1>

      {/* Byline */}
      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border-light">
        <div className="w-9 h-9 rounded-full bg-ev-blue/10 flex items-center justify-center text-ev-blue font-bold text-sm">EI</div>
        <div>
          <p className="text-sm font-medium text-navy">EV Ian</p>
          <p className="text-xs text-ev-grey">26 October 2024 · 5 min read</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-5 text-ev-grey leading-relaxed">
        <p>
          Ofgem announced yesterday that the Q1 2025 energy price cap will sit at £1,738 per year for a typical household. The unit rate works out at approximately 24.5p/kWh. Down from 25.4p/kWh in Q4 2024, and considerably down from the 28.34p/kWh that cap implied in Q3 2024.
        </p>

        <p>
          I had my spreadsheet open before the press release finished loading. My wife walked past, saw the spreadsheet, and said &quot;is this about the car again.&quot; Not a question. A statement of resignation. She is correct. It is always about the car.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          The maths, because someone has to do it
        </h2>

        <p>
          My Tesla Model 3 does approximately 3.5 miles per kWh in real-world mixed driving. At 24.5p/kWh under the new cap, charging at home costs me <strong className="text-navy">7.0p per mile</strong>. At the old Q3 rate of 28.34p/kWh, it was 8.1p per mile. A saving of 1.1p per mile doesn&apos;t sound thrilling, but across 10,000 miles per year that&apos;s £110. Which is not nothing. That&apos;s two thirds of a year&apos;s road tax, or roughly four tanks of petrol, depending on what petrol costs this week, which varies by roughly the same logic as the weather in the Thames Valley: unpredictably and often badly.
        </p>

        <p>
          Now for the comparison everyone&apos;s been waiting for. Or at least, the comparison I have been waiting for, while everyone around me has politely waited for me to stop talking about it at dinner.
        </p>

        {/* Data callout */}
        <div className="bg-off-white border border-border-light rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-navy mb-4">Cost per mile: Q1 2025 snapshot</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center border-b border-border-light pb-3">
              <span className="text-ev-grey">EV — home charging (24.5p/kWh, 3.5 mi/kWh)</span>
              <span className="font-bold text-ev-green">7.0p/mile</span>
            </div>
            <div className="flex justify-between items-center border-b border-border-light pb-3">
              <span className="text-ev-grey">EV — home charging (old Q3 rate, 28.34p/kWh)</span>
              <span className="font-bold text-ev-grey">8.1p/mile</span>
            </div>
            <div className="flex justify-between items-center border-b border-border-light pb-3">
              <span className="text-ev-grey">Petrol — 40 MPG at 143.9p/litre</span>
              <span className="font-bold text-ev-amber">16.0p/mile</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-ev-grey">Petrol — 40 MPG at 165p/litre (2022 peak)</span>
              <span className="font-bold text-ev-amber">18.4p/mile</span>
            </div>
          </div>
        </div>

        <p>
          Petrol is currently averaging 143.9p per litre at UK forecourts, per RAC Fuel Watch data. A car doing 40 MPG — reasonable for a modern family hatchback — costs 16.0p per mile in fuel. The EV, on the new cap rate, costs 7.0p per mile. That is a gap of 9p per mile. Over 10,000 miles per year: <strong className="text-navy">£900 saved in fuel alone</strong>.
        </p>

        <p>
          I have been waiting for pump prices to close this gap for two years. They have not. Petrol went from 165p at peak in 2022 down to the current 143.9p. Welcome. Still 9p per mile worse than home charging.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          The bit people keep getting wrong
        </h2>

        <p>
          The price cap figure — £1,738/year — assumes a &quot;typical household&quot; using 2,700 kWh of electricity per year. The moment you add an EV to your household, you are no longer a typical household. My annual EV charging at home adds roughly 2,857 kWh to our consumption (10,000 miles at 3.5 mi/kWh). At 24.5p/kWh, that&apos;s £700 per year. On top of the household bill.
        </p>

        <p>
          This is why the headline price cap figure is only the starting point, not the conclusion. The real question is what your per-unit rate is, and whether you have access to an off-peak EV tariff. Octopus Go, for instance, offers rates as low as 7p/kWh overnight. At 7p/kWh and 3.5 mi/kWh, home charging costs <strong className="text-navy">2.0p per mile</strong>. Against petrol at 16.0p. That gap — 14p per mile, £1,400 per year at 10,000 miles — is not a rounding error. It is a holiday.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Where this is going
        </h2>

        <p>
          Energy prices are volatile. Ofgem&apos;s cap has moved from 28.34p in Q3 to 25.4p in Q4 to 24.5p in Q1 2025. That trajectory is helpful. Petrol prices are also volatile but remain structurally more expensive for per-mile motoring at any unit rate I&apos;ve seen in the past three years.
        </p>

        <p>
          The comparison isn&apos;t close. It wasn&apos;t close at 28p/kWh. It&apos;s less close at 24.5p. I cannot understand why more people aren&apos;t more excited about this. My wife cannot understand why I am this excited about a quarterly regulatory announcement from an energy regulator. We have reached an impasse.
        </p>

        <p>
          Anyway: the spreadsheet is updated. The numbers are better. They were already good. Now they are better.
        </p>
      </div>

      {/* Source reference */}
      <div className="mt-10 pt-6 border-t border-border-light">
        <p className="text-xs text-ev-grey">
          Based on Ofgem price cap announcement, published 25 October 2024. Petrol price from RAC Fuel Watch (October 2024 national average). EV efficiency based on Tesla Model 3 RWD real-world data.
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
            headline: "Ofgem Dropped the Price Cap. Here's What It Actually Means For Your EV Bill.",
            datePublished: "2024-10-26",
            dateModified: "2024-10-26",
            author: { "@type": "Person", name: "EV Ian" },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            url: "https://electricvspetrol.co.uk/blog/ofgem-price-cap-what-it-means-for-ev-owners",
          }),
        }}
      />
    </article>
  );
}
