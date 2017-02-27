import * as types from '../constants/ActionTypes.js';

export function playlist(state={}, action) {
  switch (action.types) {
    case types.FETCH_PLAYLIST_REQUSEST:
      return state;
    case types.FETCH_PLAYLIST_RESPONSE:
      return { name: 'hanxin' };
    case types.FETCH_PLAYLIST_ERROR:
      return {...state, err};
    default:
      return state;
  }
}
