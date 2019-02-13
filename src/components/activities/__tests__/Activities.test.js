import React from 'react';
import { shallow } from 'enzyme';

import { mockActivitiesArray } from '../../../__mocks__/mockActivities';
import Activities from '../Activities';

describe('Activities', () => {
  jest.mock('../ActivitiesItem', () => 'ActivitiesItem');
  const fetchActivities = jest.fn();
  const props = {
    activities: mockActivitiesArray,
    isLoading: true,
    fetchActivities,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Activities {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render loadIcon initially', () => {
    expect(wrapper.find('.spinner')).toHaveLength(1);
  });

  it('should display correct amount of ActivitiesItem', () => {
    wrapper.setProps({ isLoading: false });
    expect(wrapper.find('[test-data="spinner"]')).toHaveLength(0);
    expect(wrapper.find('ActivitiesItem')).toHaveLength(props.activities.length);
  });
});
