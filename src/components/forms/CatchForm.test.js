import React from 'react';
import { mount } from 'enzyme';

import CatchForm from './CatchForm';

describe('CatchForm', () => {
  const logCatch = jest.fn();

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CatchForm logCatch={logCatch} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should handle change when selecting new species option', () => {
    wrapper.find('select').simulate('change', {
      target: { value: 'Walleye' },
    });
    expect(wrapper.find('select').props().value).toEqual('Walleye');
  });

  it('should handle change in length input', () => {
    wrapper.find('[data-test="length-input"]').simulate('change', {
      target: { value: '10' },
    });
    expect(wrapper.find('[data-test="length-input"]').text()).toEqual('10');
  });

  it('should handle change in weight input', () => {
    wrapper.find('[data-test="weight-input"]').simulate('change', {
      target: { value: '15' },
    });
    expect(wrapper.find('[data-test="weight-input"]').text()).toEqual('15');
  });
});
