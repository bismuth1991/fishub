import React from 'react';
import { shallow } from 'enzyme';

import LeftPanel from './LeftPanel';

describe('LeftPanel', () => {
  jest.mock('./LeftPanelItem', () => 'LeftPanelItem');
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
    selectedBaitId: undefined,
  };

  it('renders without crashing', () => {
    shallow(<LeftPanel {...props} />);
  });

  it('displays correct amount of bait\'s imgages', () => {
    const wrapper = shallow(<LeftPanel {...props} />);
    expect(wrapper.find('LeftPanelItem')).toHaveLength(props.baits.length);
  });

  it('selects the first item initially', () => {
    const wrapper = shallow(<LeftPanel {...props} />);

    expect(wrapper.find('li').at(0).hasClass('selected')).toBe(true);
    expect(wrapper.find('li').at(1).hasClass('selected')).toBe(false);
  });

  it('selects item base on selectedBaitId prop', () => {
    const wrapper = shallow(<LeftPanel {...props} selectedBaitId={4} />);

    expect(wrapper.find('li').at(0).hasClass('selected')).toBe(false);
    expect(wrapper.find('li').at(1).hasClass('selected')).toBe(true);
  });
});
