import { call, takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actionTypes, formValueSelector } from 'redux-form';

import { searchForTitle } from 'services/searchApi';
import { loadedSearchResults } from 'actions/creators';
import { getViewingsIndex } from 'client/utils/formUtils';
import { searchWaitTime, ticketsFormName } from 'client/constants';

const { CHANGE, FOCUS }  = actionTypes;

const changeActionWithMeta = (action) => (
  action.type === CHANGE && action.meta
)
const titleChangeAction = (action) => (
  changeActionWithMeta(action) && action.meta.field.includes('title')
)
// const titleChangeOrFocus = (action) => {
//   return (
//     titleChangeAction(action) ||
//     action.type === FOCUS && 
//   )
// }

function* searchThruPayload(field, payload) {
  const results = yield searchForTitle(payload);
  const index = getViewingsIndex(field);
  yield put(loadedSearchResults(index, results));
}

function* waitToSearch({ meta: { field }, payload }, arg2) {
  yield call(delay, searchWaitTime);

  if (payload && payload.trim()) {
    yield searchThruPayload(field, payload)
  }
}

function* handleMovieSearch() {
  yield takeLatest(titleChangeAction, waitToSearch);
}

export default handleMovieSearch;