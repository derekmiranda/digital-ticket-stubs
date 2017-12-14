import {
	change,
	touch,
} from 'redux-form';

import {
	WATCHTIME_WARN,
	WATCHTIME_VALID
} from 'actions/types';
import {
	startTicketSubmit,
	stopTicketSubmit
} from 'actions/creators';
import {
	ticketsFormName as formName
} from 'client/constants';
import debug from 'client/utils/debug';
import { emptyOrFilledWatchtime } from 'validators';

export function ticketSubmit({
	viewing,
	errors,
	index,
	ticketFieldNames,
	ticketName,
}) {
	return (dispatch) => {
		// touch all fields within ticket
		dispatch(touch(formName, ...ticketFieldNames))

		if (!errors) {
			dispatch(startTicketSubmit({
				viewing,
				index,
				ticketName
			}));
		} else debug(errors)
	}
}

export function validateWatchtime(viewing, index) {
	return (dispatch) => {
		const wt = viewing.watchtime;
		if (emptyOrFilledWatchtime(wt)) {
			dispatch({
				type: WATCHTIME_WARN,
				index,
				message: 'Watch time must be completely filled out or will be cleared on save'
			})
		} else {
			dispatch({
				type: WATCHTIME_VALID,
				index,
			})
		}
	}
}

export function clearWatchtime(fieldName) {
	return dispatch => dispatch(change(formName, `${fieldName}.watchtime`, null));
}