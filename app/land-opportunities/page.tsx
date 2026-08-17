import React from 'react';
import type { Metadata } from 'next';
import LandClient from './LandClient';
import JsonLd from '@/components/shared/JsonLd';
import { buildFaqSchema } from '@/lib/schema';
import { landFaqs } from '@/data/faqData';

export const metadata: Metadata = {
  title: "Land Acquisition Advisory in Bangalore",
  description: "Litigation, unclear titles, access gaps, and projections that do not hold up. Bricx.ai provides land acquisition advisory in Bengaluru with a filter first approach.",
  alternates: {
    canonical: "https://bricx.ai/land-opportunities"
  },
  openGraph: {
    type: "website",
    url: "https://bricx.ai/land-opportunities",
    title: "Land Acquisition Advisory in Bangalore",
    description: "Litigation, unclear titles, access gaps, and projections that do not hold up. Bricx.ai provides land acquisition advisory in Bengaluru with a filter first approach.",
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
    title: "Land Acquisition Advisory in Bangalore",
    description: "Litigation, unclear titles, access gaps, and projections that do not hold up. Bricx.ai provides land acquisition advisory in Bengaluru with a filter first approach.",
    images: ["https://bricx.ai/og-default.png"]
  }
};

export default function LandOpportunitiesPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(landFaqs, "/land-opportunities")} />
      <LandClient />
    </>
  );
}
