import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Great British Supercharger Queue of Christmas 2024 | EV Ian — ElectricVsPetrol Blog",
  description: "Tesla Supercharger queues made headlines on Boxing Day 2024. EV Ian was there, had a plan, and the plan was fine. The data proves it. Mostly.",
  alternates: { canonical: "https://electricvspetrol.co.uk/blog/the-great-british-supercharger-queue" },
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
          <li aria-current="page" className="text-navy">The Great British Supercharger Queue</li>
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
        The Great British Supercharger Queue of Christmas 2024
      </h1>

      {/* Byline */}
      <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border-light">
        <div className="w-9 h-9 rounded-full bg-ev-blue/10 flex items-center justify-center text-ev-blue font-bold text-sm">EI</div>
        <div>
          <p className="text-sm font-medium text-navy">EV Ian</p>
          <p className="text-xs text-ev-grey">27 December 2024 · 6 min read</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-5 text-ev-grey leading-relaxed">
        <p>
          I had a plan. I want to be very clear about this. I had a detailed, spreadsheet-backed, charge-stop-optimised plan for the drive to my mother-in-law&apos;s in Lincolnshire on Christmas Eve, and the plan was excellent. I&apos;d topped up to 94% at home overnight, identified the Grantham Supercharger as my midpoint stop, and had a backup option at Newark. I&apos;d even accounted for the wind chill. The plan was fine.
        </p>

        <p>
          The plan did not anticipate that forty-seven other Tesla owners had arrived at Grantham before me.
        </p>

        <p>
          By Boxing Day, the queue photos were everywhere. Fleet Services on the M3. Maidstone on the M20. Grantham, obviously. The Guardian ran a piece. Autocar ran a piece. My brother-in-law, who drives a diesel Skoda Octavia and has never once expressed any interest in cars, sent me a screenshot with three laughing emojis. Three. Unprompted.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          What actually happened, with numbers
        </h2>

        <p>
          Here is the thing about Christmas EV charging congestion, and I say this as someone who waited 23 minutes at Grantham on the 24th and spent that time collecting data on my phone rather than admitting to my wife that I was stressed: it is a very predictable problem caused by a very predictable pattern.
        </p>

        <p>
          British families overwhelmingly travel on December 23rd and 24th. They arrive at their destination. They don&apos;t charge there, because Aunt Susan&apos;s house in Sleaford doesn&apos;t have a driveway charger. They leave on December 26th, batteries depleted from the Christmas runs to the supermarket and the school of thought that range anxiety doesn&apos;t count during the holidays. They all need to charge at the same time. On the same motorway. At Fleet.
        </p>

        <p>
          Fleet Services has 12 Tesla Supercharger stalls. Twelve. For the M3, the main artery connecting London and the Thames Valley commuter belt — where a disproportionate number of Tesla owners happen to live — to the south coast. On a normal Tuesday in October, 12 stalls is plenty. On December 26th at 11am, it is not enough.
        </p>

        <p>
          The Maidstone Supercharger on the M20 has 8 stalls. The Grantham one, which serves traffic on the A1/M1 heading north, has 12. All of them were reported to have waits of 20–45 minutes at peak Boxing Day hours, based on the Supercharger app and the photographs of queues that various journalists used as evidence of the impending death of EVs.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Is this an EV problem or a Christmas problem?
        </h2>

        <p>
          Here is what I kept thinking while I stood next to my car at Grantham eating a Greggs sausage roll and not looking stressed: motorway services are terrible on Boxing Day regardless. Petrol pumps have queues. Costa queues stretch to the car park. The M25 is a car park. The entire country is trying to move at once. Nobody writes think-pieces about the state of petroleum distribution when the Shell at Fleet is rammed on December 26th.
        </p>

        <p>
          The data I collected on my phone — admittedly a sample size of &quot;the cars I could see from where I was standing&quot; — suggested an average wait of 19 minutes at Grantham that morning. Nineteen minutes. During which I ate, used the facilities, got a coffee, and sent my mother-in-law a message telling her we were making great time.
        </p>

        <p>
          Tesla does publish Supercharger usage data, and the network&apos;s own route planning tool flags congested locations in real time. I had ignored the amber warning on Grantham because I am, apparently, an optimist. That is on me. The app knew. The app was trying to tell me. I chose not to listen, which is a pattern my wife would recognise from most of our major life decisions.
        </p>

        <h2
          className="text-2xl font-bold text-navy mt-8 mb-3 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          The structural point
        </h2>

        <p>
          There are now approximately 67,000 public charge points in the UK across all networks, up from around 45,000 a year ago. Tesla has been opening its Supercharger network to non-Tesla EVs since mid-2023, which has increased utilisation but also means the network is finally earning its reputation for reliability with a wider audience.
        </p>

        <p>
          The Boxing Day queue problem is real and the industry knows it. The solution isn&apos;t fewer EVs — it&apos;s more chargers at high-volume motorway locations, better load-balancing through real-time routing, and frankly more hosts at places like Fleet investing in higher-power units. A 150kW V3 Supercharger adds 18 miles of range per minute. A 15-minute stop gets you 270 miles. The physics are fine. The car park layout is the problem.
        </p>

        <p>
          We made it to Lincolnshire with 28% remaining. The return journey, planned for December 27th when traffic is lighter, was completely uneventful. I charged at Grantham again in 12 minutes flat, not a soul in sight.
        </p>

        <p>
          My brother-in-law has not texted back since I sent him the timestamp.
        </p>
      </div>

      {/* Source reference */}
      <div className="mt-10 pt-6 border-t border-border-light">
        <p className="text-xs text-ev-grey">
          Based on reporting from The Guardian, Autocar, and Electrifying.com, published 26 December 2024. Supercharger location details from Tesla&apos;s own network map.
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
            headline: "The Great British Supercharger Queue of Christmas 2024",
            datePublished: "2024-12-27",
            dateModified: "2024-12-27",
            author: { "@type": "Person", name: "EV Ian" },
            publisher: {
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
            },
            url: "https://electricvspetrol.co.uk/blog/the-great-british-supercharger-queue",
          }),
        }}
      />
    </article>
  );
}
