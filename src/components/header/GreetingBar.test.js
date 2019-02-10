import React from 'react';
import { shallow, mount } from 'enzyme';
import { HashRouter, Link } from 'react-router-dom';

import GreetingBar from './GreetingBar';

describe('GreetingBar', () => {
  const logOut = jest.fn();
  const props = {
    username: 'Bismuth',
    isAuthenticated: false,
    logOut,
  };

  it('renders without crashing', () => {
    shallow(<GreetingBar {...props} />);
  });

  describe('Not logged in', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<HashRouter><GreetingBar {...props} /></HashRouter>);
    });

    it('should not display user\'s username', () => {
      expect(wrapper.contains('Bismuth')).toBe(false);
    });

    it('should not display Sign Out button', () => {
      expect(wrapper.contains('Sign Out')).toBe(false);
    });

    it('includes link to Log In', () => {
      const link = wrapper.find(Link).at(0);
      expect(link.html()).toBe('<a href="#/login">Log In</a>');
    });

    it('includes link to Sign Up', () => {
      const link = wrapper.find(Link).at(1);
      expect(link.html()).toBe('<a href="#/signup">Sign Up</a>');
    });
  });

  describe('Logged in', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <HashRouter>
          <GreetingBar username="Bismuth" isAuthenticated logOut={logOut} />
        </HashRouter>,
      );
    });

    it('should not display link to Log In and Sign Up', () => {
      expect(wrapper.find(Link)).toHaveLength(0);
    });

    it('display user\'s username', () => {
      expect(wrapper.contains('Bismuth')).toBe(true);
    });

    it('includes button to Sign Out', () => {
      expect(wrapper.contains('Sign Out')).toBe(true);
    });

    it('calls logOut() when user clicks Sign Out button', () => {
      wrapper.find('button').simulate('click');
      expect(logOut).toBeCalled();
    });
  });
});
