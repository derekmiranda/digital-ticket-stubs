import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { change } from 'redux-form';
import {
  saveNewViewing,
  updateViewing,
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
  ticketName,
}) {
  try {
    // if viewing has id, will assume that it's synced on the database
    if (viewing.id) {
      yield call(updateViewing, viewing);
    } else {
      const createdViewing = yield call(saveNewViewing, viewing);
      // add id from database to viewing
      yield put(change(ticketsFormName, `${ticketName}.id`, createdViewing.id));
    }
    yield put(ticketSubmitSucceeded(index))
  } catch (err) {
    yield put(stopTicketSubmit(index))
    console.error(err);
  }
}

function* watchStartTicketSubmit() {
  yield takeEvery(START_TICKET_SUBMIT, saveViewing);
}

export default watchStartTicketSubmit;