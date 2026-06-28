import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      // AI search crawlers — explicitly welcomed so the site is indexed by AI products
      { userAgent: "GPTBot", allow: "/" },           // OpenAI / ChatGPT Search
      { userAgent: "OAI-SearchBot", allow: "/" },    // OpenAI search indexer
      { userAgent: "ChatGPT-User", allow: "/" },     // ChatGPT browsing
      { userAgent: "PerplexityBot", allow: "/" },    // Perplexity AI
      { userAgent: "Claude-Web", allow: "/" },       // Anthropic Claude
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },  // Gemini / Google AI
      { userAgent: "Applebot-Extended", allow: "/" },// Apple Intelligence
      { userAgent: "Amazonbot", allow: "/" },        // Alexa AI
      { userAgent: "YouBot", allow: "/" },           // You.com AI search
    ],
    sitemap: "https://electricvspetrol.co.uk/sitemap.xml",
    host: "https://electricvspetrol.co.uk",
  };
}
