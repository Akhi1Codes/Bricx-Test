import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import blogsData from '../../../blogs.json';

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
  content: string[];
  category?: string;
  target_keyword?: string;
  meta_title?: string;
  meta_description?: string;
  internal_links?: string[];
  spread_images?: string[];
  quote?: {
    text: string;
    author: string;
  };
  cta_title?: string;
  cta_text?: string;
  cta_button_text?: string;
  cta_link?: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (blogsData as BlogPost[]).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = (blogsData as BlogPost[]).find((b) => b.slug === slug);
  if (!post) return { title: "Blog Not Found" };

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt || (post.content[0] ? post.content[0].substring(0, 155) + '...' : '');
  const keywords = post.target_keyword || '';

  return {
    title: title,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: `https://bricx.ai/blog/${post.slug}`
    },
    openGraph: {
      type: "article",
      url: `https://bricx.ai/blog/${post.slug}`,
      title: title,
      description: description,
      images: [
        {
          url: `https://bricx.ai${post.hero_image}`,
          width: 1200,
          height: 630,
          alt: post.hero_image_alt || title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`https://bricx.ai${post.hero_image}`]
    }
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blogs = blogsData as BlogPost[];
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts logic
  const internalSlugs = post.internal_links || [];
  const matched = blogs.filter((b) => internalSlugs.includes(b.slug));
  let related: BlogPost[] = [];
  if (matched.length < 2) {
    const fallback = blogs.filter((b) => b.slug !== slug && !matched.some((m) => m.slug === b.slug));
    related = [...matched, ...fallback].slice(0, 2);
  } else {
    related = matched.slice(0, 2);
  }

  // Exact port of Flask's BlogPosting JSON-LD Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bricx.ai/blog/${post.slug}`
    },
    "headline": post.title,
    "image": [
      `https://bricx.ai${post.hero_image}`
    ],
    "datePublished": post.date_iso || post.date,
    "dateModified": post.date_iso || post.date,
    "author": {
      "@type": "Organization",
      "name": "Bricx Advisors",
      "url": "https://bricx.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bricx.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bricx.ai/home_about_advisory.png"
      }
    },
    "description": post.meta_description || post.excerpt || (post.content[0] ? post.content[0].substring(0, 155) + '...' : ''),
    "articleBody": post.content.join(' ')
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Editorial Blog Header */}
      <section className="blog-editorial-header" style={{ padding: '140px 0 2rem 0', backgroundColor: 'var(--bg-cream)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ textAlign: 'left', margin: '0 auto 2rem auto', maxWidth: '900px', padding: '0 1rem' }}>
            <Link href="/blog" className="blog-back-link" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s ease' }}>
              &larr; Back to Blog
            </Link>
          </div>
          <div className="blog-category" style={{ color: 'var(--accent-gold)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {post.publisher}{post.category && ` • ${post.category}`}
          </div>
          
          <h1 className="blog-editorial-title" style={{ fontFamily: "'Cinzel', serif", fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.2, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--primary-obsidian)', margin: '0 auto 1.5rem auto', maxWidth: '900px' }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* Blog Hero Image Banner */}
      <section className="blog-hero-image-wrapper" style={{ position: 'relative', height: '65vh', overflow: 'hidden', width: '100%' }}>
        <Image
          src={post.hero_image}
          alt={post.hero_image_alt || post.title}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', transformOrigin: 'center center' }}
          unoptimized
        />
      </section>

      {/* Editorial Article Body */}
      <article className="blog-editorial-body">
        {/* Lead Paragraph */}
        <div className="blog-editorial-paragraph lead" dangerouslySetInnerHTML={{ __html: post.content[0] }} />

        {post.content.slice(1).map((para, index) => {
          const isHtml = para.trim().startsWith('<');
          const loopIndex = index + 1; // 1-indexed for the slice(1) map

          return (
            <React.Fragment key={index}>
              {isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: para }} />
              ) : (
                <div className="blog-editorial-paragraph" dangerouslySetInnerHTML={{ __html: para }} />
              )}

              {/* Insert Quote Block after the first paragraph in slice(1) (so paragraph 2 total) */}
              {loopIndex === 1 && post.quote && (
                <div className="blog-quote-block" style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '2rem', margin: '3rem 0', fontStyle: 'italic' }}>
                  <p className="blog-quote-text" style={{ fontFamily: "'Cinzel', serif", fontSize: '1.35rem', lineHeight: '1.6', color: 'var(--primary-obsidian)', marginBottom: '0.8rem' }}>
                    "{post.quote.text}"
                  </p>
                  <div className="blog-quote-author" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    {post.quote.author}
                  </div>
                </div>
              )}

              {/* Insert Visual Image Spread after paragraph 3 total (loopIndex === 2) */}
              {loopIndex === 2 && post.spread_images && post.spread_images.length >= 2 && (
                <div className="blog-spread">
                  <div className="blog-spread-box" style={{ position: 'relative' }}>
                    <Image
                      src={post.spread_images[0]}
                      alt={`${post.title} - Layout Spread 1`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </div>
                  <div className="blog-spread-box" style={{ position: 'relative' }}>
                    <Image
                      src={post.spread_images[1]}
                      alt={`${post.title} - Layout Spread 2`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}

        {/* Article CTA Section */}
        {post.cta_title && (
          <div className="blog-cta-panel" style={{ background: 'rgba(14, 24, 42, 0.45)', padding: '3.5rem 3rem', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.08)', margin: '4.5rem 0', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: '#ffffff', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>{post.cta_title}</h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 300, marginBottom: '2rem', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>{post.cta_text}</p>
            <a href={post.cta_link} className="blog-cta-btn">{post.cta_button_text}</a>
          </div>
        )}

        {/* Recommended Reading Section */}
        {related.length > 0 && (
          <div className="blog-related-readings reveal-on-scroll" style={{ marginTop: '6rem', borderTop: '1px solid var(--border-light)', paddingTop: '4rem' }}>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontWeight: 400, fontSize: '1.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3.5rem' }}>
              Recommended Reading
            </h3>
            
            <div className="listings-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', display: 'grid' }}>
              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.slug}`} className="listing-card stagger-item" style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-white)', border: '1px solid var(--border-light)', textDecoration: 'none', overflow: 'hidden' }}>
                  <div className="listing-img-wrapper" style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                    <Image
                      src={item.hero_image}
                      alt={item.hero_image_alt || item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 28vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                      unoptimized
                    />
                  </div>
                  <div className="listing-body" style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div className="listing-location" style={{ color: 'var(--accent-gold)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      {item.publisher} &bull; {item.date}
                    </div>
                    <h4 style={{ fontFamily: "'Cinzel', serif", fontWeight: 400, fontSize: '1.1rem', lineHeight: '1.35', color: 'var(--primary-obsidian)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0 }}>
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>

            {/* Center View All Action Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
              <Link href="/blog" className="carolwood-btn">
                VIEW ALL <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem', marginLeft: '8px' }}></i>
              </Link>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
