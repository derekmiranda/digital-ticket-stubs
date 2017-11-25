import { take, race, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actionTypes } from 'redux-form'; 

const { CHANGE: FORM_CHANGE }  = actionTypes;

const titleChangeActions = (action) => {
  return (
    action.type === FORM_CHANGE
    && action.meta
    && action.meta.field.includes('title')
  )
}

function* handleMovieSearch() {
  while (true) {
    const action = yield take(titleChangeActions);
    const { waited, change } = yield race({
      change: take(titleChangeActions),
      waited: call(delay, 2000)
    })
    if (waited) {
      console.log('2 seconds have passed since a change')
    }
  }
}

export default handleMovieSearch;