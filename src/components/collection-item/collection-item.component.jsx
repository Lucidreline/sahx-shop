import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ imageUrl, name, price }) => (
  <div className='collection-item'>
    <div
      className='collection-item-photo'
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className='collection-item-info'>
      <span>{name}</span>
      <span>${price}</span>
    </div>
  </div>
);

export default CollectionItem;
