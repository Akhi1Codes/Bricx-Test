import React from 'react';
import type { Metadata } from 'next';
import blogsData from '../blogs.json';
import HomeClient from './HomeClient';
import JsonLd from '@/components/shared/JsonLd';
import { buildFaqSchema } from '@/lib/schema';
import { homeFaqs } from '@/data/faqData';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  hero_image: string;
  hero_image_alt: string;
  date: string;
  content: string[];
}

export const metadata: Metadata = {
  title: "Independent Commercial Real Estate Advisory in Bangalore",
  description: "Bricx.ai is a boutique real estate advisory firm in Bangalore. Conflict free counsel across leasing, investments, and land without developer bias.",
  alternates: {
    canonical: "https://bricx.ai/"
  },
  openGraph: {
    type: "website",
    url: "https://bricx.ai/",
    title: "Independent Commercial Real Estate Advisory in Bangalore",
    description: "Bricx.ai is a boutique real estate advisory firm in Bangalore. Conflict free counsel across leasing, investments, and land without developer bias.",
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
    title: "Independent Commercial Real Estate Advisory in Bangalore",
    description: "Bricx.ai is a boutique real estate advisory firm in Bangalore. Conflict free counsel across leasing, investments, and land without developer bias.",
    images: ["https://bricx.ai/og-default.png"]
  }
};

export default function HomePage() {
  const latestBlogs: BlogPost[] = (blogsData as BlogPost[]).slice(0, 3);

  return (
    <>
      <JsonLd data={buildFaqSchema(homeFaqs, "/")} />
      <HomeClient latestBlogs={latestBlogs} />
    </>
  );
}
