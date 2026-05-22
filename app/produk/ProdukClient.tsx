'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, ProductCategory } from '@/lib/products';

type FilterCategory = 'semua' | ProductCategory;
type SortKey = 'terlaris' | 'termurah' | 'termahal';

export default function ProdukClient() {
  const [category, setCategory] = useState<FilterCategory>('semua');
  const [sort, setSort] = useState<SortKey>('terlaris');

  const filtered = products
    .filter((p) => category === 'semua' || p.category === category)
    .sort((a, b) => {
      if (sort === 'termurah') return a.price - b.price;
      if (sort === 'termahal') return b.price - a.price;
      // terlaris: sort by sold count (parse the number from e.g. "300+ terjual")
      const parseCount = (s: string) => parseInt(s.replace(/[^0-9]/g, ''), 10) || 0;
      return parseCount(b.marketplaceSold) - parseCount(a.marketplaceSold);
    });

  const tabs: { key: FilterCategory; label: string }[] = [
    { key: 'semua',       label: 'Semua Produk' },
    { key: 'wall-mount',  label: 'Wall Mount' },
    { key: 'desk-stand',  label: 'Desk Stand' },
    { key: 'aksesori',    label: 'Aksesori' },
  ];

  const sorts: { key: SortKey; label: string }[] = [
    { key: 'terlaris', label: 'Terlaris' },
    { key: 'termurah', label: 'Termurah' },
    { key: 'termahal', label: 'Termahal' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#8B5E3C' }}>
          Katalog
        </p>
        <h1
          className="text-3xl sm:text-4xl font-extrabold mb-2"
          style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
        >
          Semua yang dibutuhin raket lo di luar lapangan.
        </h1>
        <p className="text-base" style={{ color: '#8B5E3C' }}>
          Wall mounts, desk stands, dan aksesori — 3D printed, dikustomisasi sesuai warna pilihan lo.
        </p>
      </div>

      {/* Filters + Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setCategory(tab.key)}
              className="px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-colors"
              style={{
                borderColor: category === tab.key ? '#2D5F3F' : '#8B5E3C',
                backgroundColor: category === tab.key ? '#2D5F3F' : 'transparent',
                color: category === tab.key ? '#F5EFE0' : '#8B5E3C',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort buttons */}
        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: '#8B5E3C' }}>Urutkan:</span>
          {sorts.map((s) => (
            <button
              key={s.key}
              onClick={() => setSort(s.key)}
              className="px-3 py-1.5 rounded text-xs font-medium border transition-colors"
              style={{
                borderColor: sort === s.key ? '#1A1A1A' : '#C9A876',
                backgroundColor: sort === s.key ? '#1A1A1A' : 'transparent',
                color: sort === s.key ? '#F5EFE0' : '#8B5E3C',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product count */}
      <p className="text-xs mb-6" style={{ color: '#8B5E3C' }}>
        {filtered.length} produk ditemukan
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20" style={{ color: '#8B5E3C' }}>
          <p className="text-lg font-semibold mb-2">Tidak ada produk ditemukan</p>
          <p className="text-sm">Coba ubah filter kategori kamu.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}