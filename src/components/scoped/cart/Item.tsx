import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Product } from '@/api/product/types';

type ItemProps = Product;

const Item = (props: ItemProps) => {
  const { category, id, image, price, title } = props;

  const [mutableAmount, setMutableAmount] = useState(1); // TODO:

  return (
    <article className="cart-item">
      <Link to={`/products/${id}?category=${category}`}>
        <h3 className="ellipsis">{title}</h3>
        <img className="cart-item__image" src={image} alt={title} />
      </Link>
      <p>${price}</p>
      <div className="flex">
        <label htmlFor={`cart-item-${id}-amount`}>수량: </label>
        <input
          id={`cart-item-${id}-amount`}
          type="number"
          value={mutableAmount}
          onChange={(e) => setMutableAmount(Number(e.target.value))}
        />
      </div>
    </article>
  );
};

export default Item;
