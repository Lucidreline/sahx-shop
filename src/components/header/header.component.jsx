import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header-container'>
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

        {currentUser ? (
          <div className='link' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='link' to='/signin'>
            Sign In
          </Link>
        )}

        <Link className='link' to='/'>
          contact
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
