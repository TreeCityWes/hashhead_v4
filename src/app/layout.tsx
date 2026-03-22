import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://hashhead.io"),
  title: "HashHead — Building the X1 Ecosystem",
  description:
    "The home of TreeCityWes — builder, validator, and community leader in the X1 blockchain ecosystem. Creator of X1 Ninja, X1 World, X1 Node, and more.",
  keywords: ["HashHead", "TreeCityWes", "X1", "blockchain", "validator", "X1 Ninja", "X1 World", "X1 Node"],
  openGraph: {
    title: "HashHead — Building the X1 Ecosystem",
    description: "The home of TreeCityWes — builder, validator, and community leader in the X1 blockchain ecosystem.",
    url: "https://hashhead.io",
    siteName: "HashHead",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HashHead — Building the X1 Ecosystem",
    description: "The home of TreeCityWes — builder, validator, and community leader in the X1 blockchain ecosystem.",
    site: "@treecitywes",
    creator: "@treecitywes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
