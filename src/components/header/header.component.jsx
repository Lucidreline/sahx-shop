import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Link to='/'>
        <h1 className='logo'>SAHX</h1>
      </Link>
    </div>
    <div className='links-container'>
      <Link className='link' to='/shop'>
        shop
      </Link>
      <Link className='link' to='/signin'>
        Sign In
      </Link>
      <Link className='link' to='/'>
        contact
      </Link>
    </div>
  </div>
);

export default Header;
