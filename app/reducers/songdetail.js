import * as types from '../constants/ActionTypes.js';

export function songdetail(state = {
  albumPic: '',
  songName: '',
  albumName: '',
  singer: '',
  origin: ''
}, action) {
  switch (action.type) {
    case types.FETCH_DETAIL_REQUSEST:
      return state;
    case types.FETCH_DETAIL_RESPONSE:
      return {
        ...state,
        albumPic: action.data.songs[0].al.picUrl,
        albumName: action.data.songs[0].al.name,
        songName: action.data.songs[0].name,
        singer: action.data.songs[0].ar.name
      };
    default:
      return state;
  }
}
