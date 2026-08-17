import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Charter | BRICX.AI",
  description: "Read Bricx.ai's Privacy Charter detailing our secure client telemetry, data handling practices, and institutional transparency.",
  alternates: {
    canonical: "https://bricx.ai/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <>
      <section className="advisory-hero" style={{ backgroundColor: 'var(--primary-obsidian)', minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container" style={{ padding: '120px 0 60px 0' }}>
          <div className="blog-category" style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Institutional Charter
          </div>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--bg-cream)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Privacy Charter
          </h1>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)', color: 'var(--text-charcoal)', lineHeight: 1.8, fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
        <div className="container" style={{ maxWidth: '800px', padding: '60px 24px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-obsidian)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            1. Secure Client Telemetry
          </h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            At Bricx.ai, we handle high net worth commercial lead briefs with institutional privacy protocols. The business emails, phone numbers, and company names captured via our consult and dealroom NDA handlers are underwritten with bank grade confidentiality and are protected from external database exposure.
          </p>

          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-obsidian)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            2. Non Disclosure & Security Logs
          </h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            When you submit a secure NDA signature to access exclusive property placements, we log your encrypted credential signature to prevent corporate leaks or market front running. This telemetry is never shared with third party listing networks or consumer trackers.
          </p>

          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-obsidian)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            3. Secure Storage & Non Disclosure
          </h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Any project database led by our principal advisors is kept highly isolated and secured locally inside our physical datastore nodes. We do not participate in commercial tracking systems, ensuring your B2B property holdings remain private.
          </p>
        </div>
      </section>
    </>
  );
}
