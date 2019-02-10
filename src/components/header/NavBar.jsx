import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-secondary">
    <div className="container justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/baits">Baits</Link>
        </li>
        <li className="nav-item">
          <Link to="/tackle-box">Tackle Box</Link>
        </li>
        <li className="nav-item">
          <Link to="/activities">Activities</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
