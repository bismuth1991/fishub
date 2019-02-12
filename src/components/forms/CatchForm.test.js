import React from 'react';
import { mount } from 'enzyme';

import CatchForm from './CatchForm';

describe('CatchForm', () => {
  const logCatch = jest.fn();
  const props = {
    logCatch,
    baitId: 1,
  };

  const simulateSelect = (wrapper) => {
    wrapper.find('select').simulate('change', {
      target: { value: 'Walleye' },
    });
  };
  const simulateLengthInput = (wrapper) => {
    wrapper.find('[data-test="length-input"]').simulate('change', {
      target: { value: '10' },
    });
  };
  const simulateWeightInput = (wrapper) => {
    wrapper.find('[data-test="weight-input"]').simulate('change', {
      target: { value: '15' },
    });
  };

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CatchForm {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should handle change when selecting new species option', () => {
    simulateSelect(wrapper);
    expect(wrapper.find('select').props().value).toEqual('Walleye');
  });

  it('should handle change in length input', () => {
    simulateLengthInput(wrapper);
    expect(wrapper.find('[data-test="length-input"]').props().value).toEqual('10');
  });

  it('should handle change in weight input', () => {
    simulateWeightInput(wrapper);
    expect(wrapper.find('[data-test="weight-input"]').props().value).toEqual('15');
  });

  it('should call logCatch with the correct form data', () => {
    simulateSelect(wrapper);
    simulateLengthInput(wrapper);
    simulateWeightInput(wrapper);
    wrapper.find('form').simulate('submit');

    expect(logCatch).toBeCalledWith(props.baitId, {
      catch: {
        species: 'Walleye',
        length: '10',
        weight: '15',
      },
    });
  });
});
