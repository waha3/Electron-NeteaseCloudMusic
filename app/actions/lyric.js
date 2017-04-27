import * as types from '../constants/ActionTypes.js';
import { fetchLyric } from '../api';

function getLyricRequest(id) {
  return {
    type: types.FETCH_LYRIC_REQUSEST,
    id
  };
}

function getLyricResponse(data) {
  return {
    type: types.FETCH_LYRIC_RESPONSE,
    data
  };
}

function getLyricError(err) {
  return {
    type: types.FETCH_LYRIC_ERROR,
    err
  };
}

export function getLyric(id) {
  return dispatch => {
    dispatch(getLyricRequest());
    fetchLyric(id)
      .then(res => {
        dispatch(getLyricResponse(res));
      })
      .catch(err => {
        dispatch(getLyricError(err));
      });
  };
}
