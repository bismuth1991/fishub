import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header/Header';
import BaitsContainer from './baits/BaitsContainer';
import TackleBoxContainer from './tackle_box/TackleBox';
import ActivitiesContainer from './activities/ActivitiesContainer';
import LoginForm from './SessionForm/LoginForm';
import SignUpForm from './SessionForm/SignUpForm';

const App = () => (
  <div id="app">
    <Header />

    <div id="content">
      <Switch>
        <Route path="/baits" component={BaitsContainer} />
        <Route path="/tackle-box" component={TackleBoxContainer} />
        <Route path="/activities" component={ActivitiesContainer} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
      </Switch>
    </div>
  </div>
);

export default App;
