import React from 'react';


import logo from '../../assets/logo.svg';

const Logo = () => (
  <div className="brand">
    <img src={logo} className="logo" alt="Fishub" />
    <span className="name">Fishub</span>
  </div>
);

export default Logo;
