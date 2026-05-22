import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getBlogPostBySlug, blogPosts } from '@/lib/blog-posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://3dulo.id/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://3dulo.id/blog/${slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: post.thumbnail, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://3dulo.id' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://3dulo.id/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://3dulo.id/blog/${slug}` },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.thumbnail,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: '3Dulo' },
    publisher: {
      '@type': 'Organization',
      name: '3Dulo',
      logo: { '@type': 'ImageObject', url: 'https://3dulo.id/logo.png' },
    },
  };

  const faqJsonLd = post.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <div style={{ backgroundColor: '#F5EFE0' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs mb-6 flex gap-2 items-center" style={{ color: '#8B5E3C' }} aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span>/</span>
          <span style={{ color: '#1A1A1A' }} className="truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Category + meta */}
        <div className="flex flex-wrap gap-2 items-center mb-4">
          <span
            className="px-2 py-0.5 text-xs font-bold rounded"
            style={{ backgroundColor: '#2D5F3F', color: '#F5EFE0' }}
          >
            {post.category}
          </span>
          <span className="text-xs" style={{ color: '#8B5E3C' }}>
            {formatDate(post.publishedAt)} • {post.readingTime} baca
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
          style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-base leading-relaxed mb-6" style={{ color: '#8B5E3C' }}>
          {post.excerpt}
        </p>

        {/* Thumbnail */}
        <div className="relative aspect-video rounded-lg overflow-hidden border-2 mb-8" style={{ borderColor: '#C9A876' }}>
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <article
          className="prose-3dulo mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* WA CTA mid-article */}
        <div
          className="p-6 rounded-lg border-2 mb-10 text-center"
          style={{ borderColor: '#2D5F3F', backgroundColor: '#fff8ee' }}
        >
          <p className="font-bold text-base mb-2" style={{ color: '#1A1A1A' }}>
            Siap setup padel corner impianmu?
          </p>
          <p className="text-sm mb-4" style={{ color: '#8B5E3C' }}>
            Tanya langsung ke kami via WhatsApp — kami bantu kamu pilih produk yang paling cocok.
          </p>
          <WhatsAppButton size="md" label="Konsultasi via WhatsApp →" />
        </div>

        {/* FAQ section */}
        {post.faq.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-xl font-extrabold mb-5 pb-2 border-b-2"
              style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A', borderColor: '#8B5E3C' }}
            >
              Pertanyaan Umum
            </h2>
            <div className="space-y-3">
              {post.faq.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-lg border overflow-hidden"
                  style={{ borderColor: '#C9A876' }}
                >
                  <summary
                    className="px-4 py-3 cursor-pointer font-semibold text-sm"
                    style={{ backgroundColor: '#F5EFE0', color: '#1A1A1A' }}
                  >
                    {faq.question}
                  </summary>
                  <div className="px-4 py-3 text-sm leading-relaxed" style={{ backgroundColor: '#fff8ee', color: '#8B5E3C' }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Updated date */}
        <p className="text-xs mb-8" style={{ color: '#8B5E3C' }}>
          Terakhir diperbarui: {formatDate(post.updatedAt)}
        </p>

        {/* Back to blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ color: '#2D5F3F' }}
        >
          ← Kembali ke Blog
        </Link>
      </div>
    </div>
  );
}
