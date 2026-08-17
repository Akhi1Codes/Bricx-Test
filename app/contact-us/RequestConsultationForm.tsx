'use client';

import React, { useState } from 'react';

interface RequestConsultationFormProps {
  titleId?: string;
}

export default function RequestConsultationForm({ titleId }: RequestConsultationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{
    name?: boolean;
    email?: boolean;
    emailInvalid?: boolean;
    phoneInvalid?: boolean;
  }>({});

  const handleInterestChange = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof fieldErrors = {};
    let hasError = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      newErrors.name = true;
      hasError = true;
    }

    const emailVal = email.trim();
    if (!emailVal) {
      newErrors.email = true;
      hasError = true;
    } else if (!emailRegex.test(emailVal)) {
      newErrors.emailInvalid = true;
      hasError = true;
    }

    if (phone.trim()) {
      const phoneDigits = phone.trim().replace(/[\s\-()+]/g, '');
      if (!/^\d{10,}$/.test(phoneDigits)) {
        newErrors.phoneInvalid = true;
        hasError = true;
      }
    }

    setFieldErrors(newErrors);
    if (hasError) return;

    setStatus('loading');
    try {
      const inquiryText = interests.join(', ') || 'General B2B Inquiry';
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: `[Inquiry: ${inquiryText}] - ${message.trim()}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorText(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorText('Network error. Please try again.');
    }
  };

  return (
    <>
      {status !== 'success' ? (
        <>
          <div className="blog-category" id={titleId}>Request Consultation</div>
          <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Start the Conversation</h2>

          <form id="contact-detailed-form" onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${fieldErrors.name ? 'has-error' : ''}`}>
              <label htmlFor="c-name">Full Name <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                id="c-name"
                className="form-control"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {fieldErrors.name && (
                <span className="error-msg" style={{ color: '#c93b3b', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                  Please enter your full name.
                </span>
              )}
            </div>

            <div className={`form-group ${fieldErrors.email || fieldErrors.emailInvalid ? 'has-error' : ''}`}>
              <label htmlFor="c-email">Business Email <span style={{ color: 'red' }}>*</span></label>
              <input
                type="email"
                id="c-email"
                className="form-control"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {(fieldErrors.email || fieldErrors.emailInvalid) && (
                <span className="error-msg" style={{ color: '#c93b3b', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                  {fieldErrors.emailInvalid ? 'Please enter a valid business email address.' : 'Please enter your business email address.'}
                </span>
              )}
            </div>

            <div className={`form-group ${fieldErrors.phoneInvalid ? 'has-error' : ''}`}>
              <label htmlFor="c-phone">Phone Number</label>
              <input
                type="tel"
                id="c-phone"
                className="form-control"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {fieldErrors.phoneInvalid && (
                <span className="error-msg" style={{ color: '#c93b3b', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                  Please enter a valid phone number (min. 10 digits).
                </span>
              )}
            </div>

            <div className="form-group" id="grp-c-inquiry">
              <label style={{ display: 'block', marginBottom: '12px' }}>Area of Interest</label>
              <div className="checkbox-group modal-checkbox-group" style={{ gap: '12px', marginBottom: '20px' }}>
                <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                  <input
                    type="checkbox"
                    name="c-interest"
                    value="Leasing Advisory"
                    style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                    checked={interests.includes('Leasing Advisory')}
                    onChange={() => handleInterestChange('Leasing Advisory')}
                  />
                  Occupier Leasing Advisory
                </label>
                <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                  <input
                    type="checkbox"
                    name="c-interest"
                    value="Income Investments"
                    style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                    checked={interests.includes('Income Investments')}
                    onChange={() => handleInterestChange('Income Investments')}
                  />
                  Income & Portfolio Placements
                </label>
                <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                  <input
                    type="checkbox"
                    name="c-interest"
                    value="Land Opportunities"
                    style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                    checked={interests.includes('Land Opportunities')}
                    onChange={() => handleInterestChange('Land Opportunities')}
                  />
                  Land Plot Development
                </label>
                <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-charcoal)', cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal', fontWeight: 'normal' }}>
                  <input
                    type="checkbox"
                    name="c-interest"
                    value="Other"
                    style={{ accentColor: 'var(--accent-gold)', width: '18px', height: '18px', cursor: 'pointer' }}
                    checked={interests.includes('Other')}
                    onChange={() => handleInterestChange('Other')}
                  />
                  General B2B Inquiry
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="c-message">Inquiry Details</label>
              <textarea
                id="c-message"
                className="form-control"
                style={{ minHeight: '120px' }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {status === 'error' && (
              <div style={{ color: '#c93b3b', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 500 }}>
                <i className="fas fa-exclamation-circle"></i> {errorText}
              </div>
            )}

            <button type="submit" className="btn-submit" id="c-submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting...' : 'Request Consultation'}
            </button>
          </form>
        </>
      ) : (
        <div id="c-success-message" style={{ textAlign: 'center', padding: '30px 0' }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-olive)" strokeWidth="1.5" style={{ margin: '0 auto 1.5rem auto' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', color: 'var(--primary-obsidian)' }}>
            Consultation Initiated
          </h3>
          <p style={{ color: 'var(--text-charcoal)', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto' }}>
            Thank you for reaching out. A senior Bricx.ai advisory principal will call you on your provided contact number within 2 business hours.
          </p>
        </div>
      )}
    </>
  );
}
