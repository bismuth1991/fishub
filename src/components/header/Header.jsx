import React from 'react';

import NavBar from './NavBar';
import Logo from './Logo';
import GreetingBar from './GreetingBar';

const Header = props => (
  <>
    <GreetingBar />
    <Logo />
    <NavBar />
  </>
);

export default Header;
