import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';

import Root from './root';

const middlewares = [];
const mockStore = configureStore(middlewares);

xit('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore();

  ReactDOM.render(<Root store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
