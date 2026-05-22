// lib/products.ts — 3Dulo Full Catalog
// Matches the component API used by ProductCard, ProductDetailClient, ProdukClient

export type ColorOption = {
  name: string;
  hex: string;
  tier: 'original' | 'special';
};

export type ProductCategory = 'wall-mount' | 'desk-stand' | 'aksesori';

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: ProductCategory;
  price: number;           // display price (original color)
  originalPrice?: number;  // if discounted, the crossed-out price
  priceSpecial: number;    // special color upcharge price
  thumbnail: string;       // main image path
  images: string[];        // all images
  colors: ColorOption[];
  badge?: string;
  marketplaceRating: number;
  marketplaceSold: string;
  leadTime: string;
  bonus: string[];
  specs: {
    material: string;
    dimensions: string;
    weight: string;
    compatibility: string;
  };
  featured: boolean;
};

// ─── COLOR SYSTEM ────────────────────────────────────────────────────────────

const ORIGINAL_COLORS: ColorOption[] = [
  { name: 'Black Glossy', hex: '#0A0A0A', tier: 'original' },
  { name: 'Black Doff',   hex: '#1C1C1C', tier: 'original' },
  { name: 'Light Grey',   hex: '#D4D4D4', tier: 'original' },
  { name: 'White',        hex: '#FFFFFF', tier: 'original' },
  { name: 'Beige',        hex: '#F5F0DC', tier: 'original' },
  { name: 'Pink',         hex: '#F4A7C3', tier: 'original' },
  { name: 'Coral Pink',   hex: '#FF3B6B', tier: 'original' },
];

const SPECIAL_COLORS: ColorOption[] = [
  { name: 'Wood',         hex: '#C4B08A', tier: 'special' },
  { name: 'Black Purple', hex: '#3B1A5A', tier: 'special' },
  { name: 'Marble',       hex: '#E8E8E8', tier: 'special' },
  { name: 'Copper',       hex: '#8B3A0F', tier: 'special' },
];

const ALL_COLORS = [...ORIGINAL_COLORS, ...SPECIAL_COLORS];

// ─── SHARED BONUS ITEMS ──────────────────────────────────────────────────────

const WALL_MOUNT_BONUS = [
  'Gorilla double tape',
  'Baut baja (steel screws)',
  'Side foam pelindung raket',
];

const DESK_STAND_BONUS_5 = [
  'Rubber feet 5 titik anti-slip',
  'Side foam pelindung raket',
];

const DESK_STAND_BONUS_4 = [
  'Rubber feet 4 titik anti-slip',
  'Side foam pelindung raket',
];

// ─── PRODUCTS ────────────────────────────────────────────────────────────────

export const products: Product[] = [

  // ── 1. WALL MOUNT V1 (PLAIN) ─────────────────────────────────────────────
  {
    slug: 'wall-mount-v1-plain',
    name: 'Wall Mount V1 — Plain',
    tagline: 'Your raket deserves better than the floor.',
    shortDescription:
      'Wall mount entry-level 3Dulo. Clean, minimalis, dan cukup kuat untuk semua raket padel dan badminton. Termasuk gorilla tape dan baut baja.',
    fullDescription:
      `Wall Mount V1 Plain adalah produk yang memulai segalanya.\n\nDesain clean tanpa texture — untuk player yang lebih suka tampilan minimalis. Pas di semua dinding, aman untuk semua jenis raket padel maupun badminton.\n\nTermasuk gorilla double tape dan baut baja agar mount-nya nempel permanen dan nggak goyang. Side foam melindungi handle raket dari goresan.\n\nTiga opsi pemasangan: Double Tape + Baut, Pegboard, atau Fence — sesuaikan sama setup dinding lo.`,
    category: 'wall-mount',
    price: 45000,
    priceSpecial: 65000,
    thumbnail: '/images/products/wall-mount-v1/1.jpg',
    images: [
      '/images/products/wall-mount-v1/1.jpg',
      '/images/products/wall-mount-v1/2.jpg',
    ],
    colors: ALL_COLORS,
    badge: undefined,
    marketplaceRating: 4.9,
    marketplaceSold: '200+ terjual',
    leadTime: '5–7 hari kerja',
    bonus: WALL_MOUNT_BONUS,
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Standar — fit semua raket padel dan badminton',
      weight: '~80g',
      compatibility: 'Semua raket padel dan badminton',
    },
    featured: false,
  },

  // ── 2. WALL MOUNT V1 (SEMI CONTOUR) ─────────────────────────────────────
  {
    slug: 'wall-mount-v1-semi-contour',
    name: 'Wall Mount V1 — Semi Contour',
    tagline: 'Sedikit texture. Banyak karakter.',
    shortDescription:
      'V1 dengan semi-contour texture di permukaannya. Lebih berkarakter dari Plain, lebih subtle dari Contour penuh. Pilihan tengah yang sempurna.',
    fullDescription:
      `Wall Mount V1 Semi Contour mengambil frame solid V1 dan menambahkan texture grip di setengah permukaannya.\n\nHasilnya: tampilan yang lebih premium dari Plain, tapi nggak seramai Full Contour. Untuk player yang mau sedikit personality tanpa terlalu bold.\n\nSame durability, same mounting options, same 3Dulo quality — hanya tampilannya yang beda.`,
    category: 'wall-mount',
    price: 55000,
    priceSpecial: 65000,
    thumbnail: '/images/products/wall-mount-v1/2.jpg',
    images: [
      '/images/products/wall-mount-v1/2.jpg',
      '/images/products/wall-mount-v1/1.jpg',
    ],
    colors: ALL_COLORS,
    badge: undefined,
    marketplaceRating: 4.9,
    marketplaceSold: '150+ terjual',
    leadTime: '5–7 hari kerja',
    bonus: WALL_MOUNT_BONUS,
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Standar — fit semua raket padel dan badminton',
      weight: '~85g',
      compatibility: 'Semua raket padel dan badminton',
    },
    featured: false,
  },

  // ── 3. WALL MOUNT V1 (CONTOUR) ───────────────────────────────────────────
  {
    slug: 'wall-mount-v1-contour',
    name: 'Wall Mount V1 — Contour',
    tagline: 'Maximum grip. Maximum look.',
    shortDescription:
      'Full contour texture di seluruh permukaan. Paling banyak detail, paling premium tampilannya. Best seller di lini V1.',
    fullDescription:
      `Wall Mount V1 Contour adalah versi paling premium dari lini V1 — full texture di seluruh permukaan mount.\n\nBuat player yang ingin wall mount-nya jadi statement piece, bukan cuma tempat gantung raket. Texture-nya catchlight lebih baik, terlihat lebih premium dari jarak jauh, dan terasa lebih solid saat dipegang.\n\nSama kuatnya dengan V1 lainnya. Lebih banyak karakter.`,
    category: 'wall-mount',
    price: 70000,
    priceSpecial: 90000,
    thumbnail: '/images/products/wall-mount-v1/3.jpg',
    images: [
      '/images/products/wall-mount-v1/3.jpg',
      '/images/products/wall-mount-v1/4.jpg',
    ],
    colors: ALL_COLORS,
    badge: 'Bestseller',
    marketplaceRating: 5.0,
    marketplaceSold: '300+ terjual',
    leadTime: '5–7 hari kerja',
    bonus: WALL_MOUNT_BONUS,
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Standar — fit semua raket padel dan badminton',
      weight: '~90g',
      compatibility: 'Semua raket padel dan badminton',
    },
    featured: true,
  },

  // ── 4. WALL MOUNT LARGE WAVE ─────────────────────────────────────────────
  {
    slug: 'wall-mount-large-wave',
    name: 'Wall Mount Large Wave',
    tagline: 'Lebih lebar. Lebih bold.',
    shortDescription:
      'Wall mount terlebar dari 3Dulo dengan wave texture signature. Untuk raket oversized dan player yang mau display yang bold di dinding.',
    fullDescription:
      `Wall Mount Large Wave adalah wall mount terlebar di lineup 3Dulo — dirancang khusus untuk raket padel berukuran besar dan player yang mau tampilannya beda.\n\nWave texture yang terukir di seluruh permukaannya menangkap cahaya dari berbagai sudut, membuat mount ini terlihat hidup bahkan dari ujung ruangan.\n\nPasang di ketinggian mata untuk display, atau di dekat pintu untuk grab-and-go. Dua-duanya kerja.`,
    category: 'wall-mount',
    price: 70000,
    priceSpecial: 90000,
    thumbnail: '/images/products/large-edition-padel/1.jpg',
    images: [
      '/images/products/large-edition-padel/1.jpg',
      '/images/products/large-edition-padel/2.jpg',
    ],
    colors: ALL_COLORS,
    badge: 'New',
    marketplaceRating: 4.9,
    marketplaceSold: '80+ terjual',
    leadTime: '5–7 hari kerja',
    bonus: WALL_MOUNT_BONUS,
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Large — lebih lebar dari V1 standar',
      weight: '~110g',
      compatibility: 'Semua raket padel, termasuk oversized',
    },
    featured: true,
  },

  // ── 5. WALL MOUNT V3 ─────────────────────────────────────────────────────
  {
    slug: 'wall-mount-v3',
    name: 'Wall Mount V3',
    tagline: 'Generasi ketiga. Tanpa kompromi.',
    shortDescription:
      'Silhouette paling refined dari 3Dulo — profil lebih slim, fit lebih ketat, tampilan lebih clean di dinding.',
    fullDescription:
      `Wall Mount V3 adalah evolusi terbaru dari desain wall mount 3Dulo.\n\nProfil yang lebih slim dan silhouette yang lebih refined menghasilkan tampilan yang lebih premium — less is more. Fit yang lebih ketat ke raket berarti lebih sedikit movement, lebih banyak rasa aman.\n\nKalau V1 adalah standar, V3 adalah upgrade-nya.`,
    category: 'wall-mount',
    price: 55000,
    priceSpecial: 65000,
    thumbnail: '/images/products/wall-mount-v1/3.jpg',
    images: [
      '/images/products/wall-mount-v1/3.jpg',
      '/images/products/wall-mount-v1/4.jpg',
    ],
    colors: ALL_COLORS,
    badge: undefined,
    marketplaceRating: 4.9,
    marketplaceSold: '120+ terjual',
    leadTime: '5–7 hari kerja',
    bonus: WALL_MOUNT_BONUS,
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Slim profile — lebih narrow dari V1',
      weight: '~75g',
      compatibility: 'Semua raket padel dan badminton',
    },
    featured: false,
  },

  // ── 6. WALL MOUNT LARGE ──────────────────────────────────────────────────
  {
    slug: 'wall-mount-large',
    name: 'Wall Mount Large',
    tagline: 'Raket besar. Holder yang pas.',
    shortDescription:
      'Frame yang lebih besar untuk raket oversized. Cradle lebih lebar, hold lebih kuat, mounting tetap mudah.',
    fullDescription:
      `Wall Mount Large hadir untuk player yang raketnya lebih besar dari standar — atau yang mau sedikit ruang lebih di dalam cradle-nya.\n\nFrame yang lebih lebar memberikan support yang lebih merata untuk raket, mengurangi stress point di handle. Cocok juga untuk yang punya raket dengan grip yang lebih tebal.\n\nSame gorilla tape + steel screw combo. Same 3Dulo finish.`,
    category: 'wall-mount',
    price: 60000,
    priceSpecial: 80000,
    thumbnail: '/images/products/large-edition-padel/2.jpg',
    images: [
      '/images/products/large-edition-padel/2.jpg',
      '/images/products/large-edition-padel/1.jpg',
    ],
    colors: ALL_COLORS,
    badge: undefined,
    marketplaceRating: 4.8,
    marketplaceSold: '90+ terjual',
    leadTime: '5–7 hari kerja',
    bonus: WALL_MOUNT_BONUS,
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Large — wider cradle dari V1 standar',
      weight: '~100g',
      compatibility: 'Semua raket padel, termasuk yang oversized',
    },
    featured: false,
  },

  // ── 7. WALL MOUNT BATMAN ─────────────────────────────────────────────────
  {
    slug: 'wall-mount-batman',
    name: 'Wall Mount Batman',
    tagline: 'Raket lo. Identitas lo. Di dinding.',
    shortDescription:
      'Silhouette kelelawar ikonik dengan detail merah signature. Produk yang bikin tamu lo nanya: "Itu beli di mana?"',
    fullDescription:
      `Nggak semua player mau wall mount yang clean dan minimalis. Beberapa mau yang bikin orang berhenti dan nanya.\n\nWall Mount Batman adalah itu.\n\nBat-wing silhouette yang ikonik, detail merah di tengah, dan finishing 3D print yang tajam menjadikan mount ini lebih dari sekadar tempat raket — ini conversation piece.\n\nSama kuatnya dengan V1. Lebih banyak personality.`,
    category: 'wall-mount',
    price: 70000,
    priceSpecial: 90000,
    thumbnail: '/images/products/batman-edition-padel/1.jpg',
    images: [
      '/images/products/batman-edition-padel/1.jpg',
      '/images/products/batman-edition-padel/2.jpg',
    ],
    colors: ALL_COLORS,
    badge: 'Bestseller',
    marketplaceRating: 5.0,
    marketplaceSold: '250+ terjual',
    leadTime: '5–7 hari kerja',
    bonus: WALL_MOUNT_BONUS,
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Bat-wing silhouette — lebih wide dari V1 standar',
      weight: '~95g',
      compatibility: 'Semua raket padel dan badminton',
    },
    featured: true,
  },

  // ── 8. WALL MOUNT HEART ──────────────────────────────────────────────────
  {
    slug: 'wall-mount-heart',
    name: 'Wall Mount Heart',
    tagline: 'Untuk player yang main dengan sepenuh hati.',
    shortDescription:
      'Twin-heart mount dengan finishing Coral Pink signature. Hadiah yang paling personal untuk player padel di hidup lo.',
    fullDescription:
      `Tunjukin rasa sayang ke game lo — dan ke orang-orang yang berbagi lapangan sama lo.\n\nWall Mount Heart adalah desain paling personal dari 3Dulo. Twin-heart silhouette dengan finishing Coral Pink yang bold, atau warna pilihan lo sendiri.\n\nPerfect sebagai hadiah ulang tahun, anniversary, atau "karena gue suka padel dan gue nggak perlu alasan lain."\n\nSama kuatnya. Lebih banyak cinta.`,
    category: 'wall-mount',
    price: 80000,
    priceSpecial: 100000,
    thumbnail: '/images/products/wall-mount-heart/1.jpg',
    images: [
      '/images/products/wall-mount-heart/1.jpg',
      '/images/products/wall-mount-heart/2.jpg',
    ],

    colors: ALL_COLORS,
    badge: 'New',
    marketplaceRating: 5.0,
    marketplaceSold: '60+ terjual',
    leadTime: '5–7 hari kerja',
    bonus: WALL_MOUNT_BONUS,
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Twin-heart frame — fit raket padel standar',
      weight: '~90g',
      compatibility: 'Semua raket padel dan badminton',
    },
    featured: false,
  },

  // ── 9. PADEL DESK STAND ──────────────────────────────────────────────────
  {
    slug: 'padel-desk-stand',
    name: 'Padel Desk Stand',
    tagline: 'Off the wall. On display.',
    shortDescription:
      'Stand freestanding dengan arch modern untuk raket padel. Rubber feet anti-slip, side foam pelindung, dan tampilan yang clean di atas meja atau rak.',
    fullDescription:
      `Nggak semua raket perlu di-mount ke dinding. Padel Desk Stand adalah untuk player yang mau raketnya berdiri — di atas meja, rak, atau bedside table — selalu dalam jangkauan, selalu upright.\n\nArch modern yang clean, rubber feet di 5 titik untuk anti-slip di semua permukaan, dan side foam yang melindungi handle dari goresan.\n\nGratis rubber feet dan side foam sudah termasuk dalam paket. Tinggal unbox, taruh raket, done.`,
    category: 'desk-stand',
    price: 199000,
    priceSpecial: 269000,
    thumbnail: '/images/products/desk-stand-padel/1.jpg',
    images: [
      '/images/products/desk-stand-padel/1.jpg',
      '/images/products/desk-stand-padel/2.jpg',
    ],
    colors: ALL_COLORS,
    badge: 'Bestseller',
    marketplaceRating: 5.0,
    marketplaceSold: '400+ terjual',
    leadTime: '5–7 hari kerja',
    bonus: DESK_STAND_BONUS_5,
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Arch stand — fit semua raket padel standar',
      weight: '~150g',
      compatibility: 'Semua raket padel',
    },
    featured: true,
  },

  // ── 10. DESK STAND LEGACY ────────────────────────────────────────────────
  {
    slug: 'desk-stand-legacy',
    name: 'Desk Stand Legacy',
    tagline: 'Yang satu ini lo simpen selamanya.',
    shortDescription:
      'Flagship desk stand 3Dulo. Wood-tone natural, 4-point base, silhouette yang masuk galeri maupun padel room. Satu harga. Satu tier. No compromise.',
    fullDescription:
      `Desk Stand Legacy adalah produk terbaik yang pernah 3Dulo buat.\n\nStruktur wood-tone natural yang hangat, base 4-titik yang stabil di semua permukaan, dan silhouette yang terlihat sama elegan-nya di meja kerja, rak buku, atau padel room.\n\nRp 600.000. Satu harga untuk Original maupun Special — karena di sini nggak ada kompromi.\n\nUntuk player yang memperlakukan raket mereka seperti investasi. Karena memang itu yang raket padel premium itu.`,
    category: 'desk-stand',
    price: 600000,
    priceSpecial: 600000,
    thumbnail: '/images/products/desk-stand-padel/1.jpg',
    images: [
      '/images/products/desk-stand-padel/1.jpg',
      '/images/products/desk-stand-padel/2.jpg',
    ],
    colors: [
      { name: 'Wood Natural', hex: '#C4B08A', tier: 'original' },
      { name: 'Wood Dark',    hex: '#5C3D1E', tier: 'original' },
    ],
    badge: 'PreOrder',
    marketplaceRating: 5.0,
    marketplaceSold: '40+ terjual',
    leadTime: '7–10 hari kerja',
    bonus: DESK_STAND_BONUS_4,
    specs: {
      material: 'PLA+ Premium dengan wood-tone finish',
      dimensions: 'Full-height stand — cocok untuk display premium',
      weight: '~220g',
      compatibility: 'Semua raket padel',
    },
    featured: true,
  },

  // ── 11. TRIPLE TAKE ──────────────────────────────────────────────────────
  {
    slug: 'triple-take',
    name: 'Triple Take',
    tagline: 'Tiga raket. Satu rumah.',
    shortDescription:
      'Wall mount untuk tiga raket sekaligus. Untuk keluarga, setup latihan, atau kolektor yang serius.',
    fullDescription:
      `Triple Take adalah wall mount terbesar 3Dulo — menampung tiga raket padel sekaligus, wall-mounted dan terstruktur.\n\nTidak ada lagi raket yang bersandar satu sama lain, grip tape yang saling nyangkut, atau raket yang jatuh karena salah satu diambil.\n\nSemua lineup lo, ditampilkan dengan rapi. Untuk rumah tangga yang serius soal padel, setup coaching, atau yang koleksinya sudah lebih dari dua raket.`,
    category: 'wall-mount',
    price: 250000,
    priceSpecial: 320000,
    thumbnail: '/images/products/triple-take-padel/1.jpg',
    images: [
      '/images/products/triple-take-padel/1.jpg',
      '/images/products/triple-take-padel/2.jpg',
    ],
    colors: ALL_COLORS,
    badge: 'New',
    marketplaceRating: 4.9,
    marketplaceSold: '55+ terjual',
    leadTime: '7–10 hari kerja',
    bonus: [
      'Gorilla double tape (extra kuat)',
      'Baut baja 6 titik',
      'Side foam untuk 3 raket',
    ],
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Triple-slot — menampung 3 raket padel standar',
      weight: '~250g',
      compatibility: 'Semua raket padel',
    },
    featured: true,
  },

  // ── 12. METALBONE 3.3 BOLT CASE ──────────────────────────────────────────
  {
    slug: 'metalbone-3-3-bolt-case',
    name: 'Metalbone 3.3 Bolt Case',
    tagline: 'Setiap bolt punya tempatnya sekarang.',
    shortDescription:
      'Custom bolt case untuk pemilik Adidas Metalbone 3.3. Simpan replacement bolt dengan rapi dan aman — tidak ada lagi hardware yang hilang di tas.',
    fullDescription:
      `Kalau lo punya Adidas Metalbone 3.3, lo tau betapa pentingnya bolt replacement-nya.\n\nMetalbone 3.3 Bolt Case dibuat khusus untuk dimensi dan jumlah bolt yang tepat dari raket ini — bukan case generik yang kebesaran atau kekecilan.\n\nRp 60.000. Harga yang sama untuk semua warna — karena produk ini soal fungsi, bukan fashion.`,
    category: 'aksesori',
    price: 60000,
    priceSpecial: 60000,
    thumbnail: '/images/products/net-phone-holder/1.jpg',
    images: [
      '/images/products/net-phone-holder/1.jpg',
    ],
    colors: [
      { name: 'Gold', hex: '#C9A876', tier: 'original' },
      { name: 'Black Doff', hex: '#1C1C1C', tier: 'original' },
    ],
    badge: undefined,
    marketplaceRating: 4.9,
    marketplaceSold: '30+ terjual',
    leadTime: '3–5 hari kerja',
    bonus: [],
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Custom fit untuk Adidas Metalbone 3.3 bolt set',
      weight: '~30g',
      compatibility: 'Adidas Metalbone 3.3',
    },
    featured: false,
  },

  // ── 13. STRAP ADJUSTER ROUND ─────────────────────────────────────────────
  {
    slug: 'strap-adjuster-round',
    name: 'Strap Adjuster Round',
    tagline: 'Upgrade kecil. Perbedaan besar.',
    shortDescription:
      'Kunci tension strap raket lo di posisi yang tepat. Tidak ada lagi strap yang slip mid-game. Rp 15.000.',
    fullDescription:
      `Hal kecil yang bikin lo fokus ke game, bukan ke strap.\n\nStrap Adjuster Round mengunci strap raket lo di tension yang lo set — tidak slip, tidak perlu diikat ulang setiap sesi.\n\nRp 15.000. Upgrade paling affordable di tas padel lo.`,
    category: 'aksesori',
    price: 15000,
    priceSpecial: 15000,
    thumbnail: '/images/products/net-phone-holder/2.jpg',
    images: [
      '/images/products/net-phone-holder/2.jpg',
    ],
    colors: [
      { name: 'Black Glossy', hex: '#0A0A0A', tier: 'original' },
      { name: 'Black Doff',   hex: '#1C1C1C', tier: 'original' },
    ],
    badge: undefined,
    marketplaceRating: 4.8,
    marketplaceSold: '180+ terjual',
    leadTime: '3–5 hari kerja',
    bonus: [],
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Round clip — universal fit',
      weight: '~5g',
      compatibility: 'Semua raket dengan strap standar',
    },
    featured: false,
  },

  // ── 14. STRAP ADJUSTER ADIDAS ────────────────────────────────────────────
  {
    slug: 'strap-adjuster-adidas',
    name: 'Strap Adjuster Adidas',
    tagline: 'Dibuat untuk three stripes. Diatur buat grip lo.',
    shortDescription:
      'Versi Strap Adjuster yang di-custom untuk profil strap raket Adidas. Kalau lo main pakai Adidas, ini yang lo butuh.',
    fullDescription:
      `Same konsep, different fit.\n\nStrap Adjuster Adidas dibentuk khusus untuk profil strap raket-raket Adidas — sedikit lebih wide, sedikit lebih snug.\n\nRp 15.000. Kalau lo running Adidas, ini yang paling tepat.`,
    category: 'aksesori',
    price: 15000,
    priceSpecial: 15000,
    thumbnail: '/images/products/net-phone-holder/1.jpg',
    images: [
      '/images/products/net-phone-holder/1.jpg',
    ],
    colors: [
      { name: 'Black Doff', hex: '#1C1C1C', tier: 'original' },
    ],
    badge: undefined,
    marketplaceRating: 4.8,
    marketplaceSold: '120+ terjual',
    leadTime: '3–5 hari kerja',
    bonus: [],
    specs: {
      material: 'PLA+ Premium',
      dimensions: 'Custom untuk Adidas strap profile',
      weight: '~5g',
      compatibility: 'Raket Adidas dengan strap standar',
    },
    featured: false,
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(cat: ProductCategory): Product[] {
  return products.filter((p) => p.category === cat);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, count);
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, count);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  'wall-mount': 'Wall Mount',
  'desk-stand': 'Desk Stand',
  'aksesori': 'Aksesori',
};