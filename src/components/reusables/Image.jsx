import React from 'react';
import { string } from 'prop-types';

const Image = ({ image, name, className }) => (
  <img
    className={className}
    src={image}
    alt={name}
  />
);

Image.defaultProps = {
  className: undefined,
};

Image.propTypes = {
  className: string,
  image: string.isRequired,
  name: string.isRequired,
};

export default Image;
