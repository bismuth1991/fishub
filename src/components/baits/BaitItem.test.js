import React from 'react';
import { shallow, mount } from 'enzyme';

import { HashRouter } from 'react-router-dom';
import BaitItem from './BaitItem';

describe('BaitItem', () => {
  const addToTackleBox = jest.fn();
  const props = {
    id: 1,
    name: 'Fat Rap',
    category: 'Crankbait',
    image: 'fat-rap.png',
    isInTackleBox: false,
    addToTackleBox,
  };

  it('renders witout crashing', () => {
    shallow(<BaitItem {...props} />);
  });

  describe('BaitItem information', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<BaitItem {...props} />); });

    it('displays the bait\'s name', () => {
      expect(wrapper.contains(props.name)).toBe(true);
    });

    it('displays the bait\'s type', () => {
      expect(wrapper.contains(props.category)).toBe(true);
    });

    it('displays the bait\'s image', () => {
      expect(wrapper.containsMatchingElement(
        <img src={props.image} alt={props.name} />,
      )).toBe(true);
    });
  });

  describe('when not in tackle box', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<BaitItem {...props} />); });

    it('should not be in tackle box', () => {
      expect(wrapper.contains('In Tackle Box')).toBe(false);
    });

    it('displays a button to add to tackle box', () => {
      expect(wrapper.find('button').text()).toBe('Tackle Box');
    });

    it('calls addToTackleBox with its id when user clicks Tackle Box button', () => {
      wrapper.find('button').simulate('click');
      expect(addToTackleBox).toBeCalledWith(1);
    });
  });

  describe('when in tackle box', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <HashRouter>
          <BaitItem {...props} isInTackleBox />
        </HashRouter>,
      );
    });

    it('should not contain button to add to tackle box', () => {
      expect(wrapper.contains('Tackle Box')).toBe(false);
    });

    it('includes link to Tackle Box', () => {
      expect(wrapper.containsMatchingElement(
        <a href="#/tackle-box">In Tackle Box</a>,
      )).toBe(true);
    });
  });
});
