import * as types from '../constants/ActionTypes.js';
import { fetchComments } from '../api';

function getCommentsRequest(id) {
  return {
    type: types.FETCH_COMMENTS_REQUSEST,
    id
  };
}

function getCommentsResponse(data) {
  return {
    type: types.FETCH_COMMENTS_RESPONSE,
    data
  };
}

function getCommentsError(err) {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    err
  };
}

export function getComments(id) {
  return dispatch => {
    dispatch(getCommentsRequest());
    fetchComments(id)
      .then(res => {
        dispatch(getCommentsResponse(res));
      })
      .catch(err => {
        dispatch(getCommentsError(err));
      });
  };
}
