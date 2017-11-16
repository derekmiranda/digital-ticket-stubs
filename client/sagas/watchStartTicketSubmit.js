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

function patchViewing() {

}

function postViewing() {

}

function* watchStartTicketSubmit() {
  yield takeEvery(START_TICKET_SUBMIT, saveViewing);
}

export default watchStartTicketSubmit;