'use client';

import { useState, useEffect } from 'react';

const DURATION_MS = 20 * 60 * 1000; // 20 minutes

function pad(n: number) {
  return String(n).padStart(2, '0');
}

type Props = {
  productSlug: string;
};

export default function ProductPageTimer({ productSlug }: Props) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const key = `3dulo_timer_${productSlug}`;
    const stored = sessionStorage.getItem(key);
    let endTime: number;

    if (stored) {
      endTime = parseInt(stored, 10);
    } else {
      endTime = Date.now() + DURATION_MS;
      sessionStorage.setItem(key, String(endTime));
    }

    const update = () => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        setTimeLeft(0);
        setExpired(true);
        return;
      }
      setTimeLeft(diff);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [productSlug]);

  if (timeLeft === null) return null;

  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (expired) {
    return (
      <div
        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-center"
        style={{ backgroundColor: '#fff8ee', color: '#8B5E3C', border: '1px solid #C9A876' }}
      >
        ⏰ Stok pre-order terbatas — hubungi kami untuk memastikan ketersediaan
      </div>
    );
  }

  return (
    <div
      className="w-full rounded-lg px-4 py-3 flex items-center justify-between gap-2"
      style={{ backgroundColor: '#D14B3E', color: '#F5EFE0' }}
      aria-live="polite"
    >
      <span className="text-sm font-semibold">🔥 Harga ini dicadangkan untukmu selama</span>
      <span
        className="font-bold text-lg tracking-widest tabular-nums"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
        suppressHydrationWarning
      >
        {pad(minutes)} : {pad(seconds)}
      </span>
    </div>
  );
}
