import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import mockAxios from 'axios';
import {
  RECEIVE_USER,
  receiveUser,
  logIn,
} from '../sessionActions';

const payload = { user: 'Bismuth' };
const expectedAction = {
  type: RECEIVE_USER,
  payload,
};

describe('receiveUser', () => {
  it('should create an action receiveuser', () => {
    expect(receiveUser(payload)).toEqual(expectedAction);
  });
});

describe('logIn', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares)({});
  const userData = {
    username: 'Bismuth',
    password: 'password',
  };

  describe('success', () => {
    beforeEach(async () => {
      mockAxios.post.mockImplementationOnce(() => Promise.resolve({
        data: { user: 'Bismuth' },
      }));
      await mockStore.dispatch(logIn(userData));
    });

    it('should make call to the api at /bait with user data', () => {
      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(mockAxios.post).toHaveBeenCalledWith('/session', userData);
      mockStore.clearActions();
    });

    it('should dispatch receiveUser action', () => {
      expect(mockStore.getActions()[0]).toEqual(expectedAction);
    });
  });
});
