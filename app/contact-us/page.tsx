import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Bricx.ai | Independent Real Estate Advisory in Bangalore",
  description: "Contact Bricx.ai in Bengaluru for commercial real estate advisory, office leasing tenant representation, yield investments, and joint development land acquisition.",
  alternates: {
    canonical: "https://bricx.ai/contact-us"
  },
  openGraph: {
    type: "website",
    url: "https://bricx.ai/contact-us",
    title: "Contact Bricx.ai | Independent Real Estate Advisory in Bangalore",
    description: "Contact Bricx.ai in Bengaluru for commercial real estate advisory, office leasing tenant representation, yield investments, and joint development land acquisition.",
    images: [
      {
        url: "https://bricx.ai/og-default.png",
        width: 1200,
        height: 630,
        alt: "Bricx.ai Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bricx.ai | Independent Real Estate Advisory in Bangalore",
    description: "Contact Bricx.ai in Bengaluru for commercial real estate advisory, office leasing tenant representation, yield investments, and joint development land acquisition.",
    images: ["https://bricx.ai/og-default.png"]
  }
};

export default function ContactUsPage() {
  return <ContactClient />;
}
