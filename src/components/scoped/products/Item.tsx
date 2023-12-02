import { Link } from 'react-router-dom';

import { Product } from '@/api/product/types';

type ItemProps = Product;

const Item = (props: ItemProps) => {
  const { category, description, id, image, price, rating, title } = props;

  return (
    <Link
      to={`/#?category=${category}&id=${id}`}
      style={{ display: 'block', width: 'fit-content' }}
    >
      <article
        style={{ maxWidth: '400px', height: '400px', overflowY: 'auto' }}
      >
        <img
          src={image}
          alt="title"
          style={{ width: '180px', height: '180px' }}
        />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <p>{rating.rate}</p>
      </article>
    </Link>
  );
};

export default Item;
