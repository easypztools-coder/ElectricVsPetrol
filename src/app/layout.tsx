import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EV vs Petrol Cost Calculator UK | ElectricVsPetrol.co.uk",
    template: "%s | ElectricVsPetrol.co.uk",
  },
  description:
    "Compare electric and petrol running costs using UK mileage, fuel prices, electricity rates and charging assumptions. See cost per mile, annual savings and break-even point.",
  keywords: [
    "EV cost calculator UK",
    "electric car vs petrol cost",
    "EV running costs",
    "petrol vs electric savings",
    "UK electric car calculator",
    "cost per mile electric car",
    "EV break even calculator",
  ],
  authors: [{ name: "ElectricVsPetrol.co.uk" }],
  metadataBase: new URL("https://electricvspetrol.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://electricvspetrol.co.uk",
    siteName: "ElectricVsPetrol.co.uk",
    title: "EV vs Petrol Cost Calculator UK | ElectricVsPetrol.co.uk",
    description:
      "Compare electric and petrol running costs using real UK prices. See cost per mile, annual savings and break-even point.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV vs Petrol Cost Calculator UK",
    description:
      "Compare electric and petrol running costs using real UK prices.",
    site: "@ElectricVsPetrol",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3961806405350437"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ElectricVsPetrol.co.uk",
              url: "https://electricvspetrol.co.uk",
              logo: "https://electricvspetrol.co.uk/favicon.svg",
              description:
                "Independent UK EV vs petrol running cost calculator and guides. Data-led, transparent, built for UK drivers.",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
