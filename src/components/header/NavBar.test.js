import React from 'react';
import { shallow, mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  describe('Links', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<HashRouter><Navbar /></HashRouter>);
    });

    it('includes link to Baits', () => {
      expect(wrapper.containsMatchingElement(
        <a href="#/baits">Baits</a>,
      )).toBe(true);
    });

    it('includes link to Tackle Box', () => {
      expect(wrapper.containsMatchingElement(
        <a href="#/tackle-box">Tackle Box</a>,
      )).toBe(true);
    });

    it('includes link to Activities', () => {
      expect(wrapper.containsMatchingElement(
        <a href="#/activities">Activities</a>,
      )).toBe(true);
    });
  });
});
