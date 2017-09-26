import test from 'ava';

import movieViewingController from '../../server/controllers/movieViewingController';
import db from '../../models';
import { dbSetup } from '../../utils/tests';

dbSetup(test);

async function initMovieViewings(MovieViewing) {
  const movieViewings = [
    { id: 1, title: 'Star Wars' },
    { id: 2, title: 'Annie Hall' },
    { id: 3, title: 'Reservoir Dogs' },
  ]
  await MovieViewing.bulkCreate(movieViewings);
}

test.serial('can update multiple movieViewings', async t => {
  await initMovieViewings(db.MovieViewing);
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

test.serial('can get all movieViewings', async t => {
  await initMovieViewings(db.MovieViewing);
  const foundMovieViewings = await db.MovieViewing.findAll();
  const movieViewingTitles = foundMovieViewings.map(movieViewing => movieViewing.title);
  t.deepEqual(movieViewingTitles, ['Star Wars', 'Annie Hall', 'Reservoir Dogs']);
});

test.serial('can add movieViewing', async t => {
  await initMovieViewings(db.MovieViewing);
  await db.MovieViewing.create({ id: 4, title: 'The Room' });
  const foundMovieViewings = await db.MovieViewing.findAll();
  const movieViewingTitles = foundMovieViewings.map(movieViewing => movieViewing.title);
  t.deepEqual(movieViewingTitles, ['Star Wars', 'Annie Hall', 'Reservoir Dogs', 'The Room']);
});

test.serial('can remove movieViewing', async t => {
  await initMovieViewings(db.MovieViewing);
  await db.MovieViewing.destroy({ where: { title: 'Annie Hall' }});
  const foundMovieViewings = await db.MovieViewing.findAll();
  const movieViewingTitles = foundMovieViewings.map(movieViewing => movieViewing.title);
  t.deepEqual(movieViewingTitles, ['Star Wars', 'Reservoir Dogs']);
});