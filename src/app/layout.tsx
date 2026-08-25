import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "HashHead — TreeMiner & x1.ninja | XenBlocks Mining + X1 DEX Screener",
    template: "%s | HashHead",
  },
  description: SITE.description,
  keywords: [
    "TreeMiner",
    "HashHead",
    "TreeCityWes",
    "XenBlocks miner",
    "XenBlocks mining",
    "X1 blockchain",
    "X1 Network",
    "GPU miner",
    "CUDA miner",
    "XNM",
    "XUNI",
    "Xenium",
    "x1.ninja",
    "DEX screener",
    "XDEX",
    "X1 token screener",
    "outage-proof miner",
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "HashHead — TreeMiner for XenBlocks and x1.ninja for X1",
    description: SITE.description,
    url: SITE.url,
    siteName: "HashHead",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HashHead — TreeMiner & x1.ninja",
    description: SITE.description,
    site: "@treecitywes",
    creator: "@treecitywes",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "HashHead",
      url: SITE.url,
      description: SITE.description,
      publisher: {
        "@type": "Person",
        name: "TreeCityWes",
        url: SITE.url,
        sameAs: [
          "https://x.com/treecitywes",
          "https://github.com/TreeCityWes",
          "https://youtube.com/@treecitywes",
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "TreeMiner",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux, WSL2",
      url: "https://hashhead.io/miner",
      downloadUrl: "https://github.com/TreeCityWes/tree_miner",
      description:
        "Outage-proof CUDA GPU miner for XenBlocks on the X1 Network. Journals XNM and XUNI finds locally before submission.",
      author: { "@type": "Person", name: "TreeCityWes" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "WebApplication",
      name: "x1.ninja",
      url: "https://x1.ninja",
      applicationCategory: "FinanceApplication",
      description:
        "Premier DEX screener for the X1 blockchain — live XDEX token data, wallet tracking, and liquidity analytics.",
      author: { "@type": "Person", name: "TreeCityWes" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
