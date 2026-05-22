'use client';

import { useState, useEffect } from 'react';
import { buildWAUrlFromContext, resolveRef } from '@/lib/whatsapp';

const PROMO_END = new Date('2026-06-30T23:59:59+07:00');
const PROMO_HEADLINE = 'FLASH SALE — Bonus Gratis Berakhir Dalam';
const STORAGE_KEY = '3dulo_banner_dismissed';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function calcTimeLeft(): TimeLeft {
  const diff = PROMO_END.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid hydration flash
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });
  const [waUrl, setWaUrl] = useState('https://wa.me/6281319190388');

  useEffect(() => {
    // Check if dismissed in this session
    if (typeof sessionStorage !== 'undefined') {
      const isDismissed = sessionStorage.getItem(STORAGE_KEY) === '1';
      if (isDismissed) return;
    }
    setDismissed(false);
    setTimeLeft(calcTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    // Build WA URL with ref
    const ref = resolveRef();
    setWaUrl(buildWAUrlFromContext({ type: 'urgency', ref }));

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, '1');
    }
    setDismissed(true);
  };

  if (dismissed) return null;

  if (timeLeft.expired) {
    return (
      <div
        className="w-full py-2 px-4 text-center text-sm font-medium"
        style={{ backgroundColor: '#D14B3E', color: '#F5EFE0' }}
      >
        Promo Berakhir — Cek Produk Lain
      </div>
    );
  }

  const showDays = timeLeft.days > 0;

  return (
    <div
      role="banner"
      aria-live="polite"
      className="w-full relative z-50"
      style={{ backgroundColor: '#D14B3E', color: '#F5EFE0' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm sm:text-base">
        {/* Headline */}
        <span className="font-semibold tracking-wide whitespace-nowrap">
          {PROMO_HEADLINE}
        </span>

        {/* Countdown */}
        <span
          className="font-mono font-bold tracking-widest whitespace-nowrap"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          {showDays && <>{pad(timeLeft.days)} : </>}
          {pad(timeLeft.hours)} : {pad(timeLeft.minutes)} : {pad(timeLeft.seconds)}
        </span>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 whitespace-nowrap hover:opacity-80 transition-opacity"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).va) {
              (window as any).va('event', { name: 'urgency_banner_click' });
            }
          }}
        >
          Pesan Sekarang →
        </a>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        aria-label="Tutup banner promo"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:opacity-70 transition-opacity"
        style={{ color: '#F5EFE0' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
