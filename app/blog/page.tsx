import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import blogsData from '../../blogs.json';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  hero_image: string;
  hero_image_alt: string;
  date: string;
  date_iso: string;
  publisher: string;
  meta_description?: string;
}

export const metadata: Metadata = {
  title: 'Commercial Real Estate Insights Bengaluru | Bricx.ai',
  description: "Market intelligence, leasing frameworks, and investment thinking for Bangalore's commercial real estate: from the Bricx.ai advisory desk.",
  alternates: { canonical: 'https://bricx.ai/blog' },
  openGraph: {
    type: 'website', url: 'https://bricx.ai/blog', title: 'Commercial Real Estate Insights Bengaluru | Bricx.ai',
    description: "Market intelligence, leasing frameworks, and investment thinking for Bangalore's commercial real estate: from the Bricx.ai advisory desk.",
    images: [{ url: 'https://bricx.ai/og-default.png', width: 1200, height: 630, alt: 'Bricx.ai Logo' }],
  },
  twitter: { card: 'summary_large_image', title: 'Commercial Real Estate Insights Bengaluru | Bricx.ai', description: "Market intelligence, leasing frameworks, and investment thinking for Bangalore's commercial real estate: from the Bricx.ai advisory desk.", images: ['https://bricx.ai/og-default.png'] },
};

export default function BlogIndexPage() {
  const blogs = blogsData as BlogPost[];
  const blogSchema = {
    '@context': 'https://schema.org', '@type': 'Blog', name: 'Bricx Blogs', url: 'https://bricx.ai/blog',
    description: "Read Bricx.ai's institutional insights, market pricing data, due diligence reviews, and commercial real estate advisory editorials.",
    publisher: { '@type': 'Organization', name: 'Bricx.ai', logo: { '@type': 'ImageObject', url: 'https://bricx.ai/home_about_advisory.png' } },
    blogPost: blogs.map((item) => ({ '@type': 'BlogPosting', headline: item.title, description: item.meta_description || item.excerpt, datePublished: item.date_iso || item.date, url: `https://bricx.ai/blog/${item.slug}`, image: `https://bricx.ai${item.hero_image}` })),
  };

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <section className="!bg-[#0d1e36] !px-6 !pb-12 !pt-[130px] !text-center sm:!pb-[50px]">
        <div className="!mx-auto !max-w-[1050px]">
          <h1 className="!mb-2.5 !font-[Outfit,sans-serif] !text-[clamp(1.8rem,3.5vw,2.5rem)] !font-extralight !uppercase !leading-[1.2] !tracking-[0.18em] !text-white/95">
            Commercial Real Estate Intelligence | Bangalore
          </h1>
          <h2 className="!mx-auto !max-w-[800px] !border-0 !p-0 !font-[Inter,sans-serif] !text-[1.15rem] !font-light !normal-case !leading-[1.6] !tracking-normal !text-white/90">
            Market Insights. Advisory Thinking. No Filler.
          </h2>
          <p className="!mx-auto !mt-2.5 !max-w-[700px] !font-[Inter,sans-serif] !text-[0.95rem] !font-light !leading-[1.6] !text-white/85">
            The Bricx.ai blog covers commercial real estate in Bangalore and India: leasing frameworks, investment thinking, land advisory, and micro market analysis across Whitefield, Outer Ring Road, Koramangala, Electronic City, HSR Layout, and South Bengaluru.
          </p>
          <div className="!mt-5 !flex !flex-wrap !justify-center !gap-x-[15px] !gap-y-2 !font-[Inter,sans-serif] !text-[0.82rem] !font-semibold !uppercase !tracking-[0.12em] !text-white/90">
            <span>Leasing Advisory</span>
            <span className="!text-[#c5b897]">|</span>
            <span>Income Investments</span>
            <span className="!text-[#c5b897]">|</span>
            <span>Land &amp; Opportunity</span>
            <span className="!text-[#c5b897]">|</span>
            <span>Market Intelligence</span>
          </div>
        </div>
      </section>

      <section className="!bg-[var(--bg-white)] !px-4 !py-12 sm:!px-6 lg:!py-20">
        <div className="!mx-auto !grid !max-w-[1180px] !grid-cols-1 !gap-10 lg:!grid-cols-2">
          {blogs.map((item) => (
            <article
              key={item.id}
              className="group !flex !h-full !flex-col !overflow-hidden !bg-[#f8f5f1] !transition duration-300 hover:!-translate-y-1  ]"
            >
              <Link href={`/blog/${item.slug}`} className="!relative !block !h-[300px] !overflow-hidden sm:!h-[350px] lg:!h-[420px]">
                <Image
                  src={item.hero_image}
                  alt={item.hero_image_alt || item.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="!object-cover !transition-transform !duration-700 !ease-out group-hover:!scale-[1.03]"
                  unoptimized
                />
              </Link>

              <div className="!flex !flex-grow !flex-col !px-0 !pt-6 !pb-5 sm:!pt-8">
                <div className="!mb-3 !px-5 sm:!px-7">
                  <div className="!flex !items-center !gap-3 !font-[Inter,sans-serif] !text-[0.7rem] !font-medium !uppercase !tracking-[0.15em] !text-[var(--text-charcoal)]/80">
                    <span>{item.date}</span>
                    <span className="!text-[var(--text-muted)]/60">•</span>
                    <span>{item.publisher.toUpperCase()}</span>
                  </div>
                </div>

                <h2 className="!mb-4 !px-5 !font-[Outfit,sans-serif] !text-[clamp(1.8rem,2vw,2.4rem)] !font-light !leading-[1.05] !tracking-[0.02em] !text-[var(--text-charcoal)] !uppercase sm:!px-7">
                  <Link href={`/blog/${item.slug}`} className="!transition-colors hover:!text-[var(--accent-gold)]">
                    {item.title}
                  </Link>
                </h2>

                <p className="!mb-5 !px-5 !font-[Inter,sans-serif] !text-[0.92rem] !font-light !leading-[1.7] !text-[var(--text-muted)] sm:!px-7">
                  {item.excerpt}
                </p>

                <div className="!mt-auto !border-t !border-[var(--border-medium)] !px-5 !pt-4 sm:!px-7">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="!inline-flex !items-center !font-[Outfit,sans-serif] !text-[0.78rem] !font-semibold !tracking-[0.18em] !text-[var(--text-charcoal)]"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
