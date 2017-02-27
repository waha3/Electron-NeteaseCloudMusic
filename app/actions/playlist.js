import * as types from '../constants/ActionTypes.js';
import { fetchPlaylist } from '../api';

function getPlaylistRequest(id) {
  return {
    type: types.FETCH_PLAYLIST_REQUSEST,
    id
  };
}

function getPlaylistResponse(data) {
  return {
    type: types.FETCH_PLAYLIST_RESPONSE,
    data
  };
}

function getPlaylistError(err) {
  return {
    type: types.FETCH_PLAYLIST_ERROR,
    err
  };
}


export function getPlaylist(id) {
  return dispatch => {
    dispatch(getPlaylistRequest());
    fetchPlaylist(id)
      .then(res => {
        dispatch(getPlaylistResponse(res));
      })
      .catch(err => {
        dispatch(getPlaylistError(err));
      });
  };
}
