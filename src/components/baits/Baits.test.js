import React from 'react';
import { shallow } from 'enzyme';

import { mockBaitsArray } from '../../mocks/mockBaits';
import Baits from './Baits';

describe('Baits', () => {
  jest.mock('./BaitItem', () => 'BaitItem');
  const addBait = jest.fn();
  const props = {
    baits: mockBaitsArray,
    isLoading: true,
    addBait,
  };

  it('renders without crashing', () => {
    shallow(<Baits {...props} />);
  });

  it('render loading icon initially', () => {
    const wrapper = shallow(<Baits {...props} />);
    expect(wrapper.find('.spinner')).toHaveLength(1);
  });

  it('display correct amount of BaitItems', () => {
    const wrapper = shallow(<Baits {...props} isLoading={false} />);
    expect(wrapper.find('BaitItem')).toHaveLength(props.baits.length);
  });
});
