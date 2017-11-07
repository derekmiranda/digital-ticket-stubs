import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { fetchViewings, saveNewViewing, removeViewing } from 'services/moviesApi';

/* Adjust */
import { FETCH_STARTED, CREATE_NEW_MOVIE, REQUEST_DELETE_MOVIE } from '../actions/types';
import {
  fetchSucceeded, 
  addViewing, 
  requestDeleteViewing, 
  deleteViewing,
  clearNewViewing,
} from '../actions/creators';
/*  */

export function* fetchData(action) {
  try {
    const movies = yield call(fetchViewings);
    yield put(fetchSucceeded(movies));
  } catch (err) {
    console.error(err);
  }
}

function* watchFetchData() {
  yield takeLatest(FETCH_STARTED, fetchData);
}

export function* postViewing({ movie }) {
  try {
    const newViewing = yield call(saveNewViewing, movie);
    yield put(addViewing(newViewing));
    yield put(clearNewViewing())
  } catch (err) {
    console.error(err);
  }
}

function* watchSaveNewViewing() {
  yield takeEvery(CREATE_NEW_MOVIE, postViewing);
}

export function* clearViewing({ movie, movieIdx }) {
  try {
    yield call(removeViewing, movie);
    yield put(deleteViewing(movieIdx));
  } catch (err) {
    console.error(err);
  }
}

function* watchRequestDeleteViewing() {
  yield takeEvery(REQUEST_DELETE_MOVIE, clearViewing);
}

export default function* rootSaga() {
  yield [watchFetchData(), watchSaveNewViewing(), watchRequestDeleteViewing()];
}