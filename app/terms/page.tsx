import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | BRICX.AI",
  description: "Review the Bricx.ai Terms of Service governing access to gated placement memorandums and commercial real estate advisory services.",
  alternates: {
    canonical: "https://bricx.ai/terms"
  }
};

export default function TermsPage() {
  return (
    <>
      <section className="advisory-hero" style={{ backgroundColor: 'var(--primary-obsidian)', minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container" style={{ padding: '120px 0 60px 0' }}>
          <div className="blog-category" style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Institutional Charter
          </div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--bg-cream)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Terms of Service
          </h1>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)', color: 'var(--text-charcoal)', lineHeight: 1.8, fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
        <div className="container" style={{ maxWidth: '800px', padding: '60px 24px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-obsidian)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            1. Access to Gated Placement Memorandums
          </h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Access to the gated portions of this platform, specifically investment teasers and private property brochures, is subject to active Non Disclosure Agreements (NDAs). By accessing dealroom entries, users consent to treat all quantitative returns, logistics tenant registries, and road access descriptions with absolute confidentiality.
          </p>

          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-obsidian)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            2. No Real Estate Underwriting Warranties
          </h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            All asset calculations, sovereign grade credit yields, and developmental checklist scorecards published by Bricx are simulations intended solely for preliminary assessment. They do not constitute formal investment recommendations or structural engineering certifications.
          </p>

          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-obsidian)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            3. Intellectual Property Rights
          </h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            The unique, proprietary B2B real estate calculations, architectural floor plans, and curated off market placements published on BRICX.AI represent the exclusive intellectual assets of the firm. Unauthorized distribution, copying, or digital scraping is strictly prohibited.
          </p>
        </div>
      </section>
    </>
  );
}
