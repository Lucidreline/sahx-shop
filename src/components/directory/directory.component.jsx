import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Designs',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590747995/sahx%20shop/designs/1.jpg',
        },
        {
          title: 'Dark',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590747983/sahx%20shop/dark/1.jpg',
        },
        {
          title: 'Fluffy',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590748542/sahx%20shop/fluffy/1.jpg',
        },
        {
          title: 'Light',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590748012/sahx%20shop/light/1.jpg',
        },
        {
          title: 'Plane',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590748021/sahx%20shop/plane/1.jpg',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl }, index) => (
          <MenuItem key={index} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
