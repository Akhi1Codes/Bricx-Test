'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

interface HomeClientProps {
  latestBlogs: BlogPost[];
}

export default function HomeClient({ latestBlogs }: HomeClientProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Stats animation state (initialize with exact numbers to avoid '0+' flash)
  const [stats, setStats] = useState({
    years: '4+',
    sqft: '2.4M+',
    markets: '6+'
  });
  const statsContainerRef = useRef<HTMLDivElement>(null);

  // Seamless video loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0;
        video.play().catch(err => console.log('Seamless loop play error:', err));
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Stats count-up animation
  useEffect(() => {
    const container = statsContainerRef.current;
    if (!container) return;

    const animateStats = () => {
      const targets = [
        { key: 'years', target: 4, suffix: '+' },
        { key: 'sqft', target: 2.4, suffix: 'M+' },
        { key: 'markets', target: 6, suffix: '+' }
      ];

      const duration = 1200;
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const newStats: any = {};
        targets.forEach(t => {
          const val = (easeProgress * t.target).toFixed(1);
          // Strip trailing .0 if present
          const formattedVal = parseFloat(val);
          newStats[t.key] = `${formattedVal}${t.suffix}`;
        });

        setStats(newStats);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setStats({
            years: '4+',
            sqft: '2.4M+',
            markets: '6+'
          });
        }
      };

      requestAnimationFrame(updateCount);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
            observer.disconnect();
          }
        });
      }, { threshold: 0.1 });
      observer.observe(container);
      return () => observer.disconnect();
    } else {
      animateStats();
    }
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* 1. VIDEO HERO SECTION */}
      <section id="section-6b01fd16-6dec-44d9-8683-fed1932e4d35" className="video-section">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="metadata" 
          className="hero-video" 
          id="hero-video-element"
        >
          <source src="/hero.mp4?v=3" type="video/mp4" />
        </video>

        <div className="overlay-component"></div>

        <div className="redesign opening-with-search height-class-Full">
          <div className="center-block">
            <div className="container lp-container">
              <div className="lp-title-group">
                <div className="opening-description feature">
                  <div className="content-container">
                    <div className="text">
                      <h1>Independent Commercial Real Estate Advisory in Bangalore</h1>
                      <h2>Conflict Free Counsel. Capital Markets Discipline.</h2>
                      <p>
                        Bricx.ai is a boutique real estate advisory firm based in Bangalore. We advise companies, founders, and investors on leasing, income investments, and land, without developer bias, without sales targets, and without transactional pressure.
                      </p>
                    </div>

                    <div className="arrow-container">
                      <a href="#section-about" onClick={(e) => scrollToSection(e, 'section-about')} aria-label="Scroll down">
                        <i className="fas fa-chevron-down" style={{ fontSize: '1.15rem', opacity: 0.72 }}></i>
                      </a>
                    </div>

                    <div className="stats" ref={statsContainerRef}>
                      <div className="stat-item">
                        <h4>{stats.years}</h4>
                        <p>Years of CRE Advisory</p>
                      </div>
                      <div className="stat-item">
                        <h4>{stats.sqft}</h4>
                        <p>Sq Ft Underwritten</p>
                      </div>
                      <div className="stat-item">
                        <h4>{stats.markets}</h4>
                        <p>Active Bangalore Markets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-spacer"></div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO SECTION */}
      <section className="editorial-intro-section" id="section-about">
        <div className="section-bg-image" style={{ backgroundImage: "url('/about_bricx.jpg')" }}></div>
        <div className="section-gradient-overlay"></div>
        <div className="premium-section-container">
          <Link href="/advisory" className="service-content-block-link">
            <div className="service-content-block reveal-on-scroll">
              <h2 className="service-title">Why Bricx.ai</h2>
              <p className="service-desc">
                Most real estate firms are incentivised to close transactions. We are incentivised to give
                you the right advice. As an independent commercial property advisor in Bengaluru, our
                only interest is the outcome that works best for you. Unlike large commercial real estate
                firms in Bangalore, we do not hold developer inventory, earn referral fees, or represent
                landlords on mandates where we also advise occupiers.
              </p>
              <span className="service-learn-more">
                Learn More <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. LEASING ADVISORY PANEL */}
      <section className="premium-service-section left-aligned" id="section-leasing">
        <Image className="section-bg-image" src="/home_leasing_advisory.jpg" alt="Leasing Advisory" fill sizes="100vw" />
        <div className="section-gradient-overlay"></div>
        <div className="premium-section-container">
          <Link href="/advisory" className="service-content-block-link">
            <div className="service-content-block reveal-on-scroll">
              <h3 className="service-title">Leasing Advisory</h3>
              <p className="service-desc">
                Workspace decisions are long term commitments. We provide leasing advisory in
                Bengaluru that goes beyond finding space: structuring terms, evaluating trade offs, and
                ensuring the lease works for your business over time.
              </p>
              <span className="service-learn-more">
                Learn More <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. INCOME INVESTMENTS PANEL */}
      <section className="premium-service-section right-aligned" id="section-investment">
        <div className="section-bg-image" style={{ backgroundImage: "url('/home_income_investments.jpg')" }}></div>
        <div className="section-gradient-overlay"></div>
        <div className="premium-section-container">
          <Link href="/investment-opportunities" className="service-content-block-link">
            <div className="service-content-block reveal-on-scroll">
              <h3 className="service-title">Income Investments</h3>
              <p className="service-desc">
                Commercial property investment in Bangalore requires more than a good yield. We bring
                underwriting discipline, risk first evaluation, and capital markets rigour to every mandate.
              </p>
              <span className="service-learn-more">
                Learn More <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. LAND & OPPORTUNITY PANEL */}
      <section className="premium-service-section left-aligned" id="section-land">
        <Image className="section-bg-image" src="/home_land_opportunity.jpg" alt="Land & Opportunity" fill sizes="100vw" />
        <div className="section-gradient-overlay"></div>
        <div className="premium-section-container">
          <Link href="/land-opportunities" className="service-content-block-link">
            <div className="service-content-block reveal-on-scroll">
              <h3 className="service-title">Land & Opportunity</h3>
              <p className="service-desc">
                Land acquisition advisory in Bengaluru starts with saying no to most of what is available.
                We filter on title, access, and realistic use before anything reaches you.
              </p>
              <span className="service-learn-more">
                Learn More <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 5.5 HOW WE WORK DIFFERENTLY SECTION */}
      <section className="how-we-work-section section-padding reveal-on-scroll" id="section-how-we-work" style={{ backgroundColor: 'var(--bg-cream)', padding: '90px 24px', borderBottom: '1px solid var(--border-light)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ color: 'var(--accent-gold)', letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
            Operations
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--primary-obsidian)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.3 }}>How We Work Differently</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: '1.85', color: 'var(--text-charcoal)', marginBottom: '2rem', fontWeight: 300, textAlign: 'left' }}>
            Most brokers will show you 30 properties in a week. Bricx.ai will show you 3. The difference is not volume, it is conviction. Our employees do not carry targets. Targets create pressure to close deals regardless of fit. Advisory firms do not operate on sales quotas. Brokerage firms do.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: '1.85', color: 'var(--text-charcoal)', marginBottom: 0, fontWeight: 300, textAlign: 'left' }}>
            We maintain standardised transaction fees across all coworking providers, managed office operators, and property owners. WeWork, Beehive, Novel Office, IndiQube, the commission is identical. This removes the incentive to push clients toward whichever property pays the highest referral fee.
          </p>
        </div>
      </section>

      {/* 6. LATEST INSIGHTS / INTELLIGENCE SECTION */}
      <section className="insights-section" id="section-insights">
        <div className="insights-container">
          <div className="insights-header reveal-on-scroll">
            <span className="insights-tag">Market Intelligence</span>
            <h2 className="insights-title">Latest Insights</h2>
          </div>

          <div className="insights-grid">
            {latestBlogs.map((post) => {
              const wordCount = post.content.join(' ').split(/\s+/).length;
              const readTime = Math.max(5, Math.round(wordCount / 200));

              return (
                <article key={post.id} className="insight-card reveal-on-scroll">
                  <Link href={`/blog/${post.slug}`} className="insight-img-link">
                    <div className="insight-card-img-wrapper">
                      <Image
                        src={post.hero_image}
                        alt={post.hero_image_alt}
                        className="insight-card-img"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                    </div>
                  </Link>
                  <div className="insight-card-body">
                    <div className="insight-meta">
                      <span className="insight-date">{post.date}</span>
                      <span className="insight-meta-dot">•</span>
                      <span className="insight-read-time">{readTime} min read</span>
                    </div>
                    <h3 className="insight-card-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="insight-excerpt">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="insight-cta">
                      <span>READ ARTICLE</span>
                      <svg className="insight-cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CONSULTATION CTA SECTION */}
      <section className="final-cta-section" id="section-final-cta">
        <div className="final-cta-container reveal-on-scroll">
          <span className="final-cta-tag">Private Briefing</span>
          <h2 className="final-cta-title">Initialize Consultation</h2>
          <p className="final-cta-text">
            Coordinate directly with our principal advisors for secure, conflict free occupier representation,
            institutional property listings, or strategic land portfolio brief underwriting.
          </p>
          <Link href="/contact-us" className="final-cta-btn">
            <span>REQUEST PRINCIPAL CONTACT</span>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-faq-section" style={{ backgroundColor: 'var(--bg-cream)', padding: '90px 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600 }}>
              Clear Answers
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.2rem', color: 'var(--primary-obsidian)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-group">
            {homeFaqs.map((faq, index) => (
              <div key={index} className="faq-item-card" style={{ borderBottom: '1px solid rgba(14, 24, 42, 0.08)', padding: '24px 0' }}>
                <button className="faq-trigger" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: 0 }}>
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
    </>
  );
}
