'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product, formatPrice, CATEGORY_LABELS } from '@/lib/products';
import { useCart } from './CartProvider';

type Props = {
  product: Product;
};

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  Bestseller: { bg: '#2D5F3F', text: '#F5EFE0' },
  PreOrder:   { bg: '#8B5E3C', text: '#F5EFE0' },
  New:        { bg: '#1A1A1A', text: '#F5EFE0' },
  Diskon:     { bg: '#D14B3E', text: '#F5EFE0' },
};

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);

  const badge = product.badge;
  const badgeStyle = badge ? BADGE_COLORS[badge] : null;
  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault(); // prevent Link navigation
    addItem(product, selectedColor.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div
      className="group flex flex-col rounded-lg overflow-hidden border-2 product-card-hover"
      style={{ borderColor: '#1A1A1A', backgroundColor: '#F5EFE0' }}
    >
      {/* Clickable image + info area */}
      <Link href={`/produk/${product.slug}`} className="block flex-1">
        {/* Image area */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={`${product.name} — holder raket padel 3D print`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />

          {/* Badge */}
          {badge && badgeStyle && (
            <span
              className="absolute top-3 left-3 px-2 py-1 text-xs font-bold rounded"
              style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.text }}
            >
              {badge}
            </span>
          )}

          {/* Discount badge */}
          {discountPct && (
            <span
              className="absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded"
              style={{ backgroundColor: '#D14B3E', color: '#F5EFE0' }}
            >
              {discountPct}% OFF
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 pb-2">
          {/* Category label */}
          <p
            className="text-xs font-medium mb-1 uppercase tracking-wider"
            style={{ color: '#8B5E3C' }}
          >
            {CATEGORY_LABELS[product.category]}
          </p>

          <h3
            className="font-bold text-sm sm:text-base leading-tight mb-1"
            style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p
            className="text-xs mb-3 leading-snug"
            style={{ color: '#8B5E3C' }}
          >
            {product.tagline}
          </p>

          {/* Price + sold */}
          <div className="flex items-end justify-between gap-2 mb-3">
            <div>
              {product.originalPrice && (
                <p className="text-xs line-through" style={{ color: '#8B5E3C' }}>
                  {formatPrice(product.originalPrice)}
                </p>
              )}
              <p className="font-bold text-base" style={{ color: '#1A1A1A' }}>
                {formatPrice(product.price)}
              </p>
              {product.priceSpecial !== product.price && (
                <p className="text-xs" style={{ color: '#8B5E3C' }}>
                  Special: {formatPrice(product.priceSpecial)}
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-xs" style={{ color: '#8B5E3C' }}>
                ⭐ {product.marketplaceRating.toFixed(1)}
              </p>
              <p className="text-xs" style={{ color: '#8B5E3C' }}>
                {product.marketplaceSold}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Color picker + Add to cart — outside Link to avoid nav */}
      <div className="px-4 pb-4 space-y-2.5">
        {/* Color selection */}
        <div>
          <p className="text-xs mb-1.5" style={{ color: '#8B5E3C' }}>
            Warna: <span className="font-semibold" style={{ color: '#1A1A1A' }}>{selectedColor.name}</span>
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {product.colors.slice(0, 8).map((c) => (
              <button
                key={c.name}
                title={c.name}
                onClick={() => setSelectedColor(c)}
                className="w-5 h-5 rounded-full border-2 transition-all"
                style={{
                  backgroundColor: c.hex,
                  borderColor: selectedColor.name === c.name ? '#2D5F3F' : '#C9A876',
                  outline: selectedColor.name === c.name ? '2px solid #2D5F3F' : 'none',
                  outlineOffset: '2px',
                  boxShadow: c.hex === '#FFFFFF' || c.hex === '#F5EFE0' ? '0 0 0 1px #ccc' : undefined,
                }}
                aria-label={`Pilih warna ${c.name}`}
              />
            ))}
            {product.colors.length > 8 && (
              <span className="text-xs self-center" style={{ color: '#8B5E3C' }}>
                +{product.colors.length - 8}
              </span>
            )}
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-2.5 rounded-lg font-bold text-sm transition-all"
          style={{
            backgroundColor: added ? '#2D5F3F' : '#1A1A1A',
            color: '#F5EFE0',
          }}
          aria-label={`Tambah ${product.name} ke keranjang`}
        >
          {added ? '✓ Ditambahkan!' : '+ Keranjang'}
        </button>
      </div>
    </div>
  );
}
