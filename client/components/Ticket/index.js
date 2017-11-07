import React from 'react';
import PropTypes from 'prop-types';

import InputList from './InputList';
import { viewingSchema } from 'schemas';

const Ticket = ({
	viewing = {},
	className = 'ticket',
	label = 'Ticket',
	onEdit,
	onWatchtimeEdit,
}) => {
	return (
		<div className={className}>
			<h2 key="label">{label}</h2>
			<InputList
				viewing={viewing}
				onEdit={onEdit}
				onWatchtimeEdit={onWatchtimeEdit}
			/>
			<button className="save-ticket">Save</button>
		</div>
	)
}

Ticket.propTypes = {
	viewing: PropTypes.shape(viewingSchema),
	onEdit: PropTypes.func.isRequired,
	onWatchtimeEdit: PropTypes.func.isRequired,
	className: PropTypes.string,
	label: PropTypes.string,
}

export default Ticket;