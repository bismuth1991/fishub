import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header/Header';
import BaitsContainer from './baits/BaitsContainer';

const App = () => (
  <div id="app">
    <Header />

    <div id="content">
      <Switch>
        <Route path="/baits" component={BaitsContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
