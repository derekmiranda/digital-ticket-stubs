import {
	START_TICKET_SUBMIT,
	STOP_TICKET_SUBMIT
} from 'actions/types';
import { objWithoutKey } from 'client/utils/reducerUtils';

const submittingTickets = (state = {}, action = {}) => {
	switch (action.type) {
		case START_TICKET_SUBMIT:
			return {
				...state,
				[action.index]: true,
			}
		case STOP_TICKET_SUBMIT:
			return objWithoutKey(state, action.index);
		default:
			return state;
	}
}

export default submittingTickets;