import Link from "next/link";
import Logo from "@/components/brand/Logo";

const footerLinks = [
  {
    heading: "Tools",
    links: [
      { href: "/#calculator", label: "EV vs Petrol Calculator" },
      { href: "/ev", label: "EV Running Costs" },
      { href: "/compare", label: "Car Comparisons" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { href: "/guides/ev-vs-petrol-running-costs", label: "EV Running Costs" },
      { href: "/guides/cheapest-evs-to-run-uk-2026", label: "Cheapest EVs 2026" },
      { href: "/guides/best-ev-for-high-mileage", label: "Best EV for High Mileage" },
      { href: "/guides/is-ev-worth-it-without-home-charger", label: "No Home Charger?" },
      { href: "/guides/hybrid-vs-petrol-running-costs", label: "Hybrid vs Petrol" },
      { href: "/guides/ev-salary-sacrifice-uk", label: "EV Salary Sacrifice" },
      { href: "/guides/ev-running-costs-scotland", label: "EV Costs Scotland" },
      { href: "/guides/ev-running-costs-wales", label: "EV Costs Wales" },
      { href: "/guides/ev-running-costs-northern-ireland", label: "EV Costs N. Ireland" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { href: "/compare/tesla-model-3-vs-bmw-3-series", label: "Model 3 vs 3 Series" },
      { href: "/compare/tesla-model-y-vs-bmw-x3", label: "Model Y vs X3" },
      { href: "/compare/mg4-vs-volkswagen-golf", label: "MG4 vs Golf" },
      { href: "/compare/hyundai-ioniq-5-vs-bmw-x3", label: "Ioniq 5 vs X3" },
    ],
  },
  {
    heading: "Blog & FAQ",
    links: [
      { href: "/blog", label: "EV Ian's Blog" },
      { href: "/author/ev-ian", label: "About the Author" },
      { href: "/faq/is-ev-cheaper-than-petrol-uk", label: "Is EV cheaper than petrol?" },
      { href: "/faq/cheapest-ev-to-run-uk", label: "Cheapest EV to run UK" },
      { href: "/faq/how-much-does-it-cost-to-charge-a-tesla-at-home-uk", label: "Tesla home charging cost" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top: logo + links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-8 border-b border-white/10">
          {/* Brand col */}
          <div className="md:col-span-1">
            <Logo size="md" variant="footer" />
            <p className="mt-3 text-sm text-white/60 max-w-xs">
              The UK EV True Cost Calculator. Independent, transparent, and
              data-led. Built for UK drivers.
            </p>
          </div>

          {/* Nav cols */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                {section.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ElectricVsPetrol.co.uk. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40 max-w-lg text-right">
            Results are estimates only and not financial advice. Fuel prices,
            electricity tariffs, and vehicle costs vary. Always verify current
            rates before making purchasing decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
