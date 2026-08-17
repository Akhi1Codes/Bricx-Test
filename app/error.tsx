'use client';

import React from 'react';
import Link from 'next/link';

export default function ErrorPage({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <section className="advisory-hero" style={{ backgroundColor: 'var(--primary-obsidian)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <title>500 Internal Error | BRICX.AI</title>
      <div className="container" style={{ padding: '100px 0' }}>
        <div className="blog-category" style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Error 500</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '4rem', color: 'var(--bg-cream)', marginBottom: '1.5rem' }}>Underwriting Interrupted</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          An unexpected computational exception occurred on our secure servers. Our system administrators have been alerted. Please try again shortly.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button onClick={() => reset()} className="carolwood-btn" style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--primary-obsidian)', borderColor: 'var(--accent-gold)', cursor: 'pointer', borderStyle: 'solid', borderWidth: '1px', padding: '14px 32px', fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Try Again
          </button>
          <Link href="/" className="carolwood-btn" style={{ backgroundColor: 'transparent', color: 'var(--bg-cream)', borderColor: 'var(--bg-cream)', textDecoration: 'none', borderStyle: 'solid', borderWidth: '1px', padding: '14px 32px', fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Return to Main Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
