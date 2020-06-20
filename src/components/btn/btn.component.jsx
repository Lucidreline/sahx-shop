import React from 'react';

import './btn.styles.scss';

const Btn = ({ color, filled, children, ...otherProps }) => {
  if (!color) color = ' ';
  if (filled) filled = 'filled';
  else filled = 'not-filled';
  return (
    <div className='btn-container'>
      <button className={`${color}  ${filled} btn`} {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default Btn;
