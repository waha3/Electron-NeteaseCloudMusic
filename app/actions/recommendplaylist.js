import * as types from '../constants/ActionTypes.js';
import { fetchRecommendPlaylist } from '../api/otherApi';

function getRecommendPlaylistRequest() {
  return {
    type: types.FETCH_RECOMMENDPLAYLIST_REQUSEST
  };
}

function getRecommendPlaylistResponse(data) {
  return {
    type: types.FETCH_RECOMMENDPLAYLIST_RESPONSE,
    data
  };
}

function getRecommendPlaylistError(err) {
  return {
    type: types.FETCH_RECOMMENDPLAYLIST_ERROR,
    err
  };
}

export function getRecommendPlaylist() {
  return dispatch => {
    dispatch(getRecommendPlaylistRequest());
    fetchRecommendPlaylist()
      .then(res => {
        dispatch(getRecommendPlaylistResponse(res));
      })
      .catch(err => {
        dispatch(getRecommendPlaylistError(err));
      });
  };
}
