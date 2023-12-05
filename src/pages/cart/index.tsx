import useStore from '@/store';

import LoadingDecorator from '@/components/layout/LoadingDecorator';
// import Item from '@/components/scoped/cart/Item';

const CartPage = () => {
  const cart = useStore((state) => state.cart);
  const cartItemPairs = [...cart.entries()];

  return (
    <>
      <h2>장바구니</h2>
      <LoadingDecorator isLoading={false}>
        <ul>
          {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          {cartItemPairs.map(([productId, { amount }]) => (
            <li key={productId}>
              상품ID: {productId} / 수량: {amount}개
            </li>
          ))}
        </ul>
      </LoadingDecorator>
    </>
  );
};

export default CartPage;
