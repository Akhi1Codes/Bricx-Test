'use client';

import React from 'react';
import Image from 'next/image';
import { landFaqs } from '@/data/faqData';

export default function LandClient() {
  return (
    <div className="land-page-clean">
      {/* Land Opportunities Hero */}
      <section className="showcase-hero-section land-showcase-hero" style={{ padding: '130px 0 2rem 0', backgroundColor: 'var(--bg-cream)' }}>
        <div className="showcase-container">
          <div className="division-showcase-box reveal-on-scroll">
            <div className="showcase-img-side">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
                alt="Land Acquisition & Joint Ventures"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
                unoptimized
              />
            </div>
            <div className="showcase-content-side">
              <div className="category-label" style={{ color: 'var(--accent-gold)' }}>Strategic Assets</div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'var(--primary-obsidian)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
                Land Acquisition Advisory in Bangalore
              </h1>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-olive)', marginBottom: '1rem', textTransform: 'uppercase', border: 'none', padding: 0 }}>
                Title Clarity. Realistic Use. No Assumptions.
              </h2>
              <p>
                Litigation, unclear titles, access gaps, and projections that do not hold up. Bricx.ai provides land
                acquisition advisory in Bengaluru with a filter first approach: most land across the Bangalore metropolitan
                region does not pass our bar, and that is by design. Land is Bangalore's most litigation vulnerable asset
                class. We reject more land opportunities than any other step in our process to protect client capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Land Advisory Principles */}
      <section className="leasing-details-section reveal-on-scroll" style={{ padding: '4rem 0 2rem 0', backgroundColor: 'var(--bg-white)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '3rem' }}>
            <div className="blog-category">Land Philosophy</div>
            <h2>How We Work</h2>
          </div>

          <div className="advisory-grid">
            {/* Principle 1 */}
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                Title Clarity
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.88rem', marginBottom: 0 }}>
                We verify ownership, trace title history, and flag gaps before anything moves forward. An investor wanted to
                acquire land in South Bangalore. Market research identified 23 available parcels. Bricx.ai's due diligence
                process rejected all 23: each carried litigation issues, occupancy certificate conversion problems, or title
                disputes. We presented alternative micro markets with clean titles and better appreciation potential. If the
                paper is not clean, we do not take it forward.
              </p>
            </div>
            {/* Principle 2 */}
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                Feasibility First
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.88rem', marginBottom: 0 }}>
                Every land acquisition in Bangalore is evaluated for realistic use, including real estate due diligence on
                title, zoning, FSI, and infrastructure access. Litigation history, disputed ownership, unclear zoning
                classifications, pending BBMP sanctions, environmental clearance delays, and unrealistic development
                assumptions cause most land deals to fail post acquisition. Feasibility analysis is built into every mandate,
                not treated as an afterthought.
              </p>
            </div>
            {/* Principle 3 */}
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                JDA and Structuring
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.88rem', marginBottom: 0 }}>
                For developers and landowners exploring joint development, we provide joint development advisory in India:
                whether structured as a JDA, joint venture, or development management arrangement. We evaluate revenue share
                frameworks and stress test assumptions before any commitment is made.
              </p>
            </div>
          </div>

          {/* Principle 4 / Exit & Timing */}
          <div style={{ maxWidth: '800px', margin: '32px auto 0 auto' }}>
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                Time and Exit
              </div>
              <p style={{ color: 'var(--text-muted)',lineHeight: 1.6, fontSize: '0.88rem', marginBottom: 0, textAlign: 'left' }}>
                Land needs patience. North Bangalore, particularly Hebbal and the airport corridor, offers strong land
                appreciation potential in 2026. Airport proximity, Metro expansion expected within 24 months, GCC cluster
                development, and current underdevelopment relative to demand create compounding appreciation drivers. We help
                you understand realistic timelines and whether the opportunity matches your capital horizon and risk appetite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="leasing-details-section section-padding reveal-on-scroll" style={{ backgroundColor: 'var(--bg-cream)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="blog-category">Partnerships</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary-obsidian)', marginBottom: '1.5rem' }}>
            Who We Work With
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-muted)', textAlign: 'left', fontWeight: 300 }}>
            HNIs and UHNIs looking at land as a long term asset. Developers sourcing sites for greenfield development in
            Bengaluru, particularly along growth corridors like Devanahalli, Sarjapur Road, and the northern periphery.
            Landowners exploring land monetization advisory and development partnerships in Bangalore. We work with a small
            number of mandates at any given time, by design.
          </p>
        </div>
      </section>

      {/* Land FAQ Section */}
      <section className="home-faq-section" style={{ backgroundColor: 'var(--bg-cream)', padding: '90px 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="blog-category" style={{ color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600 }}>Clear Answers</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.2rem', color: 'var(--primary-obsidian)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequently Asked Questions</h2>
          </div>

          {/* Accordion Group */}
          <div className="faq-accordion-group">
            {landFaqs.map((faq, index) => (
              <div key={index} className="faq-item-card" style={{ borderBottom: '1px solid rgba(14, 24, 42, 0.08)', padding: '24px 0' }}>
                <button className="faq-trigger" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer', padding: 0 }}>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary-obsidian)', margin: 0, letterSpacing: '0.02em' }}>{faq.question}</h3>
                  <span className="faq-icon" style={{ fontSize: '1.2rem', color: 'var(--accent-olive)', transition: 'transform 0.3s' }}>+</span>
                </button>
                <div className="faq-content" style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease-out, margin-top 0.3s' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: 0, fontWeight: 300, marginTop: '12px' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
