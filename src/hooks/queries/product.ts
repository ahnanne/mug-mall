import { useQuery } from '@tanstack/react-query';
import queryKeys from '@/api/queryKeys';

import productApi from '@/api/product';
// import {} from '@/api/product/types';

export const useGetProductCategories = () => {
  const result = useQuery({
    queryKey: [queryKeys.PRODUCT_CATEGORIES],
    queryFn: productApi.getProductCategories,
  });

  return result;
};
