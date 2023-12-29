import { StateCreator } from 'zustand';

export type CartItem = {
  amount: number;
};

export type CartState = {
  cart: Map<string, CartItem>;
  addToCart: (productId: number, amount?: number) => void;
};

const createCartSlice: StateCreator<CartState> = (set) => ({
  cart: new Map(),
  addToCart: (productId, amount) =>
    set((state) => ({
      cart: state.cart.set(String(productId), { amount: amount ?? 1 }),
    })),
});

export default createCartSlice;
