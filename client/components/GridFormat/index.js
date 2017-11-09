import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';

import Ticket from 'components/Ticket';
import NewTicket from 'components/NewTicket';

const GridFormat = ({
	handleSubmit,
	pristine
}) => {
	const createTicketsRender = (TicketType, id) => ({ fields }) => {
		return (
			<ul id={id}>
			{fields.map((member, index) => {
				return (
					<TicketType 
						name={member}
						key={index}
					/>
				)
			})}
			</ul>
		)
	}

	const Tickets = createTicketsRender(Ticket, 'ticket');
	const NewTickets = createTicketsRender(NewTicket, 'new-ticket');
	
	return (
		<form onSubmit={handleSubmit}>
			<FieldArray name='viewings' component={Tickets} />
			<FieldArray name='newViewings' component={NewTickets} />
			<button id='add-viewing' disabled={pristine}>+ Add Viewing</button>
		</form>
	)
}

const viewingType = PropTypes.shape(viewingSchema);

GridFormat.propTypes = {
	handleSubmit: PropTypes.func,
	pristine: PropTypes.bool,
}

export default GridFormat;