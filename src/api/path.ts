import qs from 'qs';

import {
  ProductListQuery,
  GetCategoryProductsParamsAndQuery,
  GetProductParams,
} from './product/types';

const pathWithQuery = (path: string, query: Dict) => {
  // https://www.npmjs.com/package/qs#stringifying
  const queryString = qs.stringify(query, {
    addQueryPrefix: true,
  });

  return `${path}${queryString}`;
};

export default {
  GET_PRODUCT_CATEGORIES: '/products/categories',
  GET_CATEGORY_PRODUCTS: ({
    params,
    query,
  }: GetCategoryProductsParamsAndQuery) =>
    pathWithQuery(`/products/${params.category}`, query),
  GET_ALL_PRODUCTS: (query: ProductListQuery) =>
    pathWithQuery('/products', query),
  GET_PRODUCT: (params: GetProductParams) => `/products/${params.id}`,
};
