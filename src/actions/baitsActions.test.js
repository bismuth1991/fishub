import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import mockAxios from 'axios';
import { mockBaits } from '../__mocks__/mockBaits';
import {
  FETCH_BAITS_SUCCESS,
  fetchBaitsSuccess,
  fetchBaits,
} from './baitsActions';

const payload = mockBaits;
const expectedAction = {
  type: FETCH_BAITS_SUCCESS,
  payload,
};

describe('fetchBaitSuccess', () => {
  it('it should create an action fetchBaitSuccess', () => {
    expect(fetchBaitsSuccess(payload)).toEqual(expectedAction);
  });
});

describe('fetchBaits thunk action creator', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares)({});

  beforeEach(async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockBaits,
    }));
    await mockStore.dispatch(fetchBaits());
  });

  it('should make call to the api at /baits', () => {
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('/baits');
    mockStore.clearActions();
  });

  it('should dispatch fecthBaitsSuccess action', () => {
    expect(mockStore.getActions()[0]).toEqual(expectedAction);
  });
});
