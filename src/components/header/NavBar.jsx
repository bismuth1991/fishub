import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  borderBottom: '2px solid #94d31b',
  opacity: 1,
};

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-secondary">
    <div className="container justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/baits"
            activeStyle={activeStyle}
          >
          Baits
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/tackle-box"
            activeStyle={activeStyle}
          >
          Tackle Box
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/activities"
            activeStyle={activeStyle}
          >
          Activities
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
