import { create } from 'zustand';

import createCartSlice, { CartState } from './slice/cartSlice';

// * https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern
const useStore = create<CartState>()((...a) => ({
  ...createCartSlice(...a),
}));

export default useStore;
