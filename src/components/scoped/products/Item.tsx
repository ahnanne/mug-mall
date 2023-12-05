import { Link, useNavigate } from 'react-router-dom';

import useStore from '@/store';

import { Product } from '@/api/product/types';

type ItemProps = Product;

const Item = (props: ItemProps) => {
  const { category, id, image, price, rating, title } = props;
  const navigate = useNavigate();

  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const handleAddToCartButton = () => {
    if (cart.has(String(id))) {
      window.alert('이미 추가된 상품입니다.');
      return;
    }

    addToCart(id);

    const answer = window.confirm(
      '장바구니에 상품을 추가했습니다. 장바구니로 이동하시겠습니까?'
    );

    if (answer === true) {
      navigate('/cart');
    }
  };

  return (
    <article className="product-item">
      <Link to={`/products/${id}?category=${category}`}>
        <h3 className="ellipsis">{title}</h3>
        <img className="product-item__image" src={image} alt={title} />
      </Link>
      <p>${price}</p>
      <p>평점: {rating.rate}/5</p>
      <button type="button" onClick={handleAddToCartButton}>
        Add to cart
      </button>
    </article>
  );
};

export default Item;
