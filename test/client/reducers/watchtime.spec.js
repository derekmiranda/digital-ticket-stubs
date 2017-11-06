import test from 'ava';

import watchtime from 'reducers/watchtime';
import { editWatchtime } from 'actions/creators';

const sampleDatetime = {
	month: 10,
	day: 25,
	year: 1992,
}

test('Watchtime change upon day change', t => {
	const editWatchtimeAction = editWatchtime({
		timeUnit: 'month',
		val: 11,
	})

	t.deepEqual(
		watchtime(sampleDatetime, editWatchtimeAction),
		{
			month: 11,
			day: 25,
			year: 1992,
		}
	)
})