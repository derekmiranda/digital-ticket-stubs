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

function* patchViewing(viewing) {
  const res = yield call(updateViewing, viewing);
  return viewing.id;
}

function* postViewing(viewing) {
  const createdViewing = yield call(saveNewViewing, viewing);
  return createdViewing.id;
}

function* saveViewing({
  viewing,
  index,
  ticketName,
}) {
  try {
    // if viewing has id, will assume that it's synced on the database
    const saveMethod = viewing.id ? patchViewing : postViewing;
    const viewingId = yield call(saveMethod, viewing);

    yield put(ticketSubmitSucceeded(index, viewingId))
    // add id from database to viewing
    yield put(change(ticketsFormName, `${ticketName}.id`, viewingId));
  } catch (err) {
    yield put(stopTicketSubmit(index))
    console.error(err);
  }
}

function* watchStartTicketSubmit() {
  yield takeEvery(START_TICKET_SUBMIT, saveViewing);
}

export default watchStartTicketSubmit;