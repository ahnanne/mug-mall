import { AxiosPromise } from 'axios';

export type ProductListQuery = { limit?: number; sort?: 'desc' | 'asc' };

export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: Rating;
};

export type GetProductCategories = () => Promise<string[]>;

export type GetCategoryProductsParams = { category: string };
export type GetCategoryProductsParamsAndQuery = {
  params: GetCategoryProductsParams;
  query: ProductListQuery;
};
export type GetCategoryProducts = (
  options: GetCategoryProductsParamsAndQuery
) => Promise<Product[]>;

export type GetAllProducts = (
  query: ProductListQuery
) => AxiosPromise<Product[]>;

export type GetProductParams = { id: number };
export type GetProduct = (params: GetProductParams) => Promise<Product>;
