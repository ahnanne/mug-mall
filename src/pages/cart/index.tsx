import { useGetCart } from '@/hooks/queries/cart';

import LoadingDecorator from '@/components/layout/LoadingDecorator';
import Item from '@/components/scoped/cart/Item';

const CartPage = () => {
  const { data: cart, isFetching } = useGetCart();

  return (
    <>
      <h2>장바구니</h2>
      <LoadingDecorator isLoading={isFetching}>
        <ul>
          {cart &&
            cart.map((cartItem) => (
              <li key={cartItem.id}>
                <Item {...cartItem} />
              </li>
            ))}
        </ul>
      </LoadingDecorator>
    </>
  );
};

export default CartPage;
