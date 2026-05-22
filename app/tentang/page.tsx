import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Tentang 3Dulo — Maker di Balik Aksesoris Padel Premium',
  description: '3Dulo dibuat oleh player padel Jakarta untuk player padel Indonesia. Produk 3D print berkualitas untuk setup raket yang serius.',
  alternates: { canonical: 'https://3dulo.id/tentang' },
};

const values = [
  {
    title: 'Presisi di atas segalanya.',
    desc: 'Setiap produk 3Dulo dicetak dengan toleransi yang ketat. Bukan soal perfeksionisme — tapi soal rasa aman waktu lo tau raket lo nggak bakal jatuh jam 2 pagi.',
  },
  {
    title: 'Kustomisasi itu hak, bukan privilege.',
    desc: 'Lo bisa pilih warna lo sendiri — dari Black Glossy sampai Marble dan Copper. Setup lo harus reflect lo, bukan stok yang kebetulan ada.',
  },
  {
    title: 'Komunitas padel Indonesia itu penting.',
    desc: 'Kita bukan brand besar yang nganggep padel cuma tren. Kita player. Kita paham budayanya. Dan kita bangun ini untuk komunitas itu.',
  },
];

const processSteps = [
  {
    phase: 'Design',
    desc: 'Setiap produk dimulai dari observasi lapangan — mengukur raket padel yang sebenarnya, memahami bagaimana holder dipasang, dan mendesain di software 3D.',
  },
  {
    phase: 'Material Selection',
    desc: 'Kami pilih PLA+ dan PETG untuk alasan spesifik: kekuatan yang cukup, tidak getas, dan aman untuk penggunaan indoor jangka panjang.',
  },
  {
    phase: 'Printing & QC',
    desc: 'Setiap unit dicetak dengan parameter yang sudah dioptimasi. Tidak ada yang keluar dari printer tanpa inspeksi manual.',
  },
  {
    phase: 'Packaging & Ship',
    desc: 'Dikemas dengan bubble wrap dan kardus tebal. Bukan karena lebay — tapi karena produk yang sudah dibuat dengan susah payah layak sampai dalam kondisi sempurna.',
  },
];

export default function TentangPage() {
  return (
    <div style={{ backgroundColor: '#F5EFE0' }}>
      {/* HERO */}
      <section className="px-4 sm:px-6 py-16 sm:py-24" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C9A876' }}>
            Tentang Kami
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: 'Inter Tight, sans-serif', color: '#F5EFE0' }}
          >
            Lo serius sama game lo.<br />
            <span style={{ color: '#2D5F3F' }}>Setup lo harusnya reflect itu.</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#8B5E3C' }}>
            Ada rasa yang beda waktu lo dateng ke lapangan dengan raket yang udah di-setup dengan bener.
            Bukan cuma soal performa — tapi soal cara lo ngehargain game lo sendiri.
            3Dulo dibuat buat player yang ngerti perasaan itu.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#8B5E3C' }}>
            Cerita Kami
          </p>
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-8"
            style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
          >
            Awalnya dari Frustrasi Pribadi
          </h2>

          <div className="space-y-5 text-base leading-relaxed" style={{ color: '#2a2a2a' }}>
            <p>
              Kita mulai dari satu masalah yang simple: raket padel itu mahal, tapi tempat nyimpennya nggak ada yang bener.
              Sandarin di tembok? Rawan jatuh. Taruh di tas terus? Grip cepet rusak.
              Beli holder import? Mahal dan nggak ada yang cocok sama estetika rumah orang Indonesia.
            </p>
            <p>
              Jadi kita bikin sendiri.
            </p>
            <p>
              3Dulo lahir di Jakarta dari dua orang yang addicted sama padel dan kebetulan bisa 3D print.
              Yang mulanya cuma buat setup sendiri, sekarang udah dipake ribuan player di seluruh Indonesia.
            </p>
            <p>
              Yang bisa kami ceritakan sekarang: setiap produk 3Dulo sudah melalui proses trial and error yang panjang
              sebelum sampai ke tangan kamu. Ada versi yang terlalu tipis, ada yang terlalu berat, ada yang mounting-nya
              tidak fit di semua dinding.
            </p>
            <p>
              Yang sekarang kamu beli adalah hasil dari semua iterasi itu. Produk yang sudah kami pakai sendiri,
              kami kasih ke teman, kami minta feedback, dan kami perbaiki lagi sebelum dijual ke publik.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 sm:px-6 py-16" style={{ backgroundColor: '#fff8ee' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-extrabold"
              style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
            >
              Yang Kita Percaya
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded" style={{ backgroundColor: '#2D5F3F' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border-2"
                style={{ borderColor: '#8B5E3C', backgroundColor: '#F5EFE0' }}
              >
                <h3
                  className="font-bold text-base mb-3"
                  style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8B5E3C' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#8B5E3C' }}>
              Proses
            </p>
            <h2
              className="text-2xl sm:text-3xl font-extrabold"
              style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
            >
              Bagaimana Produk 3Dulo Dibuat
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded" style={{ backgroundColor: '#C9A876' }} />
          </div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.phase} className="flex gap-5">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#2D5F3F', color: '#F5EFE0' }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    className="font-bold text-base mb-1"
                    style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
                  >
                    {step.phase}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8B5E3C' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING + B2B CTA */}
      <section className="px-4 sm:px-6 py-16" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-4"
            style={{ fontFamily: 'Inter Tight, sans-serif', color: '#F5EFE0' }}
          >
            Raket lo kerja keras di lapangan.
          </h2>
          <p className="text-base mb-10" style={{ color: '#C9A876' }}>
            3Dulo jagain dia di luar lapangan.
          </p>

          <div
            className="p-6 rounded-lg border-2 mb-8 text-left"
            style={{ borderColor: '#2D5F3F', backgroundColor: '#2a2a2a' }}
          >
            <p className="font-semibold mb-2 text-sm" style={{ color: '#C9A876' }}>
              Punya brand, toko padel, atau lapangan sendiri?
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#8B5E3C' }}>
              Kita buka kolaborasi, resell, dan custom build.
              Logo lo. Warna lo. Design lo. Kita yang cetak.
            </p>
            <WhatsAppButton
              size="md"
              label="Hubungi Kami untuk Kolaborasi →"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 sm:px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-4"
            style={{ fontFamily: 'Inter Tight, sans-serif', color: '#1A1A1A' }}
          >
            Lihat koleksi lengkap kami
          </h2>
          <p className="mb-8 text-base" style={{ color: '#8B5E3C' }}>
            Wall mount, desk stand, dan aksesori — semua bisa custom warna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/produk"
              className="px-8 py-4 rounded-lg font-semibold text-base border-2 transition-opacity hover:opacity-70"
              style={{ borderColor: '#1A1A1A', color: '#1A1A1A' }}
            >
              Lihat Semua Produk
            </Link>
            <WhatsAppButton size="lg" label="💬 Pesan Sekarang" />
          </div>
        </div>
      </section>
    </div>
  );
}
