import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Bricx.ai | Commercial Real Estate Advisory in Bangalore",
  description: "Bricx.ai is a boutique commercial real estate advisory firm founded in Bengaluru. We operate across three verticals: leasing, income investments, and land.",
  alternates: {
    canonical: "https://bricx.ai/about"
  }
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero Section */}
      <section className="advisory-hero" style={{ backgroundColor: 'var(--primary-obsidian)', minHeight: '45vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ padding: '0', zIndex: 2, position: 'relative' }}>
          <div className="blog-category" style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Institutional Profile
          </div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--bg-cream)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1.2 }}>
            About Bricx.ai | Commercial Real Estate Advisory in Bangalore
          </h1>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.7', fontWeight: 300, letterSpacing: '0.03em', textTransform: 'uppercase' }}>
            Independent Thinking. No Developer Bias.
          </h2>
        </div>
      </section>

      {/* About Body Content Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--text-white)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: '1.85', color: 'var(--text-charcoal)', marginBottom: '2rem', fontWeight: 300 }}>
            Bricx.ai is a boutique commercial real estate advisory firm founded in Bengaluru. We operate across three
            verticals (leasing, income investments, and land) with a single guiding principle: the client's interest comes
            before the transaction.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: '1.85', color: 'var(--text-charcoal)', marginBottom: '2rem', fontWeight: 300 }}>
            Our perspective is shaped by capital markets discipline. Every mandate is evaluated the way a serious asset class
            should be: risk first, structure next, returns after that. We do not carry developer relationships that
            compromise our advice, and we do not run on sales targets.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: '1.85', color: 'var(--text-charcoal)', marginBottom: '3rem', fontWeight: 300 }}>
            As an independent commercial property advisor in Bangalore, we work with a deliberately small client base. That is
            how we maintain the quality of counsel that institutional advisory demands.
          </p>
        </div>
      </section>

      {/* How We Are Structured Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.2rem', color: 'var(--primary-obsidian)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>
            How We Are Structured
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-charcoal)', fontWeight: 300, marginBottom: '1.5rem' }}>
            Most brokers are compensated for closing deals quickly. Bricx.ai is structured to prioritise long term fit over
            short term commissions. When a client needed 47 seats for a back end support operation with zero hires on day one,
            most brokers would have locked them into paying for all 47 seats immediately. Bricx.ai structured staggered
            billing instead (15 seats upfront, 15 more after 45 days, full occupancy after 90 days). The client avoided paying
            for empty seats. We earned less upfront but gained a client for life.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-charcoal)', fontWeight: 300, marginBottom: 0 }}>
            A commercial investment provider once approached us offering 9.8% annual returns. In the fine print: hidden
            management fees and baseless deductions that reduced the actual investor return to below 6%, worse than bank FD
            rates with significantly higher risk. We severed the partnership immediately and presented alternatives with
            verified net yields. If Bricx.ai would not set up its own office in a space, invest its own capital in a property,
            or buy the land personally, it does not get recommended to clients.
          </p>
        </div>
      </section>

      {/* Bricx Founder Card & Bio */}
      <section className="section-padding" style={{ backgroundColor: 'var(--text-white)' }}>
        <div className="container" style={{ maxWidth: '950px', margin: '0 auto', padding: '0 24px' }}>
          <div className="mandate-container-grid">
            <div style={{ flexShrink: 0, width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'var(--accent-olive)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg-cream)', fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '4rem', border: '4px solid var(--accent-gold)', boxShadow: '0 12px 40px rgba(14,24,42,0.08)' }}>
              KS
            </div>
            
            <div style={{ flexGrow: 1, textAlign: 'left' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
                Founder Profile &amp; Leadership
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.2rem', fontWeight: 500, color: 'var(--primary-obsidian)', marginBottom: '0.5rem' }}>
                Krupesh Sanghani | Founder
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-charcoal)', marginBottom: '1.5rem', fontWeight: 300 }}>
                Krupesh brings Decades of direct deal experience across commercial leasing and investment sale of
                commercial properties in Bengaluru. His understanding of the market spans managed offices, coworking, land
                aggregation, and income producing assets, built through hands on work with occupiers, operators, and
                investors across Bangalore.
              </p>
              <blockquote style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '20px', margin: '2rem 0', fontFamily: "'Cinzel', serif", fontSize: '1.4rem', color: 'var(--accent-olive)', fontStyle: 'italic', lineHeight: 1.5 }}>
                "Transactions may close in months. Trust compounds over years."
              </blockquote>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '1.5rem' }}>
                <a 
                  href="https://www.linkedin.com/company/bricx-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--primary-obsidian)', fontSize: '1.3rem', transition: 'color 0.3s' }}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                  Bengaluru Headquarters
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary-obsidian)', textAlign: 'center', color: 'var(--bg-cream)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2rem', color: 'var(--bg-cream)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Consult Our Advisors
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', fontWeight: 300 }}>
            Schedule an independent briefing regarding office space leasing, joint development strategy, or off market yield
            investments in Bangalore.
          </p>
          <Link 
            href="/contact-us"
            className="initiate-briefing-btn"
            style={{ display: 'inline-block', padding: '14px 32px', backgroundColor: 'var(--accent-gold)', color: 'var(--primary-obsidian)', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', textDecoration: 'none', borderRadius: '2px', transition: 'background-color 0.3s' }}
          >
            Initiate Briefing
          </Link>
        </div>
      </section>

      {/* Structured JSON-LD Founder Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Bricx.ai | Commercial Real Estate Advisory in Bangalore",
        "description": "About Bricx.ai, an independent commercial real estate advisory firm in Bengaluru.",
        "publisher": {
          "@type": "RealEstateAgent",
          "name": "Bricx.ai",
          "url": "https://bricx.ai/",
          "logo": "https://bricx.ai/og-default.png",
          "founder": {
            "@type": "Person",
            "name": "Krupesh Sanghani",
            "jobTitle": "Founder & Principal Advisor",
            "worksFor": {
              "@type": "Organization",
              "name": "Bricx.ai"
            },
            "sameAs": "https://www.linkedin.com/company/bricx-ai"
          }
        }
      })}} />
    </>
  );
}
