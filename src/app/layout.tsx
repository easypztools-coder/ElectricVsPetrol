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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <head />
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-23G71BP84P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-23G71BP84P');`}
        </Script>
        {/* AdSense — loaded after page is interactive to protect Core Web Vitals.
            lazyOnload defers until the browser is idle, preventing CLS/INP hits
            that trigger Google's "low value content + intrusive ads" policy flag. */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3961806405350437"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script id="adsense-init" strategy="lazyOnload">
          {`(window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-3961806405350437",
            enable_page_level_ads: true,
            overlays: { bottom: false }
          });`}
        </Script>
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
              sameAs: ["https://twitter.com/ElectricVsPetrol"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://electricvspetrol.co.uk/#website",
              url: "https://electricvspetrol.co.uk",
              name: "ElectricVsPetrol.co.uk",
              description:
                "Free UK EV vs petrol running cost calculator and data-led guides.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://electricvspetrol.co.uk/compare?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
