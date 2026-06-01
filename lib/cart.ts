// lib/cart.ts — Cart state types & WA message builder

import { Product, formatPrice } from './products';
import { WA_NUMBER } from './whatsapp';

export type CartItem = {
  product: Product;
  selectedColor: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

// Build the WhatsApp order message from cart items
export function buildCartWAMessage(items: CartItem[], ref: string | null): string {
  if (items.length === 0) return '';

  const lines = items.map((item) => {
    const price = item.product.price;
    const subtotal = price * item.quantity;
    return `• ${item.product.name} (${item.selectedColor}) ×${item.quantity} = ${formatPrice(subtotal)}`;
  });

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const refLine = ref === 'jf' ? ' (Ref: JF)' : '';

  return (
    `Halo 3Dulo! 👋${refLine}\n\n` +
    `Saya ingin order:\n${lines.join('\n')}\n\n` +
    `💰 Total: ${formatPrice(total)}\n\n` +
    `Mohon info lanjutan, terima kasih!`
  );
}

export function buildCartWAUrl(items: CartItem[], ref: string | null): string {
  const message = buildCartWAMessage(items, ref);
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
