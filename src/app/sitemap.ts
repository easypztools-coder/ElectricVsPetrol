import type { MetadataRoute } from "next";
import { comparisons } from "@/lib/data/comparisons";
import { evModels } from "@/lib/data/evPageData";
import { blogPosts } from "@/lib/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://electricvspetrol.co.uk";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/guides`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/guides/ev-vs-petrol-running-costs`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides/local-fuel-prices`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/guides/hybrid-vs-petrol-running-costs`,
      lastModified: new Date("2026-06-21"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/guides/ev-salary-sacrifice-uk`,
      lastModified: new Date("2026-06-21"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/guides/ev-running-costs-scotland`,
      lastModified: new Date("2026-07-08"),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${base}/guides/ev-running-costs-wales`,
      lastModified: new Date("2026-07-08"),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${base}/guides/ev-running-costs-northern-ireland`,
      lastModified: new Date("2026-07-08"),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${base}/methodology`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.6,
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
    {
      url: `${base}/compare`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...comparisons.map((c) => ({
      url: `${base}/compare/${c.slug}`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: c.tier === 1 ? 0.8 : c.tier === 2 ? 0.7 : 0.6,
    })),
    // EV model pages
    {
      url: `${base}/ev`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...evModels.map((ev) => ({
      url: `${base}/ev/${ev.slug}`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    // Blog
    {
      url: `${base}/blog`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    {
      url: `${base}/author/ev-ian`,
      lastModified: new Date("2026-07-08"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    // New guides
    {
      url: `${base}/guides/cheapest-evs-to-run-uk-2026`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/guides/best-ev-for-high-mileage`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${base}/guides/is-ev-worth-it-without-home-charger`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    // New Phase 2 pages
    {
      url: `${base}/guides/hybrid-vs-petrol-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/guides/ev-vs-diesel-running-costs`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/guides/electric-car-fuel-cost`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${base}/guides/best-ev-uk-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/guides/ev-salary-sacrifice-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    // Fuel prices
    {
      url: `${base}/fuel-prices`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${base}/fuel-prices/june-2026`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    // FAQ pages
    {
      url: `${base}/faq/how-much-does-it-cost-to-charge-a-tesla-at-home-uk`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${base}/faq/cheapest-ev-to-run-uk`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${base}/faq/is-ev-cheaper-than-petrol-uk`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
