import { MetadataRoute } from 'next';
import blogsData from '../blogs.json';

interface BlogPost {
  slug: string;
  date_iso?: string;
  date?: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bricx.ai';
  
  // Exact port of Flask's sitemap.xml static URLs
  const staticPaths = [
    '',
    '/about',
    '/advisory',
    '/investment-opportunities',
    '/land-opportunities',
    '/contact-us',
    '/blog',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: '2026-06-01',
  }));

  // Exact port of Flask's sitemap.xml dynamic blog URLs
  const blogPaths = (blogsData as BlogPost[]).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date_iso || '2026-06-01',
  }));

  return [...staticPaths, ...blogPaths];
}
