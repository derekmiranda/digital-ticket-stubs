import test from 'ava';

import viewings, { viewing } from 'reducers/viewings';
import {
  addViewing,
  removeViewing,
  editViewing,
  fetchedViewings,
} from 'actions/creators';

test('Viewings defaults to array', t => {
  t.deepEqual(viewings(), []);
})

test('Viewing defaults to array', t => {
  t.deepEqual(viewing(), {});
})

test('Can add new viewing to viewings', t => {
  const actual = viewings(undefined, addViewing({ id: 1 }));
  t.deepEqual(actual, [{ id: 1 }]);
})

test('Can remove viewing', t => {
  t.deepEqual(
    viewings([{ id: 1 }, { id: 3 }], removeViewing(1)),
    [{ id: 3 }]
  )
})

test('Can edit viewing', t => {
  t.deepEqual(
    viewings([{ id: 1 }, { id: 3 }], editViewing({
      id: 3,
      key: 'title',
      val: 'It',
    })),
    [
      { id: 1 },
      {
        id: 3,
        title: 'It',
      }]
  )
})

test('Will add fetched viewings', t => {
  t.deepEqual(
    viewings(undefined, fetchedViewings([{ id: 1 }, { id: 3 }])),
    [{ id: 1 }, { id: 3 }]
  )
})