import 'rxjs';
import { combineEpics } from 'redux-observable';
import MusicApi from '../api/api.js';
import * as ActionTypes from '../constants/ActionTypes.js';
import { ajax } from 'rxjs/observable/dom/ajax';
import { getBannerResponse } from '../actions/banner.js';

const getBanner = (action$) => {
  return action$
    .ofType(ActionTypes.FETCH_BANNER_REQUSEST)
    .switchMap(() =>
      // Observable.fromPromise(MusicApi.getBanner)
      ajax.getJSON(MusicApi.getBanner())
      .map(res => getBannerResponse(res))
    );
};

const rootEpic = combineEpics(
  getBanner
);

export default rootEpic;
