'use client';

import React from 'react';
import Image from 'next/image';
import { advisoryFaqs } from '@/data/faqData';

export default function AdvisoryClient() {
  return (
    <div className="advisory-page-clean">
      {/* Advisory Page Hero */}
      <section className="showcase-hero-section advisory-showcase-hero">
        <div className="showcase-container">
          <div className="division-showcase-box reveal-on-scroll">
            <div className="showcase-img-side">
              <Image
                src="/leasing_advisory.png"
                alt="Managed Office & Commercial Leasing"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="showcase-content-side">
              <div className="category-label">Bricx Services</div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'var(--primary-obsidian)', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
                Leasing Advisory Services in Bangalore
              </h1>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-olive)', marginBottom: '1rem', textTransform: 'uppercase', border: 'none', padding: 0 }}>
                Tenant Representation. Lease Structuring. Long Term Fit.
              </h2>
              <p>
                Finding the right office space is only the beginning. Bricx.ai provides end to end leasing advisory in
                Bengaluru: from requirement understanding and location strategy to lease negotiation and deal closure. We
                represent occupiers, not landlords. Our leasing advisory covers Bangalore's key office corridors: Outer Ring
                Road, Whitefield, Koramangala, Electronic City, and central Bengaluru, and we bring the same discipline
                regardless of location or deal size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Leasing Advisory Principles */}
      <section className="leasing-details-section section-padding reveal-on-scroll">
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '4rem' }}>
            <div className="blog-category">Strategic Leasing Advisory</div>
            <h2>What We Cover</h2>
          </div>

          <div className="advisory-grid-2col">
            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                More Than Offices
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.88rem', marginBottom: 0 }}>
                Office space is not just desks and internet. It shapes how your team focuses, collaborates, and performs over
                time. An advertising agency in Hebbal was quoted Rs 5,000 per seat, but the all in cost was Rs 7,200 per seat
                after accounting for AC charges past 7 PM, weekend access fees, and mandatory private internet. Companies
                underestimate total occupancy cost by 20 to 30 percent when evaluating only headline rent figures. We conduct
                line item cost audits before recommending any space.
              </p>
            </div>

            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                Terms That Matter
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.88rem', marginBottom: 0 }}>
                Rent is one line item. Lock ins, exit clauses, fit out contributions, and escalation terms shape the real
                cost. A partnership firm took 50 seats based on one large client contract. When that client was lost, they
                were locked into paying for all 50 seats. Bricx.ai restructured the contract with a downsize clause, allowing
                them to reduce to 20 seats without penalty. We focus on the fine print that determines long term outcomes:
                not just the headline figure.
              </p>
            </div>

            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                For Every Budget
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.88rem', marginBottom: 0 }}>
                Office space cost in Bangalore varies significantly by micro market. A 30 seater in Whitefield costs
                approximately Rs 1.8 lakh per month all inclusive. The same configuration in Koramangala runs Rs 3 lakh
                monthly. For 50 seater setups, HSR Layout pricing sits around Rs 2 lakh per month compared to Rs 4 to 4.5 lakh
                in Indiranagar. We show you exactly what changes across price points so you can choose what actually matters
                to your business.
              </p>
            </div>

            <div className="advisory-card stagger-item" style={{ padding: '24px', background: 'var(--bg-cream)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-olive)', marginBottom: '8px' }}>
                If Things Change
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.88rem', marginBottom: 0 }}>
                Businesses evolve. A technology company took 1,200 seats with a rigid three year lock in. When business
                conditions changed, Bricx.ai restructured the agreement with staggered billing, allowing both parties to
                survive the downturn. We help you understand your flexibility for expansion, reduction, or early exit before
                you sign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="leasing-details-section section-padding reveal-on-scroll" style={{ backgroundColor: 'var(--bg-white)', paddingTop: 0, marginTop: 0 }}>
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '3rem' }}>
            <div className="blog-category">Locations</div>
            <h2>Where We Work</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              There is no universal best location, only the right micro market for your specific business model. Software
              companies in Whitefield and Outer Ring Road benefit from talent density and tech culture at Rs 6,000 to 10,000
              per seat for managed configurations. Non IT startups in Koramangala access central location and Gen Z talent at
              Rs 8,000 to 25,000 per seat. BPO and support operations in Kudlu Gate, JP Nagar, and Silk Board benefit from
              proximity to affordable employee housing and public transport. North Bangalore, Hebbal and surrounding areas,
              has seen the sharpest rent increases over the last 12 months driven by airport proximity and infrastructure
              development. Bricx.ai's first question when founders ask where to look is always: what industry are you in?
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="leasing-details-section section-padding reveal-on-scroll" style={{ backgroundColor: 'var(--bg-cream)', paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 }}>
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: '3rem' }}>
            <div className="blog-category">Partnerships</div>
            <h2>Who We Work With</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              Startups scaling their teams. Mid sized companies making significant office decisions. Enterprise clients
              requiring managed office and coworking advisory across Bengaluru. We provide corporate real estate advisory to
              occupiers who want workspace consulting grounded in strategy, not inventory.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-faq-section" style={{ backgroundColor: 'var(--bg-cream)', padding: '0 0 90px 0', marginTop: 0 }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="blog-category" style={{ color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600 }}>Clear Answers</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.2rem', color: 'var(--primary-obsidian)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-group">
            {advisoryFaqs.map((faq, index) => (
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
