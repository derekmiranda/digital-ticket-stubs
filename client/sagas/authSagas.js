import { call, takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { submitUser, loginUser } from '../services/userApi'
import { START_LOG_IN, START_REGISTER } from '../actions/types'

function* startUserSubmit(user) {
	
}

export function* watchStartRegister() {
	yield takeEvery(START_REGISTER, startUserSubmit);
}