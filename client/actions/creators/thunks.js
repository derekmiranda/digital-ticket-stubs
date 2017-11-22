import {
	change,
	touch,
} from 'redux-form';

import {
	WATCHTIME_ERROR,
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
		if (wt &&
			// all or no watch time properties must be filled
			!(wt.month && wt.day && wt.year || !wt.month && !wt.day && !wt.year)
		) {
			dispatch({
				type: WATCHTIME_ERROR,
				index,
				message: 'Watch time must be filled out or empty'
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