import { StateCreator } from 'zustand';

import { Product } from '@/api/product/types';

export type CartItem = Product & {
  amount: number;
};

export type CartState = {
  cart: Map<string, CartItem>;
  addToCart: (product: Product) => void;
};

const createCartSlice: StateCreator<CartState> = (set) => ({
  cart: new Map(),
  addToCart: (product) =>
    set((state) => ({
      cart: state.cart.set(String(product.id), { ...product, amount: 1 }),
    })),
});

export default createCartSlice;
