import React from 'react';
import { arrayOf, shape, bool, string } from 'prop-types';

import BaitItem from './BaitItem';

class Baits extends React.Component {
  conponentDidUpdate() {}

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
          <li className="col-md-4">
            {baits.map(bait => <BaitItem key={bait.id} />)}
          </li>
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
