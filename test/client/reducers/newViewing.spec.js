import test from 'ava';

import newViewing from 'reducers/newViewing';
import { editNewViewing } from 'actions/creators';

test('Default new viewing state', t => {
  t.deepEqual(newViewing(), {});
})

test('Can edit new viewing', t => {
  t.deepEqual(
    newViewing({}, editNewViewing('title', 'Cowboy')),
    { title: 'Cowboy'}
  )
})