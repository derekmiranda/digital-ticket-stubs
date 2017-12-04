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
	@media (min-width: 600px) {
		width: 30em;
	}

	background-color: rgba(0,0,0,0);
	background-image: url("assets/ticket.png");
	background-size: 320px 180px;
	background-position: center;
	background-repeat: no-repeat;
	display: inline-block;	
	margin: 20px;
	padding: 10px;
	box-shadow: ${shadowDist}px ${shadowDist}px 10px #888888;
	font-size: 80%;

	h1 {
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
			<h1>{viewing.id ? 'Ticket Stub' : 'New Ticket Stub'}</h1>
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