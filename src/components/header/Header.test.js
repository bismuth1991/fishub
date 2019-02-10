import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  const props = {
    tackleBoxItemCount: 0,
    isAuthenticated: false,
    username: 'Bismuth',
  };

  it('renders without crashing', () => {
    shallow(<Header {...props} />);
  });
});
