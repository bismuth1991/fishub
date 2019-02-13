import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';

import EmptyTackleBox from '../EmptyTackleBox';

describe('EmptyTackleBox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<HashRouter><EmptyTackleBox /></HashRouter>);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('displays a message to let user know it\'s empty', () => {
    expect(wrapper.contains('An empty tackle box catches no fish.')).toBe(true);
  });

  it('includes link to /baits', () => {
    expect(wrapper.containsMatchingElement(
      <a href="#/baits">Fill&#39;er Up!</a>,
    )).toBe(true);
  });
});
