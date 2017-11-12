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

const isNotGreatestMovie = val => val !== 'The Room'
	? 'Is not the greatest movie of all time'
	: undefined;
const isAwful = val => val === 'Emoji Movie' && "You're awful";
const Ticket = ({
	name,
	className = 'ticket',
	label = 'Ticket',
	ticketOnClick,
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
				validate={[isAwful, isNotGreatestMovie]}
			/> 
			<Field
				name={`${name}.venue`}	
				type='text'
				component={renderTextField}
				label='Venue'
				className='venue'
			/> 
			<Watchtime name={name} />
			<button type='button' onClick={ticketOnClick}>Save</button>
		</div>
	)
}

Ticket.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
}

export default Ticket;