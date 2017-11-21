import { WATCHTIME_VALID, WATCHTIME_ERROR } from 'actions/types';
import { objWithoutKey } from 'client/utils/reducerUtils';

const watchtimeErrors = (state = {}, action = {}) => {
	switch (action.type) {
		case WATCHTIME_ERROR:
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

export default watchtimeErrors