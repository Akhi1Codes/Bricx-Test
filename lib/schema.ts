// lib/schema.ts
// Central source for all JSON-LD structured data.
// Organization + Services are static. FAQPage is built from faqData at render time.

const SITE = "https://bricx.ai";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE}/#organization`,
  name: "Bricx.ai",
  url: SITE,
  logo: `${SITE}/og-default.png`,
  description:
    "Independent commercial real estate advisory across leasing, investments and land in Bangalore. Trust earned through discipline, clarity and sound judgment.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "WeWork Galaxy, 43, Residency Rd, Ashok Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560025",
    addressCountry: "IN",
  },
  telephone: "+919070504020",
  email: "hello@bricx.ai",
  areaServed: {
    "@type": "City",
    name: "Bangalore",
    containedIn: { "@type": "State", name: "Karnataka" },
  },
  founder: { "@type": "Person", name: "Krupesh Sanghani" },
  sameAs: ["https://www.linkedin.com/company/bricx-ai"],
};

const serviceBase = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@id": `${SITE}/#organization` },
  areaServed: { "@type": "City", name: "Bangalore" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
};

export const servicesSchema = [
  {
    ...serviceBase,
    "@id": `${SITE}/#service-leasing`,
    serviceType: "Commercial Leasing Advisory",
    description:
      "Office space advisory for companies in Bangalore - from requirement understanding to lease negotiation and portfolio planning across managed office, coworking, and traditional leasing.",
  },
  {
    ...serviceBase,
    "@id": `${SITE}/#service-investment`,
    serviceType: "Commercial Real Estate Investment Advisory",
    description:
      "Buy-side and sell-side advisory for HNIs and UHNIs investing in commercial properties in Bangalore - underwriting, capital structuring, and portfolio strategy.",
  },
  {
    ...serviceBase,
    "@id": `${SITE}/#service-land`,
    serviceType: "Land Advisory and Acquisition",
    description:
      "Land acquisition strategy, feasibility studies, joint development structuring and due diligence for commercial development in Bangalore.",
  },
];

// Builds FAQPage schema from the SAME data that renders the visible FAQs.
// This guarantees schema text and on-page text can never diverge.
export function buildFaqSchema(
  faqs: { question: string; answer: string }[],
  pagePath: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}${pagePath}#faqpage`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
