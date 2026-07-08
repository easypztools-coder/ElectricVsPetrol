import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blogPosts";

export const metadata: Metadata = {
  title: "EV Ian — Author",
  description:
    "EV Ian writes ElectricVsPetrol.co.uk's blog and news analysis. Here's who writes it, how posts are sourced and fact-checked, and how to flag a correction.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/author/ev-ian",
  },
};

export default function AuthorEvIanPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="text-ev-blue hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blog" className="text-ev-blue hover:underline">Blog</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">EV Ian</li>
        </ol>
      </nav>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-ev-blue/10 flex items-center justify-center text-ev-blue font-bold text-lg">EI</div>
        <div>
          <h1
            className="text-3xl font-bold text-navy font-display leading-tight"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            EV Ian
          </h1>
          <p className="text-sm text-ev-grey">Writer, ElectricVsPetrol.co.uk</p>
        </div>
      </div>

      <p className="text-lg text-ev-grey mb-10 leading-relaxed">
        EV Ian writes the blog and news analysis on ElectricVsPetrol.co.uk —
        UK EV running costs, charging infrastructure, policy changes, and
        reviews, written from the perspective of someone who actually owns
        and drives an EV day to day rather than a manufacturer press desk.
      </p>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="how-we-work">
          <h2
            id="how-we-work"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How posts are written and checked
          </h2>
          <p className="mb-4">
            Every post that cites a figure — a fuel price, a grant amount, a
            charger count, a mandate percentage — links to the primary
            source it came from, usually GOV.UK, the Department for
            Transport, Ofgem, SMMT, or a manufacturer&apos;s own published
            figures. Where a post makes a calculation (cost per mile, annual
            saving, break-even point), it uses the same formulas documented
            on the site&apos;s{" "}
            <Link href="/methodology" className="text-ev-blue hover:underline">
              methodology page
            </Link>
            , not a separate one-off number.
          </p>
          <p>
            Posts are dated, and the date shown is when they were last
            substantively checked, not just republished. Older posts about
            policy or pricing can go stale — if you spot something that&apos;s
            since changed, that&apos;s useful to know about.
          </p>
        </section>

        <section aria-labelledby="independence">
          <h2
            id="independence"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Independence
          </h2>
          <p>
            ElectricVsPetrol.co.uk has no commercial relationship with any
            car manufacturer, energy supplier, dealership, or charging
            network, and doesn&apos;t take payment for favourable coverage.
            See the full{" "}
            <Link href="/about" className="text-ev-blue hover:underline">
              about page
            </Link>{" "}
            for how the site is funded and where its data comes from.
          </p>
        </section>

        <section aria-labelledby="corrections">
          <h2
            id="corrections"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Spotted an error?
          </h2>
          <p>
            Prices, grants and policy details change, and mistakes happen.
            If something in a post looks out of date or wrong,{" "}
            <Link href="/contact" className="text-ev-blue hover:underline">
              get in touch
            </Link>{" "}
            and it&apos;ll be checked and corrected.
          </p>
        </section>
      </div>

      <section className="mt-12 pt-10 border-t border-border-light">
        <h2
          className="text-2xl font-bold text-navy mb-6 font-display"
          style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
        >
          Posts by EV Ian
        </h2>
        <div className="space-y-4">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-border-light rounded-xl p-4 hover:border-ev-blue/40 transition-colors"
            >
              <p className="text-sm font-semibold text-navy mb-1">{post.title}</p>
              <p className="text-xs text-ev-grey">{post.dateDisplay} · {post.readingTimeMin} min read</p>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "EV Ian",
              url: "https://electricvspetrol.co.uk/author/ev-ian",
              jobTitle: "Writer",
              worksFor: {
                "@type": "Organization",
                name: "ElectricVsPetrol.co.uk",
                url: "https://electricvspetrol.co.uk",
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://electricvspetrol.co.uk" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://electricvspetrol.co.uk/blog" },
              { "@type": "ListItem", position: 3, name: "EV Ian", item: "https://electricvspetrol.co.uk/author/ev-ian" },
            ],
          }),
        }}
      />
    </div>
  );
}
