import test from 'ava';

import { objWithoutKey } from 'client/utils/reducerUtils';
import { getTicketFields } from 'client/utils/formUtils';

const obj = {
	a: 1,
	0: 2,
	b: 3,
}

test('Object returned is not the same object', t => {
	t.not(obj, objWithoutKey(obj, 'a'))
	t.not(obj, objWithoutKey(obj, 0))
})

test('Removes key from obj', t => {
	t.deepEqual(
		objWithoutKey(obj, 'a'),
		{
			0: 2,
			b: 3,
		}
	)
})

test('Removes number key from obj', t => {
	t.deepEqual(
		objWithoutKey(obj, 0),
		{
			a: 1,
			b: 3,
		}
	)
})

test('getTicketFields() only returns strings that include the target string', t => {
	t.deepEqual(
		getTicketFields(['butts', 'butt', 'booty', 'yumbutt'], 'butt'),
		['butts', 'butt', 'yumbutt']
	)
})