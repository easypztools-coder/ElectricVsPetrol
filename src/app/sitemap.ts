import type { MetadataRoute } from "next";

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
  ];
}
