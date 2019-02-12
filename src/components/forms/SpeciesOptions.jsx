import React from 'react';
import { string, func } from 'prop-types';

const speciesOptions = [
  'Rainbow Trout',
  'Brown Trout',
  'Lake Trout',
  'Largemouth Bass',
  'Smallmouth Bass',
  'Bluegill',
  'Walleye',
];

const SpeciesOptions = ({ species, handleInputChange }) => (
  <div className="col">
    <div className="input-group">
      <select
        className="form-control"
        value={species}
        onChange={handleInputChange('species')}
      >
        <option disabled value="">Species</option>
        {speciesOptions.map(option => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

SpeciesOptions.propTypes = {
  species: string.isRequired,
  handleInputChange: func.isRequired,
};

export default SpeciesOptions;
