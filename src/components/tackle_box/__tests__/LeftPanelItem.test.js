import React from 'react';
import { shallow } from 'enzyme';

import LeftPanelItem from '../LeftPanelItem';

describe('LeftPanelItem', () => {
  const props = {
    name: 'Fat Rap',
    image: 'fat-rap.png',
  };

  it('renders without crashing', () => {
    shallow(<LeftPanelItem {...props} />);
  });

  it('displays the bait\'s image', () => {
    const wrapper = shallow(<LeftPanelItem {...props} />);

    expect(wrapper.containsMatchingElement(
      <img src={props.image} alt={props.name} />,
    )).toBe(true);
  });
});
