import React from 'react';
import { connect } from 'react-redux';

import toggleCartHidden from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <img
        className='link'
        alt='shopping-cart-icon'
        src='https://res.cloudinary.com/dglxjd018/image/upload/c_scale,h_28/v1591446446/Sahx%20Shop/shopping-cart_ed6f7o.png'
      />
      <span className='cart-quantity'>0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
