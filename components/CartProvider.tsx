'use client';

import { createContext, useContext, useReducer, useCallback, ReactNode } from 'react';
import { CartItem, CartState } from '@/lib/cart';
import { Product } from '@/lib/products';

// ─── ACTIONS ─────────────────────────────────────────────────────────────────

type Action =
  | { type: 'ADD_ITEM'; product: Product; selectedColor: string }
  | { type: 'REMOVE_ITEM'; slug: string; selectedColor: string }
  | { type: 'INCREMENT'; slug: string; selectedColor: string }
  | { type: 'DECREMENT'; slug: string; selectedColor: string }
  | { type: 'CLEAR' };

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const key = `${action.product.slug}__${action.selectedColor}`;
      const existing = state.items.find(
        (i) => `${i.product.slug}__${i.selectedColor}` === key
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            `${i.product.slug}__${i.selectedColor}` === key
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          { product: action.product, selectedColor: action.selectedColor, quantity: 1 },
        ],
      };
    }
    case 'REMOVE_ITEM': {
      const key = `${action.slug}__${action.selectedColor}`;
      return { items: state.items.filter((i) => `${i.product.slug}__${i.selectedColor}` !== key) };
    }
    case 'INCREMENT': {
      const key = `${action.slug}__${action.selectedColor}`;
      return {
        items: state.items.map((i) =>
          `${i.product.slug}__${i.selectedColor}` === key
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }
    case 'DECREMENT': {
      const key = `${action.slug}__${action.selectedColor}`;
      return {
        items: state.items
          .map((i) =>
            `${i.product.slug}__${i.selectedColor}` === key
              ? { ...i, quantity: Math.max(0, i.quantity - 1) }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    }
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

// ─── CONTEXT ─────────────────────────────────────────────────────────────────

type CartContextType = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, selectedColor: string) => void;
  removeItem: (slug: string, selectedColor: string) => void;
  increment: (slug: string, selectedColor: string) => void;
  decrement: (slug: string, selectedColor: string) => void;
  clear: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isOpen, setIsOpen] = useReducer((s: boolean, v: boolean) => v, false);

  const addItem = useCallback((product: Product, selectedColor: string) => {
    dispatch({ type: 'ADD_ITEM', product, selectedColor });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, selectedColor: string) => {
    dispatch({ type: 'REMOVE_ITEM', slug, selectedColor });
  }, []);

  const increment = useCallback((slug: string, selectedColor: string) => {
    dispatch({ type: 'INCREMENT', slug, selectedColor });
  }, []);

  const decrement = useCallback((slug: string, selectedColor: string) => {
    dispatch({ type: 'DECREMENT', slug, selectedColor });
  }, []);

  const clear = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        increment,
        decrement,
        clear,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
