import {
	actionTypes
} from 'redux-form';

import {
	LOADED_SEARCH_RESULTS,
	SORT_TICKETS,
	TICKET_DELETE_SUCCEEDED,
	CLOSE_SEARCH,
	CHOOSE_MOVIE,
} from 'actions/types';
import {
	getViewingsIndex
} from 'client/utils/formUtils';

const {
	CHANGE,
	FOCUS
} = actionTypes;

const searchResults = (state = {}, action = {}) => {
	switch (action.type) {
		// clearing actions
		case TICKET_DELETE_SUCCEEDED:
		case SORT_TICKETS:
		case CHANGE:
		case CLOSE_SEARCH:
		case CHOOSE_MOVIE:
			return {};
		case LOADED_SEARCH_RESULTS:
			return {
				...state,
				[action.index]: action.results,
			}
		case FOCUS:
			{
				const focusedIndex = getViewingsIndex(action.meta.field);
				if (isNaN(focusedIndex)) {
					return {};
				}
				// clear results if focused on different ticket
				return state[focusedIndex] ? state : {};
			}
		default:
			return state;
	}
}

export default searchResults;