import { TICKETS_LOAD_SUCCEEDED } from 'actions/types';
import createBaseViewing from '../meta/createBaseViewing'

const initialViewings = (state = {}, action = {}) => {
	switch (action.type) {
		case TICKETS_LOAD_SUCCEEDED:
			return {
				viewings: action.loadedTickets.length
					? action.loadedTickets
					: [createBaseViewing()],
			}
		default:
			return state;
	}
}

export default initialViewings