'use client';

import { useState } from 'react';
import Image from 'next/image';
import { investmentFaqs } from '@/data/faqData';

const principles = [
  ['Real Income', "We look beyond the headline yield. A commercial investment provider once offered a mandate at 9.8% annual returns. Bricx.ai's due diligence uncovered hidden management fees and operational charges that reduced the actual investor return to below 6%, worse than bank FD rates with significantly higher risk. We severed that partnership. Our focus is on how steady and reliable the income stream actually is: tenant quality, lease tenure, and vacancy risk all come before the number on the brochure."],
  ['Return Clarity', "Returns can look strong in projections. We recently closed a Rs 9.2 crore investment in a pre leased commercial property on Outer Ring Road delivering 8.2% annual ROI through monthly rental income backed by a reputed builder and established tenant. Marathahalli's position in Bangalore's tech corridor, close to Whitefield, strong connectivity, and sustained corporate demand, supports both immediate yield and long term capital appreciation. We help you understand what returns look like over a realistic hold period, not just in projections."],
  ['Risk First', 'Before any commercial property investment in Bangalore is recommended, we examine what can go wrong. Tenant strength, micro market dynamics, and downside scenarios are evaluated first. Comparing a Rs 1 crore residential property generating Rs 25,000 monthly rent at 3% ROI against a Rs 1 crore commercial property generating Rs 66,000 monthly rent at 7.9% ROI with 10 year lease certainty and tenant borne maintenance makes the structural case for commercial real estate clear.'],
] as const;

const labelClass = '!block !font-[Inter,sans-serif] !text-[0.72rem] !font-semibold !uppercase !tracking-[0.22em] !text-[var(--accent-gold)]';
const titleClass = '!font-[var(--font-heading)] !text-[clamp(2rem,3.2vw,2.65rem)] !font-extrabold !leading-[1.1] !tracking-[-0.035em] !text-[var(--primary-obsidian)]';
const bodyClass = '!font-[Inter,sans-serif] !text-[1rem] !font-light !leading-[1.8] !text-[var(--text-muted)]';

export default function InvestmentClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <section className="!relative !w-full !bg-[var(--bg-white)] !pt-[110px]">
        <div aria-hidden="true" className="!absolute !inset-x-0 !top-0 !h-[110px] !bg-[#0d1e36]" />
        <div className="!relative !grid !w-full md:!grid-cols-2">
          <div className="!relative !h-[360px] !w-full md:!h-[520px]">
            <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Off-Market Income Placements" fill sizes="(max-width: 767px) 100vw, 50vw" className="!object-cover" unoptimized priority />
          </div>
          <div className="!flex !min-h-[430px] !w-full !flex-col !justify-center !bg-[var(--bg-white)] !px-7  sm:!px-12 md:!h-[520px] md:!px-[55px]">
            <span className={`${labelClass} !mb-3`}>Private Exclusives</span>
            <h1 className="!mb-5 !max-w-[600px] !font-[var(--font-heading)] !text-[clamp(2rem,3vw,2.4rem)] !font-extrabold !leading-[1.08] !tracking-[-0.025em] !text-[var(--primary-obsidian)]">Commercial Property Investment Advisory in Bangalore</h1>
            <h2 className="!mb-5 !max-w-[600px] !font-[var(--font-heading)] !text-[1rem] !font-semibold !uppercase !leading-[1.5] !tracking-[0.025em] !text-[var(--primary-obsidian)]">Buy Side. Sell Side. Capital Markets Discipline.</h2>
            <p className="!max-w-[600px] !font-[Inter,sans-serif] !text-[0.95rem] !font-light !leading-[1.95] !text-[var(--text-muted)]">Commercial real estate investments require more than identifying an opportunity. Bricx.ai provides real estate investment advisory in Bengaluru with a focus on income reliability, risk assessment, and disciplined underwriting, before returns are ever discussed.</p>
          </div>
        </div>
      </section>

      <section className="!bg-[var(--bg-white)] !px-6 !pb-8 !pt-16 md:!pt-[68px]">
        <div className="!mx-auto !max-w-[1155px]">
          <div className="!mb-12 !text-center"><span className={`${labelClass} !mb-3`}>Investment Philosophy</span><h2 className={titleClass}>How We Evaluate</h2></div>
          <div className="!grid !grid-cols-1 !gap-7 md:!grid-cols-3">
            {principles.map(([title, text]) => (
              <article key={title} className="!min-h-[270px] !rounded-[3px] !bg-[var(--bg-cream)] !px-6 !py-6">
                <h3 className="!mb-2 !font-[var(--font-heading)] !text-[1.25rem] !font-bold !leading-[1.2] !text-[var(--primary-obsidian)]">{title}</h3>
                <p className="!font-[Inter,sans-serif] !text-[0.88rem] !font-normal !leading-[1.6] !text-[var(--text-muted)]">{text}</p>
              </article>
            ))}
          </div>
          <article className="!mx-auto !mt-8 !max-w-[800px] !rounded-[3px] !bg-[var(--bg-cream)] !px-6 !py-6 !text-center">
            <h3 className="!mb-2 !font-[var(--font-heading)] !text-[1.25rem] !font-bold !leading-[1.2] !text-[var(--primary-obsidian)]">Exit and Timing</h3>
            <p className="!text-left !font-[Inter,sans-serif] !text-[0.88rem] !font-normal !leading-[1.6] !text-[var(--text-muted)]">We think about how you will exit before you enter. Every income asset advisory mandate includes an exit framework: what the asset needs to achieve and over what timeline. Bangalore remains India&apos;s technology and AI hub. GCC growth and undersupply of Grade A office inventory create favorable conditions for investors seeking inflation hedged income.</p>
          </article>
        </div>
      </section>

      <section className="!bg-[var(--bg-cream)] !px-6 !py-[90px]">
        <div className="!mx-auto !max-w-[800px] !text-center">
          <span className={`${labelClass} !mb-3`}>Asset Coverage</span><h2 className={`${titleClass} !mb-6`}>What We Work On</h2>
          <p className={`${bodyClass} !text-left`}>Grade A office investments in Bengaluru. Income producing commercial properties across office, retail, and mixed use asset classes in Bangalore. Buy side and sell side mandates for HNIs and family offices. Capital structuring and portfolio strategy for investors building exposure to real estate capital markets in India. We also advise NRIs and diaspora investors evaluating commercial real estate in Bengaluru. Entry points start at Rs 10 lakh for fractional co owned units with assured rental income, scaling to Rs 1.5 to 3 crore for small format office units, Rs 5 to 10 crore for independent floors, and Rs 25 to 50 crore for institutional grade standalone assets.</p>
        </div>
      </section>

      <section className="!bg-[var(--bg-cream)] !px-6 !pb-[110px] !pt-0">
        <div className="!mx-auto !max-w-[856px]">
          <div className="!mb-[68px] !text-center"><span className={`${labelClass} !mb-3`}>Clear Answers</span><h2 className="!font-[Cinzel,serif] !text-[clamp(2rem,3.4vw,2.6rem)] !font-normal !uppercase !leading-[1.25] !tracking-[0.045em] !text-[var(--primary-obsidian)]">Frequently Asked Questions</h2></div>
          <div>{investmentFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return <div key={faq.question} className="!border-b !border-[rgba(14,24,42,0.10)] !py-[39px]"><button type="button" onClick={() => setOpenFaqIndex(isOpen ? null : index)} aria-expanded={isOpen} className="!flex !w-full !items-center !justify-between !gap-6 !border-0 !bg-transparent !p-0 !text-left"><h3 className="!font-[Cinzel,serif] !text-[1.05rem] !font-semibold !uppercase !leading-[1.4] !tracking-[0.015em] !text-[var(--primary-obsidian)]">{faq.question}</h3><span className="!shrink-0 !text-[1.15rem] !font-normal !leading-none !text-[var(--primary-obsidian)]" aria-hidden="true">{isOpen ? '\u00d7' : '+'}</span></button><div className={`!grid !transition-[grid-template-rows] !duration-300 ${isOpen ? '!grid-rows-[1fr]' : '!grid-rows-[0fr]'}`}><div className="!overflow-hidden"><p className="!pt-4 !font-[Inter,sans-serif] !text-[0.95rem] !font-light !leading-[1.7] !text-[var(--text-muted)]">{faq.answer}</p></div></div></div>;
          })}</div>
        </div>
      </section>
    </>
  );
}
