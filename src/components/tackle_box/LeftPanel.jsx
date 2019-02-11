import React from 'react';
import { arrayOf, shape, string, number, func } from 'prop-types';

import LeftPanelItem from './LeftPanelItem';

const LeftPanel = ({
  baits,
  selectedBaitId,
  switchBait,
}) => (
  <ul id="items" className="col-md-3 text-center">
    {baits.map(bait => (
      <li
        className={bait.id === selectedBaitId ? 'selected' : ''}
        role="presentation"
        key={bait.id}
        onClick={switchBait(bait.id)}
      >
        <LeftPanelItem name={bait.name} image={bait.image} />
      </li>
    ))}
  </ul>
);

LeftPanel.defaultProps = {
  selectedBaitId: null,
};

LeftPanel.propTypes = {
  baits: arrayOf(shape({
    name: string,
    category: string,
    image: string,
  })).isRequired,
  selectedBaitId: number,
  switchBait: func.isRequired,
};

export default LeftPanel;
