import { all, take } from 'redux-saga/effects';

import watchStartTicketSubmit from './watchStartTicketSubmit';
import watchLoadTickets from './watchLoadTickets';
import watchStartTicketDelete from './watchStartTicketDelete';
import handleMovieSearch from './handleMovieSearch';

export default function* rootSaga() {
  yield all([
    watchStartTicketSubmit(),
    watchLoadTickets(),
    watchStartTicketDelete(),
    handleMovieSearch()
  ]);
}