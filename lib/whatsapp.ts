/**
 * @file whatsapp.ts
 * @description All WhatsApp URL building logic — isolated here for easy swap-out later
 */

export const WA_NUMBER = '6281319190388';
export const REF_COOKIE_NAME = 'ref_source';
export const REF_COOKIE_DAYS = 30;

export type WAMessageContext = {
  type: 'general' | 'product' | 'urgency';
  productName?: string;
  selectedColor?: string;
  ref?: string | null;
};

export function buildWAMessage(context: WAMessageContext): string {
  const hasRef = context.ref === 'jf';

  switch (context.type) {
    case 'product': {
      const product = context.productName ?? 'produk ini';
      const color = context.selectedColor ?? 'default';
      if (hasRef) {
        return `Halo, saya tertarik dengan ${product} warna ${color} dari 3Dulo. (Ref: JF)`;
      }
      return `Halo, saya tertarik dengan ${product} warna ${color} dari website 3Dulo.`;
    }
    case 'urgency': {
      if (hasRef) {
        return `Halo, saya mau ambil promo 3Dulo yang masih berlaku. (Ref: JF)`;
      }
      return `Halo, saya mau ambil promo 3Dulo yang masih berlaku.`;
    }
    case 'general':
    default: {
      if (hasRef) {
        return `Halo, saya tertarik dengan produk 3Dulo. (Ref: JF)`;
      }
      return `Halo, saya dari website 3Dulo.`;
    }
  }
}

export function buildWAUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWAUrlFromContext(context: WAMessageContext): string {
  const message = buildWAMessage(context);
  return buildWAUrl(message);
}

/** Read ref from cookie (client-side only) */
export function getRefFromCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${REF_COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/** Set ref cookie for 30 days (client-side only) */
export function setRefCookie(ref: string): void {
  if (typeof document === 'undefined') return;
  const expires = new Date();
  expires.setDate(expires.getDate() + REF_COOKIE_DAYS);
  document.cookie = `${REF_COOKIE_NAME}=${encodeURIComponent(ref)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

/** Read ref from URL search params (client-side only) */
export function getRefFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get('ref');
}

/**
 * Resolve effective ref: URL param takes priority, falls back to cookie.
 * Also sets cookie if URL param is present.
 */
export function resolveRef(): string | null {
  const urlRef = getRefFromUrl();
  if (urlRef) {
    setRefCookie(urlRef);
    return urlRef;
  }
  return getRefFromCookie();
}
