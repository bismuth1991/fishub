import React from 'react';
import { arrayOf, shape, bool, string } from 'prop-types';

import BaitItem from './BaitItem';

class Baits extends React.Component {
  constructor() {
    super();

    this.addToTackleBox = this.addToTackleBox.bind(this);
  }

  addToTackleBox(baitId) {
    return () => this.baits === baitId;
  }

  render() {
    const { baits, isLoading } = this.props;

    return isLoading ? (
      <div className="container">
        <div className="spinner">
          <i className="fas fa-spinner fa-spin" />
        </div>
      </div>
    ) : (
      <div className="container">
        <ul className="row">
          {baits.map(bait => (
            <li className="col-md-4">
              <BaitItem
                key={bait.id}
                {...bait}
                addToTackleBox={this.addToTackleBox}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Baits.propTypes = {
  isLoading: bool.isRequired,
  baits: arrayOf(shape({
    name: string,
    category: string,
    image: string,
  })).isRequired,
};

export default Baits;
