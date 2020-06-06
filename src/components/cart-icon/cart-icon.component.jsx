import React from 'react';

import './cart-icon.styles.scss';

const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <img
        className='link'
        alt='shopping-cart-icon'
        src='https://res.cloudinary.com/dglxjd018/image/upload/c_scale,h_28/v1591446446/Sahx%20Shop/shopping-cart_ed6f7o.png'
      />
      <span className='cart-quantity'>9</span>
    </div>
  );
};

export default CartIcon;
