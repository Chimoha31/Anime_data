import React from 'react';
import './FavoriteItem.css';

const FavoriteItem = () => {
  // const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={['cart-item']}>
      <div>
        <h2>something</h2>
        {/* <h2>{props.name}</h2> */}
        <div className="summary">
          <span className="price">price</span>
          <span className="amount">amount</span>
        </div>
      </div>
      <div className="actions">
        <button>−</button>
        <button>+</button>
        {/* <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button> */}
      </div>
    </li>
  );
};

export default FavoriteItem;