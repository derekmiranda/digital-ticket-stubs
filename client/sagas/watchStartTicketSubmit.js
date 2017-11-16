import {
  call,
  put,
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
  startTicketSubmit,
  stopTicketSubmit,
  ticketSubmitSucceeded,
} from '../actions/creators';
import { ticketsFormName } from 'client/constants';

function* saveViewing({
  viewing,
  index,
  viewingName,
}) {
  try {
    // if viewing has id, will assume that it's synced on the database
    const saveMethod = viewing.id ? patchViewing : postViewing;
    const viewingId = yield saveMethod(viewing);

    // simulate server latency
    // yield delay(500);

    // yield put(change(ticketsFormName, viewingName, newViewing))
    console.log('Saved viewing', viewingId);
    yield put(ticketSubmitSucceeded(index, viewingId))
  } catch (err) {
    yield put(stopTicketSubmit(index))
    console.error(err);
  }
}

function* patchViewing(viewing) {
  const res = yield call(updateViewing, viewing);
  yield viewing.id;
}

function* postViewing(viewing) {
  const createdViewing = yield call(saveNewViewing, viewing);
  yield createdViewing.id;
}

function* watchStartTicketSubmit() {
  yield takeEvery(START_TICKET_SUBMIT, saveViewing);
}

export default watchStartTicketSubmit;