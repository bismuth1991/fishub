import React from 'react';
import { shallow } from 'enzyme';

import formatDate from '../../utils/formatDate';
import ActivitiesItem from './ActivitiesItem';

describe('ActivitiesItem', () => {
  const fetchActivities = jest.fn();
  const props = {
    id: 1,
    species: 'Walleye',
    weight: '4.0',
    length: '21.0',
    created_at: '2019-02-10T03:50:43.066Z',
    bait: 'Rooster Tail',
    image: 'https://rocky-ravine-50852.herokuapp.com/assets/rooster-tail-b743cf9cac616ed01eaaa4347dfacab8c410a342d0fa4cb7f565384e9040e16c.png',
    username: 'walleyewhisperer',
    fetchActivities,
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
    expect(wrapper.contains(formatDate(props.created_at))).toBe(true);
  });

  it('should display the bait\'s image', () => {
    expect(wrapper.contaisMatchingElement(
      <img src={props.image} alt={props.bait} />,
    )).toBe(true);
  });

  it('should display the caught species', () => {
    expect(wrapper.contains(props.species)).toBe(true);
  });

  it('should display the catch\'s weight', () => {
    expect(wrapper.contains(props.weight)).toBe(true);
  });

  it('should display the catch\'s length', () => {
    expect(wrapper.contains(props.length)).toBe(true);
  });
});
