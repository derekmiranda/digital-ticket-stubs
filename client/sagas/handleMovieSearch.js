import { take, race, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actionTypes } from 'redux-form';

import { searchWaitTime } from 'constants';

const { CHANGE, BLUR }  = actionTypes;

const changeActionWithMeta = (action) => (
  action.type === CHANGE && action.meta
)
const titleChangeAction = (action) => (
  changeActionWithMeta(action) && action.meta.field.includes('title')
)

function* waitToSearch() {
  yield call(delay, searchWaitTime);
  console.log('waited');
}

function* handleMovieSearch() {
  yield takeLatest(titleChangeAction, waitToSearch);
}

export default handleMovieSearch;