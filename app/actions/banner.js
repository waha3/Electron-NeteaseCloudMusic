import * as types from '../constants/ActionTypes.js';
import { fetchBanner } from '../api/otherApi.js';

function getBannerRequest() {
  return {
    type: types.FETCH_BANNER_REQUSEST
  };
}

function getBannerResponse(data) {
  return {
    type: types.FETCH_BANNER_RESPONSE,
    data
  };
}

function getBannerError(err) {
  return {
    type: types.FETCH_BANNER_ERROR,
    err
  };
}

export function getBanner() {
  return dispatch => {
    dispatch(getBannerRequest());
    fetchBanner()
      .then(res => {
        dispatch(getBannerResponse(res));
      })
      .catch(err => {
        dispatch(getBannerError(err));
      });
  };
}
