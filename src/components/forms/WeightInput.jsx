import React from 'react';

const WeightInput = () => (
  <div className="col">
    <div className="input-group">
      <input
        className="form-control"
        type="number"
      />
      <div className="input-group-append">
        <span className="input-group-text">pounds</span>
      </div>
    </div>
  </div>
);

export default WeightInput;
