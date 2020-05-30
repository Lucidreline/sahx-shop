import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from './shop.data';

import './shop.styles.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        <h1 className='header'>Collections</h1>
        {collections.map(({ ...collectionAtributes }, i) => (
          <CollectionPreview key={i} {...collectionAtributes} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
