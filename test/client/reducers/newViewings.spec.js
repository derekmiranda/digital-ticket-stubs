import test from 'ava';

import newViewings from 'reducers/newViewings';
import viewings, { viewing } from 'reducers/viewings';
import { editNewViewing, addNewViewing } from 'actions/creators';

test("Defaults to viewings' default state", t => {
  t.deepEqual(newViewings(), viewings());
})

test('Can edit new viewing', t => {
  const expected = newViewings([{ id: 1 }], editNewViewing({
    id: 1,
    key: 'title',
    val: 'Cowboy',
  }))

  t.deepEqual(expected, [{ id: 1, title: 'Cowboy' }]);
})

test('Can add new viewing', t => {
  const expected = newViewings([], addNewViewing())

  t.deepEqual(expected, [{ id: 1, ...viewing() }]);
})