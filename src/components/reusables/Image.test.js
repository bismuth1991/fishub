import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

describe('Image', () => {
  const props = {
    name: 'mockName',
    image: 'mockUrl',
  };

  it('renders without crashing', () => {
    shallow(<Image {...props} />);
  });

  it('has correct src, and alt attributes', () => {
    const wrapper = shallow(<Image {...props} />);

    expect(wrapper.containsMatchingElement(
      <img src={props.image} alt={props.name} />,
    )).toBe(true);
  });

  it('can take in optional className attribute', () => {
    const wrapper = shallow(<Image {...props} className="mockClassName" />);

    expect(wrapper.containsMatchingElement(
      <img className="mockClassName" src={props.image} alt={props.name} />,
    )).toBe(true);
  });
});
