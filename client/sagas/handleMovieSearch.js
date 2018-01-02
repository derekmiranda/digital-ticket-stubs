import { call, takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actionTypes, formValueSelector } from 'redux-form';

import { searchForTitle } from 'services/searchApi';
import { loadedSearchResults } from 'actions/creators';
import { getViewingsIndex } from 'client/utils/formUtils';
import { searchWaitTime, ticketsFormName } from 'client/constants';
import { store } from 'client'

const { CHANGE, FOCUS }  = actionTypes;
const getFieldVal = formValueSelector(ticketsFormName) 

const changeActionWithMeta = (action) => (
  action.type === CHANGE && action.meta
)
const titleChangeAction = (action) => (
  changeActionWithMeta(action) && action.meta.field.includes('title')
)
const titleChangeOrFocus = (action) => {
  return (
    titleChangeAction(action) ||
    action.type === FOCUS && action.meta.field.includes('title')
  )
}

function* searchThruPayload(field, payload) {
  const results = yield searchForTitle(payload);
  const index = getViewingsIndex(field);
  yield put(loadedSearchResults(index, results));
}

function* searchOnFocus(field) {
  const titleVal = getFieldVal(store.getState(), field);
  if (!titleVal) return;

  const results = yield searchForTitle(titleVal);
  const index = getViewingsIndex(field);
  yield put(loadedSearchResults(index, results));
}

function* waitToSearch({ type, meta: { field }, payload }) {
  yield call(delay, searchWaitTime);

  if (payload && payload.trim()) {
    yield searchThruPayload(field, payload)
  } else if (type === FOCUS) {
    yield searchOnFocus(field)
  }
}

function* handleMovieSearch() {
  yield takeLatest(titleChangeOrFocus, waitToSearch);
}

export default handleMovieSearch;