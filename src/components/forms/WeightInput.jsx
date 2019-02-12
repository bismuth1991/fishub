import React from 'react';
import { string, func } from 'prop-types';

const WeightInput = ({ weight, handleInputChange }) => (
  <div className="col">
    <div className="input-group">
      <input
        data-test="weight-input"
        className="form-control"
        type="number"
        value={weight}
        onChange={handleInputChange('weight')}
      />
      <div className="input-group-append">
        <span className="input-group-text">pounds</span>
      </div>
    </div>
  </div>
);

WeightInput.propTypes = {
  weight: string.isRequired,
  handleInputChange: func.isRequired,
};

export default WeightInput;
