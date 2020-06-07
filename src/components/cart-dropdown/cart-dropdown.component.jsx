import React from 'react';

import Btn from '../btn/btn.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <div className='checkout-btn-container'>
        <Btn filled>Checkout</Btn>
      </div>
    </div>
  );
};

export default CartDropdown;
