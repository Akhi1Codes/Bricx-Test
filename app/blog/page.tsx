import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import blogsData from '../../blogs.json';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  hero_image: string;
  hero_image_alt: string;
  date: string;
  date_iso: string;
  publisher: string;
  meta_description?: string;
}

export const metadata: Metadata = {
  title: "Commercial Real Estate Insights Bengaluru | Bricx.ai Blog",
  description: "Market intelligence, leasing frameworks, and investment thinking for Bangalore's commercial real estate: from the Bricx.ai advisory desk.",
  alternates: {
    canonical: "https://bricx.ai/blog"
  },
  openGraph: {
    type: "website",
    url: "https://bricx.ai/blog",
    title: "Commercial Real Estate Insights Bengaluru | Bricx.ai Blog",
    description: "Market intelligence, leasing frameworks, and investment thinking for Bangalore's commercial real estate: from the Bricx.ai advisory desk.",
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
    title: "Commercial Real Estate Insights Bengaluru | Bricx.ai Blog",
    description: "Market intelligence, leasing frameworks, and investment thinking for Bangalore's commercial real estate: from the Bricx.ai advisory desk.",
    images: ["https://bricx.ai/og-default.png"]
  }
};

export default function BlogIndexPage() {
  const blogs: BlogPost[] = blogsData as BlogPost[];

  // Exact port of Flask's Blog JSON-LD Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Bricx Blogs",
    "url": "https://bricx.ai/blog",
    "description": "Read Bricx.ai's institutional insights, market pricing data, due diligence reviews, and commercial real estate advisory editorials.",
    "publisher": {
      "@type": "Organization",
      "name": "Bricx.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bricx.ai/home_about_advisory.png"
      }
    },
    "blogPost": blogs.map((item) => ({
      "@type": "BlogPosting",
      "headline": item.title,
      "description": item.meta_description || item.excerpt,
      "datePublished": item.date_iso || item.date,
      "url": `https://bricx.ai/blog/${item.slug}`,
      "image": `https://bricx.ai${item.hero_image}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="blog-index-hero" style={{ backgroundColor: '#0f2343', paddingTop: '130px', paddingBottom: '50px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 200, letterSpacing: '0.18em', color: 'rgba(255, 255, 255, 0.94)', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
          Commercial Real Estate Intelligence | Bangalore
        </h1>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: 300, border: 'none', padding: 0, textTransform: 'none', letterSpacing: 'normal' }}>
          Market Insights. Advisory Thinking. No Filler.
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.84)', maxWidth: '700px', margin: '10px auto 0 auto', lineHeight: '1.6', fontWeight: 300 }}>
          The Bricx.ai blog covers commercial real estate in Bangalore and India: leasing frameworks, investment thinking, land advisory, and micro market analysis across Whitefield, Outer Ring Road, Koramangala, Electronic City, HSR Layout, and South Bengaluru.
        </p>
        <div style={{ margin: '20px auto 0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.88)' }}>
          <span>Leasing Advisory</span> <span style={{ color: '#c5b897' }}>|</span>
          <span>Income Investments</span> <span style={{ color: '#c5b897' }}>|</span>
          <span>Land & Opportunity</span> <span style={{ color: '#c5b897' }}>|</span>
          <span>Market Intelligence</span>
        </div>
      </div>

      <section className="bricx-blog-list-section">
        <div className="bricx-blog-list-container">
          {blogs.map((item) => (
            <Link key={item.id} href={`/blog/${item.slug}`} className="bricx-blog-list-item">
              <div className="bricx-blog-list-image-wrap" style={{ position: 'relative', minHeight: '240px' }}>
                <Image
                  src={item.hero_image}
                  alt={item.hero_image_alt || item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              </div>
              <div className="bricx-blog-list-content">
                <h4>{item.title}</h4>
                <p className="bricx-blog-list-excerpt">{item.excerpt}</p>
                <ul className="bricx-blog-list-details">
                  <li className="bricx-blog-list-date">{item.date}</li>
                  <li className="bricx-blog-list-publisher">{item.publisher}</li>
                </ul>
                <span className="bricx-blog-list-link">READ MORE</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
