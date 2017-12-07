import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';
import styled from 'styled-components';

import { AutofocusTextField, renderTextField } from './TicketComponents';
import Watchtime from './Watchtime';
import SearchResults from 'components/SearchResults';
import { isRequired } from 'validators';
import getReadableFieldName from 'client/utils/getReadableFieldName';
import {
	forMobile,
	forDesktop,
} from 'client/utils/styleUtils';

const shadowDist = 2;
const width = 400;
const height = 225;
const mobileWidth = 320;
const mobileHeight = 180;

const StyledTicket = styled.div`
	box-sizing: border-box;

	${forMobile(`
		width: ${mobileWidth}px;
		height: ${mobileHeight}px;
		background-size: ${mobileWidth}px ${mobileHeight}px;
		margin: 0;
	`)}

	${forDesktop(`
		width: ${width}px;
		height: ${height}px;
		background-size: ${width}px ${height}px;
		margin: 20px;
	`)}

	background-color: rgba(0,0,0,0);
	background-image: url("assets/ticket.png");
	background-position: center;
	background-repeat: no-repeat;
	display: inline-block;	
	padding: 10px;
	box-shadow: ${shadowDist}px ${shadowDist}px 10px #888888;
	font-size: 80%;

	h1 {
		margin-top: 0;
		margin-bottom: 0;
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