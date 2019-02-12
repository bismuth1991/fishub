import React from 'react';

const LengthInput = () => (
  <div className="col">
    <div className="input-group">
      <input
        data-test="length-input"
        className="form-control"
        type="number"
      />
      <div className="input-group-append">
        <span className="input-group-text">inches</span>
      </div>
    </div>
  </div>
);

export default LengthInput;
