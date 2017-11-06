import React from 'react';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import NewTicket from 'components/NewTicket';
import createTicketContainer from 'containers/createTicketContainer';
import { viewingSchema } from 'schemas';

const TicketContainer = createTicketContainer(Ticket, 'viewings');
const NewTicketContainer = createTicketContainer(NewTicket, 'newViewings');

const GridFormat = ({
	viewings,
	newViewings,
	addNewViewing,
	editViewing,
	editNewViewing
}) => {
	const viewingsToTickets = (TicketType) => (viewing, i) => (
		<TicketType viewing={viewing} key={i} />
	);
	
	const tickets = viewings.map(viewingsToTickets(TicketContainer));
	const newTickets = newViewings.map(viewingsToTickets(NewTicketContainer));

	return (
		<div>
			{tickets}
			{newTickets}
			<button id='add-viewing' onClick={addNewViewing}>+ Add Viewing</button>
		</div>
	)
}

GridFormat.propTypes = {
	viewings: PropTypes.arrayOf(viewingSchema),
	newViewings: PropTypes.arrayOf(viewingSchema),
	addNewViewing: PropTypes.func,
	editViewing: PropTypes.func,
}

export default GridFormat;