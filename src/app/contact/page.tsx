import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | ElectricVsPetrol.co.uk",
  description:
    "Get in touch with ElectricVsPetrol.co.uk — whether you have a question, found an error, or want to suggest a feature.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/contact",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            Contact
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Contact
      </h1>

      <p className="text-lg text-ev-grey mb-10 leading-relaxed">
        Have a question, found an error, or want to suggest a feature?
      </p>

      <div className="bg-off-white border border-border-light rounded-2xl p-8">
        <p className="text-sm text-ev-grey mb-2">Email us at</p>
        <a
          href="mailto:hello@electricvspetrol.co.uk"
          className="text-xl font-semibold text-ev-blue hover:underline"
        >
          hello@electricvspetrol.co.uk
        </a>
        <p className="mt-4 text-sm text-ev-grey leading-relaxed">
          We read everything and aim to respond within a few working days. If
          you&apos;ve spotted a data error or a calculation issue, please include
          the inputs you used so we can reproduce and investigate it.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://electricvspetrol.co.uk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: "https://electricvspetrol.co.uk/contact",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
