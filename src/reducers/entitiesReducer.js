import { combineReducers } from 'redux';

import tackleBoxReducer from './tackleBoxReducer';
import baitsReducer from './baitsReducer';

const entitiesReducer = combineReducers({
  baits: baitsReducer,
  tackleBox: tackleBoxReducer,
});

export default entitiesReducer;
