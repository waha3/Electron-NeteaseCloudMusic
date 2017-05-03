import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { songs } from './songs.js';
import { playlist } from './playlist.js';
import { comments } from './comments.js';
import { album } from './album.js';
import { lyric } from './lyric.js';
import { songdetail } from './songdetail.js';

const rootReducer = combineReducers({
  routing,
  songs,
  playlist,
  comments,
  album,
  lyric,
  songdetail
});

export default rootReducer;
