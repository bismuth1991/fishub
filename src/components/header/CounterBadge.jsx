import React from 'react';
import { connect } from 'react-redux';
import { number } from 'prop-types';

import { getTackleBox } from '../../selectors/tackleBoxSelectors';

export const CounterBadge = ({ tackleBoxItemCount }) => (
  tackleBoxItemCount ? (
    <span className="badge badge-pill">{tackleBoxItemCount}</span>
  ) : null
);

CounterBadge.propTypes = {
  tackleBoxItemCount: number.isRequired,
};

const mapStateToProps = state => ({
  tackleBoxItemCount: getTackleBox(state).length,
});

export default connect(mapStateToProps, null)(CounterBadge);
