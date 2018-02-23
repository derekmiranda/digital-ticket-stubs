import { call, takeLatest, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { submitUser, loginUser } from '../services/userApi'
import {
  START_LOG_IN,
  START_REGISTER,
} from '../actions/types'
import { loginSucceeded, registerSucceeded } from '../actions/creators'
import { saveToken } from '../auth'

function createSubmitSaga({ submitFn, submitSuccessCreator }) {
	return function* (user) {
		try {
			const json = yield submitFn(user)
			yield call(saveToken, json.access_token)
			yield put(submitSuccessCreator())
		} catch (err) {
			throw err
		}
	}
}

const handleUserSubmit = createSubmitSaga({
	submitFn: submitUser,
	submitSuccessCreator: loginSucceeded,
})

const handleUserLogin = createSubmitSaga({
	submitFn: submitUser,
	submitSuccessCreator: loginSucceeded,
})

export function* watchStartRegister() {
  yield takeLatest(START_REGISTER, handleUserSubmit)
}

export function* watchStartLogin() {
  yield takeLatest(START_LOG_IN, handleUserLogin)
}
