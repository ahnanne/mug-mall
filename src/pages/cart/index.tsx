import { useGetCart } from '@/hooks/queries/cart';

import LoadingDecorator from '@/components/layout/LoadingDecorator';
import Item from '@/components/scoped/cart/Item';

const CartPage = () => {
  const { data: cart, isFetching } = useGetCart();

  return (
    <>
      <h2>장바구니</h2>
      <LoadingDecorator isLoading={isFetching}>
        {cart?.length ? (
          <ul>
            {cart.map((cartItem) => (
              <li key={cartItem.id}>
                <Item {...cartItem} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty">장바구니가 비어 있습니다.</div>
        )}
      </LoadingDecorator>
    </>
  );
};

export default CartPage;
