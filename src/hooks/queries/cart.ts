import { useQuery, useMutation } from '@tanstack/react-query';
import queryKeys from '@/api/queryKeys';

import cartApi from '@/api/cart';
import { AddToCartResponse } from '@/api/cart/types';

export const useGetCart = () => {
  const result = useQuery({
    queryKey: [queryKeys.CART],
    queryFn: cartApi.getCart,
  });

  return result;
};

export const useAddToCart = (onSettled: (data?: AddToCartResponse) => void) => {
  const result = useMutation({
    mutationFn: (id: number) => cartApi.addToCart(id),
    onSettled,
  });

  return result;
};
