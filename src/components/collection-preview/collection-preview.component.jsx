import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collections-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h2 className='title'> {title} </h2>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(({ ...itemAtributes }, i) => (
          <CollectionItem key={i} {...itemAtributes} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
