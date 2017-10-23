import React from 'react';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import { viewingSchema } from 'schemas';

const NewTicket = (props) => {
	return (
		<Ticket {...props} className="new-ticket" />
	)
}

export default NewTicket;