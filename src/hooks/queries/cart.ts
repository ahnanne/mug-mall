import { useQuery, useMutation } from '@tanstack/react-query';
import queryKeys from '@/api/queryKeys';

import cartApi from '@/api/cart';

export const useGetCart = () => {
  const result = useQuery({
    queryKey: [queryKeys.CART],
    queryFn: cartApi.getCart,
  });

  return result;
};

export const useAddToCart = () => {
  const result = useMutation({
    mutationFn: (id: number) => cartApi.addToCart(id),
  });

  return result;
};
