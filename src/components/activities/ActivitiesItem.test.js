import React from 'react';
import { shallow } from 'enzyme';

import formatDate from '../../utils/formatDate';
import ActivitiesItem from './ActivitiesItem';

describe('ActivitiesItem', () => {
  const props = {
    id: 1,
    species: 'Walleye',
    weight: '4.0',
    length: '21.0',
    createdAt: '2019-02-10T03:50:43.066Z',
    bait: 'Rooster Tail',
    image: 'https://rocky-ravine-50852.herokuapp.com/assets/rooster-tail-b743cf9cac616ed01eaaa4347dfacab8c410a342d0fa4cb7f565384e9040e16c.png',
    username: 'walleyewhisperer',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ActivitiesItem {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should display the user\'s username', () => {
    expect(wrapper.contains(props.username)).toBe(true);
  });

  it('should display the correct date format', () => {
    expect(wrapper.contains(formatDate(props.createdAt))).toBe(true);
  });

  it('should display the bait\'s image', () => {
    expect(wrapper.containsMatchingElement(
      <img src={props.image} alt={props.bait} />,
    )).toBe(true);
  });

  it('should display the caught species', () => {
    expect(wrapper.contains(props.species)).toBe(true);
  });

  it('should display the catch\'s weight', () => {
    expect(
      wrapper.find('[test-data="weight"]').text().includes(props.weight),
    ).toBe(true);
  });

  it('should display the catch\'s length', () => {
    expect(
      wrapper.find('[test-data="length"]').text().includes(props.length),
    ).toBe(true);
  });
});
