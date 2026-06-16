export default function WhyLocalPrices() {
  return (
    <section
      aria-labelledby="local-prices-heading"
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <h2
              id="local-prices-heading"
              className="text-3xl font-bold text-navy mb-4 font-display"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              Why local prices matter
            </h2>
            <div className="space-y-4 text-ev-grey">
              <p>
                Fuel prices vary by up to 20p per litre across the UK. A driver
                in rural Scotland may pay significantly more than someone near a
                supermarket forecourt in the Midlands.
              </p>
              <p>
                Electricity costs vary even more dramatically. Home tariffs
                range from around 22p/kWh on an EV-specific overnight rate to
                over 35p/kWh on standard variable. Public rapid charging can
                reach 80p/kWh or more.
              </p>
              <p>
                Using a national average disguises the real answer for your
                situation. That&apos;s why we let you adjust every assumption —
                and why the calculator now looks up live local fuel prices near
                your postcode automatically when you enter it and click Calculate.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="/guides/local-fuel-prices"
                className="inline-flex items-center gap-1.5 text-ev-blue font-medium hover:underline text-sm"
              >
                Read our local fuel prices guide
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
              </a>
            </div>
          </div>

          {/* Visual column — UK region price comparison */}
          <div className="bg-off-white rounded-2xl border border-border-light p-6">
            <h3
              className="text-sm font-semibold text-navy mb-4 font-display"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              Typical UK price ranges
            </h3>
            <div className="space-y-3">
              {[
                {
                  label: "Petrol (unleaded)",
                  range: "135–158p/litre",
                  color: "bg-ev-amber",
                },
                {
                  label: "Diesel",
                  range: "140–165p/litre",
                  color: "bg-ev-amber",
                },
                {
                  label: "Home electricity",
                  range: "22–35p/kWh",
                  color: "bg-ev-blue",
                },
                {
                  label: "Public fast charging",
                  range: "50–80p/kWh",
                  color: "bg-ev-blue",
                },
                {
                  label: "Public rapid (150kW+)",
                  range: "70–89p/kWh",
                  color: "bg-ev-blue",
                },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${row.color}`}
                    />
                    <span className="text-sm text-navy">{row.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-ev-grey whitespace-nowrap">
                    {row.range}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-ev-grey mt-4">
              Approximate UK ranges. Prices change daily. Always check your
              local forecourt and energy tariff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
