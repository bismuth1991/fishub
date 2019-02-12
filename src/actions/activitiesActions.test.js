import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import mockAxios from 'axios';
import { mockActivities } from '../__mocks__/mockActivities';
import {
  FETCH_ACTIVITIES_SUCCESS,
  fetchActivitiesSuccess,
  fetchActivites,
} from './activitiesActions';

const payload = mockActivities;
const expectedAction = {
  type: FETCH_ACTIVITIES_SUCCESS,
  payload,
};

describe('fetchActivitiesSuccess', () => {
  it('should create an action fetchActivitiesSuccess', () => {
    expect(fetchActivitiesSuccess(payload)).toEqual(expectedAction);
  });
});

describe('fetchActivities thunk action creator', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares)({});

  beforeEach(async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: mockActivities,
    }));
    await mockStore.dispatch(fetchActivites());
  });

  it('should make call to the api at /activity', () => {
    expect(mockAxios.get).toHaveBeenCalled(1);
    expect(mockAxios.get).toHaveBeenCalledWith('/activity');
    mockStore.clearAcions();
  });

  it('should dispatch fetchActivitiesSuccess action', () => {
    expect(mockStore.getActions()[0]).toEqual(expectedAction);
  });
});
