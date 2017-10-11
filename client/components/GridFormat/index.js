import React from 'react';
import PropTypes from 'prop-types';

import ViewingTicket from 'containers/ViewingTicket';
import { viewingSchema } from 'schemas';

const GridFormat = ({ viewings }) => {
	const tickets = viewings.map(
		viewing => <ViewingTicket viewing={viewing}/>
	)

	return (
		<div>
			{tickets}
		</div>
	)
}

GridFormat.propTypes = {
	viewings: PropTypes.arrayOf(viewingSchema),
}

export default GridFormat;