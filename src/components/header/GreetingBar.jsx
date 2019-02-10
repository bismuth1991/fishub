import React from 'react';
import { Link } from 'react-router-dom';

const GreetingBar = ({ username, isAuthenticated, logOut }) => (
  <nav className="navbar navbar-expand navbar-primary">
    <div className="container">
      <i className="navbar-brand" />

      <ul className="navbar-nav">
        <li className="nav-item">
          <button type="button">Sign Out</button>
        </li>
        <li className="nav-item user">
          <i className="far fa-user" />
          {username}
        </li>

        <li className="nav-item">
          <Link to="/login">Log In</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Sign Up</Link>
        </li>

      </ul>
    </div>
  </nav>
);

export default GreetingBar;
