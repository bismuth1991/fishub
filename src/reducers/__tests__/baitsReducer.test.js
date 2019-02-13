import deepFreeze from 'deep-freeze';

import { FETCH_BAITS_SUCCESS } from '../../actions/baitsActions';
import baitsReducer from '../baitsReducer';
import { mockBaits } from '../../__mocks__/mockBaits';

describe('baits reducer', () => {
  it('should return the initial state', () => {
    expect(baitsReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_BAITS_SUCCESS', () => {
    const initialState = {};
    deepFreeze(initialState);

    expect(baitsReducer(initialState, {
      type: FETCH_BAITS_SUCCESS,
      payload: mockBaits,
    })).toEqual(mockBaits);
  });
});
