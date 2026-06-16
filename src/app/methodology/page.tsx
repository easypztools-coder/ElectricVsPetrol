import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology — How We Calculate EV vs Petrol Costs",
  description:
    "Full explanation of the formulas, assumptions, data sources, and limitations behind the ElectricVsPetrol.co.uk calculator.",
  alternates: {
    canonical: "https://electricvspetrol.co.uk/methodology",
  },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mb-12">
      <h2
        id={id}
        className="text-2xl font-bold text-navy mb-4 font-display"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        {title}
      </h2>
      <div className="prose-content">{children}</div>
    </section>
  );
}

function Formula({ label, formula }: { label: string; formula: string }) {
  return (
    <div className="my-4 bg-off-white border border-border-light rounded-xl p-4">
      <p className="text-xs font-semibold text-ev-grey uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="font-mono text-sm text-navy">{formula}</p>
    </div>
  );
}

export default function MethodologyPage() {
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
            Methodology
          </li>
        </ol>
      </nav>

      <h1
        className="text-4xl font-bold text-navy mb-4 font-display"
        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
      >
        Methodology
      </h1>
      <p className="text-lg text-ev-grey mb-10 leading-relaxed">
        How we calculate EV vs petrol running costs — the formulas, assumptions,
        data sources, and limitations.
      </p>

      <Section id="overview" title="Overview">
        <p className="text-ev-grey leading-relaxed mb-4">
          The calculator compares the annual fuel and electricity running costs
          of a petrol or diesel car against an equivalent electric vehicle. It
          does <strong>not</strong> include purchase price, depreciation,
          insurance, servicing, road tax, or finance costs — these vary too much
          between vehicles and circumstances to be included reliably.
        </p>
        <p className="text-ev-grey leading-relaxed">
          All calculations run entirely in your browser. No personal data, no
          postcode, and no inputs are transmitted to or stored on any server
          beyond a postcode lookup (which is handled via the free
          postcodes.io API).
        </p>
      </Section>

      <Section id="petrol-diesel-cost" title="Petrol / diesel cost calculation">
        <p className="text-ev-grey leading-relaxed mb-4">
          We convert MPG to litres per 100 km, then calculate annual litres
          consumed and multiply by your local fuel price.
        </p>

        <Formula
          label="Litres per year"
          formula="litresPerYear = (annualMiles ÷ MPG) × 4.54609"
        />
        <p className="text-xs text-ev-grey mb-4">
          4.54609 is the number of litres in one Imperial gallon (UK standard).
        </p>

        <Formula
          label="Annual fuel cost (£)"
          formula="fuelCostPerYear = litresPerYear × (fuelPricePencePerLitre ÷ 100)"
        />

        <Formula
          label="Petrol cost per mile (£)"
          formula="petrolCostPerMile = fuelCostPerYear ÷ annualMiles"
        />
      </Section>

      <Section id="ev-cost" title="EV electricity cost calculation">
        <p className="text-ev-grey leading-relaxed mb-4">
          We calculate kWh consumed per year from your EV efficiency, then
          apply a blended electricity rate based on your home vs public charging
          split.
        </p>

        <Formula
          label="kWh per year"
          formula="kWhPerYear = annualMiles ÷ evMilesPerKwh"
        />

        <Formula
          label="Blended electricity rate (p/kWh)"
          formula="blendedRate = (homeChargePercent ÷ 100 × homeRate) + ((100 − homeChargePercent) ÷ 100 × publicRate)"
        />

        <Formula
          label="Annual EV electricity cost (£)"
          formula="evCostPerYear = kWhPerYear × (blendedRate ÷ 100)"
        />

        <Formula
          label="EV cost per mile (£)"
          formula="evCostPerMile = evCostPerYear ÷ annualMiles"
        />

        <p className="text-ev-grey text-sm leading-relaxed mt-4">
          The home vs public charging split has a large impact on results.
          Home charging at 28p/kWh gives roughly 8p per mile for a typical EV.
          Public rapid charging at 75p/kWh pushes that to around 21p per mile —
          more expensive than many petrol cars.
        </p>
      </Section>

      <Section id="savings" title="Savings and break-even">
        <Formula
          label="Annual saving (£)"
          formula="annualSaving = fuelCostPerYear − evCostPerYear"
        />
        <p className="text-xs text-ev-grey mb-4">
          A positive value means EV is cheaper. A negative value means petrol /
          diesel is cheaper with your current assumptions.
        </p>

        <Formula
          label="Break-even (years)"
          formula="breakEvenYears = evPricePremium ÷ annualSaving"
        />
        <p className="text-ev-grey text-sm leading-relaxed">
          Break-even is only shown when the annual saving is positive (EV is
          cheaper). The EV price premium defaults to £2,500 — an approximate
          difference between a popular mid-range EV and its petrol equivalent,
          after government grants where applicable. Adjust this to reflect your
          own comparison.
        </p>
      </Section>

      <Section id="defaults" title="Default values">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border-light">
                <th className="text-left py-2 pr-4 text-navy font-semibold">
                  Input
                </th>
                <th className="text-left py-2 pr-4 text-navy font-semibold">
                  Default
                </th>
                <th className="text-left py-2 text-navy font-semibold">
                  Source
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {[
                [
                  "Annual mileage",
                  "10,000 miles",
                  "DfT average UK driver annual mileage",
                ],
                [
                  "Petrol MPG",
                  "45 MPG",
                  "Typical mid-range petrol hatchback official combined",
                ],
                [
                  "Petrol price",
                  "143.9p/litre",
                  "BEIS / RAC national average (updated manually)",
                ],
                [
                  "Diesel price",
                  "151.9p/litre",
                  "BEIS / RAC national average (updated manually)",
                ],
                [
                  "Home electricity",
                  "28.0p/kWh",
                  "Ofgem price cap unit rate (standard variable)",
                ],
                [
                  "Public charging",
                  "60.0p/kWh",
                  "UK network average fast charging rate",
                ],
                [
                  "Home charge %",
                  "80%",
                  "Typical EV owner with home charger",
                ],
                [
                  "EV efficiency",
                  "3.5 miles/kWh",
                  "Mid-range EV real-world efficiency",
                ],
                [
                  "EV price premium",
                  "£2,500",
                  "Approximate EV vs petrol equivalent premium",
                ],
              ].map(([input, def, source]) => (
                <tr key={input}>
                  <td className="py-2.5 pr-4 text-navy font-medium">
                    {input}
                  </td>
                  <td className="py-2.5 pr-4 text-ev-blue font-semibold">
                    {def}
                  </td>
                  <td className="py-2.5 text-ev-grey">{source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="limitations" title="Limitations and caveats">
        <ul className="space-y-3 text-ev-grey">
          {[
            "Results cover fuel and electricity running costs only. Insurance, depreciation, servicing, road tax, and finance can add £2,000–£5,000+ per year and are not included.",
            "Official MPG figures are typically 10–25% higher than real-world fuel economy. Consider reducing the MPG figure to reflect your driving style.",
            "EV real-world efficiency varies significantly with speed, temperature, load, and driving style. Winter efficiency can be 20–30% lower.",
            "Public charging prices change frequently and vary by network, location, and subscription. Check Zap-Map or individual network apps for current pricing.",
            "Home electricity rates depend on your tariff. EV-specific overnight tariffs (e.g. Octopus Go) can reduce home charging costs to 7–10p/kWh — dramatically improving EV economics.",
            "Fuel prices are national averages. Local prices vary by up to 20p/litre. Enter your postcode for live local pricing from nearby forecourts.",
            "This tool does not constitute financial advice. Always verify costs with your own research before making purchasing decisions.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-ev-amber flex-shrink-0 mt-0.5">⚠</span>
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="data-sources" title="Data sources">
        <ul className="space-y-2 text-sm text-ev-grey">
          <li>
            <strong className="text-navy">Fuel prices:</strong> BEIS Weekly Road
            Fuel Prices, RAC Fuel Watch — updated manually in fallback data.
            Live local prices are fetched via the CMA Fuel Finder API when a postcode is entered.
          </li>
          <li>
            <strong className="text-navy">Electricity rates:</strong> Ofgem
            price cap quarterly updates for standard variable tariff rate.
          </li>
          <li>
            <strong className="text-navy">Postcode lookup:</strong>{" "}
            <a
              href="https://postcodes.io"
              className="text-ev-blue hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              postcodes.io
            </a>{" "}
            (free, open source).
          </li>
          <li>
            <strong className="text-navy">EV efficiency:</strong> Real-world
            data from Spritmonitor, WLTP test data, and EV Database.
          </li>
          <li>
            <strong className="text-navy">Gallons conversion:</strong> 1 UK
            Imperial gallon = 4.54609 litres (BIPM definition).
          </li>
        </ul>
      </Section>

      <div className="border-t border-border-light pt-8 mt-8">
        <p className="text-sm text-ev-grey">
          Something not right? Spotted an error in our methodology?{" "}
          <a href="/privacy" className="text-ev-blue hover:underline">
            Get in touch
          </a>
          . We update defaults when official data changes.
        </p>
      </div>
    </div>
  );
}
