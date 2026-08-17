import React from 'react';
import type { Metadata } from 'next';
import AdvisoryClient from './AdvisoryClient';
import JsonLd from '@/components/shared/JsonLd';
import { buildFaqSchema } from '@/lib/schema';
import { advisoryFaqs } from '@/data/faqData';

export const metadata: Metadata = {
  title: "Leasing Advisory Services in Bangalore",
  description: "Finding the right office space is only the beginning. Bricx.ai provides end to end leasing advisory in Bengaluru: from requirement understanding and location strategy to lease negotiation and deal closure.",
  alternates: {
    canonical: "https://bricx.ai/advisory"
  },
  openGraph: {
    type: "website",
    url: "https://bricx.ai/advisory",
    title: "Leasing Advisory Services in Bangalore",
    description: "Finding the right office space is only the beginning. Bricx.ai provides end to end leasing advisory in Bengaluru: from requirement understanding and location strategy to lease negotiation and deal closure.",
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
    title: "Leasing Advisory Services in Bangalore",
    description: "Finding the right office space is only the beginning. Bricx.ai provides end to end leasing advisory in Bengaluru: from requirement understanding and location strategy to lease negotiation and deal closure.",
    images: ["https://bricx.ai/og-default.png"]
  }
};

export default function AdvisoryPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(advisoryFaqs, "/advisory")} />
      <AdvisoryClient />
    </>
  );
}
