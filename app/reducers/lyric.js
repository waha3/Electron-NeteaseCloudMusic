import * as types from '../constants/ActionTypes.js';

export function lyric(state = {}, action) {
  switch (action.type) {
    case types.FETCH_LYRIC_REQUSEST:
      return {...state};
    case types.FETCH_LYRIC_RESPONSE:
      return {...state, ...action.data};
    default:
      return state;
  }
}
