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
          linkUrl: '',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590747995/sahx%20shop/designs/1.jpg',
        },
        {
          title: 'Dark',
          linkUrl: '',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590747983/sahx%20shop/dark/1.jpg',
        },
        {
          title: 'Fluffy',
          linkUrl: 'fluffy',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590748542/sahx%20shop/fluffy/1.jpg',
        },
        {
          title: 'Light',
          linkUrl: '',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590748012/sahx%20shop/light/1.jpg',
        },
        {
          title: 'Plane',
          linkUrl: '',
          imageUrl:
            'https://res.cloudinary.com/clubphotos/image/upload/v1590748021/sahx%20shop/plane/1.jpg',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ ...sectionProps }, index) => (
          <MenuItem key={index} {...sectionProps} /> // same as title={title} etc
        ))}
      </div>
    );
  }
}

export default Directory;
