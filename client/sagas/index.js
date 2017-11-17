import { all } from 'redux-saga/effects';

import watchStartTicketSubmit from './watchStartTicketSubmit';
import watchLoadTickets from './watchLoadTickets';
import watchStartTicketDelete from './watchStartTicketDelete';

export default function* rootSaga() {
  yield all([
    watchStartTicketSubmit(),
    watchLoadTickets(),
    // watchRequestDeleteViewing()
  ]);
}