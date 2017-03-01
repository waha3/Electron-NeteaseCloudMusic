import * as types from '../constants/ActionTypes.js';
import { fetchAlbum } from '../api';

function getAlbumRequest(id) {
  return {
    type: types.FETCH_ALBUM_REQUSEST,
    id
  };
}

function getAlbumResponse(data) {
  return {
    type: types.FETCH_ALBUM_RESPONSE,
    data
  };
}

function getAlbumError(err) {
  return {
    type: types.FETCH_ALBUM_ERROR,
    err
  };
}

export function getAlbum(id) {
  return dispatch => {
    dispatch(getAlbumRequest());
    fetchAlbum(id)
      .then(res => {
        dispatch(getAlbumResponse(res));
      })
      .catch(err => {
        dispatch(getAlbumError(err));
      });
  };
}
