import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';

import { AutofocusTextField, renderTextField } from './TicketComponents';
import Watchtime from './Watchtime';
import { isRequired } from 'validators';
import getReadableFieldName from 'client/utils/getReadableFieldName';

const Ticket = ({
	name,
	className = 'ticket',
	viewing,
	allWatchtimeTouched,
	handleTicketSubmit,
	validateWatchtime,
	removeTicket,
	clearWatchtime,
	ticketSubmitting,
	watchtimeWarning,
	idx,
}) => {
	const handleKeyUp = (event) => {
		if (event.key === 'Enter') {
			handleTicketSubmit();
		}
	}

	return (
		<div className={className} onKeyUp={handleKeyUp}>
			<h2>{viewing.id ? 'Ticket Stub' : 'New Ticket Stub'}</h2>
			<Field
				name={`${name}.title`}	
				type='text'
				component={renderTextField}
				label='Movie Title'
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
			<Watchtime name={`${name}.watchtime`}
				idx={idx}
				handleChange={validateWatchtime}
				handleBlur={validateWatchtime}
				allTouched={allWatchtimeTouched}
				clearValues={clearWatchtime}
				warning={watchtimeWarning}
			/>
			<button type='button' onClick={removeTicket}>Delete</button>
			<button type='button' onClick={handleTicketSubmit}>Save</button>
			{ticketSubmitting && <p style={{color: 'mediumaquamarine'}}>Submitting Ticket...</p>}
		</div>
	)
}

Ticket.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
}

export default Ticket;