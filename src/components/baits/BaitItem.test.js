import React from 'react';
import { shallow } from 'enzyme';

import BaitItem from './BaitItem';

describe('BaitItem', () => {
  const props = {
    name: 'Fat Rap',
    category: 'Crankbait',
    image: 'fat-rap.png',
  };

  it('renders witout crashing', () => {
    shallow(<BaitItem {...props} />);
  });

  describe('BaitItem information', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<BaitItem {...props} />); });

    it('displays the bait\'s name', () => {
      expect(wrapper.contains('Fat Rap')).toBe(true);
    });

    it('displays the bait\'s type', () => {
      expect(wrapper.contains('Crankbait')).toBe(true);
    });

    it('displays the bait\'s image', () => {
      expect(wrapper.containsMatchingElement(
        <img src="fat-rap.png" alt="Fat Rap" />,
      )).toBe(true);
    });
  });
});
