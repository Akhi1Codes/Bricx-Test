'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { isValidEmail } from '@/lib/emailValidator';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', desktopLabel: 'Home', mobileLabel: 'Home', isActive: pathname === '/' },
    { href: '/about', desktopLabel: 'About Bricx', mobileLabel: 'About Bricx', isActive: pathname === '/about' },
    { href: '/advisory', desktopLabel: 'Leasing Advisory', mobileLabel: 'Leasing Advisory', isActive: pathname === '/advisory' },
    { href: '/investment-opportunities', desktopLabel: 'Income Investments', mobileLabel: 'Income Investments', isActive: pathname === '/investment-opportunities' },
    { href: '/land-opportunities', desktopLabel: 'Land & Opportunity', mobileLabel: 'Land & Opportunity', isActive: pathname === '/land-opportunities' },
    { href: '/blog', desktopLabel: 'Bricx Blogs', mobileLabel: 'Bricx Blogs', isActive: pathname?.startsWith('/blog') ?? false },
    { href: '/contact-us', desktopLabel: 'Contact', mobileLabel: 'Contact', isActive: pathname === '/contact-us' }
  ];
  
  // Navigation states
  const [navOpen, setNavOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  
  // Newsletter form states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  // Floating Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalEmail, setModalEmail] = useState('');
  const [modalMobile, setModalMobile] = useState('');
  const [modalInterests, setModalInterests] = useState<string[]>([]);
  const [modalMessage, setModalMessage] = useState('');
  
  const [modalErrors, setModalErrors] = useState<{
    name?: boolean;
    email?: boolean;
    emailInvalid?: boolean;
    mobileInvalid?: boolean;
  }>({});
  const [modalStatus, setModalStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [modalErrorText, setModalErrorText] = useState('Something went wrong. Please try again.');

  // Handle scroll to sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setHeaderScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  useEffect(() => {

    const faqItems = document.querySelectorAll('.faq-item-card');

    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content') as HTMLElement;
      const icon = item.querySelector('.faq-icon') as HTMLElement | null;
      if (!trigger || !content) return;

      const handler = () => {
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

        faqItems.forEach(el => {
          const c = el.querySelector('.faq-content') as HTMLElement;
          const ic = el.querySelector('.faq-icon') as HTMLElement | null;
          if (c) {
            c.style.maxHeight = '0px';
            c.style.marginTop = '0';
          }
          if (ic) {
            ic.textContent = '+';
            ic.style.transform = 'rotate(0deg)';
          }
        });

        if (!isOpen) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.marginTop = '12px';
          if (icon) {
            icon.textContent = '×';
            icon.style.transform = 'rotate(0deg)';
          }
        }
      };

      trigger.addEventListener('click', handler);
    });

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    let observer: IntersectionObserver | null = null;
    
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer?.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      revealElements.forEach(el => observer?.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('revealed'));
    }

    const heroBg = document.querySelector('.advisory-hero-bg') as HTMLElement;
    let parallaxHandler: (() => void) | null = null;
    let tagTimeout: number | null = null;
    let loopTimeout: number | null = null;
    let pxReadyTimeout: number | null = null;

    if (heroBg) {
      const ENTRY_MS = 3500;
      const heroTag = document.querySelector('.advisory-hero .blog-category');
      
      tagTimeout = window.setTimeout(() => {
        heroTag?.classList.add('tag-underlined');
      }, 500);

      loopTimeout = window.setTimeout(() => {
        heroBg.classList.add('kb-loop', 'parallax-ready');
      }, ENTRY_MS + 40);

      let pxReady = false;
      pxReadyTimeout = window.setTimeout(() => {
        pxReady = true;
      }, ENTRY_MS);

      let ticking = false;
      parallaxHandler = () => {
        if (pxReady && !ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            const hero = heroBg.closest('.advisory-hero');
            if (hero) {
              const rect = hero.getBoundingClientRect();
              if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                const offset = -rect.top * 0.15;
                heroBg.style.transform = `translate3d(0, ${offset}px, 0)`;
              }
            }
            ticking = false;
          });
        }
      };

      window.addEventListener('scroll', parallaxHandler, { passive: true });
    }

    const track = document.getElementById('slider-track');
    const prevBtn = document.getElementById('slider-prev-btn');
    const nextBtn = document.getElementById('slider-next-btn');
    let resizeHandler: (() => void) | null = null;

    if (track && prevBtn && nextBtn) {
      let currentTranslate = 0;
      const gap = 24;

      const getSlideWidth = () => {
        const slide = track.querySelector('.slider-slide') as HTMLElement;
        return slide ? slide.offsetWidth : 0;
      };

      const getMaxTranslate = () => {
        const totalWidth = track.scrollWidth;
        const containerWidth = track.parentElement?.offsetWidth || 0;
        return Math.max(0, totalWidth - containerWidth);
      };

      const handleNext = () => {
        const slideWidth = getSlideWidth();
        const step = slideWidth + gap;
        const max = getMaxTranslate();
        currentTranslate = Math.min(currentTranslate + step, max);
        track.style.transform = `translate3d(-${currentTranslate}px, 0, 0)`;
      };

      const handlePrev = () => {
        const slideWidth = getSlideWidth();
        const step = slideWidth + gap;
        currentTranslate = Math.max(0, currentTranslate - step);
        track.style.transform = `translate3d(-${currentTranslate}px, 0, 0)`;
      };

      nextBtn.addEventListener('click', handleNext);
      prevBtn.addEventListener('click', handlePrev);

      resizeHandler = () => {
        currentTranslate = 0;
        track.style.transform = 'translate3d(0, 0, 0)';
      };
      window.addEventListener('resize', resizeHandler);
      nextBtn.addEventListener('click', handleNext);
      prevBtn.addEventListener('click', handlePrev);
    }

    return () => {
      if (observer) {
        revealElements.forEach(el => observer?.unobserve(el));
      }
      if (parallaxHandler) {
        window.removeEventListener('scroll', parallaxHandler);
      }
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
      if (tagTimeout !== null) {
        clearTimeout(tagTimeout);
      }
      if (loopTimeout !== null) {
        clearTimeout(loopTimeout);
      }
      if (pxReadyTimeout !== null) {
        clearTimeout(pxReadyTimeout);
      }
    };
  }, [pathname]);

  const closeMobileNav = () => {
    setNavOpen(false);
  };

  const toggleMobileNav = () => {
    setNavOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setNavOpen(false);
        setModalOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim()) {
      setNewsletterStatus('error');
      setNewsletterError('Please enter your email address.');
      return;
    }
    if (!emailRegex.test(newsletterEmail.trim())) {
      setNewsletterStatus('error');
      setNewsletterError('Please enter a valid email address.');
      return;
    }

    setNewsletterStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });
      const data = await res.json();
      if (data.success) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 4000);
      } else {
        setNewsletterStatus('error');
        setNewsletterError(data.message || 'Error subscribing.');
      }
    } catch (err) {
      console.error(err);
      setNewsletterStatus('error');
      setNewsletterError('Could not subscribe. Please try again.');
    }
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: typeof modalErrors = {};
    let hasError = false;
    if (!modalName.trim()) {
      errors.name = true;
      hasError = true;
    }
    const email = modalEmail.trim();
    if (!email) {
      errors.email = true;
      hasError = true;
    } else if (!isValidEmail(email)) {
      errors.emailInvalid = true;
      hasError = true;
    }

    const mobile = modalMobile.trim();
    if (mobile) {
      const phoneDigits = mobile.replace(/[\s\-()+]/g, '');
      if (!/^\d{10,}$/.test(phoneDigits)) {
        errors.mobileInvalid = true;
        hasError = true;
      }
    }

    setModalErrors(errors);
    if (hasError) return;

    setModalStatus('loading');
    try {
      const interestsText = modalInterests.join(', ');
      const response = await fetch('/api/contact-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: modalName.trim(),
          mobile: modalMobile.trim(),
          email: email,
          message: `Area of Interest: ${interestsText || 'None'}\nDetails: ${modalMessage.trim()}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setModalStatus('success');
        setTimeout(() => {
          setModalOpen(false);
          setModalStatus('idle');
          // Reset fields
          setModalName('');
          setModalEmail('');
          setModalMobile('');
          setModalInterests([]);
          setModalMessage('');
        }, 3000);
      } else {
        setModalStatus('error');
        setModalErrorText(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setModalStatus('error');
      setModalErrorText('Network error. Please try again.');
    }
  };

  const handleInterestChange = (interest: string) => {
    setModalInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const isHomePage = pathname === '/';
  const isAdvisoryPage = pathname === '/advisory';
  const isInvestmentPage = pathname === '/investment-opportunities';
  const isLandPage = pathname === '/land-opportunities';
  const isBlogPage = pathname?.startsWith('/blog') ?? false;
  let headerClass = isHomePage ? 'home-header' : 'inner-header';
  if (isAdvisoryPage || isInvestmentPage || isLandPage || isBlogPage) {
    headerClass += ` ${isInvestmentPage ? 'investment-header' : ''} !h-[110px] !bg-[#0d1e36]`;
  }

  const customHeaderPadding = isHomePage ? '20px 0' : '14px 0';
  const customHeaderShadow = headerScrolled ? '0 4px 20px rgba(33, 40, 8, 0.04)' : 'none';

  if (pathname?.startsWith('/blog')) {
    headerClass += ' blog-header';
  }

  if (pathname === '/investment-opportunities') {
    headerClass += ' investment-header';
  }

  if (headerScrolled) {
    headerClass += ' scrolled';
  }

  return (
    <>
      {/* Skip to main content */}
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      {/* Mobile Nav Backdrop Overlay */}
      <div 
        className={`nav-backdrop ${navOpen ? 'active' : ''}`} 
        id="nav-backdrop"
        onClick={closeMobileNav}
      ></div>

      {/* Sticky Navigation Header */}
      <header 
        id="main-header" 
        className={headerClass}
        style={{
          padding: customHeaderPadding,
          boxShadow: customHeaderShadow
        }}
      >
        <div className="nav-container">
          <div className="nav-top-row">
            <div className="nav-brand-stack">
              <Link href="/" className="nav-logo" id="logo-anchor">BRICX.AI</Link>
            </div>

            <div className="nav-actions">
              <a href="tel:+919070504020" className={isAdvisoryPage || isInvestmentPage || isLandPage || isBlogPage ? 'nav-cta !text-white' : 'nav-cta'} id="header-phone-cta">
                <span>+91 90 70 50 40 20</span>
              </a>

              <button 
                type="button" 
                className={`mobile-toggle ${navOpen ? 'open' : ''}`} 
                id="mobile-toggle" 
                aria-label="Toggle Navigation Menu"
                aria-expanded={navOpen}
                aria-controls="nav-menu"
                onClick={toggleMobileNav}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>

          <div className="nav-bottom-row">
            <nav className="header-nav-links" aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`header-nav-link ${item.isActive ? 'active' : ''}`}>
                  {item.desktopLabel}
                </Link>
              ))}
            </nav>
          </div>

          <nav className={`nav-menu ${navOpen ? 'open' : ''}`} id="nav-menu" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className={`nav-link ${item.isActive ? 'active' : ''}`}
                onClick={closeMobileNav}
              >
                {item.mobileLabel}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="premium-footer">
        <div className="footer-container">
          {/* LEFT */}
          <div className="footer-left">
            <div className="footer-logo">BRICX.AI</div>
            <p className="footer-description">
              Evaluating commercial real estate with the analytical discipline
              of capital markets: examining risk first, structure next, and
              returns last.
            </p>

            <div className="footer-newsletter">
              <h3>NEWSLETTER</h3>
              <p>
                Subscribe for institutional market insights,
                investment opportunities, and advisory updates.
              </p>

              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  id="footer-newsletter-email"
                  placeholder="Email Address"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" disabled={newsletterStatus === 'loading'}>
                  {newsletterStatus === 'loading' ? '...' : 'SUBSCRIBE'}
                </button>
              </form>

              {newsletterStatus === 'success' && (
                <div id="newsletter-success-msg" style={{ display: 'block', fontSize: '0.85rem', color: '#d4c28a', marginTop: '10px', fontWeight: 500 }}>
                  <i className="fas fa-check-circle"></i> Successfully subscribed!
                </div>
              )}

              {newsletterStatus === 'error' && (
                <div style={{ display: 'block', fontSize: '0.85rem', color: '#c93b3b', marginTop: '10px', fontWeight: 500 }}>
                  <i className="fas fa-exclamation-circle"></i> {newsletterError}
                </div>
              )}
            </div>

            <div className="footer-location">
              EST. BENGALURU • KARNATAKA
            </div>
          </div>

          {/* CENTER */}
          <div className="footer-center">
            <h3>CORE PRACTICES</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Bricx</Link>
            <Link href="/advisory">Leasing Advisory</Link>
            <Link href="/investment-opportunities">Income Investments</Link>
            <Link href="/land-opportunities">Land & Opportunity</Link>
            <Link href="/blog">Bricx Blogs</Link>
            <Link href="/contact-us">Contact</Link>
          </div>

          {/* RIGHT */}
          <div className="footer-right">
            <h3>HEADQUARTERS</h3>
            <div className="footer-contact">
              <p>
                WeWork Galaxy <br />
                43, Residency Rd, Ashok Nagar, <br />
                Bengaluru, Karnataka 560025
              </p>
              <a
                className="footer-map-cta"
                href="https://share.google/K39DULny7X7xvie1S"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="footer-map-cta-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.25" />
                </svg>
                View on Google Maps
              </a>
            </div>

            <div className="footer-contact">
              <p>
                <a href="mailto:hello@bricx.ai">hello@bricx.ai</a> <br />
                For secure investor dealroom inquiries
              </p>
            </div>

            <div className="footer-contact">
              <p>
                <a href="tel:+919070504020">+91 90 70 50 40 20</a> <br />
                Secure client advisor hotline
              </p>
            </div>

            <div className="footer-cta-wrap">
              <Link href="/contact-us" className="footer-cta-btn">
                REQUEST PRINCIPAL CONTACT
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div>
            © 2026 Bricx.ai. All rights reserved. Registered Indian Entity.
          </div>
          <div className="footer-links">
            <Link href="/terms">Terms of Service</Link>
            <span>•</span>
            <Link href="/privacy">Privacy Charter</Link>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <button 
        type="button" 
        id="floating-contact-btn" 
        aria-label="Enquire" 
        title="Enquire"
        onClick={() => setModalOpen(true)}
      >
        ENQUIRE
      </button>

      <a
        href="https://wa.me/919070504020"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="floating-whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.39 1.27 4.81L2 22l5.45-1.4a9.85 9.85 0 0 0 4.59 1.16h.01c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.24.83.87-3.16-.2-.32a8.2 8.2 0 1 1 7.06 3.98Zm4.5-6.15c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.11s.91 2.45 1.04 2.62c.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.52.61.19 1.16.16 1.59.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
        </svg>
      </a>

      {/* Contact Modal Overlay & Popup */}
      {modalOpen && (
        <>
          <div 
            className="contact-modal-overlay open" 
            id="contact-modal-overlay" 
            role="presentation"
            onClick={() => setModalOpen(false)}
          ></div>
          
          <div 
            className="contact-modal open" 
            id="contact-modal" 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="contact-modal-title" 
            style={{ maxWidth: '900px', width: '95%' }}
          >
            <button 
              type="button" 
              className="contact-modal-close" 
              id="contact-modal-close" 
              aria-label="Close" 
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer', color: 'var(--text-charcoal)', zIndex: 10 }}
              onClick={() => setModalOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="contact-modal-content">
              <section className="contact-modal-form-section" aria-labelledby="contact-modal-title">
               
                <h2 id="contact-modal-title" className="contact-form-heading" style={{ marginBottom: '1.1rem', fontSize: '2rem' }}>Start the Conversation</h2>

                <form id="contact-modal-form" onSubmit={handleModalSubmit} noValidate>
                  <div className={`form-group ${modalErrors.name ? 'has-error' : ''}`} id="grp-name">
                    <label htmlFor="modal-name">Full Name <span style={{ color: 'red' }}>*</span></label>
                    <input
                      type="text"
                      id="modal-name"
                      className="form-control"
                      placeholder="Name*"
                      autoComplete="name"
                      value={modalName}
                      onChange={(e) => setModalName(e.target.value)}
                    />
                    {modalErrors.name && (
                      <span className="error-msg" style={{ color: '#c93b3b', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>Please enter your name.</span>
                    )}
                  </div>

                  <div className={`form-group ${modalErrors.email || modalErrors.emailInvalid ? 'has-error' : ''}`} id="grp-email">
                    <label htmlFor="modal-email">Business Email <span style={{ color: 'red' }}>*</span></label>
                    <input
                      type="email"
                      id="modal-email"
                      className="form-control"
                      placeholder="Email*"
                      autoComplete="email"
                      value={modalEmail}
                      onChange={(e) => setModalEmail(e.target.value)}
                    />
                    {(modalErrors.email || modalErrors.emailInvalid) && (
                      <span className="error-msg" style={{ color: '#c93b3b', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                        {modalErrors.emailInvalid ? 'Please enter a valid email address.' : 'Please enter your email address.'}
                      </span>
                    )}
                  </div>

                  <div className={`form-group ${modalErrors.mobileInvalid ? 'has-error' : ''}`} id="grp-mobile">
                    <label htmlFor="modal-mobile">Phone Number</label>
                    <input
                      type="tel"
                      id="modal-mobile"
                      className="form-control"
                      placeholder="Phone Number"
                      autoComplete="tel"
                      value={modalMobile}
                      onChange={(e) => setModalMobile(e.target.value)}
                    />
                    {modalErrors.mobileInvalid && (
                      <span className="error-msg" style={{ color: '#c93b3b', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>Please enter a valid phone number (min. 10 digits).</span>
                    )}
                  </div>

                  <div className="form-group" id="grp-interest">
                    <label style={{ display: 'block', marginBottom: '8px' }}>Area of Interest</label>
                    <div className="checkbox-group contact-interest-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px 18px', marginBottom: '12px' }}>
                      <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                        <input type="checkbox" name="interest" value="Leasing Advisory" style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }} checked={modalInterests.includes('Leasing Advisory')} onChange={() => handleInterestChange('Leasing Advisory')} />
                        Occupier Leasing Advisory
                      </label>
                      <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                        <input type="checkbox" name="interest" value="Income Investments" style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }} checked={modalInterests.includes('Income Investments')} onChange={() => handleInterestChange('Income Investments')} />
                        Income &amp; Portfolio Placements
                      </label>
                      <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                        <input type="checkbox" name="interest" value="Land Opportunities" style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }} checked={modalInterests.includes('Land Opportunities')} onChange={() => handleInterestChange('Land Opportunities')} />
                        Land Plot Development
                      </label>
                      <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                        <input type="checkbox" name="interest" value="Other" style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }} checked={modalInterests.includes('Other')} onChange={() => handleInterestChange('Other')} />
                        General B2B Inquiry
                      </label>
                    </div>
                  </div>

                  <div className="modal-form-actions" style={{ marginTop: '4px' }}>
                    <button type="submit" className="btn-submit" id="modal-submit-btn">Request Consultation</button>
                  </div>
                </form>
              </section>
            </div>

            {/* State Overlay */}
            <div className={`modal-state-overlay ${modalStatus !== 'idle' ? 'open-overlay' : ''} ${modalStatus === 'loading' ? 'state-is-loading' : modalStatus === 'success' ? 'state-is-success' : modalStatus === 'error' ? 'state-is-error' : ''}`} id="contact-modal-state-overlay">
              {modalStatus === 'loading' && (
                <div className="state-loading">
                  <div className="spinner"></div>
                  <p>Submitting...</p>
                </div>
              )}
              {modalStatus === 'success' && (
                <div className="state-success">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Thank You</h3>
                  <p>Your enquiry has been received successfully.<br />A member of the Bricx.ai team will contact you shortly.</p>
                </div>
              )}
              {modalStatus === 'error' && (
                <div className="state-error">
                  <div className="success-icon" style={{ color: '#c93b3b' }}>
                    <i className="fas fa-exclamation-circle"></i>
                  </div>
                  <h3>Submission Failed</h3>
                  <p id="contact-modal-error-text">{modalErrorText}</p>
                  <button type="button" className="btn-retry" id="contact-modal-retry-btn" onClick={() => setModalStatus('idle')}>Retry</button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
