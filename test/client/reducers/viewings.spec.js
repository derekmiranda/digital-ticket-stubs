import test from 'ava';

import viewings, { viewing } from 'reducers/viewings';
import {
  addViewing,
  removeViewing,
  editViewing,
  fetchedViewings,
} from 'actions/creators';

const sampleViewings = [
  { id: 1, title: "A Hard Day's Night" },
  { id: 3, title: "Yellow Submarine" },
]

test('Viewings defaults to array', t => {
  t.deepEqual(viewings(), []);
})

test('Viewing defaults to object', t => {
  t.deepEqual(viewing(), {});
})

test('Can add new viewing to viewings', t => {
  const sample = sampleViewings[0];
  const actual = viewings(undefined, addViewing(sample));
  t.deepEqual(actual, [sample]);
})

test('Can remove viewing', t => {
  t.deepEqual(
    viewings(sampleViewings, removeViewing(1)),
    sampleViewings.slice(1)
  )
})

test('Can edit viewing', t => {
  t.deepEqual(
    viewings(sampleViewings, editViewing({
      id: 3,
      key: 'title',
      val: 'Help!',
    })),
    [
      sampleViewings[0],
      {
        id: 3,
        title: 'Help!',
      }
    ]
  )
})

test('Will add fetched viewings', t => {
  t.deepEqual(
    viewings(undefined, fetchedViewings(sampleViewings)),
    sampleViewings
  )
})