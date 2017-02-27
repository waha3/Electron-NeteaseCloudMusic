import * as types from '../constants/ActionTypes.js';

export function songs(state={}, action) {
  switch (action.type) {
    case types.FETCH_SONG_REQUSEST:
      return state;
    case types.FETCH_SONG_RESPONSE:
      return {...state, ...action.data};
    case types.FETCH_SONG_ERROR:
      return {...state, err};
    default:
      return state;
  }
}
