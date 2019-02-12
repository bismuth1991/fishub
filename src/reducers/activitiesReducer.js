import { FETCH_ACTIVITIES_SUCCESS } from '../actions/activitiesActions';

const initialState = {};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default activitiesReducer;
