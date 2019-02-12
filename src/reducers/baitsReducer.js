// import { mockBaits } from '../mocks/mockBaits';
import { FETCH_BAITS_SUCCESS } from '../actions/baitsActions';

// const initialState = mockBaits;
const initialState = {};

const baitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BAITS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default baitsReducer;
