'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from './CartProvider';
import { buildCartWAUrl } from '@/lib/cart';
import { formatPrice } from '@/lib/products';
import { resolveRef } from '@/lib/whatsapp';

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TRASH_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

export default function CartDrawer() {
  const { items, totalItems, totalPrice, isOpen, closeCart, removeItem, increment, decrement } = useCart();
  const [ref, setRef] = useState<string | null>(null);

  useEffect(() => {
    setRef(resolveRef());
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const waUrl = buildCartWAUrl(items, ref);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 z-50 h-full w-full max-w-sm flex flex-col shadow-2xl"
        style={{ backgroundColor: '#F5EFE0' }}
        role="dialog"
        aria-modal="true"
        aria-label="Keranjang belanja"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: '#C9A876' }}
        >
          <div className="flex items-center gap-2">
            <h2 className="font-extrabold text-lg" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>
              Keranjang
            </h2>
            {totalItems > 0 && (
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: '#2D5F3F', color: '#F5EFE0' }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-lg transition-opacity hover:opacity-60"
            style={{ color: '#1A1A1A' }}
            aria-label="Tutup keranjang"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
              <span style={{ fontSize: 48 }}>🛒</span>
              <p className="font-semibold text-base" style={{ color: '#1A1A1A' }}>Keranjang masih kosong</p>
              <p className="text-sm" style={{ color: '#8B5E3C' }}>Pilih produk dan tambahkan ke sini.</p>
              <button
                onClick={closeCart}
                className="mt-2 px-5 py-2.5 rounded-lg font-semibold text-sm border-2 transition-opacity hover:opacity-80"
                style={{ borderColor: '#2D5F3F', color: '#2D5F3F' }}
              >
                Lihat Produk →
              </button>
            </div>
          ) : (
            items.map((item) => {
              const key = `${item.product.slug}__${item.selectedColor}`;
              const subtotal = item.product.price * item.quantity;
              // Find color hex for the dot
              const colorObj = item.product.colors.find((c) => c.name === item.selectedColor);

              return (
                <div
                  key={key}
                  className="flex gap-3 rounded-lg p-3 border"
                  style={{ backgroundColor: '#fff8ee', borderColor: '#C9A876' }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border" style={{ borderColor: '#C9A876' }}>
                    <Image
                      src={item.product.thumbnail}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm leading-tight truncate" style={{ color: '#1A1A1A' }}>
                      {item.product.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {colorObj && (
                        <span
                          className="inline-block w-3 h-3 rounded-full border"
                          style={{ backgroundColor: colorObj.hex, borderColor: '#C9A876' }}
                        />
                      )}
                      <p className="text-xs" style={{ color: '#8B5E3C' }}>{item.selectedColor}</p>
                    </div>
                    <p className="text-sm font-bold mt-1" style={{ color: '#2D5F3F' }}>
                      {formatPrice(subtotal)}
                    </p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decrement(item.product.slug, item.selectedColor)}
                        className="w-6 h-6 rounded border flex items-center justify-center text-sm font-bold transition-opacity hover:opacity-60"
                        style={{ borderColor: '#8B5E3C', color: '#1A1A1A' }}
                        aria-label="Kurangi jumlah"
                      >
                        −
                      </button>
                      <span className="text-sm font-semibold w-4 text-center" style={{ color: '#1A1A1A' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increment(item.product.slug, item.selectedColor)}
                        className="w-6 h-6 rounded border flex items-center justify-center text-sm font-bold transition-opacity hover:opacity-60"
                        style={{ borderColor: '#8B5E3C', color: '#1A1A1A' }}
                        aria-label="Tambah jumlah"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.product.slug, item.selectedColor)}
                        className="ml-auto p-1 transition-opacity hover:opacity-60"
                        style={{ color: '#D14B3E' }}
                        aria-label="Hapus item"
                      >
                        {TRASH_ICON}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer — only show when items exist */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t space-y-3" style={{ borderColor: '#C9A876' }}>
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium" style={{ color: '#8B5E3C' }}>Total ({totalItems} item)</span>
              <span className="text-lg font-extrabold" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* Free shipping note */}
            <p className="text-xs text-center" style={{ color: '#2D5F3F' }}>
              🇮🇩 Gratis ongkir ke seluruh Indonesia
            </p>

            {/* WA Checkout button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl font-bold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366', color: '#fff' }}
              onClick={closeCart}
            >
              {WA_ICON}
              Checkout via WhatsApp
            </a>

            <p className="text-xs text-center" style={{ color: '#8B5E3C' }}>
              Pesanan dikirim ke WhatsApp · Balas dalam 15 menit
            </p>
          </div>
        )}
      </div>
    </>
  );
}
