import { actionTypes } from 'redux-form';

import { LOADED_SEARCH_RESULTS, SORT_TICKETS } from 'actions/types';
import { getViewingsIndex } from 'client/utils/formUtils';

const { FOCUS } = actionTypes;

const searchResults = (state = {}, action = {}) => {
	switch (action.type) {
		case LOADED_SEARCH_RESULTS:
			return {
				...state,
				[action.index]: action.results,
			}
		case SORT_TICKETS:
			return {};
		case FOCUS: {
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