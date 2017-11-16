import {
  change,
  touch,
} from 'redux-form';

import { startTicketSubmit, stopTicketSubmit } from 'actions/creators';
import { ticketsFormName as formName } from 'client/constants';
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
			debug('Viewing:', viewing);
			dispatch(startTicketSubmit({ viewing, index, ticketName }));
			// dispatch(change(formName, `${name}.id`, 1000))
		}
		else debug(errors)
	}
}