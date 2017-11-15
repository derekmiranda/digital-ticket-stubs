import React from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';

import Watchtime from './Watchtime';
import getReadableFieldName from 'client/utils/getReadableFieldName';

const renderTextField = ({
	input,
	type,
	label,
	className,
	meta: { touched, error },
}) => (
	<div className={className}>
		<h3>{label}</h3>
		<input type={type} {...input} />
		{touched && error &&
			<p style={{color: 'red'}}>{error}</p>
		}
	</div>
)

const isRequired = val => val ? undefined : 'Is required';

const Ticket = ({
	name,
	className = 'ticket',
	label = 'Ticket',
	startTicketSubmit,
	removeTicket,
	ticketSubmitting,
}) => {

	return (
		<div className={className}>
			<h2>{label}</h2>
			<Field
				name={`${name}.title`}	
				type='text'
				component={renderTextField}
				label='Title'
				className='title'
				validate={isRequired}
			/> 
			<Field
				name={`${name}.venue`}	
				type='text'
				component={renderTextField}
				label='Venue'
				className='venue'
			/> 
			<Watchtime name={`${name}.watchtime`} />
			<button type='button' onClick={removeTicket}>Delete</button>
			<button type='button' onClick={startTicketSubmit}>Save</button>
			{ticketSubmitting && <p>Submitting Ticket...</p>}
		</div>
	)
}

Ticket.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
}

export default Ticket;