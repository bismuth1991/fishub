import { combineReducers } from 'redux';

import tackleBoxReducer from './tackleBoxReducer';
import baitsReducer from './baitsReducer';
import activitiesReducer from './activitiesReducer';

const entitiesReducer = combineReducers({
  baits: baitsReducer,
  tackleBox: tackleBoxReducer,
  activities: activitiesReducer,
});

export default entitiesReducer;
