# 3Dulo — Aksesoris Padel 3D-Printed Premium

Website showcase + WhatsApp redirect untuk brand aksesoris padel 3D-printed asal Indonesia.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics + Vercel Speed Insights

## Setup Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Deploy ke Vercel

1. Push ke GitHub
2. Connect repository di [vercel.com](https://vercel.com)
3. Deploy otomatis setiap push ke `main`

Tidak ada environment variables yang diperlukan untuk deployment dasar.

## Struktur Proyek

```
app/               → Next.js App Router pages
components/        → Reusable UI components
lib/               → Data & utilities (products, blog posts, WA logic)
public/images/     → Product & blog images (ganti dengan foto asli)
```

## Mengganti Placeholder Images

Semua gambar produk ada di `public/images/products/[slug]/`. Nama file:
- `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg` — foto produk

Blog images ada di `public/images/blog/`.

## WhatsApp Routing

Semua tombol WA mengarah ke nomor: **+62 813-1919-0388**

URL format: `https://wa.me/6281319190388?text=[pesan]`

Attribution tracking via `?ref=jf` parameter — tersimpan di cookie 30 hari.

## Brand Colors

| Name | Hex |
|------|-----|
| Cream Base | `#F5EFE0` |
| Deep Black | `#1A1A1A` |
| Padel Court Green | `#2D5F3F` |
| Warm Tan | `#C9A876` |
| Maker Brown | `#8B5E3C` |
| Urgency Red | `#D14B3E` |
| WhatsApp Green | `#25D366` |

## Sitemap & SEO

Sitemap otomatis di-generate oleh `next-sitemap` setelah build (`postbuild` script).
Domain: `https://3dulo.id`

JSON-LD structured data ada di setiap halaman:
- Organization (sitewide)
- Product + FAQPage (product pages)
- BlogPosting + FAQPage (blog posts)
- BreadcrumbList (detail pages)

## To-Do Sebelum Go Live

- [ ] Ganti semua placeholder images dengan foto produk asli
- [ ] Update origin story di `/tentang` (bagian [REVIEW WITH ALDRICH])
- [ ] Tambahkan foto maker di `/tentang`
- [ ] Verifikasi nomor WA aktif dan bisa menerima pesan
- [ ] Test semua tombol WA di mobile
- [ ] Tambahkan domain `3dulo.id` ke Vercel project

---

Powered by [Grafynt](https://grafynt.com)
