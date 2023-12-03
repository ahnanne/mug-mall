import LoadingDecorator from '@/components/layout/LoadingDecorator';

const CartPage = () => {
  return (
    <>
      <h2>장바구니</h2>
      <LoadingDecorator isLoading={false}>
        <p>TODO..</p>
      </LoadingDecorator>
    </>
  );
};

export default CartPage;
