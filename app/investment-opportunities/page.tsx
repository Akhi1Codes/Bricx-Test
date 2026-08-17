import React from 'react';
import type { Metadata } from 'next';
import InvestmentClient from './InvestmentClient';
import JsonLd from '@/components/shared/JsonLd';
import { buildFaqSchema } from '@/lib/schema';
import { investmentFaqs } from '@/data/faqData';

export const metadata: Metadata = {
  title: "Commercial Property Investment Advisory in Bangalore",
  description: "Strategic commercial property investment advisory in Bengaluru. We evaluate income producing assets with capital market discipline: focusing on risk first and return projections next.",
  alternates: {
    canonical: "https://bricx.ai/investment-opportunities"
  },
  openGraph: {
    type: "website",
    url: "https://bricx.ai/investment-opportunities",
    title: "Commercial Property Investment Advisory in Bangalore",
    description: "Strategic commercial property investment advisory in Bengaluru. We evaluate income producing assets with capital market discipline: focusing on risk first and return projections next.",
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
    title: "Commercial Property Investment Advisory in Bangalore",
    description: "Strategic commercial property investment advisory in Bengaluru. We evaluate income producing assets with capital market discipline: focusing on risk first and return projections next.",
    images: ["https://bricx.ai/og-default.png"]
  }
};

export default function InvestmentOpportunitiesPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(investmentFaqs, "/investment-opportunities")} />
      <InvestmentClient />
    </>
  );
}
