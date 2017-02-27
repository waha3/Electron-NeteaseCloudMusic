import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { songs } from './songs.js';
import { playlist } from './playlist.js';

const rootReducer = combineReducers({
  routing,
  songs,
  playlist
});

export default rootReducer;
