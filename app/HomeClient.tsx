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

const servicePanelClass = 'group !relative !flex !h-screen !w-full !items-center !justify-center !overflow-hidden !p-0 max-md:!h-auto max-md:!min-h-[80vh] max-md:!px-4 max-md:!py-16';
const serviceContentClass = '!relative !z-10 !mx-auto !flex !w-full !max-w-[800px] !flex-col !items-center !rounded-[10px] !border !border-white/30 !bg-[rgba(245,240,230,0.16)] !px-10 !py-14 !text-center !text-white !shadow-[0_10px_30px_rgba(8,13,22,0.12)] !backdrop-blur-[60px] max-md:!px-6 max-md:!py-10';
const serviceTitleClass = '!m-0 !mb-6 !font-[var(--font-heading)] !text-[clamp(2rem,5vw,2.75rem)] !font-medium uppercase !leading-[1.25] !tracking-[0.15em] !text-white !transition-colors !duration-300 group-hover:text-[var(--accent-gold)]! max-md:!text-[1.65rem]';
const serviceDescriptionClass = '!m-0 !max-w-none !font-[var(--font-body)] !text-[clamp(0.95rem,2vw,1.1rem)] !font-light !leading-[1.9] !tracking-[0.02em] !text-white/85 !transition-colors !duration-300 group-hover:text-white/95! max-md:!text-[0.9rem]';
const serviceLinkClass = '!relative !z-[3] !block !w-full !max-w-[900px] !px-6';
const serviceCtaClass = '!mt-8 !inline-flex !items-center !gap-2 !border !border-[var(--accent-gold)] !bg-[var(--accent-gold)] !px-7 !py-3 !font-[Inter,sans-serif] !text-[0.8rem] !font-semibold uppercase !tracking-[0.15em] !text-[var(--primary-obsidian)] !shadow-[0_4px_15px_rgba(0,0,0,0.25)] !transition !duration-300 group-hover:-translate-y-0.5! group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]!';

function AnimatedStat({ value, label, type }: { value: number; label: string; type: 'int' | 'decimal' }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    let startTime:null | number = null;

    const duration = 2000;
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  const renderedValue = type === 'decimal' ? `${displayValue.toFixed(1)}M+` : `${Math.round(displayValue)}+`;

  return (
    <div className="!px-6 !py-1 !text-center max-md:!flex max-md:!w-full max-md:!items-baseline max-md:!justify-between max-md:!px-0 max-md:!py-2">
      <h4 className="!mb-2 !font-[Outfit,Inter,sans-serif] !text-[32px] !font-normal !leading-[1.1] !tracking-[0.04em] !text-[#e2d2bb] max-md:!mb-0 max-md:!text-[23px]">
        {renderedValue}
      </h4>
      <p className="!m-0 !whitespace-nowrap !font-[Inter,sans-serif] !text-[10px] !font-semibold uppercase !leading-[1.4] !tracking-[0.2em] !text-white/85 max-md:!text-right">
        {label}
      </p>
    </div>
  );
}

export default function HomeClient({ latestBlogs }: HomeClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section id="section-6b01fd16-6dec-44d9-8683-fed1932e4d35" className="relative !flex !h-screen !min-h-[620px] !flex-col !overflow-hidden !bg-[#0a1220] !p-0 max-md:!h-auto max-md:!min-h-[100svh]">
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute !inset-0 !h-full !w-full !object-cover"
          id="hero-video-element"
          style={{
            opacity: 1,
            transform: 'scale(1)',
            transition: 'opacity 0.8s ease-out',
          }}
        >
          <source src="/hero.mp4?v=3" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[rgba(3,8,15,0.34)]" />
        <div className="relative z-10 !flex !min-h-full !flex-1 !flex-col">
          <div className="!flex !flex-1 !items-start !justify-center !px-6 !pb-7 !pt-[clamp(144px,23.5vh,160px)] !text-center max-md:!items-center max-md:!px-[18px] max-md:!pb-[35px] max-md:!pt-[92px]">
            <div className="!mx-auto !w-full !max-w-[1160px]">
              <div className="!mx-auto !flex !w-full !flex-col !items-center">
                <div className="!flex !w-full !flex-col !items-center">
                  <h1 className="home-hero-title !mx-auto !w-full !max-w-[1060px] !break-normal !font-[Cinzel,serif] !text-[clamp(35px,3.25vw,44px)] !font-normal uppercase !leading-[1.18] !tracking-[0.055em] !text-white ![overflow-wrap:normal] ![text-shadow:0_4px_20px_rgba(0,0,0,0.5)] max-md:!text-[clamp(18px,5.8vw,26px)] max-md:!leading-[1.08] max-md:!tracking-[0.03em]">Independent Commercial Real Estate Advisory in Bangalore</h1>
                  <h2 className="home-hero-subtitle !mt-4 !font-[Outfit,sans-serif] !text-[12px] !font-medium uppercase !leading-[1.35] !tracking-[0.24em] !text-[var(--accent-gold)] ![text-shadow:0_2px_10px_rgba(0,0,0,0.4)] max-md:!mt-3.5 max-md:!text-[clamp(10px,2.6vw,12px)] max-md:!tracking-[0.15em]">Conflict Free Counsel. Capital Markets Discipline.</h2>
                  <p className="home-hero-description !mx-auto !mt-2 !max-w-[570px] !font-[Inter,sans-serif] !text-[13px] !font-normal !leading-[1.68] !tracking-[0.025em] !text-white/80 ![text-shadow:0_2px_10px_rgba(0,0,0,0.35)] max-md:!mt-2.5 max-md:!leading-[1.58] max-md:!tracking-[0.02em]">Bricx.ai is a boutique real estate advisory firm based in Bangalore. We advise companies, founders, and investors on leasing, income investments, and land, without developer bias, without sales targets, and without transactional pressure.</p>
                </div>
                <a href="#section-about" onClick={(event) => scrollToSection(event, 'section-about')} aria-label="Scroll down" className="home-hero-scroll-cue !mt-[25px] inline-flex !p-2 !text-[var(--accent-gold)] transition-colors hover:!text-white max-md:!mt-3.5"><svg className="size-[1.15rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></a>
                <div className="home-hero-stats !mx-auto !mt-[22px] !grid !w-full !max-w-[1000px] !grid-cols-3 !items-start max-md:!mt-2.5 max-md:!flex max-md:!flex-col max-md:!gap-2">
                  {[
                    { value: 4, label: 'Years of CRE Advisory', type: 'int' as const },
                    { value: 2.4, label: 'Sq Ft Underwritten', type: 'decimal' as const },
                    { value: 6, label: 'Active Bangalore Markets', type: 'int' as const },
                  ].map((stat) => (
                    <AnimatedStat
                      key={stat.label}
                      value={stat.value}
                      label={stat.label}
                      type={stat.type}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-about" className={`${servicePanelClass} border-b border-white/10`}
      >
        <div className="!absolute !inset-0 !z-[1] !bg-cover !bg-center !transition-transform !duration-[1500ms] !ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]!"
          style={{ backgroundImage: "url('/about_bricx.jpg')" }} />
        <div className="!absolute !inset-0 !z-[2] !bg-gradient-to-b !from-[rgba(8,13,22,0.22)] !to-[rgba(8,13,22,0.42)]" />
        <Link href="/advisory"
          className={serviceLinkClass}
        >
          <div className={`${serviceContentClass} reveal-on-scroll`}>
            <h2 className={serviceTitleClass}>Why Bricx.ai</h2>
            <p className={serviceDescriptionClass}>Most real estate firms are incentivised to close transactions. We are incentivised to give you the right advice. As an independent commercial property advisor in Bengaluru, our only interest is the outcome that works best for you. Unlike large commercial real estate firms in Bangalore, we do not hold developer inventory, earn referral fees, or represent landlords on mandates where we also advise occupiers.</p>
            <span className={serviceCtaClass}>
              Learn More <span className="!inline-block !transition-transform !duration-300 group-hover:translate-x-[5px]!" aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </section>

      {[
        { id: 'section-leasing', href: '/advisory', title: 'Leasing Advisory', description: 'Workspace decisions are long term commitments. We provide leasing advisory in Bengaluru that goes beyond finding space: structuring terms, evaluating trade offs, and ensuring the lease works for your business over time.', image: '/home_leasing_advisory.jpg', alt: 'Leasing Advisory', overlay: '!from-[rgba(8,13,22,0.16)] !to-[rgba(8,13,22,0.36)]' },
        { id: 'section-investment', href: '/investment-opportunities', title: 'Income Investments', description: 'Commercial property investment in Bangalore requires more than a good yield. We bring underwriting discipline, risk first evaluation, and capital markets rigour to every mandate.', image: '/home_income_investments.jpg', alt: 'Income Investments', overlay: '!from-[rgba(8,13,22,0.14)] !to-[rgba(8,13,22,0.32)]' },
        { id: 'section-land', href: '/land-opportunities', title: 'Land & Opportunity', description: 'Land acquisition advisory in Bengaluru starts with saying no to most of what is available. We filter on title, access, and realistic use before anything reaches you.', image: '/home_land_opportunity.jpg', alt: 'Land & Opportunity', overlay: '!from-[rgba(8,13,22,0.14)] !to-[rgba(8,13,22,0.32)]' },
      ].map((service) => (
        <section key={service.id} id={service.id} className={servicePanelClass}>
          <Image src={service.image}
            alt={service.alt}
            fill sizes="100vw"
            className="!z-[1] !h-full !w-full !object-cover !object-center !transition-transform !duration-[1500ms] !ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]!" /><div className={`!absolute !inset-0 !z-[2] !bg-gradient-to-b ${service.overlay}`} />
          <Link href={service.href} className={serviceLinkClass}>
            <div className={`${serviceContentClass} reveal-on-scroll`}>
              <h2 className={serviceTitleClass}>{service.title}</h2>
              <p className={serviceDescriptionClass}>{service.description}</p>
              <span className={serviceCtaClass}>Learn More <span className="!inline-block !transition-transform !duration-300 group-hover:translate-x-[5px]!" aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </section>
      ))}

      <section id="section-how-we-work" className="!border-b !border-[var(--border-light)] !bg-[var(--bg-cream)] !px-6 !py-[90px] !text-center"><div className="!mx-auto !max-w-[800px]"><span className="!mb-4 !block !font-[Inter,sans-serif] !text-[0.8rem] !font-semibold uppercase !tracking-[0.25em] !text-[var(--accent-gold)]">Operations</span><h2 className="!mb-8 !font-[Cinzel,serif] !text-[clamp(2rem,4vw,2.5rem)] !font-normal uppercase !leading-[1.3] !tracking-[0.05em] !text-[var(--primary-obsidian)]">How We Work Differently</h2><p className="!mb-8 !text-left !font-[Inter,sans-serif] !text-[1.1rem] !font-light !leading-[1.85] !text-[var(--text-charcoal)]">Most brokers will show you 30 properties in a week. Bricx.ai will show you 3. The difference is not volume, it is conviction. Our employees do not carry targets. Targets create pressure to close deals regardless of fit. Advisory firms do not operate on sales quotas. Brokerage firms do.</p><p className="!text-left !font-[Inter,sans-serif] !text-[1.1rem] !font-light !leading-[1.85] !text-[var(--text-charcoal)]">We maintain standardised transaction fees across all coworking providers, managed office operators, and property owners. WeWork, Beehive, Novel Office, IndiQube, the commission is identical. This removes the incentive to push clients toward whichever property pays the highest referral fee.</p></div></section>

      <section id="section-insights"
        className="!overflow-hidden !border-y !border-[var(--border-light)] !bg-[var(--bg-white)] !px-6 !py-20 lg:!py-32"><div className="!relative !mx-auto !max-w-[1400px] lg:!px-16">
          <div className="reveal-on-scroll !mb-16 !flex !flex-col !items-center !text-center lg:!mb-20">
            <span className="!mb-3 !block !font-[Inter,sans-serif] !text-[0.75rem] !font-semibold uppercase !tracking-[0.22em] !text-[var(--accent-gold)]">Market Intelligence</span>
            <h2 className="!font-[Cinzel,serif] !text-[clamp(2rem,4vw,2.75rem)] !font-normal uppercase !tracking-[0.12em] !text-[var(--text-charcoal)]">Latest Insights</h2>
          </div>
          <div className="!grid !gap-8 lg:!grid-cols-3">{latestBlogs.map((post) => {
            const readTime = Math.max(5, Math.round(post.content.join(' ').split(/\s+/).length / 200));
            return (
              <article
                key={post.id}
                className="group reveal-on-scroll !flex !h-full !flex-col !border !border-[var(--border-medium)] !bg-[var(--bg-cream)] !transition-all !duration-400 !ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5! hover:border-[var(--accent-gold)]! hover:shadow-[0_20px_40px_rgba(14,24,42,0.06)]!">
                <Link href = {`/blog/${post.slug}`}
                  className="!block !overflow-hidden">
                  <div className="!relative !h-60 !overflow-hidden">
                    <Image
                      src={post.hero_image}
                      alt={post.hero_image_alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      unoptimized
                      className="!h-full !w-full !object-cover !transition-transform !duration-1000 !ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]!" /></div></Link><div className="!flex !flex-grow !flex-col !px-5 !py-6 sm:!px-7 sm:!py-8">
                  <div className="!mb-3 !flex !items-center !gap-2 !font-[Inter,sans-serif] !text-[0.72rem] !font-medium uppercase !tracking-[0.08em] !text-[var(--accent-gold)]"><span>{post.date}</span><span className="!text-[var(--text-muted)]/50">•</span>
                    <span>{readTime} min read</span>
                  </div>
                  <h3 className="!mb-4 !font-[Outfit,sans-serif] !text-[1.25rem] !font-medium !leading-[1.45] !text-[var(--text-charcoal)]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="!transition-colors !duration-300 hover:text-[var(--accent-gold)]!">{post.title}</Link></h3><p className="!mb-6 !flex-grow !font-[Inter,sans-serif] !text-[0.92rem] !font-light !leading-[1.7] !text-[var(--text-muted)]">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="!relative !inline-flex !items-center !self-start !gap-2 !pb-0.5 !font-[Outfit,sans-serif] !text-[0.8rem] !font-semibold !tracking-[0.15em] !text-[var(--text-charcoal)] !transition-colors !duration-300 after:!absolute after:!bottom-0 after:!left-0 after:!h-[1.5px] after:!w-full after:!bg-[var(--text-charcoal)] after:!transition-all after:!duration-300 after:!content-[''] hover:text-[var(--accent-gold)]! hover:after:!w-[40%] hover:after:!bg-[var(--accent-gold)]">
                    <span>READ ARTICLE</span>
                    <svg
                      className="!size-[14px] !transition-transform !duration-300 group-hover:translate-x-1!" viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            )
          })}</div>
        </div>
      </section>
      <section
        id="section-final-cta"
        className="reveal-on-scroll !border-t !border-[var(--border-light)] !bg-[var(--bg-cream)] !px-6 !py-24 !text-center lg:!py-40">
        <div className="!mx-auto !flex !max-w-[800px] !flex-col !items-center">
          <span className="!mb-3 !block !font-[Inter,sans-serif] !text-[0.75rem] !font-semibold uppercase !tracking-[0.22em] !text-[var(--accent-gold)]">Private Briefing</span>
          <h2 className="!mb-6 !font-[Cinzel,serif] !text-[clamp(2rem,5vw,3rem)] !font-normal uppercase !leading-[1.25] !tracking-[0.15em] !text-[var(--text-charcoal)]">Initialize Consultation</h2>
          <p className="!mb-10 !max-w-[680px] !font-[Inter,sans-serif] !text-[clamp(0.95rem,2vw,1.1rem)] !font-light !leading-[1.9] !text-[var(--text-charcoal)] sm:!mb-14">Coordinate directly with our principal advisors for secure, conflict free occupier representation, institutional property listings, or strategic land portfolio brief underwriting.</p>
          <Link href="/contact-us" className="!inline-flex !w-full !items-center !justify-center !border !border-[var(--accent-gold)] !px-8 !py-3.5 !font-[Outfit,sans-serif] !text-[0.8rem] !font-semibold uppercase !tracking-[0.22em] !text-[var(--text-charcoal)] transition duration-300 hover:!bg-[var(--accent-gold)] hover:!text-[var(--primary-obsidian)] hover:!shadow-[0_15px_30px_rgba(14,24,42,0.1)] sm:!w-auto sm:!px-12 sm:!py-4">
            Request Principal Contact
          </Link>
        </div>
      </section>
      <section className="reveal-on-scroll !border-t !border-[var(--border-light)] !bg-[var(--bg-cream)] !py-[90px]"><div className="!mx-auto !max-w-[900px] !px-6"> <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="blog-category" style={{ color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600 }}>Clear Answers</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.2rem', color: 'var(--primary-obsidian)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequently Asked Questions</h2>
          </div>
        <div>{homeFaqs.map((faq, index) => {
          const isOpen = openFaqIndex === index; return <div key={faq.question} className="!border-b !border-[rgba(14,24,42,0.08)] !py-6"><button type="button" onClick={() => setOpenFaqIndex(isOpen ? null : index)} aria-expanded={isOpen} className="!flex !w-full !items-center !justify-between !gap-6 !text-left">
            <h3 className="!font-[Cinzel,serif] !text-[1.15rem] !font-semibold !tracking-[0.02em] !text-[var(--primary-obsidian)]">{faq.question}</h3><span className="!text-[1.4rem] !leading-none !text-[var(--accent-olive)]" aria-hidden="true">{isOpen ? '×' : '+'}</span>
          </button>
            <div className={`!grid transition-[grid-template-rows] duration-300 ${isOpen ? '!grid-rows-[1fr]' : '!grid-rows-[0fr]'}`}><div className="!overflow-hidden">
              <p className="!pt-10 !font-[Inter,sans-serif] !text-[0.95rem] !font-light !leading-[1.7] !text-[var(--text-muted)]">{faq.answer}</p>
            </div>
            </div>
          </div>;
        })}
        </div>
      </div>
      </section>
    </>
  );
}
