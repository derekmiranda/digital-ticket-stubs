import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Watchtime from './Watchtime';
import getReadableFieldName from 'client/utils/getReadableFieldName';

const renderTextField = ({ input, type, label, className }) => (
	<div className={className}>
		<h3>{label}</h3>
		<input type={type} {...input} />
	</div>
)

const Ticket = ({
	name,
	className = 'ticket',
	label = 'Ticket',
}) => {
	const fieldNameToInput = (fieldName, i) => {
		const readableFieldName = getReadableFieldName(fieldName); 
		return (
			<Field
				name={`${name}.${fieldName}`}	
				type='text'
				component={renderTextField}
				label={readableFieldName}
				className={fieldName}
				key={i}
			/>
		)
	}

	const textFields = ['title', 'venue'];
	const textInputs = textFields.map(fieldNameToInput);
	
	return (
		<div className={className}>
			<h2>{label}</h2>
			{textInputs}
			<Watchtime name={name} />
			<button type='button'>Save</button>
		</div>
	)
}

Ticket.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
}

export default Ticket;