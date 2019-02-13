import React from 'react';
import { shallow } from 'enzyme';

import { TackleBox } from '../TackleBox';
import LeftPanel from '../LeftPanel';

describe('TackleBox', () => {
  jest.mock('../LeftPanel', () => 'LeftPanel');
  const props = {
    baits: [
      {
        id: 1,
        name: 'Fat Rap',
        category: 'Crankbait',
        image: 'fat-rap.png',
      },
      {
        id: 4,
        name: 'Mr. Mustache',
        category: 'Popper',
        image: 'mr-mustache.png',
      },
    ],
    isEmpty: false,
  };
  const initialState = {
    selectedBaitId: props.baits[0].id,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TackleBox {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('has correct initial state', () => {
    expect(wrapper.state()).toEqual(initialState);
  });

  it('has a LeftPanel component', () => {
    expect(wrapper.find('LeftPanel')).toHaveLength(1);
  });

  describe('Handling click on LeftPanel\'s item', () => {
    let secondItem;
    beforeEach(() => {
      secondItem = wrapper.find(LeftPanel).dive().find('li').at(1);
      secondItem.simulate('click');
      wrapper.update();
    });

    it('updates its current state', () => {
      expect(wrapper.state().selectedBaitId).toEqual(4);
    });

    it('toggles class to selected when user clicks on second item', () => {
      const updatedFirstItem = wrapper.find(LeftPanel).dive().find('li').at(0);
      const updatedSecondItem = wrapper.find(LeftPanel).dive().find('li').at(1);

      expect(updatedFirstItem.hasClass('selected')).toBe(false);
      expect(updatedSecondItem.hasClass('selected')).toBe(true);
    });
  });
});
