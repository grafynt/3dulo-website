import Link from 'next/link';
import Image from 'next/image';
import { Product, formatPrice } from '@/lib/products';

type Props = {
  product: Product;
};

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  Bestseller: { bg: '#2D5F3F', text: '#F5EFE0' },
  PreOrder: { bg: '#8B5E3C', text: '#F5EFE0' },
  New: { bg: '#1A1A1A', text: '#F5EFE0' },
  Diskon: { bg: '#D14B3E', text: '#F5EFE0' },
};

export default function ProductCard({ product }: Props) {
  const badge = product.badge;
  const badgeStyle = badge ? BADGE_COLORS[badge] : null;

  return (
    <Link
      href={`/produk/${product.slug}`}
      className="group block rounded-lg overflow-hidden border-2 product-card-hover"
      style={{ borderColor: '#1A1A1A', backgroundColor: '#F5EFE0' }}
    >
      {/* Image area */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={`${product.name} — holder raket padel 3D print`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"

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
        {product.originalPrice && (
          <span
            className="absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded"
            style={{ backgroundColor: '#D14B3E', color: '#F5EFE0' }}
          >
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p
          className="text-xs font-medium mb-1 uppercase tracking-wider"
          style={{ color: '#8B5E3C' }}
        >
          {product.category === 'padel' ? 'Padel' : 'Badminton'}
        </p>
        <h3
          className="font-bold text-sm sm:text-base leading-tight mb-2"
          style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
        >
          {product.name}
        </h3>

        {/* Color dots */}
        <div className="flex gap-1.5 mb-3">
          {product.colors.map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="inline-block w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: c.hex }}
              aria-label={`Warna ${c.name}`}
            />
          ))}
        </div>

        {/* Price + rating */}
        <div className="flex items-end justify-between gap-2">
          <div>
            {product.originalPrice && (
              <p className="text-xs line-through" style={{ color: '#8B5E3C' }}>
                {formatPrice(product.originalPrice)}
              </p>
            )}
            <p
              className="font-bold text-base"
              style={{ color: '#1A1A1A' }}
            >
              {formatPrice(product.price)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs" style={{ color: '#8B5E3C' }}>
              ⭐ {product.marketplaceRating.toFixed(1)}
            </p>
            <p className="text-xs" style={{ color: '#8B5E3C' }}>
              {product.marketplaceSold} terjual
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
