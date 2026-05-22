import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, BlogPost } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog Padel Indonesia — Tips, Setup & Review | 3Dulo',
  description: 'Tips padel Indonesia, panduan setup padel corner di rumah, dan review produk holder raket. Dari pemain untuk pemain.',
  alternates: { canonical: 'https://3dulo.id/blog' },
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  'Tips Padel': { bg: '#2D5F3F', text: '#F5EFE0' },
  'Setup Rumah': { bg: '#8B5E3C', text: '#F5EFE0' },
  'Review Produk': { bg: '#1A1A1A', text: '#F5EFE0' },
  Komunitas: { bg: '#C9A876', text: '#1A1A1A' },
};

function CategoryBadge({ category }: { category: BlogPost['category'] }) {
  const style = CATEGORY_COLORS[category] ?? { bg: '#1A1A1A', text: '#F5EFE0' };
  return (
    <span
      className="inline-block px-2 py-0.5 text-xs font-bold rounded"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {category}
    </span>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#8B5E3C' }}>Blog</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>
          Tips & Insight Padel
        </h1>
        <p className="text-base" style={{ color: '#8B5E3C' }}>
          Panduan, tips, dan review dari komunitas padel Indonesia.
        </p>
      </div>

      {/* Featured post */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-lg overflow-hidden border-2 mb-10 transition-shadow hover:shadow-xl"
          style={{ borderColor: '#1A1A1A', backgroundColor: '#F5EFE0' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto min-h-48 bg-gray-200">
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent, transparent)' }} />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex gap-2 items-center mb-3">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ backgroundColor: '#2D5F3F', color: '#F5EFE0' }}
                >
                  Featured
                </span>
                <CategoryBadge category={featured.category} />
              </div>
              <h2
                className="text-xl sm:text-2xl font-extrabold mb-3 leading-tight group-hover:underline"
                style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
              >
                {featured.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#8B5E3C' }}>
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: '#8B5E3C' }}>
                <span>{formatDate(featured.publishedAt)}</span>
                <span>•</span>
                <span>{featured.readingTime} baca</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Rest posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-lg overflow-hidden border-2 transition-shadow hover:shadow-lg"
            style={{ borderColor: '#C9A876', backgroundColor: '#F5EFE0' }}
          >
            <div className="relative aspect-video bg-gray-200">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <CategoryBadge category={post.category} />
              <h2
                className="text-base font-bold mt-2 mb-2 leading-tight group-hover:underline"
                style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
              >
                {post.title}
              </h2>
              <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: '#8B5E3C' }}>
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs" style={{ color: '#8B5E3C' }}>
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
