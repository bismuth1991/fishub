import React from 'react';
import { shallow } from 'enzyme';

import TackleBoxItem from './TackleBoxItem';

describe('TackleBoxItem', () => {
  const props = {
    bait: {
      image: 'fat-rap.png',
      name: 'Fat Rap',
      category: 'Crankbait',
    },
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TackleBoxItem {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render an image of the selected bait', () => {
    expect(wrapper.containsMatchingElement(
      <img src={props.bait.image} alt={props.bait.name} />,
    )).toBe(true);
  });

  it('should display the bait\'s name', () => {
    expect(wrapper.contains(props.bait.name));
  });

  it('should display the bait\'s category', () => {
    expect(wrapper.contains(props.bait.category));
  });
});
