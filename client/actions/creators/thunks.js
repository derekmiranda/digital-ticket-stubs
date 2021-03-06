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
	stopTicketSubmit,
	ticketSave,
} from 'actions/creators';
import {
	ticketsFormName as formName
} from 'client/constants';
import debug from 'client/utils/debug';
import { emptyOrFilledWatchtime } from 'validators';
import { clearToken } from '../../auth'
import { loggedOut, startTicketsLoad } from './index';

export function ticketSubmit({
	viewing,
	lastValidWatchtime,
	errors,
	index,
	ticketFieldNames,
	ticketName,
	loggedIn,
}) {
	const getViewingWithValidWatchtime = (view, lastValidWt) => {
		return view && emptyOrFilledWatchtime(view.watchtime)
			? view
			: { ...view, watchtime: lastValidWt }
	}
	return (dispatch) => {
		// touch all fields within ticket
		dispatch(touch(formName, ...ticketFieldNames))

		if (!errors) {
			if (loggedIn) {
				dispatch(startTicketSubmit({
					viewing: getViewingWithValidWatchtime(viewing, lastValidWatchtime),
					index,
					ticketName
				}));
			} else {
				// save ticket
				dispatch(ticketSave(viewing.formId))
			}
		} else debug(errors)
	}
}

export function validateWatchtime(viewing, index) {
	return (dispatch) => {
		const wt = viewing.watchtime;
		if (!emptyOrFilledWatchtime(wt)) {
			dispatch({
				type: WATCHTIME_WARN,
				index,
				message: 'Must be completely filled out to save'
			})
		} else {
			dispatch({
				type: WATCHTIME_VALID,
				index,

				// for storing last valid watchtime
				watchtime: wt,
				formId: viewing.formId,
			})
		}
	}
}

export function clearWatchtime(fieldName) {
	return dispatch => dispatch(change(formName, `${fieldName}.watchtime`, null));
}

export function logOut() {
	return dispatch => {
		clearToken()
		dispatch(startTicketsLoad())
		dispatch(loggedOut())
	}
}