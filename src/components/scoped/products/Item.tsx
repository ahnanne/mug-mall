import { Link } from 'react-router-dom';

import { Product } from '@/api/product/types';

type ItemProps = Product;

const Item = (props: ItemProps) => {
  const { category, description, id, image, price, rating, title } = props;

  return (
    <article className="product-item">
      <Link to={`/#?category=${category}&id=${id}`}>
        <img className="product-item__image" src={image} alt="title" />
        <h3>{title}</h3>
      </Link>
      <p>${price}</p>
      <p>평점: {rating.rate}/5</p>
      <p>{description}</p>
    </article>
  );
};

export default Item;
