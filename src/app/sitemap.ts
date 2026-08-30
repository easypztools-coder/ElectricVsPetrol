import type { MetadataRoute } from "next";
import { comparisons } from "@/lib/data/comparisons";
import { evModels } from "@/lib/data/evPageData";
import { blogPosts } from "@/lib/data/blogPosts";

// ── Ofgem price cap quarterly freshness ──────────────────────────────────────
// Ofgem updates the energy price cap every 3 months (Jan, Apr, Jul, Oct).
// Pages that reference live electricity/fuel pricing should carry the most
// recent price cap update date as their lastModified, so Googlebot treats
// them as actively maintained rather than stale.
function currentOfgemQuarterDate(): Date {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed

  // Determine start of current Ofgem quarter (Jan=0, Apr=3, Jul=6, Oct=9)
  let quarterMonth: number;
  if (month >= 9) quarterMonth = 9;       // Oct–Dec quarter
  else if (month >= 6) quarterMonth = 6;  // Jul–Sep quarter
  else if (month >= 3) quarterMonth = 3;  // Apr–Jun quarter
  else quarterMonth = 0;                  // Jan–Mar quarter

  return new Date(year, quarterMonth, 1);
}

const OFGEM_DATE = currentOfgemQuarterDate();
const TODAY = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://electricvspetrol.co.uk";

  return [
    // ── Homepage ──────────────────────────────────────────────────────────────
    {
      url: base,
      lastModified: OFGEM_DATE, // refreshes with each price cap quarter
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Guides hub ───────────────────────────────────────────────────────────
    {
      url: `${base}/guides`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/ev-running-cost-index-q3-2026`,
      lastModified: OFGEM_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/guides/ev-vs-petrol-running-costs`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/guides/local-fuel-prices`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/guides/hybrid-vs-petrol-running-costs`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/ev-salary-sacrifice-uk`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/ev-running-costs-scotland`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/guides/ev-running-costs-wales`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/guides/ev-running-costs-northern-ireland`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/guides/cheapest-evs-to-run-uk-2026`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/guides/best-ev-for-high-mileage`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/is-ev-worth-it-without-home-charger`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/hybrid-vs-petrol-calculator`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/guides/ev-vs-diesel-running-costs`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/guides/electric-car-fuel-cost`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/best-ev-uk-2026`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/guides/ev-salary-sacrifice-calculator`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/electric-car-tax-ved-2026`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/guides/ev-company-car-tax-bik-2026`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/guides/public-ev-charging-costs-uk`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/ev-depreciation-vs-petrol`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/guides/used-ev-buying-guide-uk`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/ev-running-costs-london-ulez`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // ── Evergreen / info pages ────────────────────────────────────────────────
    {
      url: `${base}/methodology`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "yearly",
      priority: 0.4,
    },

    // ── Compare hub + programmatic comparison pairs ───────────────────────────
    {
      url: `${base}/compare`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...comparisons.map((c) => ({
      url: `${base}/compare/${c.slug}`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly" as const,
      priority: c.tier === 1 ? 0.85 : c.tier === 2 ? 0.75 : 0.65,
    })),

    // ── EV model hub + programmatic EV pages ─────────────────────────────────
    {
      url: `${base}/ev`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...evModels.map((ev) => ({
      url: `${base}/ev/${ev.slug}`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // ── Blog hub + individual posts ───────────────────────────────────────────
    {
      url: `${base}/blog`,
      lastModified: TODAY,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // ── Author ───────────────────────────────────────────────────────────────
    {
      url: `${base}/author/ev-ian`,
      lastModified: new Date("2026-07-08"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },

    // ── Fuel price archive pages ──────────────────────────────────────────────
    {
      url: `${base}/fuel-prices`,
      lastModified: OFGEM_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: `${base}/fuel-prices/august-2026`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${base}/fuel-prices/july-2026`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${base}/fuel-prices/june-2026`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    },

    // ── FAQ hub pages ─────────────────────────────────────────────────────────
    {
      url: `${base}/faq/how-much-does-it-cost-to-charge-a-tesla-at-home-uk`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/faq/cheapest-ev-to-run-uk`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/faq/is-ev-cheaper-than-petrol-uk`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${base}/faq/do-electric-cars-pay-road-tax-uk`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${base}/faq/how-much-does-public-ev-charging-cost-uk`,
      lastModified: OFGEM_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ];
}

