import React from 'react';
import { arrayOf, shape, bool, string, number, func } from 'prop-types';

import BaitItem from './BaitItem';

class Baits extends React.Component {
  constructor() {
    super();

    this.addToTackleBox = this.addToTackleBox.bind(this);
  }

  componentDidMount() {
    const { fetchBaits } = this.props;
    fetchBaits();
  }

  addToTackleBox(baitId) {
    const { addBait } = this.props;
    return () => addBait(baitId);
  }

  render() {
    const { baits, isLoading, tackleBox } = this.props;

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
            <li className="col-md-4" key={bait.id}>
              <BaitItem
                {...bait}
                isInTackleBox={tackleBox.includes(bait.id)}
                addToTackleBox={this.addToTackleBox}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Baits.defaultProps = {
  tackleBox: [],
};

Baits.propTypes = {
  isLoading: bool.isRequired,
  tackleBox: arrayOf(number),
  addBait: func.isRequired,
  fetchBaits: func.isRequired,
  baits: arrayOf(shape({
    name: string,
    category: string,
    image: string,
  })).isRequired,
};

export default Baits;
