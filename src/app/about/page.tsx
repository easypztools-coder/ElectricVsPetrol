import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "ElectricVsPetrol.co.uk is an independent UK tool built to give drivers a transparent, data-led answer to the EV vs petrol question — with no affiliation to car manufacturers, energy companies, or dealerships.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/about",
  },
};

export default function AboutPage() {
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
            About
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        About ElectricVsPetrol.co.uk
      </h1>

      <p className="text-lg text-ev-grey mb-10 leading-relaxed">
        An independent UK-built tool designed to give drivers a clear, honest
        answer to the EV vs petrol question — using real data, not marketing.
      </p>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="about-tool">
          <h2
            id="about-tool"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            What this is
          </h2>
          <p className="mb-4">
            ElectricVsPetrol.co.uk is a free, browser-based calculator that
            compares the running costs of electric vehicles and petrol cars for
            UK drivers. It uses your actual mileage, local fuel prices, and
            electricity tariff to produce a personalised comparison — not a
            generic national average.
          </p>
          <p>
            The site also publishes guides and methodology documentation so you
            can understand exactly how the numbers are calculated and where the
            data comes from.
          </p>
        </section>

        <section aria-labelledby="about-independence">
          <h2
            id="about-independence"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Independent and unaffiliated
          </h2>
          <p className="mb-4">
            This tool has no commercial relationship with any car manufacturer,
            energy company, dealership, charging network, or financial services
            provider. We do not receive referral fees, affiliate commissions, or
            advertising revenue related to EV purchases or energy products.
          </p>
          <p>
            The goal is simple: to give UK drivers a transparent, data-led answer
            to the EV vs petrol question, without the spin that tends to come
            from parties with a financial interest in the outcome.
          </p>
        </section>

        <section aria-labelledby="about-data-sources">
          <h2
            id="about-data-sources"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Data sources
          </h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span
                className="text-ev-blue mt-1 flex-shrink-0"
                aria-hidden="true"
              >
                →
              </span>
              <div>
                <p className="font-medium text-navy mb-1">
                  Local petrol and diesel prices
                </p>
                <p className="text-sm">
                  Live forecourt prices are fetched via the{" "}
                  <strong className="text-navy">CMA Fuel Finder</strong> API
                  when you enter your postcode. This uses data from the UK
                  Competition and Markets Authority, which requires fuel
                  retailers to publish their prices publicly. If no local data
                  is available, we fall back to national averages from BEIS and
                  RAC Fuel Watch.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="text-ev-blue mt-1 flex-shrink-0"
                aria-hidden="true"
              >
                →
              </span>
              <div>
                <p className="font-medium text-navy mb-1">
                  Postcode geolocation
                </p>
                <p className="text-sm">
                  Your postcode is sent to{" "}
                  <a
                    href="https://postcodes.io"
                    className="text-ev-blue hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    postcodes.io
                  </a>{" "}
                  — a free, open-source UK postcode lookup service — to
                  retrieve your geographic coordinates. The postcode is not
                  stored on our servers.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="text-ev-blue mt-1 flex-shrink-0"
                aria-hidden="true"
              >
                →
              </span>
              <div>
                <p className="font-medium text-navy mb-1">
                  Electricity tariffs
                </p>
                <p className="text-sm">
                  Home electricity rates are entered by you directly. Default
                  values are based on the Ofgem price cap standard variable
                  unit rate. We do not integrate with energy suppliers or
                  attempt to retrieve your actual tariff — you know your bill
                  better than any API does.
                </p>
              </div>
            </li>
          </ul>
          <p className="mt-5 text-sm">
            Full details of all formulas, assumptions, and data sources are in
            our{" "}
            <Link href="/methodology" className="text-ev-blue hover:underline">
              methodology page
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="about-privacy">
          <h2
            id="about-privacy"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Privacy
          </h2>
          <p>
            All calculations run in your browser. We do not store your
            postcode, mileage, vehicle details, or any other inputs. The only
            data that leaves your browser is your postcode (for the geocoding
            lookup) and anonymous page view statistics via Vercel Analytics —
            no cookies, no tracking. See our{" "}
            <Link href="/privacy" className="text-ev-blue hover:underline">
              privacy policy
            </Link>{" "}
            for full details.
          </p>
        </section>
      </div>

      <div className="mt-10 pt-8 border-t border-border-light">
        <p className="text-sm text-ev-grey">
          Have a question or spotted an error?{" "}
          <Link href="/contact" className="text-ev-blue hover:underline">
            Get in touch
          </Link>
          .
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
                name: "About",
                item: "https://electricvspetrol.co.uk/about",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
