import React from 'react';
import { bool, arrayOf, string } from 'prop-types';

const Errors = ({ hasErrors, errors }) => (
  hasErrors ? (
    <div id="error-messages">
      <ul>
        {errors.map(error => (
          <li>{error}</li>
        ))}
      </ul>
    </div>
  ) : null
);

Errors.propTypes = {
  hasErrors: bool.isRequired,
  errors: arrayOf(string).isRequired,
};
