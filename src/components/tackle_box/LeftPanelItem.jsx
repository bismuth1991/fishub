import React from 'react';
import { string } from 'prop-types';

const LeftPanelItem = ({ name, image }) => (
  <img src={image} alt={name} />
);

LeftPanelItem.propTypes = {
  name: string.isRequired,
  image: string.isRequired,
};

export default LeftPanelItem;
