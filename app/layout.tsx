import type { Metadata } from "next";
import type { Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Inter, Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";
import JsonLd from "@/components/shared/JsonLd";
import { organizationSchema, servicesSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-heading", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Bricx.ai | Independent Commercial Real Estate Advisory Bengaluru",
    template: "%s | Bricx.ai"
  },
  description: "Bricx.ai delivers high-end institutional real estate advisory, off-market income investments, and strategic land opportunities with unmatched structural clarity and credibility.",
  keywords: "commercial real estate advisory, off-market investments, land opportunities, Bengaluru real estate",
  openGraph: {
    type: "website",
    url: "https://bricx.ai/",
    title: "Bricx.ai | Independent Commercial Real Estate Advisory Bengaluru",
    description: "Bricx.ai delivers high-end institutional real estate advisory, off-market income investments, and strategic land opportunities with unmatched structural clarity and credibility.",
    images: [
      {
        url: "https://bricx.ai/og-default.png",
        width: 1200,
        height: 630,
        alt: "Bricx.ai Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bricx.ai | Independent Commercial Real Estate Advisory Bengaluru",
    description: "Bricx.ai delivers high-end institutional real estate advisory, off-market income investments, and strategic land opportunities with unmatched structural clarity and credibility.",
    images: ["https://bricx.ai/og-default.png"]
  },
  other: {
    "theme-color": "#0e182a",
    "twitter:site": "@bricx_ai",
    "twitter:creator": "@bricx_ai"
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${cinzel.variable} ${montserrat.variable} ${cormorantGaramond.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='8' fill='%230e182a'/><text x='50%' y='53%' font-size='70' font-family='serif' fill='%23C5B897' text-anchor='middle' dominant-baseline='middle'>B</text></svg>" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <JsonLd data={[organizationSchema, ...servicesSchema]} />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
