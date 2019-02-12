import {
  FETCH_BAITS_SUCCESS,
  fetchBaitsSuccess,
} from './baitsActions';

describe('baitsActions', () => {
  it('it should create an action fetchBaitSuccess', () => {
    const payload = {};
    const expectedAction = {
      type: FETCH_BAITS_SUCCESS,
      payload,
    };
    expect(fetchBaitsSuccess(payload)).toEqual(expectedAction);
  });
});
