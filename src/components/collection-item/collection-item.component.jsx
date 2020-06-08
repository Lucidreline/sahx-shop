import React from 'react';

import './collection-item.styles.scss';
import Btn from '../btn/btn.component';

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
    <Btn>Add To Cart</Btn>
  </div>
);

export default CollectionItem;
