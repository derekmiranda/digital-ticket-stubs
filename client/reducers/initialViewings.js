import { TICKETS_LOAD_SUCCEEDED } from 'actions/types';

const initialViewings = (state = {}, action = {}) => {
	switch (action.type) {
		case TICKETS_LOAD_SUCCEEDED:
			return {
				viewings: action.loadedTickets,
			}
		default:
			return state;
	}
}

export default initialViewings