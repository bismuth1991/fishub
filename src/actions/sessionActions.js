import API from '../utils/apiUtils';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload,
});

export const logIn = userData => dispatch => (
  API.createSession(userData)
    .then(payload => dispatch(receiveUser(payload.data)))
);
