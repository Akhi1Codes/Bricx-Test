import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="advisory-hero" style={{ backgroundColor: 'var(--primary-obsidian)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <title>404 Page Not Found | BRICX.AI</title>
      <div className="container" style={{ padding: '100px 0' }}>
        <div className="blog-category" style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Error 404</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '4rem', color: 'var(--bg-cream)', marginBottom: '1.5rem' }}>Asset Out of Bounds</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          The private placement memorandum or digital dealroom link you requested is either expired, confidential, or does not exist.
        </p>
        <Link href="/" className="carolwood-btn" style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--primary-obsidian)', borderColor: 'var(--accent-gold)', textDecoration: 'none' }}>
          Return to Main Portfolio
        </Link>
      </div>
    </section>
  );
}
