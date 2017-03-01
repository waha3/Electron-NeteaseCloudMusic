import * as types from '../constants/ActionTypes.js';

export function album(state={}, action) {
  switch (action.type) {
    case types.FETCH_ALBUM_REQUSEST:
      return state;
    case types.FETCH_ALBUM__RESPONSE:
      return {...state, ...action.data};
    case types.FETCH_ALBUM_ERROR:
      return {...state, ...err};
    default:
      return state;
  }
}
