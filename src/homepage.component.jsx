import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1>Designs</h1>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1>Dark</h1>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1>Fluffy</h1>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1>Light</h1>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1>Plane</h1>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
