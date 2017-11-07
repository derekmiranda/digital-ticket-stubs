import { EDIT_WATCHTIME } from 'actions/types';

const watchtime = (state = {}, action = {}) => {
	switch (action.type) {
		case EDIT_WATCHTIME:
			return {
				...state,
				[action.timeUnit]: Number(action.val),
			}
		default:
			return state;
	}
}

export default watchtime