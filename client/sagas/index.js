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

import {
  START_TICKET_SUBMIT
} from '../actions/types';
import {
  ticketsFetchSucceeded,
  startTicketSubmit,
  stopTicketSubmit,
  ticketSubmitSucceeded,
} from '../actions/creators';
import { ticketsFormName } from 'client/constants';

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

function patchViewing() {

}

function postViewing() {

}

export function* saveViewing({
  viewing,
  index,
  viewingName,
}) {
  try {
    // if viewing has id, will assume that it's synced on the database
    // const saveMethod = viewing.id ? updateViewing : saveNewViewing;
    // const savedViewing = yield call(saveMethod, viewing);

    // simulate server latency
    yield delay(500);

    // yield put(change(ticketsFormName, viewingName, newViewing))
    yield put(ticketSubmitSucceeded(index))
  } catch (err) {
    yield put(stopTicketSubmit(index))
    console.error(err);
  }
}

function* watchStartTicketSubmit() {
  yield takeEvery(START_TICKET_SUBMIT, saveViewing);
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
    watchStartTicketSubmit(),
    // watchFetchData(),
    // watchRequestDeleteViewing()
  ];
}