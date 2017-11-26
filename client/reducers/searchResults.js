import { LOADED_SEARCH_RESULTS } from 'actions/types';

const searchResults = (state = {}, action = {}) => {
	switch (action.type) {
		case LOADED_SEARCH_RESULTS:
			return {
				...state,
				[action.index]: action.results,
			}
		default:
			return state;
	}
}

export default searchResults;