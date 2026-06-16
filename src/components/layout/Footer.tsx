import Link from "next/link";
import Logo from "@/components/brand/Logo";

const footerLinks = [
  {
    heading: "Tools",
    links: [
      { href: "/#calculator", label: "EV vs Petrol Calculator" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { href: "/guides/ev-vs-petrol-running-costs", label: "EV Running Costs" },
      { href: "/guides/local-fuel-prices", label: "Local Fuel Prices" },
    ],
  },
  {
    heading: "Legal",
    links: [{ href: "/privacy", label: "Privacy Policy" }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top: logo + links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          {/* Brand col */}
          <div className="md:col-span-1">
            <Logo size="md" />
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
