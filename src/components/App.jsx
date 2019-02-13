import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header/Header';
import BaitsContainer from './baits/BaitsContainer';
import TackleBoxContainer from './tackle_box/TackleBox';
import ActivitiesContainer from './activities/ActivitiesContainer';

const App = () => (
  <div id="app">
    <Header />

    <div id="content">
      <Switch>
        <Route path="/baits" component={BaitsContainer} />
        <Route path="/tackle-box" component={TackleBoxContainer} />
        <Route path="/activities" component={ActivitiesContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
