import API from '../utils/apiUtils';

export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS';

export const fetchActivitiesSuccess = payload => ({
  type: FETCH_ACTIVITIES_SUCCESS,
  payload,
});

export const fetchActivities = () => dispatch => (
  API.fetchActivities()
    .then(payload => dispatch(fetchActivitiesSuccess(payload.data)))
);
