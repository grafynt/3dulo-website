'use client';

const items = [
  '1000+ Produk Terjual',
  'Rating 5.0 ⭐',
  'Pengiriman Seluruh Indonesia',
  'Dukungan WhatsApp Langsung',
  'Custom Warna Bebas',
  'Material PLA+ Premium',
  'Garansi 30 Hari',
  'Buatan Indonesia 🇮🇩',
];

export default function TrustTicker() {
  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden py-3 select-none"
      style={{ backgroundColor: '#1A1A1A' }}
      aria-label="Keunggulan 3Dulo"
    >
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-6 whitespace-nowrap text-sm font-medium" style={{ color: '#C9A876' }}>
            {item}
            <span className="text-base" style={{ color: '#2D5F3F' }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
