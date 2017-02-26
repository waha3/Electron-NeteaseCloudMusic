import * as types from '../constants/ActionTypes.js';
import { API } from '../api';

function fetchSongRequest (id) {
  return {
    type: types.FETCH_SONG_REQUSEST,
    id
  };
}

function fetchSongResponse (data) {
  return {
    type: types.FETCH_SONG_RESPONSE,
    data
  };
}

function fetchSongError(err) {
  return {
    type: types.FETCH_SONG_ERROR,
    err
  };
}


export function fetchSong () {
  return dispatch => {
    dispatch(fetchSongRequest());
    fetch(API)
      .then(res => {
        window.console.log(res);
        dispatch(fetchSongResponse());
      })
      .catch(err => {
        dispatch(fetchSongError(err));
      });
  };
}
