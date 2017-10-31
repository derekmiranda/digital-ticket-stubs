import React from 'react';
import PropTypes from 'prop-types';

import Watchtime from 'components/Watchtime';
import { viewingSchema } from 'schemas';
import getReadableFieldName from 'utils/getReadableFieldName';

const Ticket = ({ viewing = {}, className = 'ticket', label = 'Ticket', onEdit }) => {
	const inputList = viewingToInputs({ viewing, onEdit });
	return (
		<div className={className}>
			<h2 key="label">{label}</h2>
			{inputList}
			<button className="save-ticket">Save</button>
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
	const textFields = ['title', 'venue'];
	const textInputs = textFields.map(field => {
		
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
				className={field}
				key={field}
			/>
		)
	})

	const inputs = textInputs.concat(
		<Watchtime key="watchtime" datetime={viewing.watchtime} />
	)

	return inputs;
}

export default Ticket;