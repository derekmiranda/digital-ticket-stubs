import {
  call,
  put,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { change } from 'redux-form';
import {
  fetchViewings,
  saveNewViewing,
  updateViewing,
  removeViewing
} from 'services/viewingsApi';

import watchStartTicketSubmit from './watchStartTicketSubmit';

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

// 

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
  yield [
    watchStartTicketSubmit(),
    // watchFetchData(),
    // watchRequestDeleteViewing()
  ];
}