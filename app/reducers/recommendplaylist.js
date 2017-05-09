import * as types from '../constants/ActionTypes.js';

export function recommendplaylist(state={}, action) {
  switch (action.type) {
    case types.FETCH_RECOMMENDPLAYLIST_REQUSEST:
      return state;
    case types.FETCH_RECOMMENDPLAYLIST_RESPONSE:
      return {...state, ...action.data};
    case types.FETCH_RECOMMENDPLAYLIST_ERROR:
      return {...state, ...err};
    default:
      return state;
  }
}
