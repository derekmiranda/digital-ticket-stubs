import { take, race, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actionTypes } from 'redux-form';

import { searchForTitle } from 'services/searchApi';
import { searchWaitTime } from 'constants';

const { CHANGE }  = actionTypes;

const changeActionWithMeta = (action) => (
  action.type === CHANGE && action.meta
)
const titleChangeAction = (action) => (
  changeActionWithMeta(action) && action.meta.field.includes('title')
)

function* waitToSearch({ payload }) {
  yield call(delay, searchWaitTime);
  const results = yield searchForTitle(payload);
  console.log(results)
}

function* handleMovieSearch() {
  yield takeLatest(titleChangeAction, waitToSearch);
}

export default handleMovieSearch;