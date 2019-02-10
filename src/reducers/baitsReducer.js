import { mockBaits } from '../mocks/mockBaits';

const initialState = mockBaits;

const baitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default baitsReducer;
