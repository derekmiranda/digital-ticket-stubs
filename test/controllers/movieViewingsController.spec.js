import test from 'ava';

import movieViewingController from '../../server/controllers/movieViewingController';
import db from '../../models';
import { dbSetup } from '../../utils/tests';

dbSetup(test);

const movieViewings = [
  { id: 1, title: 'Star Wars' },
  { id: 2, title: 'Annie Hall' },
  { id: 3, title: 'Reservoir Dogs' },
]

test('can update multiple movieViewings', async t => {
  await db.MovieViewing.bulkCreate(movieViewings)
  const updates = [
    { id: 1, title: 'Star War' },
    { id: 3, title: 'Reservoir Cats' },
  ]
  const updateResults = await movieViewingController.updateMovieViewings(updates);
  t.deepEqual(updateResults, [[1], [1]]);
  const foundMovieViewings = await db.MovieViewing.findAll();
  const movieViewingTitles = foundMovieViewings.map(movieViewing => movieViewing.title);
  t.deepEqual(movieViewingTitles, ['Star War', 'Annie Hall', 'Reservoir Cats']);
})

test.todo('can get all movieViewings');
test.todo('can add movieViewing');
test.todo('can remove movieViewing');