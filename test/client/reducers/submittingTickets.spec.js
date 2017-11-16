import test from 'ava';

import submittingTickets from 'reducers/submittingTickets';
import {
  startTicketSubmit,
  stopTicketSubmit,
} from 'actions/creators';

const someMovie = { title: 'Mud 2: Never Clean' };

test('Defaults to empty obj', t => {
  t.deepEqual(submittingTickets(), {});
})

test('Will set true at key of index passed in by start action', t => {
  const startAction = startTicketSubmit(someMovie, 2);
  t.deepEqual(
    submittingTickets(undefined, startAction),
    { 2: true }
  )
})

test('Will undefine at key of index passed in by stop action', t => {
  const stopAction = stopTicketSubmit(1);
  t.deepEqual(
    submittingTickets({ 1: true, 2: true }, stopAction),
    { 2: true }
  )
})