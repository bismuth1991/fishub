import React from 'react';
import { string, func } from 'prop-types';

const LengthInput = ({ length, handleInputChange }) => (
  <div className="col">
    <div className="input-group">
      <input
        data-test="length-input"
        className="form-control"
        type="number"
        value={length}
        onChange={handleInputChange('length')}
      />
      <div className="input-group-append">
        <span className="input-group-text">inches</span>
      </div>
    </div>
  </div>
);

LengthInput.propTypes = {
  length: string.isRequired,
  handleInputChange: func.isRequired,
};

export default LengthInput;
