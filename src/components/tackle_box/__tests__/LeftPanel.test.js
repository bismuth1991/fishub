import React from 'react';
import { shallow } from 'enzyme';

import LeftPanel from '../LeftPanel';

describe('LeftPanel', () => {
  jest.mock('../LeftPanelItem', () => 'LeftPanelItem');
  const switchBait = jest.fn();
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
    selectedBaitId: 4,
    switchBait,
  };

  it('renders without crashing', () => {
    shallow(<LeftPanel {...props} />);
  });

  it('displays correct amount of bait\'s imgages', () => {
    const wrapper = shallow(<LeftPanel {...props} />);
    expect(wrapper.find('LeftPanelItem')).toHaveLength(props.baits.length);
  });

  it('selects item base on selectedBaitId prop', () => {
    const wrapper = shallow(<LeftPanel {...props} />);

    expect(wrapper.find('li').at(0).hasClass('selected')).toBe(false);
    expect(wrapper.find('li').at(1).hasClass('selected')).toBe(true);
  });

  it('call switchBait when bait\'s image is clicked', () => {
    const wrapper = shallow(<LeftPanel {...props} />);
    wrapper.find('li').at(0).simulate('click');

    expect(switchBait).toBeCalledWith(1);
  });
});
