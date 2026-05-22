import type { Metadata } from 'next';
import ProdukClient from './ProdukClient';

export const metadata: Metadata = {
  title: 'Produk Holder Raket Padel & Badminton | 3Dulo',
  description: 'Temukan wall mount, desk stand, dan aksesori raket padel dari 3Dulo. Dibuat 3D print, tersedia dalam berbagai warna. Pengiriman ke seluruh Indonesia.',
  alternates: { canonical: 'https://3dulo.id/produk' },
  openGraph: {
    title: 'Produk Holder Raket Padel & Badminton | 3Dulo',
    description: 'Temukan wall mount, desk stand, dan aksesori raket padel dari 3Dulo. Dibuat 3D print, tersedia dalam berbagai warna.',
    url: 'https://3dulo.id/produk',
  },
};

export default function ProdukPage() {
  return <ProdukClient />;
}
