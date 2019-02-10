import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import preloadedState from './store/mockState';

import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore(preloadedState);

  ReactDOM.render(
    <Root store={store} />,
    root,
  );
});
