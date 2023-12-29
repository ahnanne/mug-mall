import { Product } from '../product/types';

export type AddToCartResponse = { success: boolean };

export type AddToCart = (id: number) => Promise<AddToCartResponse>;

export type GetCart = () => Promise<Product[]>;
