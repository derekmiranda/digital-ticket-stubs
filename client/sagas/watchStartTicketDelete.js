import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { arrayRemove } from 'redux-form';

import {
	ticketDeleteSucceeded,
	ticketDeleteFailed,
	removeTicket,
} from 'actions/creators';
import { START_TICKET_DELETE } from 'actions/types';
import { removeViewing } from 'services/viewingsApi';
import { ticketsFormName } from 'client/constants';

function* deleteTicket({ formId, id }) {
	if (!id) {
		yield put(removeTicket(formId));
	} else {
		try {
			yield call(removeViewing, id);
			yield put(ticketDeleteSucceeded(formId));
			yield put(removeTicket(formId));	
		} catch (err) {
			yield put(ticketDeleteFailed(formId));
			console.error(err);
		}
	}
}

function* watchStartTicketDelete() {
	yield takeEvery(START_TICKET_DELETE, deleteTicket);
}

export default watchStartTicketDelete;