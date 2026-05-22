export type Product = {
  slug: string;
  name: string;
  category: 'padel' | 'badminton' | 'aksesori';
  price: number;
  originalPrice?: number;
  priceDisplay: 'show' | 'inquire';
  shortDescription: string;
  fullDescription: string;
  leadTime: string;
  colors: { name: string; hex: string }[];
  bonus: string[];
  specs: {
    material: string;
    dimensions: string;
    weight: string;
    compatibility: string;
  };
  images: string[];
  thumbnail: string;
  marketplaceRating: number;
  marketplaceSold: string;
  featured: boolean;
  badge?: 'PreOrder' | 'Bestseller' | 'New' | 'Diskon';
};

export const products: Product[] = [
  // ─── WALL MOUNT V1 ───────────────────────────────────────────────────────────
  {
    slug: 'wall-mount-v1',
    name: 'Wall Mount V1 — Holder Raket Padel',
    category: 'padel',
    price: 45000,
    priceDisplay: 'show',
    shortDescription: 'Wall mount minimalis untuk satu raket padel. Off the floor, on the wall — always ready.',
    fullDescription: `Raket padel lo terlalu bagus buat disandarin di pojok ruangan.

Wall Mount V1 ngasih tempatnya yang proper: rapi di dinding, selalu siap diambil, dan bikin ruangan lo keliatan beres. Desainnya minimalis dan low-profile — nempel di dinding tapi nggak minta perhatian lebih dari yang diperlukan.

Dicetak dari PLA+ premium dengan infill 40%. Dipasang pakai dua sekrup — bor dua lubang, kencangkan, selesai. Semua aksesori pemasangan sudah termasuk dalam paket.

**Tersedia dalam dua tier warna:**
- Original Colors (Rp 45.000): Hitam, Putih, Natural
- Special Colors (Rp 65.000): Marble, Wood, Copper, dan warna custom lainnya`,
    leadTime: '5-7 hari kerja',
    colors: [
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Natural', hex: '#E8D5B0' },
      { name: 'Marble', hex: '#D4D0C8' },
      { name: 'Copper', hex: '#B87333' },
    ],
    bonus: ['Double Tape', 'Sekrup Dinding', 'Foam Pelindung'],
    specs: {
      material: 'PLA+',
      dimensions: '22×10×7 cm',
      weight: '150g',
      compatibility: 'Semua raket padel standar',
    },
    images: [
      '/images/products/wall-mount-v1/1.jpg',
      '/images/products/wall-mount-v1/2.jpg',
      '/images/products/wall-mount-v1/3.jpg',
      '/images/products/wall-mount-v1/4.jpg',
    ],
    thumbnail: '/images/products/wall-mount-v1/1.jpg',
    marketplaceRating: 5.0,
    marketplaceSold: '1rb+',
    featured: true,
    badge: 'Bestseller',
  },

  // ─── DESK STAND PADEL ────────────────────────────────────────────────────────
  {
    slug: 'desk-stand-padel',
    name: 'Padel Desk Stand',
    category: 'padel',
    price: 199000,
    priceDisplay: 'show',
    shortDescription: 'Stand meja untuk raket padel — nggak perlu bor dinding, tetap keliatan premium.',
    fullDescription: `Tinggal di apartemen? Nggak mau bikin lubang di dinding? Padel Desk Stand adalah jawabannya.

Base yang lebar dan berat bikin stand ini stabil di permukaan datar manapun — meja, rak, lantai, atau sudut ruangan. Rubber feet di bagian bawah anti-slip dan nggak merusak permukaan.

Ini bukan sekadar tempat naruh raket. Ini statement piece. Taruh di ruang tamu, kamar, atau studio padel lo — dan raket lo jadi display yang layak dilihat.

**Tersedia dalam dua tier warna:**
- Original Colors (Rp 199.000): Hitam, Putih, Natural
- Special Colors (Rp 269.000): Marble, Wood, Copper, dan warna custom lainnya`,
    leadTime: '5-7 hari kerja',
    colors: [
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Natural', hex: '#E8D5B0' },
      { name: 'Marble', hex: '#D4D0C8' },
    ],
    bonus: ['Rubber Feet', 'Foam Pelindung'],
    specs: {
      material: 'PLA+',
      dimensions: '20×15×30 cm',
      weight: '320g',
      compatibility: 'Raket padel & tenis',
    },
    images: [
      '/images/products/desk-stand-padel/1.jpg',
      '/images/products/desk-stand-padel/2.jpg',
    ],
    thumbnail: '/images/products/desk-stand-padel/1.jpg',
    marketplaceRating: 5.0,
    marketplaceSold: '100+',
    featured: true,
    badge: 'New',
  },

  // ─── LARGE EDITION (TRILOGY) ─────────────────────────────────────────────────
  {
    slug: 'large-edition-padel',
    name: 'Large Edition — Wall Mount 3 Raket',
    category: 'padel',
    price: 60000,
    priceDisplay: 'show',
    shortDescription: 'Display dinding 3 slot untuk koleksi raket padel lo. Pajang semuanya sekaligus.',
    fullDescription: `Punya lebih dari satu raket? Pajang semuanya dengan cara yang layak.

Large Edition hadir dengan 3 slot berjejer — cukup untuk padukan koleksi raket lo, simpan raket cadangan, atau pamer setup ke tamu yang datang. Panjang 80cm, ketiga raket berdampingan rapi seperti galeri mini.

PLA+ dengan infill tinggi di setiap slot memastikan tiga raket sekaligus tersandang dengan aman. Mounting pakai sekrup baja galvanis — dipasang sekali, bertahan lama.

**Tersedia dalam dua tier warna:**
- Original Colors (Rp 60.000): Hitam, Putih, Natural
- Special Colors (Rp 80.000): Marble, Wood, Copper, dan warna custom lainnya`,
    leadTime: '5-7 hari kerja',
    colors: [
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Natural', hex: '#E8D5B0' },
      { name: 'Walnut', hex: '#8B5E3C' },
    ],
    bonus: ['Side Foam', 'Gorilla Tape', 'Sekrup Dinding Baja'],
    specs: {
      material: 'PLA+',
      dimensions: '80×12×8 cm (3-slot)',
      weight: '480g',
      compatibility: 'Semua raket padel',
    },
    images: [
      '/images/products/large-edition-padel/1.jpg',
      '/images/products/large-edition-padel/2.jpg',
    ],
    thumbnail: '/images/products/large-edition-padel/1.jpg',
    marketplaceRating: 5.0,
    marketplaceSold: '90+',
    featured: true,
    badge: 'PreOrder',
  },

  // ─── TRIPLE TAKE ─────────────────────────────────────────────────────────────
  {
    slug: 'triple-take-padel',
    name: 'Triple Take Display — 3 Raket Premium',
    category: 'padel',
    price: 250000,
    priceDisplay: 'show',
    shortDescription: 'Display 3 raket dengan sudut yang lebih dramatis. Untuk koleksi padel yang serius.',
    fullDescription: `Triple Take bukan sekadar holder — ini adalah puncak dari lineup 3Dulo.

Dirancang ulang dari ground up, Triple Take menghadirkan sudut display yang lebih dinamis. Setiap raket ditampilkan pada angle yang sedikit berbeda, menciptakan efek visual yang gallery-like dan lebih menarik dari wall mount biasa.

PLA+ Premium dengan infill 50% — ini adalah holder terkuat di lineup 3Dulo. Mounting pakai sekrup baja 6mm yang ditanam lebih dalam ke dinding. Tiga raket premium sekalipun aman tersandang.

**Tersedia dalam dua tier warna:**
- Original Colors (Rp 250.000): Hitam, Putih, Natural
- Special Colors (Rp 320.000): Marble, Wood, Copper, dan warna custom lainnya`,
    leadTime: '5-7 hari kerja',
    colors: [
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hijau', hex: '#2D5F3F' },
      { name: 'Marble', hex: '#D4D0C8' },
    ],
    bonus: ['Foam Pelindung', 'Sekrup Dinding Baja'],
    specs: {
      material: 'PLA+ Premium',
      dimensions: '60×18×10 cm',
      weight: '560g',
      compatibility: 'Raket padel premium',
    },
    images: [
      '/images/products/triple-take-padel/1.jpg',
      '/images/products/triple-take-padel/2.jpg',
      '/images/products/triple-take-padel/3.jpg',
    ],
    thumbnail: '/images/products/triple-take-padel/1.jpg',
    marketplaceRating: 5.0,
    marketplaceSold: '24+',
    featured: false,
    badge: 'PreOrder',
  },

  // ─── BATMAN EDITION ──────────────────────────────────────────────────────────
  {
    slug: 'batman-edition-padel',
    name: 'Batman Edition — Wall Mount Raket Padel',
    category: 'padel',
    price: 70000,
    priceDisplay: 'show',
    shortDescription: 'Holder raket padel edisi Batman. Bukan stiker, bukan print — memang begitu bentuknya.',
    fullDescription: `Siapa bilang holder raket harus boring?

Batman Edition hadir untuk lo yang punya selera dan nggak takut tampil beda. Silhouette logo Batman terbentuk dari desain holder itu sendiri — bukan stiker, bukan print on surface, tapi memang begitu bentuk printnya. Ketika raket dimasukkan, efek visual yang muncul adalah raket yang "melayang" di tengah sayap Batman.

Tetap fungsional, tetap kuat, tetap aman. Tapi jauh lebih fun dari holder biasa. Jadi percakapan setiap kali tamu datang.

**Tersedia dalam dua tier warna:**
- Original Colors (Rp 70.000): Hitam, Kuning, Abu-abu
- Special Colors (Rp 90.000): Marble, Copper, dan warna custom lainnya`,
    leadTime: '5-7 hari kerja',
    colors: [
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Kuning', hex: '#C9A876' },
      { name: 'Abu-abu', hex: '#6B7280' },
      { name: 'Copper', hex: '#B87333' },
    ],
    bonus: ['Foam Pelindung', 'Double Tape'],
    specs: {
      material: 'PLA+',
      dimensions: '28×14×10 cm',
      weight: '220g',
      compatibility: 'Semua raket padel',
    },
    images: [
      '/images/products/batman-edition-padel/1.jpg',
      '/images/products/batman-edition-padel/2.jpg',
    ],
    thumbnail: '/images/products/batman-edition-padel/1.jpg',
    marketplaceRating: 5.0,
    marketplaceSold: '23+',
    featured: false,
    badge: 'PreOrder',
  },

  // ─── WALL MOUNT HEART ────────────────────────────────────────────────────────
  {
    slug: 'wall-mount-heart',
    name: 'Wall Mount Heart — Holder Raket Padel',
    category: 'padel',
    price: 80000,
    priceDisplay: 'show',
    shortDescription: 'Wall mount berbentuk hati untuk raket padel. Hadiah yang nggak biasa untuk padel lover.',
    fullDescription: `Buat padel lover sejati — atau buat yang mau ngasih hadiah ke padel lover.

Wall Mount Heart punya silhouette hati yang terbentuk dari desain holder itu sendiri. Fungsional seperti wall mount biasa, tapi dengan sentuhan yang personal dan unik. Cocok banget sebagai hadiah ulang tahun, anniversary, atau "just because" buat pasangan yang suka padel.

Dicetak dari PLA+ premium, sama kuatnya dengan seri wall mount lain dari 3Dulo.

**Tersedia dalam dua tier warna:**
- Original Colors (Rp 80.000): Hitam, Putih, Merah Muda
- Special Colors (Rp 100.000): Marble, Copper, dan warna custom lainnya`,
    leadTime: '5-7 hari kerja',
    colors: [
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Merah Muda', hex: '#F4A7B9' },
      { name: 'Copper', hex: '#B87333' },
    ],
    bonus: ['Double Tape', 'Sekrup Dinding'],
    specs: {
      material: 'PLA+',
      dimensions: '25×12×8 cm',
      weight: '170g',
      compatibility: 'Semua raket padel',
    },
    images: [
      '/images/products/wall-mount-heart/1.jpg',
      '/images/products/wall-mount-heart/2.jpg',
    ],
    thumbnail: '/images/products/wall-mount-heart/1.jpg',
    marketplaceRating: 5.0,
    marketplaceSold: '15+',
    featured: false,
    badge: 'New',
  },

  // ─── NET PHONE HOLDER ────────────────────────────────────────────────────────
  {
    slug: 'net-phone-holder',
    name: 'Net Phone Holder — Badminton / Padel / Tenis',
    category: 'badminton',
    price: 190950,
    originalPrice: 285000,
    priceDisplay: 'show',
    shortDescription: 'Holder HP di net untuk rekam permainan dari sudut paling cinematic.',
    fullDescription: `Rekam momen terbaik permainanmu tanpa ribet setup tripod.

Net Phone Holder dipasang langsung di net badminton, padel, atau tenis. Sudut rekaman dari tengah lapangan — lebih cinematic dari angle manapun. Konten Instagram dan TikTok lo langsung naik level.

Material PETG lebih fleksibel dari PLA — nggak retak saat net bergerak atau kena benturan. Clamp-nya fit di net dengan diameter tali 2-5mm (paling umum di lapangan Indonesia). Adjustable grip bisa buka sampai 9cm — muat hampir semua smartphone termasuk yang pakai case tebal.

**Harga sudah diskon dari Rp 285.000 → Rp 190.950**`,
    leadTime: '5-7 hari kerja',
    colors: [
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Biru', hex: '#3B82F6' },
    ],
    bonus: ['Pelindung Silikon', 'Kabel Ties'],
    specs: {
      material: 'PETG',
      dimensions: '15×8×5 cm',
      weight: '95g',
      compatibility: 'Net badminton, padel, tenis',
    },
    images: [
      '/images/products/net-phone-holder/1.jpg',
      '/images/products/net-phone-holder/2.jpg',
    ],
    thumbnail: '/images/products/net-phone-holder/1.jpg',
    marketplaceRating: 5.0,
    marketplaceSold: '6+',
    featured: false,
    badge: 'Diskon',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(currentSlug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, count);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
