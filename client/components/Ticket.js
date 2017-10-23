import React from 'react';
import PropTypes from 'prop-types';

import { viewingSchema } from 'schemas';
import getReadableFieldName from 'utils/getReadableFieldName';

const Ticket = ({ viewing = {}, className = 'ticket', onEdit }) => {
	const inputList = viewingToInputs({ viewing, onEdit });
	return (
		<div className={className}>
			{inputList}
		</div>
	)
}

Ticket.propTypes = {
	viewing: viewingSchema,
	onEdit: PropTypes.func,
	className: PropTypes.string,
}

const createOnChange = ({ editFn, id, key }) => event => editFn({
	id,
	key,
	val: event.target.value
})

function viewingToInputs({ viewing, onEdit }) {
	const fields = ['title', 'venue', 'watchtime'];
	const inputs = fields.map((field, i) => {
		
		const onChange = createOnChange({
			editFn: onEdit,
			id: viewing.id,
			key: field,
		})

		const val = viewing[field];
		const readableField = getReadableFieldName(field);

		return (
			<input type="text"
				onChange={onChange}
				placeholder={readableField}
				value={val}
				name={field}
				key={i}
			/>
		)
	})
	return inputs;
}

export default Ticket;