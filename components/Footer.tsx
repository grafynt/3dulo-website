import Link from 'next/link';

const IG_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TIKTOK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z" />
  </svg>
);

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 inline-block mr-1" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#F5EFE0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-3" aria-label="3Dulo — Beranda">
              <span className="font-extrabold text-xl tracking-tight" style={{ fontFamily: 'Inter Tight, sans-serif', color: '#F5EFE0' }}>
                3Dulo
              </span>
            </Link>
            <p className="text-sm mb-4" style={{ color: '#C9A876' }}>
              Raket lo layak tempat yang proper.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#8B5E3C' }}>
              3D printed, bisa dikustomisasi, mulai Rp 15.000. Made in Indonesia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-widest" style={{ color: '#C9A876' }}>
              Navigasi
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/produk', label: 'Produk' },
                { href: '/tentang', label: 'Tentang Kami' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-opacity hover:opacity-70"
                    style={{ color: '#F5EFE0' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-widest" style={{ color: '#C9A876' }}>
              Kontak
            </p>
            <a
              href="https://wa.me/6281319190388"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm mb-3 transition-opacity hover:opacity-70"
              style={{ color: '#25D366' }}
            >
              {WA_ICON}
              +62 813-1919-0388
            </a>
            <p className="text-xs mb-4" style={{ color: '#8B5E3C' }}>
              Senin–Sabtu, 09.00–21.00 WIB
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/3dulo.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram 3Dulo"
                className="transition-opacity hover:opacity-70"
                style={{ color: '#C9A876' }}
              >
                {IG_ICON}
              </a>
              <a
                href="https://tiktok.com/@3dulo.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok 3Dulo"
                className="transition-opacity hover:opacity-70"
                style={{ color: '#C9A876' }}
              >
                {TIKTOK_ICON}
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ borderColor: '#2D5F3F', color: '#8B5E3C' }}
        >
          <p>© {new Date().getFullYear()} 3Dulo. Dibuat di Indonesia 🇮🇩</p>
          <p>3dulo.id</p>
        </div>
      </div>
    </footer>
  );
}
