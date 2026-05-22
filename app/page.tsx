import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import TrustTicker from '@/components/TrustTicker';
import ScrollReveal from '@/components/ScrollReveal';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Holder Raket Padel 3D Print Premium | 3Dulo',
  description: '3Dulo — raket holder padel dan badminton buatan Indonesia. 3D printed, bisa dikustomisasi, mulai Rp 15.000. Wall mount, desk stand, dan aksesori untuk setup yang serius.',
  alternates: { canonical: 'https://3dulo.id' },
};

const faqData = [
  {
    question: 'Berapa lama proses produksi holder raket padel 3Dulo?',
    answer: 'Semua produk 3Dulo diproduksi dalam 5-7 hari kerja setelah pembayaran dikonfirmasi. Karena setiap produk dicetak custom sesuai warna pesananmu, waktu ini diperlukan untuk memastikan kualitas terbaik.',
  },
  {
    question: 'Apakah holder 3Dulo kuat untuk raket padel yang berat?',
    answer: 'Ya, sangat kuat. Kami menggunakan material PLA+ premium dengan infill 40-50%, yang mampu menahan beban statis lebih dari 5kg. Raket padel standar beratnya sekitar 350-380g — jauh di bawah kapasitas holder kami.',
  },
  {
    question: 'Bisakah saya request warna custom yang tidak ada di katalog?',
    answer: 'Bisa! Hubungi kami via WhatsApp dengan referensi warna yang kamu mau. Selama filamen warnanya tersedia, kami bisa cetak sesuai permintaanmu.',
  },
  {
    question: 'Ke mana saja 3Dulo bisa kirim produk?',
    answer: 'Kami melayani pengiriman ke seluruh Indonesia melalui berbagai ekspedisi. Ongkos kirim dihitung berdasarkan alamat pengirimanmu dan bisa dikonfirmasi saat pemesanan via WhatsApp.',
  },
  {
    question: 'Apakah ada garansi untuk produk 3Dulo?',
    answer: 'Ada. Kami memberikan garansi 30 hari untuk cacat produksi. Jika produk rusak karena kesalahan dari kami (bukan karena jatuh atau perlakuan tidak semestinya), kami akan replace tanpa biaya tambahan.',
  },
  {
    question: 'Apakah bisa pesan dalam jumlah banyak untuk komunitas atau club padel?',
    answer: 'Tentu! Untuk pembelian 5 unit ke atas, ada harga spesial yang bisa kami diskusikan. Hubungi kami via WhatsApp untuk mendapatkan penawaran terbaik.',
  },
];

const whyUs = [
  {
    icon: '🖨️',
    title: 'Dibuat 3D print, bukan mass-produced.',
    desc: 'Setiap produk dicetak satu per satu — bukan dari pabrik massal. Hasilnya: detail yang tajam, finish yang rapi, dan kualitas yang konsisten.',
  },
  {
    icon: '🎨',
    title: 'Pilihan warna yang bisa lo sesuaikan.',
    desc: 'Original atau Special Colors — pilih yang cocok sama setup lo, bukan yang kebetulan ada di toko.',
  },
  {
    icon: '💰',
    title: 'Harga jujur, kualitas nggak murahan.',
    desc: 'Mulai dari Rp 15.000 untuk aksesori sampai Rp 600.000 untuk Desk Stand Legacy kami. Setiap rupiah ada ujudnya.',
  },
];

const steps = [
  { step: '01', title: 'Design', desc: 'Desain digital yang dioptimasi khusus untuk raket padel Indonesia.' },
  { step: '02', title: 'Print', desc: 'Dicetak lapis per lapis menggunakan material PLA+ atau PETG premium.' },
  { step: '03', title: 'Finish', desc: 'Finishing manual, quality check, dan packaging yang aman.' },
  { step: '04', title: 'Ship', desc: 'Dikemas rapi dan dikirim ke seluruh Indonesia dalam 1-2 hari.' },
];

export default function HomePage() {
  const allProducts = products.slice(0, 6);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative px-4 sm:px-6 py-20 sm:py-28 text-center" style={{ backgroundColor: '#F5EFE0' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#8B5E3C' }}>
            3D Printed • Buatan Indonesia
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>
            Your raket holds your game.<br />
            <span style={{ color: '#2D5F3F' }}>Hold it right.</span>
          </h1>
          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#8B5E3C' }}>
            3Dulo makes 3D-printed raket holders for padel and badminton players
            who care about their setup as much as their game.
            Made in Indonesia. Built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/produk"
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#2D5F3F', color: '#F5EFE0' }}
            >
              Lihat Produk →
            </Link>
            <WhatsAppButton size="lg" label="💬 Pesan Sekarang" />
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <div className="text-center py-5 px-4" style={{ backgroundColor: '#1A1A1A' }}>
        <p className="text-sm italic" style={{ color: '#C9A876' }}>
          Built for players who treat their gear like their game — seriously.
        </p>
      </div>

      {/* TRUST TICKER */}
      <TrustTicker />

      {/* CATEGORY INTRO */}
      <section className="px-4 sm:px-6 py-12" style={{ backgroundColor: '#F5EFE0' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: 'Wall Mounts', tagline: 'Off the floor. On the wall. Always ready.', from: 'Dari Rp 45.000' },
            { label: 'Desk Stands', tagline: 'Upright. Displayed. Protected.', from: 'Dari Rp 199.000' },
            { label: 'Aksesori', tagline: 'Small upgrades. Real difference.', from: 'Dari Rp 15.000' },
          ].map((cat) => (
            <div key={cat.label} className="p-6 rounded-lg border-2" style={{ borderColor: '#C9A876' }}>
              <h3 className="text-lg font-extrabold mb-2" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>{cat.label}</h3>
              <p className="text-sm mb-3" style={{ color: '#8B5E3C' }}>{cat.tagline}</p>
              <p className="text-sm font-semibold" style={{ color: '#2D5F3F' }}>{cat.from}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#8B5E3C' }}>Produk Unggulan</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>
                Gear that shows up before you do.
              </h2>
              <div className="mt-3 mx-auto w-16 h-1 rounded" style={{ backgroundColor: '#8B5E3C' }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 80}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link
                href="/produk"
                className="inline-block px-8 py-3 rounded-lg font-semibold border-2 transition-opacity hover:opacity-70"
                style={{ borderColor: '#1A1A1A', color: '#1A1A1A' }}
              >
                Lihat Semua Produk
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-4 sm:px-6 py-16 sm:py-20" style={{ backgroundColor: '#fff8ee' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>
                Kenapa 3Dulo?
              </h2>
              <div className="mt-3 mx-auto w-16 h-1 rounded" style={{ backgroundColor: '#2D5F3F' }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="p-8 rounded-lg border-2 text-center" style={{ borderColor: '#8B5E3C', backgroundColor: '#F5EFE0' }}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8B5E3C' }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#8B5E3C' }}>Proses</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>
                Dari Desain ke Tangan Kamu
              </h2>
              <div className="mt-3 mx-auto w-16 h-1 rounded" style={{ backgroundColor: '#C9A876' }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 120}>
                <div className="relative">
                  <div className="text-5xl font-bold mb-4" style={{ color: '#C9A876', fontFamily: 'JetBrains Mono, monospace' }}>
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8B5E3C' }}>{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 text-2xl" style={{ color: '#C9A876' }}>→</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-4 sm:px-6 py-16 sm:py-20" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#C9A876' }}>Komunitas</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#F5EFE0' }}>
            Dari lapangan ke dinding rumah.
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#8B5E3C' }}>
            Ribuan padel players di Indonesia udah ngerasain bedanya punya tempat yang proper buat raket mereka.
          </p>
          <blockquote className="max-w-2xl mx-auto p-6 rounded-lg mb-8 text-left border-l-4" style={{ backgroundColor: '#2a2a2a', borderColor: '#2D5F3F', color: '#F5EFE0' }}>
            <p className="text-base italic mb-3">
              "Holder-nya kuat banget, sudah 3 bulan dipasang tidak ada goyang sama sekali. Warna custom-nya juga persis yang saya minta. Pengiriman cepat, packaging aman. Recommended banget buat teman-teman padel!"
            </p>
            <footer className="text-sm" style={{ color: '#C9A876' }}>— Rudi A., Jakarta Selatan ⭐⭐⭐⭐⭐</footer>
          </blockquote>
          <a href="https://instagram.com/3dulo.id" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg font-semibold border-2 transition-opacity hover:opacity-70 text-sm"
            style={{ borderColor: '#C9A876', color: '#C9A876' }}>
            Tag @3dulo.id di Instagram →
          </a>
        </div>
      </section>

      {/* CUSTOM BUILD CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 text-center" style={{ backgroundColor: '#2D5F3F' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#F5EFE0' }}>
            Punya brand, toko, atau lapangan padel?
          </h2>
          <p className="text-base mb-8 leading-relaxed" style={{ color: '#C9A876' }}>
            3Dulo nerima custom build untuk brand, toko, dan lapangan padel.<br />
            Logo lo. Warna lo. Design lo. Kita yang cetak.
          </p>
          <WhatsAppButton size="lg" label="Hubungi Kami →" />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 py-16 sm:py-24" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}>
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded" style={{ backgroundColor: '#8B5E3C' }} />
          </div>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="group rounded-lg border-2 overflow-hidden" style={{ borderColor: '#8B5E3C' }}>
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-sm sm:text-base" style={{ backgroundColor: '#F5EFE0', color: '#1A1A1A' }}>
                  <span>{faq.question}</span>
                  <span className="ml-4 text-xl flex-shrink-0" style={{ color: '#2D5F3F' }}>+</span>
                </summary>
                <div className="px-5 pb-5 pt-2 text-sm leading-relaxed" style={{ backgroundColor: '#fff8ee', color: '#8B5E3C' }}>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 text-center" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#F5EFE0' }}>
            Raket lo layak tempat yang proper.
          </h2>
          <p className="mb-8 text-base" style={{ color: '#8B5E3C' }}>
            Senin–Sabtu, 09.00–21.00 WIB. Biasanya kami balas dalam 15 menit.
          </p>
          <WhatsAppButton size="lg" label="Mulai Chat di WhatsApp →" />
        </div>
      </section>
    </>
  );
}
