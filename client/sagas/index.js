import { all } from 'redux-saga/effects';

import watchStartTicketSubmit from './watchStartTicketSubmit';
import watchLoadTickets from './watchLoadTickets';

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
  yield all([
    watchStartTicketSubmit(),
    watchLoadTickets(),
    // watchRequestDeleteViewing()
  ]);
}