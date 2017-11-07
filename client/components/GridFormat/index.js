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
		<TicketType idx={i} key={i} />
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

const viewingType = PropTypes.shape(viewingSchema);

GridFormat.propTypes = {
	viewings: PropTypes.arrayOf(viewingType),
	newViewings: PropTypes.arrayOf(viewingType),
	addNewViewing: PropTypes.func,
	editViewing: PropTypes.func,
}

export default GridFormat;