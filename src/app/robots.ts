import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://electricvspetrol.co.uk/sitemap.xml",
    host: "https://electricvspetrol.co.uk",
  };
}
