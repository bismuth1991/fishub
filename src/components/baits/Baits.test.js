import React from 'react';
import { shallow } from 'enzyme';

import { mockBaitsArray } from '../../mocks/mockBaits';
import Baits from './Baits';

describe('Baits', () => {
  const props = {
    baits: mockBaitsArray,
    isLoading: true,
  };

  it('renders without crashing', () => {
    shallow(<Baits {...props} />);
  });
});
