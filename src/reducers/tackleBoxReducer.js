import { ADD_BAIT } from '../actions/tackleBoxActions';

const initialState = [];

const tackleBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BAIT:
      return [
        ...state,
        action.baitId,
      ];
    default:
      return state;
  }
};

export default tackleBoxReducer;
