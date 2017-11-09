import React from 'react';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import NewTicket from 'components/NewTicket';
import { viewingSchema } from 'schemas';

const GridFormat = ({
	viewings,
	newViewings,
	addNewViewing,
	editViewing,
	editNewViewing
}) => {
	const tickets = viewings.map(Ticket);
	const newTickets = viewings.map(NewTicket);

	return (
		<form>
			{tickets}
			{newTickets}
			<button id='add-viewing' onClick={}>+ Add Viewing</button>
		</form>
	)
}

const viewingType = PropTypes.shape(viewingSchema);

GridFormat.propTypes = {
	viewings: PropTypes.arrayOf(viewingType),
	newViewings: PropTypes.arrayOf(viewingType),
	addNewViewing: PropTypes.func,
	editViewing: PropTypes.func,
}

export default GridFormat;