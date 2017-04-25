import * as types from '../constants/ActionTypes.js';
import { fetchSong } from '../api';

function getSongRequest (id) {
  return {
    type: types.FETCH_SONG_REQUSEST,
    id
  };
}

function getSongResponse (data) {
  return {
    type: types.FETCH_SONG_RESPONSE,
    data
  };
}

function getSongError(err) {
  return {
    type: types.FETCH_SONG_ERROR,
    err
  };
}


export function getSong(id) {
  return dispatch => {
    dispatch(getSongRequest());
    fetchSong(id)
      .then(res => {
        dispatch(getSongResponse(res));
      })
      .catch(err => {
        dispatch(getSongError(err));
      });
  };
}
