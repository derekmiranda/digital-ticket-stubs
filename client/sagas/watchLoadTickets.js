import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { ticketsLoadSucceeded, ticketsLoadFailed } from 'actions/creators';
import { START_TICKETS_LOAD } from 'actions/types';
import { fetchViewings } from 'services/viewingsApi';
import getFormId from 'meta/getFormId';
import createBaseViewing from '../meta/createBaseViewing'
import { objWithoutKey } from 'client/utils/reducerUtils'

const baseData = () => objWithoutKey(createBaseViewing(), 'UserId')

function* loadTickets() {
	try {
		const loadedTickets = yield call(fetchViewings);
		const loadedTicketsWithFormIds = loadedTickets.map(ticket => ({
			...ticket,
			...baseData(),
		}))
		yield put(ticketsLoadSucceeded(loadedTicketsWithFormIds));
	} catch (err) {
		yield put(ticketsLoadFailed());
		console.error(err);
	}
}

function* watchLoadTickets() {
	yield takeLatest(START_TICKETS_LOAD, loadTickets);
}

export default watchLoadTickets;