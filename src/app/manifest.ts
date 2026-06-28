import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ElectricVsPetrol.co.uk",
    short_name: "EV vs Petrol",
    description:
      "Free UK EV vs petrol running cost calculator. Compare cost per mile, annual savings, and break-even point using real local prices.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B132B",
    theme_color: "#0066FF",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-touch-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
