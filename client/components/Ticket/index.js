import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';
import styled from 'styled-components';

import Watchtime from './Watchtime';
import SearchResults from 'components/SearchResults';
import { VenueField, TitleField, SaveButton } from 'components/styled/StyledTicketComponents';
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
	searchMovies,
	idx,
}) => {
	const handleKeyUp = (event) => {
		if (event.key === 'Enter') {
			handleTicketSubmit();
		}
	}

	return (
		<div className={className} onKeyUp={handleKeyUp}>
			<Field
				name={`${name}.venue`}
				type='text'
				component={VenueField}
				placeholder='Venue'
				className='venue'
			/>
			<Field
				name={`${name}.title`}
				type='text'
				component={TitleField}
				placeholder='Movie Title'
				className='title'
				validate={isRequired}
			/>
			{searchMovies && (
				<SearchResults results={searchMovies} />
			)}
			<Watchtime name={`${name}.watchtime`}
				idx={idx}
				handleChange={validateWatchtime}
				handleBlur={validateWatchtime}
				allTouched={allWatchtimeTouched}
				clearValues={clearWatchtime}
				warning={watchtimeWarning}
			/>
			<SaveButton type='button' onClick={handleTicketSubmit}>Save</SaveButton>
			<button type='button' onClick={removeTicket}>Delete</button>
			{ticketSubmitting && <p style={{ color: 'mediumaquamarine' }}>Submitting Ticket...</p>}
		</div>
	)
}

Ticket.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
}

export default Ticket;