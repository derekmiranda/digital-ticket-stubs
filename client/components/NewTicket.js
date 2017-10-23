import React from 'react';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import { viewingSchema } from 'schemas';

const NewTicket = ({ viewing = {} }) => {
	return (
		<Ticket viewing={viewing} className="new-ticket" />
	)
}

NewTicket.propTypes = {
	viewing: viewingSchema,
}

export default NewTicket;