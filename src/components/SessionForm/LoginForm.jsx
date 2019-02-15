import React, { useState } from 'react';
import { func, bool, string } from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({ logIn, hasError, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    logIn({
      session: {
        username,
        password,
      },
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h2 className="text-center">Log In</h2>

          <h5 className="text-center">
            <Link to="/signup">Need an account?</Link>
          </h5>

          {hasError
            ? <p className="error">{error}</p>
            : null}

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
              data-test="login"
              className="btn btn-info btn-block"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

LoginForm.defaultProps = {
  error: null,
};

LoginForm.propTypes = {
  logIn: func.isRequired,
  hasError: bool.isRequired,
  error: string,
};

export default LoginForm;
