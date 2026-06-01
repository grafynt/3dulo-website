'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductPageTimer from '@/components/ProductPageTimer';
import { useCart } from '@/components/CartProvider';
import { Product, formatPrice, CATEGORY_LABELS } from '@/lib/products';

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  Bestseller: { bg: '#2D5F3F', text: '#F5EFE0' },
  PreOrder: { bg: '#8B5E3C', text: '#F5EFE0' },
  New: { bg: '#1A1A1A', text: '#F5EFE0' },
  Diskon: { bg: '#D14B3E', text: '#F5EFE0' },
};

const miniFAQ = [
  {
    question: 'Berapa lama waktu produksi?',
    answer: '5-7 hari kerja setelah pembayaran dikonfirmasi.',
  },
  {
    question: 'Apakah warna bisa dikustomisasi?',
    answer: 'Ya! Pilih dari warna yang tersedia atau request warna lain via WhatsApp.',
  },
  {
    question: 'Apa saja yang termasuk dalam paket?',
    answer: 'Holder + bonus yang tertera + instruksi pemasangan.',
  },
  {
    question: 'Bagaimana cara pesan?',
    answer: 'Klik tombol WhatsApp di halaman ini, pilih warna, dan kami akan proses pesananmu.',
  },
];

type Props = {
  product: Product;
  related: Product[];
};

export default function ProductDetailClient({ product, related }: Props) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  const badgeStyle = product.badge ? BADGE_COLORS[product.badge] : null;

  function handleAddToCart() {
    addItem(product, selectedColor.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div style={{ backgroundColor: '#F5EFE0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-xs mb-6 flex gap-2 items-center" style={{ color: '#8B5E3C' }} aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/produk" className="hover:underline">Produk</Link>
          <span>/</span>
          <span style={{ color: '#1A1A1A' }}>{product.name}</span>
        </nav>

        {/* Main 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* LEFT: Image gallery */}
          <div>
            <div
              className="relative aspect-square rounded-lg overflow-hidden border-2 mb-3"
              style={{ borderColor: '#1A1A1A', backgroundColor: '#ede8db' }}
            >
              <Image
                src={product.images[activeImage]}
                alt={`${product.name} — ${selectedColor.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
                unoptimized
              />
              {product.badge && badgeStyle && (
                <span
                  className="absolute top-3 left-3 px-3 py-1 text-sm font-bold rounded"
                  style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.text }}
                >
                  {product.badge}
                </span>
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 flex-wrap">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className="relative w-16 h-16 rounded border-2 overflow-hidden transition-all"
                  style={{ borderColor: activeImage === i ? '#2D5F3F' : '#C9A876', backgroundColor: '#ede8db' }}
                  aria-label={`Gambar produk ${i + 1}`}
                >
                  <Image src={img} alt={`Gambar ${i + 1}`} fill sizes="64px" className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#8B5E3C' }}>
              {CATEGORY_LABELS[product.category]} • 3D Print Premium
            </p>

            <h1
              className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight"
              style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium">⭐ {product.marketplaceRating.toFixed(1)}</span>
              <span className="text-xs" style={{ color: '#8B5E3C' }}>|</span>
              <span className="text-sm" style={{ color: '#8B5E3C' }}>{product.marketplaceSold} terjual</span>
            </div>

            <div className="mb-5">
              {product.originalPrice && (
                <p className="text-sm line-through mb-1" style={{ color: '#8B5E3C' }}>
                  {formatPrice(product.originalPrice)}
                </p>
              )}
              <p className="text-3xl font-extrabold" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>
                {formatPrice(product.price)}
              </p>
              {product.originalPrice && (
                <span
                  className="inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded"
                  style={{ backgroundColor: '#D14B3E', color: '#F5EFE0' }}
                >
                  Hemat {formatPrice(product.originalPrice - product.price)}
                </span>
              )}
            </div>

            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold mb-5"
              style={{ backgroundColor: '#fff8ee', color: '#8B5E3C', border: '1px solid #C9A876' }}
            >
              <span>🕐</span>
              <span>Pre-Order — produksi {product.leadTime}</span>
            </div>

            {/* Color selection */}
            <div className="mb-5">
              <p className="text-sm font-semibold mb-2" style={{ color: '#1A1A1A' }}>
                Pilih Warna: <span style={{ color: '#2D5F3F' }}>{selectedColor.name}</span>
              </p>
              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    aria-label={`Pilih warna ${color.name}`}
                    className="w-8 h-8 rounded-full border-2 transition-all"
                    style={{
                      backgroundColor: color.hex,
                      borderColor: selectedColor.name === color.name ? '#2D5F3F' : '#C9A876',
                      outline: selectedColor.name === color.name ? '2px solid #2D5F3F' : 'none',
                      outlineOffset: '2px',
                      boxShadow: color.hex === '#FFFFFF' || color.hex === '#F5EFE0' ? '0 0 0 1px #ccc' : undefined,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bonus callout */}
            <div
              className="p-4 rounded-lg mb-6 border-l-4"
              style={{ backgroundColor: '#FFF3CD', borderColor: '#C9A876' }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: '#1A1A1A' }}>
                🎁 Bonus Gratis dalam Paket:
              </p>
              <ul className="space-y-1">
                {product.bonus.map((b) => (
                  <li key={b} className="text-sm flex items-center gap-2" style={{ color: '#8B5E3C' }}>
                    <span style={{ color: '#2D5F3F' }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <ProductPageTimer productSlug={product.slug} />
            </div>

            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-base mb-3 transition-all"
              style={{
                backgroundColor: added ? '#2D5F3F' : '#1A1A1A',
                color: '#F5EFE0',
              }}
            >
              {added ? '✓ Ditambahkan ke Keranjang!' : '🛒 Tambah ke Keranjang'}
            </button>

            <WhatsAppButton
              product={product.name}
              selectedColor={selectedColor.name}
              variant="primary"
              size="lg"
              label="Pesan via WhatsApp →"
              className="w-full justify-center mb-3"
            />

            <WhatsAppButton
              product={product.name}
              selectedColor={selectedColor.name}
              variant="secondary"
              size="md"
              label="Tanya dulu sebelum pesan"
              className="w-full justify-center"
            />

            <p className="mt-5 text-sm leading-relaxed" style={{ color: '#8B5E3C' }}>
              {product.shortDescription}
            </p>
          </div>
        </div>

        {/* Full description */}
        <section className="mb-12 max-w-3xl">
          <h2
            className="text-xl font-bold mb-4 pb-2 border-b-2"
            style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A', borderColor: '#8B5E3C' }}
          >
            Deskripsi Produk
          </h2>
          <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#2a2a2a' }}>
            {product.fullDescription}
          </div>
        </section>

        {/* Specs table */}
        <section className="mb-12 max-w-2xl">
          <h2
            className="text-xl font-bold mb-4 pb-2 border-b-2"
            style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A', borderColor: '#8B5E3C' }}
          >
            Spesifikasi
          </h2>
          <table className="w-full text-sm">
            <tbody>
              {Object.entries({
                Material: product.specs.material,
                Dimensi: product.specs.dimensions,
                Berat: product.specs.weight,
                Kompatibilitas: product.specs.compatibility,
                'Lead Time': product.leadTime,
              }).map(([key, val]) => (
                <tr key={key} className="border-b" style={{ borderColor: '#E5DFD0' }}>
                  <td className="py-3 pr-4 font-semibold w-40" style={{ color: '#1A1A1A' }}>{key}</td>
                  <td className="py-3" style={{ color: '#8B5E3C' }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Mini FAQ */}
        <section className="mb-16 max-w-2xl">
          <h2
            className="text-xl font-bold mb-4 pb-2 border-b-2"
            style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A', borderColor: '#8B5E3C' }}
          >
            Pertanyaan Umum
          </h2>
          <div className="space-y-3">
            {miniFAQ.map((faq, i) => (
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
                <div className="px-4 py-3 text-sm" style={{ backgroundColor: '#fff8ee', color: '#8B5E3C' }}>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related products */}
        {related.length > 0 && (
          <section>
            <h2
              className="text-2xl font-extrabold mb-6"
              style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
            >
              Produk Terkait
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
