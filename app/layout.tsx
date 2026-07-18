import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";

import { HeroStarfield } from "@/components/ui/HeroStarfield";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { siteConfig } from "@/data/landing";

import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: "500",
  subsets: ["cyrillic", "latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05070B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <SmoothScroll />
        <HeroStarfield className="site-starfield" />
        {children}
      </body>
    </html>
  );
}
