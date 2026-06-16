import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Local Fuel Prices: Why They Matter for EV vs Petrol Savings",
  description:
    "Petrol and electricity prices vary significantly across the UK. Find out why local pricing matters for accurate EV vs petrol cost comparisons.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/guides/local-fuel-prices",
  },
};

export default function LocalFuelPricesGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ev-grey">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="text-ev-blue hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>Guides</li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy">
            Local Fuel Prices
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display leading-tight"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        UK Local Fuel Prices: Why They Matter
      </h1>

      <p className="text-lg text-ev-grey mb-8 leading-relaxed">
        Petrol prices vary by up to 20p per litre across the UK. Electricity
        tariffs can differ even more dramatically. Using a national average gives
        you a rough answer — but local pricing gives you the right answer.
      </p>

      {/* CTA */}
      <div className="bg-ev-blue/5 border border-ev-blue/20 rounded-2xl p-5 mb-10">
        <p className="text-sm text-navy font-medium mb-2">
          See how local prices affect your comparison
        </p>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-ev-blue font-semibold hover:underline text-sm"
        >
          Enter your postcode in the calculator
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 7h8M8 4l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="space-y-10 text-ev-grey leading-relaxed">
        <section aria-labelledby="petrol-variation">
          <h2
            id="petrol-variation"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            How much do petrol prices vary across the UK?
          </h2>
          <p className="mb-4">
            According to BEIS (Department for Energy Security and Net Zero) data,
            petrol prices at UK forecourts vary by as much as 15–20p per litre
            between the cheapest and most expensive areas on any given day.
          </p>
          <p className="mb-4">
            Supermarket forecourts — which account for a growing share of UK
            fuel sales — typically undercut branded forecourts by 5–8p per litre.
            In remote areas of Scotland, Northern Ireland, and rural Wales,
            prices can be 10–15p per litre higher than in major urban centres.
          </p>

          <div className="bg-off-white border border-border-light rounded-xl p-5 my-4">
            <h3 className="text-sm font-semibold text-navy mb-3">
              Typical UK petrol price ranges (illustrative)
            </h3>
            <div className="space-y-2">
              {[
                {
                  region: "Supermarket forecourt, major city",
                  range: "135–140p/litre",
                },
                {
                  region: "Branded forecourt, suburban",
                  range: "143–150p/litre",
                },
                {
                  region: "Motorway service station",
                  range: "155–165p/litre",
                },
                {
                  region: "Remote rural / island areas",
                  range: "148–165p/litre",
                },
              ].map((row) => (
                <div
                  key={row.region}
                  className="flex items-center justify-between text-sm"
                >
                  <span>{row.region}</span>
                  <span className="font-semibold text-ev-amber">
                    {row.range}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-ev-grey mt-3">
              Illustrative ranges — check PetrolPrices.com or AA Fuel Prices
              for current local data.
            </p>
          </div>

          <p>
            A 10p/litre difference on a 10,000-mile, 45-MPG car equates to
            approximately{" "}
            <strong className="text-navy">£101 per year</strong> in extra fuel
            costs — enough to materially shift the EV vs petrol comparison.
          </p>
        </section>

        <section aria-labelledby="electricity-variation">
          <h2
            id="electricity-variation"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Electricity price variation is even larger
          </h2>
          <p className="mb-4">
            Home electricity tariffs in the UK range from about 22p/kWh on
            some fixed-rate deals to over 35p/kWh on standard variable tariffs.
            Specialist EV overnight tariffs can be as low as 7p/kWh (e.g.
            Octopus Go off-peak rate).
          </p>
          <p className="mb-4">
            The difference between charging at 7p/kWh overnight vs paying 75p/kWh
            at a rapid public charger is dramatic:
          </p>

          <div className="bg-off-white border border-border-light rounded-xl p-5 my-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                {
                  label: "EV overnight tariff",
                  rate: "7p/kWh",
                  ppm: "2.0p/mile",
                  color: "text-ev-green",
                },
                {
                  label: "Standard home tariff",
                  rate: "28p/kWh",
                  ppm: "8.0p/mile",
                  color: "text-ev-blue",
                },
                {
                  label: "Public rapid charging",
                  rate: "75p/kWh",
                  ppm: "21.4p/mile",
                  color: "text-ev-amber",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-border-light bg-white rounded-xl p-4"
                >
                  <p className="text-xs text-ev-grey mb-2">{item.label}</p>
                  <p className={`text-xl font-bold font-display ${item.color}`} style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}>
                    {item.rate}
                  </p>
                  <p className="text-xs text-ev-grey mt-1">
                    {item.ppm} at 3.5 mi/kWh
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p>
            This means the charging rate you use has a bigger impact on EV
            running costs than the cost of electricity itself — or indeed the
            efficiency of the EV. The calculator lets you adjust both rates and
            set the home vs public split.
          </p>
        </section>

        <section aria-labelledby="postcode-lookup">
          <h2
            id="postcode-lookup"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Postcode-based pricing: how it works
          </h2>
          <p className="mb-4">
            Our calculator accepts a UK postcode to look up your geographic
            location. Currently this is used to:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1" aria-hidden="true">→</span>
              Identify your region (e.g. London, South West, Scotland)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1" aria-hidden="true">→</span>
              Apply regional fuel price adjustments (live integration in
              development)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ev-blue mt-1" aria-hidden="true">→</span>
              Identify proximity to major public charging networks
            </li>
          </ul>
          <p className="mb-4">
            The postcode is sent to the free{" "}
            <a
              href="https://postcodes.io"
              className="text-ev-blue hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              postcodes.io
            </a>{" "}
            API to retrieve your geographic coordinates and region. It is not
            stored on our servers. Read our{" "}
            <Link href="/privacy" className="text-ev-blue hover:underline">
              privacy policy
            </Link>{" "}
            for details.
          </p>
          <p>
            Live fuel price lookup near your postcode using official Fuel Finder
            / BEIS data is planned for a future release. Until then, enter your
            local pump price manually — check PetrolPrices.com or your local
            supermarket app for the most accurate current price.
          </p>
        </section>

        <section aria-labelledby="adjust-manually">
          <h2
            id="adjust-manually"
            className="text-2xl font-bold text-navy mb-4 font-display"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Adjusting prices manually
          </h2>
          <p className="mb-4">
            While live local pricing is being developed, you can get the most
            accurate results by:
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-sm">
              <span className="font-medium text-navy">Checking your local pump price</span> — apps
              like PetrolPrices.com, Waze, or GasBuddy show prices at your
              nearest forecourts.
            </li>
            <li className="text-sm">
              <span className="font-medium text-navy">Finding your electricity unit rate</span> —
              check your last energy bill, or look at your energy provider&apos;s
              online account.
            </li>
            <li className="text-sm">
              <span className="font-medium text-navy">Identifying your public charging rate</span> —
              check the network app you use most frequently (Osprey, Gridserve,
              Pod Point, Blink, etc.).
            </li>
            <li className="text-sm">
              <span className="font-medium text-navy">Setting your home charge %</span> — be
              realistic. Drivers without a home charger, or without off-street
              parking, may charge mostly in public.
            </li>
          </ol>
        </section>
      </div>

      {/* Internal links */}
      <div className="mt-12 pt-8 border-t border-border-light">
        <h3 className="text-sm font-semibold text-navy mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/#calculator"
              className="text-ev-blue hover:underline"
            >
              EV vs Petrol Cost Calculator →
            </Link>
          </li>
          <li>
            <Link
              href="/guides/ev-vs-petrol-running-costs"
              className="text-ev-blue hover:underline"
            >
              EV vs Petrol Running Costs guide →
            </Link>
          </li>
          <li>
            <Link href="/methodology" className="text-ev-blue hover:underline">
              Full methodology and formulas →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
