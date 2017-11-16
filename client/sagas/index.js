import {
  call,
  put,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  fetchViewings,
  saveNewViewing,
  updateViewing,
  removeViewing
} from 'services/viewingsApi';

import {
  START_TICKET_SUBMIT
} from '../actions/types';
import {
  ticketsFetchSucceeded,
  startTicketSubmit,
  stopTicketSubmit,
  ticketSubmitSucceeded,
} from '../actions/creators';

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

export function* postViewing({
  viewing,
  index
}) {
  try {
    // if viewing has id, will assume that it's synced on the database
    const saveMethod = viewing.id ? 
    const newViewing = yield call(saveNewViewing, viewing);

    // simulate server latency
    yield delay(500);

    yield put(ticketSubmitSucceeded(index))
  } catch (err) {
    yield put(stopTicketSubmit(index))
    console.error(err);
  }
}

function* watchSaveViewing() {
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
  yield [
    watchSaveViewing(),
    // watchFetchData(),
    // watchRequestDeleteViewing()
  ];
}