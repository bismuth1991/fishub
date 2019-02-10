import React from 'react';
import { Link } from 'react-router-dom';
import { string, bool, func } from 'prop-types';

const GreetingBar = ({ username, isAuthenticated, logOut }) => (
  <nav className="navbar navbar-expand navbar-primary">
    <div className="container">
      <i className="navbar-brand" />

      <ul className="navbar-nav">
        {isAuthenticated ? (
          <>
            <li className="nav-item">
              <button type="button" onClick={logOut}>Sign Out</button>
            </li>
            <li className="nav-item user">
              <i className="far fa-user" />
              {username}
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login">Log In</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  </nav>
);

GreetingBar.propTypes = {
  username: string.isRequired,
  isAuthenticated: bool.isRequired,
  logOut: func.isRequired,
};

export default GreetingBar;
