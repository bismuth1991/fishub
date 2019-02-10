import React from 'react';
import { shallow, mount } from 'enzyme';
import { HashRouter, NavLink } from 'react-router-dom';

import GreetingBar from './GreetingBar';

describe('GreetingBar', () => {
  const props = {
    username: 'Bismuth',
    isAuthenticated: false,
    logOut: () => {},
  };

  it('renders without crashing', () => {
    shallow(<GreetingBar {...props} />);
  });

  describe('Not logged in', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<HashRouter><GreetingBar {...props} /></HashRouter>);
    });

    it('includes link to Log In', () => {
      const link = wrapper.find(NavLink).at(0);
      expect(link.html()).toBe('<a href="#/login">Log In</a>');
    });

    it('includes link to Sign Up', () => {
      const link = wrapper.find(NavLink).at(1);
      expect(link.html()).toBe('<a href="#/signup">Signup</a>');
    });
  });

  describe('Logged in', () => {
    let wrapper;
    const logOut = jest.fn();

    beforeEach(() => {
      wrapper = mount(
        <HashRouter>
          <GreetingBar username="Bismuth" isAuthenticated logOut={logOut} />
        </HashRouter>,
      );
    });

    it('display user\'s username', () => {
      expect(wrapper.contains('Bismuth')).toBe(true);
    });

    it('includes link/button to Log Out', () => {
      expect(wrapper.contains('Log Out')).toBe(true);
    });

    it('calls logout() when user clicks Log Out link/button', () => {
      wrapper.find('Log Out').simulate('click');
      expect(logOut).toBeCalled();
    });
  });
});
