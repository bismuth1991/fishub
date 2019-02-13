import React from 'react';
import { mount } from 'enzyme';

import SignUpForm from '../SignUpForm';

describe('SignUpForm', () => {
  const signUp = jest.fn();
  const props = {
    signUp,
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
    wrapper = mount(<SignUpForm {...props} />);
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

  it('should have a button to signup', () => {
    expect(wrapper.find('button[data-test="signup"]')).toHaveLength(1);
  });

  it('should handle username input', () => {
    simulateUsernameInput(wrapper, 'Chuck Noris');
    expect(wrapper.find('[data-test="username"]').props().value).toEqual('Chuck Noris');
  });

  it('should handle password input', () => {
    simulatePasswordInput(wrapper, 'password');
    expect(wrapper.find('[data-test="password"]').props().value).toEqual('password');
  });

  it('should call signUp with correct form data', () => {
    simulateUsernameInput(wrapper, 'Chuck');
    simulatePasswordInput(wrapper, 'password');
    wrapper.find('form').simulate('submit');

    expect(signUp).toBeCalledWith({
      user: {
        username: 'Chuck',
        password: 'password',
      },
    });
  });

  it('should display error message when appropriate', () => {
    wrapper.setProps({
      children: <SignUpForm signUp={signUp} hasError error="Username cannot be blank" />,
    });

    expect(wrapper.contains('Username cannot be blank')).toBe(true);
  });
});
