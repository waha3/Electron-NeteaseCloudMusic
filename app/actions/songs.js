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


export function getSong() {
  return dispatch => {
    dispatch(getSongRequest());
    fetchSong(28285912)
      .then(res => {
        window.console.log(res);
        dispatch(getSongResponse());
      })
      .catch(err => {
        dispatch(getSongError(err));
      });
  };
}
