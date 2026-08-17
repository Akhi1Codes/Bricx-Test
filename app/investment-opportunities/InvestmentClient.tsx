'use client';

import React from 'react';
import Image from 'next/image';
import { investmentFaqs } from '@/data/faqData';

export default function InvestmentClient() {
  return (
    <div className="investment-page-clean">
      {/* Investment Opportunities Page Hero */}
      <section className="showcase-hero-section investment-showcase-hero">
        <div className="showcase-container">
          <div className="division-showcase-box reveal-on-scroll" style={{ border: 'none', boxShadow: 'none' }}>
            <div className="showcase-img-side">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                alt="Off-Market Income Placements"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div className="showcase-content-side">
              <div className="category-label" style={{ color: 'var(--accent-gold)' }}>Private Exclusives</div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'var(--primary-obsidian)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
                Commercial Property Investment Advisory in Bangalore
              </h1>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-olive)', marginBottom: '1rem', textTransform: 'uppercase', border: 'none', padding: 0 }}>
                Buy Side. Sell Side. Capital Markets Discipline.
              </h2>
              <p>
                Commercial real estate investments require more than identifying an opportunity. Bricx.ai provides real estate
                investment advisory in Bengaluru with a focus on income reliability, risk assessment, and disciplined
                underwriting, before returns are ever discussed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Investment Principles */}
      <section className="leasing-details-section reveal-on-scroll" style={{ padding: '4rem 0 2rem 0', backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '3rem' }}>
            <div className="blog-category">Investment Philosophy</div>
            <h2>How We Evaluate</h2>
          </div>

          <div className="advisory-grid">
            {/* Principle 1 */}
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                Real Income
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.88rem', marginBottom: 0 }}>
                We look beyond the headline yield. A commercial investment provider once offered a mandate at 9.8% annual
                returns. Bricx.ai's due diligence uncovered hidden management fees and operational charges that reduced the
                actual investor return to below 6%, worse than bank FD rates with significantly higher risk. We severed that
                partnership. Our focus is on how steady and reliable the income stream actually is: tenant quality, lease
                tenure, and vacancy risk all come before the number on the brochure.
              </p>
            </div>
            {/* Principle 2 */}
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                Return Clarity
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.88rem', marginBottom: 0 }}>
                Returns can look strong in projections. We recently closed a Rs 9.2 crore investment in a pre leased
                commercial property on Outer Ring Road delivering 8.2% annual ROI through monthly rental income backed by a
                reputed builder and established tenant. Marathahalli's position in Bangalore's tech corridor, close to
                Whitefield, strong connectivity, and sustained corporate demand, supports both immediate yield and long term
                capital appreciation. We help you understand what returns look like over a realistic hold period, not just in
                projections.
              </p>
            </div>
            {/* Principle 3 */}
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                Risk First
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.88rem', marginBottom: 0 }}>
                Before any commercial property investment in Bangalore is recommended, we examine what can go wrong. Tenant
                strength, micro market dynamics, and downside scenarios are evaluated first. Comparing a Rs 1 crore
                residential property generating Rs 25,000 monthly rent at 3% ROI against a Rs 1 crore commercial property
                generating Rs 66,000 monthly rent at 7.9% ROI with 10 year lease certainty and tenant borne maintenance makes
                the structural case for commercial real estate clear.
              </p>
            </div>
          </div>

          {/* Principle 4 / Exit & Timing */}
          <div style={{ maxWidth: '800px', margin: '32px auto 0 auto' }}>
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                Exit and Timing
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.88rem', marginBottom: 0, textAlign: 'left' }}>
                We think about how you will exit before you enter. Every income asset advisory mandate includes an exit
                framework: what the asset needs to achieve and over what timeline. Bangalore remains India's technology and
                AI hub. GCC growth and undersupply of Grade A office inventory create favorable conditions for investors
                seeking inflation hedged income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Work On Section */}
      <section className="leasing-details-section section-padding reveal-on-scroll" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="blog-category">Asset Coverage</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary-obsidian)', marginBottom: '1.5rem' }}>
            What We Work On
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-muted)', textAlign: 'left', fontWeight: 300 }}>
            Grade A office investments in Bengaluru. Income producing commercial properties across office, retail, and
            mixed use asset classes in Bangalore. Buy side and sell side mandates for HNIs and family offices. Capital
            structuring and portfolio strategy for investors building exposure to real estate capital markets in India. We
            also advise NRIs and diaspora investors evaluating commercial real estate in Bengaluru. Entry points start at Rs
            10 lakh for fractional co owned units with assured rental income, scaling to Rs 1.5 to 3 crore for small format
            office units, Rs 5 to 10 crore for independent floors, and Rs 25 to 50 crore for institutional grade standalone
            assets.
          </p>
        </div>
      </section>

      {/* Investment FAQ Section */}
      <section className="home-faq-section" style={{ backgroundColor: 'var(--bg-cream)', padding: '90px 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="blog-category" style={{ color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600 }}>Clear Answers</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.2rem', color: 'var(--primary-obsidian)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequently Asked Questions</h2>
          </div>

          {/* Accordion Group */}
          <div className="faq-accordion-group">
            {investmentFaqs.map((faq, index) => (
              <div key={index} className="faq-item-card" style={{ padding: '24px 0' }}>
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
