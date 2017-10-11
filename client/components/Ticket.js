import React from 'react';
import PropTypes from 'prop-types';

import { viewingSchema } from 'schemas';

const Ticket = ({ viewing }) => {
	return (
		<div>hi</div>
	)
}

Ticket.propTypes = {
	viewing: viewingSchema,
}

export default Ticket;