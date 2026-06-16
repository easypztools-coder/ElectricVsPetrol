import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ElectricVsPetrol.co.uk",
  description:
    "Privacy policy for ElectricVsPetrol.co.uk. Calculations run client-side. Postcode is used only for location lookup and is not stored.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/privacy",
  },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Privacy Policy
      </h1>
      <p className="text-sm text-ev-grey mb-8">Last updated: November 2024</p>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="overview-section">
          <h2
            id="overview-section"
            className="text-xl font-bold text-navy mb-3 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            In plain English
          </h2>
          <div className="bg-ev-green/8 border border-ev-green/20 rounded-2xl p-5">
            <ul className="space-y-2 text-sm">
              {[
                "The cost calculator runs entirely in your browser. Your mileage, MPG, fuel prices, and electricity rates are never sent to or stored on our servers.",
                "If you enter a postcode, it is sent to the free postcodes.io API to look up your geographic location. We do not store your postcode.",
                "We do not require you to create an account or provide personal information to use the calculator.",
                "We may use basic, privacy-respecting analytics to understand how the site is used, with no personally identifiable data collected.",
                "We do not sell data to third parties.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="text-ev-green flex-shrink-0 mt-0.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="data-collected-section">
          <h2
            id="data-collected-section"
            className="text-xl font-bold text-navy mb-3 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            What data we collect
          </h2>
          <h3 className="text-base font-semibold text-navy mb-2 mt-4">
            Calculator inputs
          </h3>
          <p className="mb-3 text-sm">
            Your annual mileage, MPG, fuel prices, electricity rates, and
            other calculator inputs are processed entirely within your browser
            using JavaScript. These values are not transmitted to any server
            operated by ElectricVsPetrol.co.uk.
          </p>

          <h3 className="text-base font-semibold text-navy mb-2 mt-4">
            Postcode (optional)
          </h3>
          <p className="mb-3 text-sm">
            If you choose to enter a UK postcode, it is sent via a secure
            HTTPS request to{" "}
            <a
              href="https://postcodes.io"
              className="text-ev-blue hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              postcodes.io
            </a>{" "}
            — a free, open-source UK postcode lookup service. This returns
            your geographic region (e.g. &quot;South East&quot;) which is used
            to display region-appropriate pricing context. Your postcode is
            not stored in our databases. Please review the{" "}
            <a
              href="https://postcodes.io"
              className="text-ev-blue hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              postcodes.io terms
            </a>{" "}
            for their data handling.
          </p>

          <h3 className="text-base font-semibold text-navy mb-2 mt-4">
            Analytics
          </h3>
          <p className="text-sm">
            We may use privacy-respecting web analytics (such as Plausible
            Analytics or similar cookieless tools) to understand aggregate usage
            patterns — for example, how many visitors use the calculator and
            which pages are most visited. No cookies are set and no personally
            identifiable information is collected through analytics.
          </p>
        </section>

        <section aria-labelledby="cookies-section">
          <h2
            id="cookies-section"
            className="text-xl font-bold text-navy mb-3 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Cookies
          </h2>
          <p className="text-sm">
            This site does not currently use cookies for tracking or advertising
            purposes. We may use browser local storage to save your calculator
            settings between visits, purely for your convenience. No tracking
            cookies or third-party advertising cookies are set.
          </p>
        </section>

        <section aria-labelledby="third-parties-section">
          <h2
            id="third-parties-section"
            className="text-xl font-bold text-navy mb-3 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Third-party services
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-2 pr-4 text-navy font-semibold">
                    Service
                  </th>
                  <th className="text-left py-2 pr-4 text-navy font-semibold">
                    Purpose
                  </th>
                  <th className="text-left py-2 text-navy font-semibold">
                    Data shared
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                <tr>
                  <td className="py-2.5 pr-4 font-medium">postcodes.io</td>
                  <td className="py-2.5 pr-4">Postcode geolocation</td>
                  <td className="py-2.5 text-ev-grey">Postcode only, if entered</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-medium">Google Fonts</td>
                  <td className="py-2.5 pr-4">Typography (Inter, Space Grotesk)</td>
                  <td className="py-2.5 text-ev-grey">IP address (on font load)</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-medium">
                    Analytics (if enabled)
                  </td>
                  <td className="py-2.5 pr-4">Aggregate usage statistics</td>
                  <td className="py-2.5 text-ev-grey">
                    No personally identifiable data
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="rights-section">
          <h2
            id="rights-section"
            className="text-xl font-bold text-navy mb-3 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Your rights (UK GDPR)
          </h2>
          <p className="text-sm mb-3">
            Since we do not collect or store personal data through the
            calculator, there is no personal data to access, correct, or delete.
          </p>
          <p className="text-sm">
            If you have questions about how your data is handled, please contact
            us at{" "}
            <span className="text-navy font-medium">
              privacy@electricvspetrol.co.uk
            </span>
            .
          </p>
        </section>

        <section aria-labelledby="changes-section">
          <h2
            id="changes-section"
            className="text-xl font-bold text-navy mb-3 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Changes to this policy
          </h2>
          <p className="text-sm">
            We may update this privacy policy as the product evolves. We will
            update the &quot;last updated&quot; date above and, for significant
            changes, add a notice on the homepage.
          </p>
        </section>
      </div>

      <div className="mt-10 pt-8 border-t border-border-light">
        <Link href="/" className="text-ev-blue hover:underline text-sm">
          ← Back to the calculator
        </Link>
      </div>
    </div>
  );
}
