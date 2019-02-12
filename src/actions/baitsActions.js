import API from '../utils/api_utils';

export const FETCH_BAITS_SUCCESS = 'FETCH_BAITS_SUCCESS';

export const fetchBaitsSuccess = payload => ({
  type: FETCH_BAITS_SUCCESS,
  payload,
});

export const fetchBaits = () => dispatch => (
  API.fetchBaits()
    .then(payload => dispatch(fetchBaitsSuccess(payload.data)))
);
