import { getActivities } from './activitiesSelector';
import { mockActivities, mockActivitiesArray } from '../__mocks__/mockActivities';

describe('getActivities', () => {
  const mockState = {
    entities: {
      activities: mockActivities,
    },
  };

  it('should return an array of activitites', () => {
    const activities = getActivities(mockState);
    expect(activities).toEqual(mockActivitiesArray);
  });
});
