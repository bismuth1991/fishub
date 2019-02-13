import React from 'react';
import { mount } from 'enzyme';

import { HashRouter } from 'react-router-dom';
import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  const logIn = jest.fn();
  const props = {
    logIn,
    hasError: false,
    error: null,
  };

  const simulateUsernameInput = (wrapper, value) => {
    wrapper.find('[data-test="username"]').simulate('change', {
      target: { value },
    });
  };
  const simulatePasswordInput = (wrapper, value) => {
    wrapper.find('[data-test="password"]').simulate('change', {
      target: { value },
    });
  };

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<HashRouter><LoginForm {...props} /></HashRouter>);
  });

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have a username input field', () => {
    expect(wrapper.containsMatchingElement(
      <input data-test="username" />,
    )).toBe(true);
  });

  it('should have a password input field', () => {
    expect(wrapper.containsMatchingElement(
      <input data-test="password" />,
    )).toBe(true);
  });

  it('should have a button to login', () => {
    expect(wrapper.find('button[data-test="login"]')).toHaveLength(1);
  });

  it('should handle username input', () => {
    simulateUsernameInput(wrapper, 'Chuck Noris');
    expect(wrapper.find('[data-test="username"]').props().value).toEqual('Chuck Noris');
  });

  it('should handle password input', () => {
    simulatePasswordInput(wrapper, 'password');
    expect(wrapper.find('[data-test="password"]').props().value).toEqual('password');
  });

  it('should call logIn with correct form data', () => {
    simulateUsernameInput(wrapper, 'Chuck');
    simulatePasswordInput(wrapper, 'password');
    wrapper.find('form').simulate('submit');

    expect(logIn).toBeCalledWith({
      user: {
        username: 'Chuck',
        password: 'password',
      },
    });
  });

  it('should display error message when appropriate', () => {
    wrapper.setProps({
      children: <LoginForm logIn={logIn} hasError error="Invalid Credentials" />,
    });

    expect(wrapper.contains('Invalid Credentials')).toBe(true);
  });
});
