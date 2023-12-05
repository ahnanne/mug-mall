import { useState } from 'react';
import { Link } from 'react-router-dom';

import { CartItem } from '@/store/slice/cartSlice';

type ItemProps = CartItem;

const Item = (props: ItemProps) => {
  const { category, id, image, price, title, amount } = props;

  const [mutableAmount, setMutableAmount] = useState(amount);

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
