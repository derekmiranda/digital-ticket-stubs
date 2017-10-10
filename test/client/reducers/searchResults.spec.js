import test from 'ava';

import searchResults from 'reducers/searchResults';
import { fetchedSearchResults } from 'actions/creators';

const makeResults = () => [
	{
		"title": "The Room",
		"poster_path": "/zYM0l2XBkwxJQQBCmi9A6zEUJX0.jpg",
		"backdrop_path": "/mX7mlE1kaGohnSVDMSTlrvisYf7.jpg",
		"overview": "Amazing."
	},
]

test('Defaults to array', t => {
	t.deepEqual(searchResults(), []);
})

test('Should fill w/ search results', t => {
	const results = makeResults();
	const actualResults = searchResults([], fetchedSearchResults(results));
	t.deepEqual(
		actualResults,
		results
	)
})