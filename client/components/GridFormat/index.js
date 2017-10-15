import React from 'react';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import { viewingSchema } from 'schemas';

const GridFormat = ({ viewings }) => {
	const tickets = viewings.map(
		(viewing, i) => <Ticket viewing={viewing} key={i} />
	)

	return (
		<div>
			{tickets}
			<button id='add-viewing'>+ Add Viewing</button>
		</div>
	)
}

GridFormat.propTypes = {
	viewings: PropTypes.arrayOf(viewingSchema),
}

export default GridFormat;