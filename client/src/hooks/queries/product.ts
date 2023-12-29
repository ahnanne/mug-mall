import { useQuery } from '@tanstack/react-query';
import queryKeys from '@/api/queryKeys';

import productApi from '@/api/product';
import {
  GetCategoryProductsParamsAndQuery,
  GetProductParams,
} from '@/api/product/types';
import { GC_TIME } from '@/constants/api';

export const useGetProductCategories = () => {
  const result = useQuery({
    queryKey: [queryKeys.PRODUCT_CATEGORIES],
    queryFn: productApi.getProductCategories,
    gcTime: GC_TIME,
    staleTime: GC_TIME,
  });

  return result;
};

export const useGetCategoryProducts = (
  options: GetCategoryProductsParamsAndQuery,
  enabled: boolean
) => {
  const result = useQuery({
    queryKey: [queryKeys.CATEGORY_PRODUCTS, options.params.category],
    queryFn: () => productApi.getCategoryProducts(options),
    enabled,
    gcTime: GC_TIME,
    staleTime: GC_TIME,
  });

  return result;
};

export const useGetProduct = (options: GetProductParams, enabled: boolean) => {
  const result = useQuery({
    queryKey: [queryKeys.PRODUCT, options.id],
    queryFn: () => productApi.getProduct(options),
    enabled,
    gcTime: GC_TIME,
    staleTime: GC_TIME,
  });

  return result;
};
