import { FETCH_BAITS_SUCCESS } from '../actions/baitsActions';
import baitsReducer from './baitsReducer';
import { mockBaits } from '../mocks/mockBaits';

describe('baits reducer', () => {
  it('should return the initial state', () => {
    expect(baitsReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_BAITS_SUCCESS', () => {
    expect(baitsReducer({}, {
      type: FETCH_BAITS_SUCCESS,
      payload: mockBaits,
    })).toEqual(mockBaits);
  });
});
