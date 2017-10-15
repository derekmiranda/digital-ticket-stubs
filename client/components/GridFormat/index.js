import React from 'react';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import NewTicket from 'components/NewTicket';
import { viewingSchema } from 'schemas';

const GridFormat = ({ viewings, newViewings }) => {
	const viewingsToTickets = (TicketType) => (viewing, i) => (
		<TicketType viewing={viewing} key={i} />
	)
	const tickets = viewings.map(viewingsToTickets(Ticket));
	const newTickets = newViewings.map(viewingsToTickets(NewTicket));

	return (
		<div>
			{tickets}
			<button id='add-viewing'>+ Add Viewing</button>
			{newTickets}
		</div>
	)
}

GridFormat.propTypes = {
	viewings: PropTypes.arrayOf(viewingSchema),
	newViewings: PropTypes.arrayOf(viewingSchema),
}

export default GridFormat;