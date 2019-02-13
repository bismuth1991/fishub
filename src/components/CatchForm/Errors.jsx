import React from 'react';
import { bool, arrayOf, string } from 'prop-types';

const Errors = ({ hasErrors, errors }) => (
  hasErrors
    ? (
      <div id="error-messages" data-test="errors">
        <ul>
          {errors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    )
    : null
);

Errors.defaultProps = {
  errors: null,
};

Errors.propTypes = {
  hasErrors: bool.isRequired,
  errors: arrayOf(string),
};

export default Errors;
