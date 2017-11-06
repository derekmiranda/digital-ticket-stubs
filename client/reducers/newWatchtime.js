import watchtime from './watchtime';
import { EDIT_WATCHTIME, EDIT_NEW_WATCHTIME } from 'actions/types';

const newWatchtime = (state = {}, action = {}) => {
	switch (action.type) {
		case EDIT_NEW_WATCHTIME:
			return watchtime(state, {
				...action,
				type: EDIT_WATCHTIME,
			})
		default:
			return state;
	}
}

export default newWatchtime