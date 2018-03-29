import * as types from '../constants/ActionTypes.js';

export function getBannerRequest() {
  return {
    type: types.FETCH_BANNER_REQUSEST
  };
}

export function getBannerResponse(data) {
  return {
    type: types.FETCH_BANNER_RESPONSE,
    data
  };
}

export function getBannerError(err) {
  return {
    type: types.FETCH_BANNER_ERROR,
    err
  };
}