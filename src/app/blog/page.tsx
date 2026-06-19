import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blogPosts";

export const metadata: Metadata = {
  title: "EV Blog — EV Ian's Dispatches from Life With an Electric Car | ElectricVsPetrol",
  description:
    "EV Ian writes about life with an electric car in the UK — charging infrastructure, running cost data, policy changes, and honest takes on new EVs. British, data-driven, occasionally spreadsheet-adjacent.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/blog",
  },
};

const categoryColours: Record<string, string> = {
  Charging: "bg-ev-blue/10 text-ev-blue",
  "Running Costs": "bg-ev-green/10 text-ev-green",
  Reviews: "bg-ev-amber/10 text-ev-amber",
  Policy: "bg-purple-100 text-purple-700",
  Industry: "bg-gray-100 text-gray-600",
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">Blog</li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        EV Ian&apos;s Dispatches
      </h1>
      <p className="text-lg text-ev-grey mb-10 leading-relaxed">
        Real writing about real EV ownership. Charging queues, Ofgem price caps,
        Chinese rivals, government U-turns — covered with data, British
        understatement, and a mildly concerning spreadsheet habit.
      </p>

      <div className="space-y-6">
        {sorted.map((post) => (
          <article
            key={post.slug}
            className="border border-border-light rounded-2xl p-6 hover:border-ev-blue/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                  categoryColours[post.category] ?? "bg-gray-100 text-gray-600"
                }`}
              >
                {post.category}
              </span>
              <span className="text-xs text-ev-grey">{post.dateDisplay}</span>
              <span className="text-xs text-ev-grey">·</span>
              <span className="text-xs text-ev-grey">{post.readingTimeMin} min read</span>
            </div>

            <h2
              className="text-xl font-bold text-navy mb-2 font-display"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-ev-blue transition-colors"
              >
                {post.title}
              </Link>
            </h2>

            <p className="text-sm text-ev-grey leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-sm text-ev-blue font-medium hover:underline"
            >
              Read post
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </article>
        ))}
      </div>

      {/* Calculator CTA */}
      <div className="mt-12 bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-6">
        <p className="text-sm font-medium text-navy mb-1">
          Want to see what an EV would cost you specifically?
        </p>
        <p className="text-sm text-ev-grey mb-3">
          Enter your mileage, charging habits, and fuel type for a personalised comparison.
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Use the cost calculator
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://electricvspetrol.co.uk/blog" },
            ],
          }),
        }}
      />
    </div>
  );
}
