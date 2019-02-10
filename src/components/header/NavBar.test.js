import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link, HashRouter } from 'react-router-dom';

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
      const link = wrapper.find(Link).at(0);
      expect(link.html()).toBe('<a href="#/baits">Baits</a>');
    });

    it('includes link to Tackle Box', () => {
      const link = wrapper.find(Link).at(1);
      expect(link.html()).toBe('<a href="#/tackle-box">Tackle Box</a>');
    });

    it('includes link to Activities', () => {
      const link = wrapper.find(Link).at(2);
      expect(link.html()).toBe('<a href="#/activities">Activities</a>');
    });
  });
});
