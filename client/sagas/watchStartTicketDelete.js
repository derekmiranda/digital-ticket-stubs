import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { arrayRemove } from 'redux-form';

import { ticketDeleteSucceeded } from 'actions/creators';
import { START_TICKET_DELETE } from 'actions/types';
import { removeViewing } from 'services/viewingsApi';
import { ticketsFormName } from 'client/constants';

function* deleteTicket(index, id) {
	if (!id) {
		yield put(arrayRemove(ticketsFormName, 'viewings', index));
	}

	try {
		yield call(removeViewing, id);
		yield put(ticketDeleteSucceeded(index));
		yield put(arrayRemove(ticketsFormName, 'viewings', index));
	} catch (err) {
		console.error(err);
	}
}

function* watchStartTicketDelete() {
	yield takeEvery(START_TICKET_DELETE, deleteTicket);
}

export default watchStartTicketDelete;