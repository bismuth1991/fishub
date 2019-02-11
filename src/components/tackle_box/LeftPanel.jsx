import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import LeftPanelItem from './LeftPanelItem';

class LeftPanel extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    const { baits, selectedBaitId } = this.props;

    return (
      <ul id="items" className="col-md-3 text-center">
        {baits.map(bait => (
          <li
            className={bait.id === selectedBaitId ? 'selected' : ''}
            role="presentation"
            key={bait.id}
            onClick={this.handleClick}
          >
            <LeftPanelItem name={bait.name} image={bait.image} />
          </li>
        ))}
      </ul>
    );
  }
}

LeftPanel.propTypes = {
  baits: arrayOf(shape({
    name: string,
    category: string,
    image: string,
  })).isRequired,
  selectedBaitId: number.isRequired,
};

export default LeftPanel;
