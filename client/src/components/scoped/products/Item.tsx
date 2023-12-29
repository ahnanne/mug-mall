import { Link, useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';

import { useAddToCart } from '@/hooks/queries/cart';

import { Product } from '@/api/product/types';
import { AddToCartResponse } from '@/api/cart/types';

type ItemProps = Product;

const Item = (props: ItemProps) => {
  const { category, id, image, price, rating, title } = props;
  const navigate = useNavigate();

  const onAddToCartSettled = (data?: AddToCartResponse) => {
    if (!data) {
      console.log('요청 중 에러가 발생했습니다.');
      return;
    }

    const { success } = data;

    if (!success) {
      window.alert('이미 추가된 상품입니다.');
      return;
    }

    const answer = window.confirm(
      '장바구니에 상품을 추가했습니다. 장바구니로 이동하시겠습니까?'
    );

    if (answer === true) {
      navigate('/cart');
    }
  };

  const { mutate: addToCart } = useAddToCart(onAddToCartSettled);

  const handleAddToCartButton = () => {
    addToCart(id);
  };

  return (
    <article className="product-item">
      <Link to={`/products/${id}?category=${category}`}>
        <h3 className="ellipsis">{title}</h3>
        <img className="product-item__image" src={image} alt={title} />
      </Link>
      <p>${price}</p>
      <p>평점: {rating.rate}/5</p>
      <button type="button" onClick={debounce(handleAddToCartButton, 100)}>
        Add to cart
      </button>
    </article>
  );
};

export default Item;
