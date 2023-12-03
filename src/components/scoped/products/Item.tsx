import { Link } from 'react-router-dom';

import { Product } from '@/api/product/types';

type ItemProps = Product;

const Item = (props: ItemProps) => {
  const { category, id, image, price, rating, title } = props;

  return (
    <article className="product-item">
      <Link to={`/products/${id}?category=${category}`}>
        <h3 className="ellipsis">{title}</h3>
        <img className="product-item__image" src={image} alt={title} />
      </Link>
      <p>${price}</p>
      <p>평점: {rating.rate}/5</p>
    </article>
  );
};

export default Item;
