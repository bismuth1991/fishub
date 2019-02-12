import { FETCH_ACTIVITIES_SUCCESS } from '../actions/activitiesActions';
import activitiesReducer from './activitiesReducer';
import { mockActivities } from '../__mocks__/mockActivities';

describe('activities reducer', () => {
  it('should return the initial state', () => {
    expect(activitiesReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_ACTIVITIES_SUCCESS', () => {
    expect(activitiesReducer({}, {
      type: FETCH_ACTIVITIES_SUCCESS,
      payload: mockActivities,
    }));
  });
});
