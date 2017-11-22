import { WATCHTIME_VALID, WATCHTIME_WARN } from 'actions/types';
import { objWithoutKey } from 'client/utils/reducerUtils';

const watchtimeWarnings = (state = {}, action = {}) => {
	switch (action.type) {
		case WATCHTIME_WARN:
			return {
				...state,
				[action.index]: { message: action.message },
			}
		case WATCHTIME_VALID:
			return objWithoutKey(state, action.index);
		default:
			return state;
	}
}

export default watchtimeWarnings