import test from 'ava';

import modalOpen from 'reducers/modalOpen';
import { focusViewing } from 'actions/creators';

test('Default focused viewing', t => {
  t.deepEqual(modalOpen(), null);
})

test('Can focus on a viewing', t => {
  t.deepEqual(modalOpen(undefined, focusViewing(2)), 2);
})