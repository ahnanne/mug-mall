import { useQuery } from '@tanstack/react-query';
import queryKeys from '@/api/queryKeys';

import productApi from '@/api/product';
import { GetCategoryProductsParamsAndQuery } from '@/api/product/types';

export const useGetProductCategories = () => {
  const result = useQuery({
    queryKey: [queryKeys.PRODUCT_CATEGORIES],
    queryFn: productApi.getProductCategories,
    gcTime: Infinity,
  });

  return result;
};

export const useGetCategoryProducts = (
  options: GetCategoryProductsParamsAndQuery,
  enabled: boolean
) => {
  const result = useQuery({
    queryKey: [queryKeys.CATEGORY_PRODUCTS],
    queryFn: () => productApi.getCategoryProducts(options),
    enabled,
  });

  return result;
};
