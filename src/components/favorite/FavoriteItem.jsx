import React from 'react';
import './FavoriteItem.css';

const FavoriteItem = () => {
  return (
    <li className={['cart-item']}>
      <div>
        <h2>something</h2>
        {/* <h2>{props.name}</h2> */}
        <div className="summary">
          <img src="" alt="anime in favorite list"/>
        </div>
      </div>
    </li>
  );
};

export default FavoriteItem;