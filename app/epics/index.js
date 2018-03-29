import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
// import { banner } from '../reducers/banner.js';
import MusicApi from '../api/api.js';
import * as ActionTypes from '../constants/ActionTypes.js';
// import { ajax } from 'rxjs/observable/dom/ajax';


const getBanner = (action$) => {
  return action$
    .ofType(ActionTypes.FETCH_BANNER_REQUSEST)
    .switchMap(() =>
      Observable.fromPromise(MusicApi.getBanner)
    );
};

const rootEpic = combineEpics(
  getBanner
);

export default rootEpic;
