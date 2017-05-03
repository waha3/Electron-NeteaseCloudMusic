import * as types from '../constants/ActionTypes.js';
import { fetchDetail } from '../api';

function getSongDetailRequest (id) {
  return {
    type: types.FETCH_DETAIL_REQUSEST,
    id
  };
}

function getSongDetailResponse (data) {
  return {
    type: types.FETCH_DETAIL_RESPONSE,
    data
  };
}

function getSongDetailError(err) {
  return {
    type: types.FETCH_DETAIL_ERROR,
    err
  };
}


export function getSongDetail(id) {
  return dispatch => {
    dispatch(getSongDetailRequest());
    fetchDetail(id)
      .then(res => {
        dispatch(getSongDetailResponse(res));
      })
      .catch(err => {
        dispatch(getSongDetailError(err));
      });
  };
}
