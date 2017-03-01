import * as types from '../constants/ActionTypes.js';

export function comments(state={}, action) {
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUSEST:
      return state;
    case types.FETCH_COMMENTS_RESPONSE:
      return {...state, ...action.data};
    case types.FETCH_COMMENTS_ERROR:
      return {...state, ...err};
    default:
      return state;
  }
}
