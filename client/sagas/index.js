import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { fetchViewings, saveNewViewing, removeViewing } from 'services/moviesApi';

/* Adjust */
import { START_TICKET_SUBMIT } from '../actions/types';
import {
  ticketsFetchSucceeded, 
  startTicketSubmit,
  ticketSubmitSucceeded
} from '../actions/creators';
/*  */

// export function* fetchData(action) {
//   try {
//     const movies = yield call(fetchViewings);
//     yield put(ticketsFetchSucceeded(movies));
//   } catch (err) {
//     console.error(err);
//   }
// }

// function* watchFetchData() {
//   yield takeLatest(FETCH_STARTED, fetchData);
// }

export function* postViewing({ movie }) {
  try {
    const newViewing = yield call(saveNewViewing, movie);
    yield put(startTicketSubmit(/* index */, newViewing));
    yield put(ticketSubmitSucceeded(/* index */))
  } catch (err) {
    console.error(err);
  }
}

function* watchSaveNewViewing() {
  yield takeEvery(START_TICKET_SUBMIT, postViewing);
}

// export function* clearViewing({ movie, movieIdx }) {
//   try {
//     yield call(removeViewing, movie);
//     yield put(deleteViewing(movieIdx));
//   } catch (err) {
//     console.error(err);
//   }
// }

// function* watchRequestDeleteViewing() {
//   yield takeEvery(REQUEST_DELETE_MOVIE, clearViewing);
// }

export default function* rootSaga() {
  yield [watchFetchData(), watchSaveNewViewing(), watchRequestDeleteViewing()];
}