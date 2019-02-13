import React, { useState } from 'react';
import { func, bool, string, arrayOf } from 'prop-types';
import { Link } from 'react-router-dom';
import Errors from '../CatchForm/Errors';

const SignUpForm = ({ signUp, hasErrors, errors }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp({
      user: {
        username,
        password,
      },
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h2 className="text-center">Sign Up</h2>

          <h5 className="text-center">
            <Link to="/login">Have an account?</Link>
          </h5>

          <Errors hasErrors={hasErrors} errors={errors} />

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                data-test="username"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                data-test="password"
                className="form-control"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              data-test="signup"
              className="btn btn-info btn-block"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

SignUpForm.defaultProps = {
  errors: null,
};

SignUpForm.propTypes = {
  signUp: func.isRequired,
  hasErrors: bool.isRequired,
  errors: arrayOf(string),
};

export default SignUpForm;
