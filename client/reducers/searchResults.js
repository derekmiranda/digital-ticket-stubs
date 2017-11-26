import { LOADED_SEARCH_RESULTS, SORT_TICKETS } from 'actions/types';

const searchResults = (state = {}, action = {}) => {
	switch (action.type) {
		case LOADED_SEARCH_RESULTS:
			return {
				...state,
				[action.index]: action.results,
			}
		case SORT_TICKETS:
			return {};
		default:
			return state;
	}
}

export default searchResults;