import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/blog/',
    },
    sitemap: 'https://bricx.ai/sitemap.xml',
  };
}
