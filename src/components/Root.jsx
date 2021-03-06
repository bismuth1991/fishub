import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { instanceOf } from 'prop-types';

import App from './App';

import '../assets/css/index.scss';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;

Root.propTypes = {
  store: instanceOf(Object).isRequired,
};
