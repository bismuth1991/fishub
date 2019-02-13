import React from 'react';
import { mount } from 'enzyme';

import SignUpForm from '../SignUpForm';

describe('SignUpForm', () => {
  const signUp = jest.fn();
  const props = {
    signUp,
  };

  const simulateUsernameInput = (wrapper, value) => {
    wrapper.find('[data-test="username"]').simulateChange({
      target: { value },
    });
  };
  const simulatePasswordInput = (wrapper, value) => {
    wrapper.find('[data-test="password"]').simulateChange({
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
    expect(wrapper.hasMatchingElement(
      <input data-test="username" />,
    )).toBe(true);
  });

  it('should have a password input field', () => {
    expect(wrapper.hasMatchingElement(
      <input data-test="password" />,
    )).toBe(true);
  });

  it('should have a button to signup', () => {
    expect(wrapper.hasMatchingElement(
      <button type="submit" data-test="signup" />,
    )).toBe(true);
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

  it('should display error messages with invalid username/password', () => {
    simulateUsernameInput(wrapper, '');
    simulatePasswordInput(wrapper, '');
    wrapper.find('form').simulate('submit');

    expect(wrapper.find('[data-test="errrors"]')).toHaveLength(1);
  });
});
