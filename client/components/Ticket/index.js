import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';
import styled from 'styled-components';

import { AutofocusTextField, renderTextField } from './TicketComponents';
import Watchtime from './Watchtime';
import SearchResults from 'components/SearchResults';
import { isRequired } from 'validators';
import getReadableFieldName from 'client/utils/getReadableFieldName';

const shadowDist = 2;
const StyledTicket = styled.div`
	padding: 10px;
	box-shadow: ${shadowDist}px ${shadowDist}px 10px #888888;

	h2 {
		margin-top: 0;
	}
`

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
	searchMovies,
	idx,
}) => {
	const handleKeyUp = (event) => {
		if (event.key === 'Enter') {
			handleTicketSubmit();
		}
	}

	return (
		<StyledTicket className={className} onKeyUp={handleKeyUp}>
			<h2>{viewing.id ? 'Ticket Stub' : 'New Ticket Stub'}</h2>
			<Field
				name={`${name}.title`}	
				type='text'
				component={renderTextField}
				label='Movie Title'
				className='title'
				validate={isRequired}
			/>
			{searchMovies && (
				<SearchResults results={searchMovies} />
			)}
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
		</StyledTicket>
	)
}

Ticket.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
}

export default Ticket;