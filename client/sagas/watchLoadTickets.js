import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { ticketsLoadSucceeded } from 'actions/creators';
import { START_TICKETS_LOAD } from 'actions/types';
import { fetchViewings } from 'services/viewingsApi';

function* loadTickets() {
	try {
		const loadedTickets = yield call(fetchViewings);
		yield put(ticketsLoadSucceeded, loadedTickets);
	} catch (err) {
		console.error(err);
	}
}

function* watchLoadTickets() {
	yield takeLatest(START_TICKETS_LOAD, loadTickets);
}

export default watchLoadTickets;