import React from 'react';
import PropTypes from 'prop-types';

import { viewingSchema } from 'schemas';
import getReadableFieldName from 'utils/getReadableFieldName';

const Ticket = ({ viewing = {} }) => {
	const inputList = viewingToInputs(viewing);
	return (
		<div>
			{inputList}
		</div>
	)
}

Ticket.propTypes = {
	viewing: viewingSchema,
}

function viewingToInputs(viewing) {
	const inputs = Object.keys(viewing).map((field, i) => {
		const val = viewing[field];
		const readableField = getReadableFieldName(field);
		return (
			<input type="text"
				placeholder={readableField}
				value={val}
			/>
		)
	})
	return inputs;
}

export default Ticket;