import * as types from '../constants/ActionTypes.js';
import { mobileLogin } from '../api/otherApi.js';

function mobileLoginRequest() {
  return {
    type: types.FETCH_LOGIN_REQUSEST
  };
}

function mobileLoginResponse(data) {
  return {
    type: types.FETCH_LOGIN_RESPONSE,
    data
  };
}

function mobileLoginError(err) {
  return {
    type: types.FETCH_LOGIN_ERROR,
    err
  };
}

export function fetchMobileLogin(data) {
  return dispatch => {
    dispatch(mobileLoginRequest());
    mobileLogin(data)
      .then(res => {
        dispatch(mobileLoginResponse(res));
      })
      .catch(err => {
        dispatch(mobileLoginError(err));
      });
  };
}
