import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const title = `${product.name} | 3Dulo`;
  const description = product.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `https://3dulo.id/produk/${slug}` },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `https://3dulo.id/produk/${slug}`,
      images: [{ url: product.thumbnail, width: 800, height: 800, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://3dulo.id' },
      { '@type': 'ListItem', position: 2, name: 'Produk', item: 'https://3dulo.id/produk' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://3dulo.id/produk/${slug}` },
    ],
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.images,
    brand: { '@type': 'Brand', name: '3Dulo' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: '3Dulo' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.marketplaceRating,
      bestRating: 5,
      reviewCount: 10,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Berapa lama waktu produksi?',
        acceptedAnswer: { '@type': 'Answer', text: `${product.leadTime} setelah pembayaran dikonfirmasi.` },
      },
      {
        '@type': 'Question',
        name: 'Apakah warna bisa dikustomisasi?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ya! Pilih dari warna yang tersedia atau request warna lain via WhatsApp.' },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ProductDetailClient product={product} related={related} />
    </>
  );
}
