import { ADD_BAIT } from '../actions/tackleBoxActions';
import tackleBoxReducer from './tackleBoxReducer';

describe('tackleBox reducer', () => {
  it('should returns the initial state', () => {
    expect(tackleBoxReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_BAIT', () => {
    expect(tackleBoxReducer([], {
      type: ADD_BAIT,
      baitId: 1,
    })).toEqual([1]);

    expect(tackleBoxReducer([2], {
      type: ADD_BAIT,
      baitId: 1,
    })).toEqual([2, 1]);
  });
});
