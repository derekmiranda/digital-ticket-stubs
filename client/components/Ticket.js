import React from 'react';
import PropTypes from 'prop-types';

import Watchtime from 'components/Watchtime';
import { viewingSchema } from 'schemas';
import getReadableFieldName from 'client/utils/getReadableFieldName';
import timeValsToISOString from 'client/utils/timeValsToISOString';
import debug from 'client/utils/debug';

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
	viewing: PropTypes.shape(viewingSchema),
	onEdit: PropTypes.func.isRequired,
	className: PropTypes.string,
}

const createOnChange = ({ editFn, id, key }) => event => editFn({
	id,
	key,
	val: event.target.value
})

function viewingToInputs({ viewing, onEdit }) {
	
	function textFieldToInput(field) {
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
	}

	const textFields = ['title', 'venue'];
	const textInputs = textFields.map(textFieldToInput);

	const inputs = textInputs.concat(createWatchtime(viewing, onEdit));
	return inputs;
}

function createWatchtime(viewing, onEdit) {
	return (
		<Watchtime
			key="watchtime"
			{...viewing.watchtime}
		/>
	)
}

export default Ticket;