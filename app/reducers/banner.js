import * as types from '../constants/ActionTypes.js';

export function banner(state = {
  banners: []
}, action) {
  switch (action.type) {
    case types.FETCH_BANNER_REQUSEST:
      return state;
    case types.FETCH_BANNER_RESPONSE:
      return {...state, ...action.data};
    case types.FETCH_BANNER_ERROR:
      return {...state, ...action.err};
    default:
      return state;
  }
}
