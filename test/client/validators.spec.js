import test from 'ava'

import { emptyOrFilledWatchtime } from 'client/validators'

test("Watchtime validator doesn't count incomplete watchtimes as valid", t => {
	t.falsy(emptyOrFilledWatchtime({
		day: 12,
		year: 2000,
	}))
})

test("Watchtime validator validates completely empty watchtimes", t => {
	t.truthy(emptyOrFilledWatchtime({}))
})

test("Watchtime validator validates completely filled watchtimes", t => {
	t.truthy(emptyOrFilledWatchtime({
		day: 12,
		month: 1,
		year: 1920,
	}))
})