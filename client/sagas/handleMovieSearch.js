import { call, takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actionTypes } from 'redux-form';

import { searchForTitle } from 'services/searchApi';
import { loadedSearchResults } from 'actions/creators';
import { getViewingsIndex } from 'client/utils/formUtils';
import { searchWaitTime } from 'constants';

const { CHANGE }  = actionTypes;

const changeActionWithMeta = (action) => (
  action.type === CHANGE && action.meta
)
const titleChangeAction = (action) => (
  changeActionWithMeta(action) && action.meta.field.includes('title')
)


function* waitToSearch({ meta: { field }, payload }) {
  yield call(delay, searchWaitTime);
  const results = yield searchForTitle(payload);
  const index = getViewingsIndex(field);
  yield put(loadedSearchResults(index, results));
}

function* handleMovieSearch() {
  yield takeLatest(titleChangeAction, waitToSearch);
}

export default handleMovieSearch;