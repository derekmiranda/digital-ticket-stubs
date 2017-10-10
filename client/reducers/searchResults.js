import { FETCHED_SEARCH_RESULTS } from 'actions/types';

const searchResults = (state = [], action = {}) => {
	switch (action.type) {
		case FETCHED_SEARCH_RESULTS:
			return action.results;
		default:
			return state;
	}
}

export default searchResults;