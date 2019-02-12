import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import Navbar from './NavBar';

describe('Navbar', () => {
  const middlewares = [];
  const initialState = {
    entities: {
      tackleBox: [],
    },
  };
  const mockStore = configureStore(middlewares)(initialState);

  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  describe('Links', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <Provider store={mockStore}>
          <HashRouter>
            <Navbar />
          </HashRouter>
        </Provider>,
      );
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
