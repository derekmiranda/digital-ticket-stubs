import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';
import styled from 'styled-components';

import Watchtime from './Watchtime';
import SearchResults from 'components/SearchResults';
import { VenueField, TitleField, SaveButton, DeleteButton } from 'components/styled/StyledTicketComponents';
import { isRequired } from 'validators';
import getReadableFieldName from 'client/utils/getReadableFieldName';
import { ticketMargin } from 'constants'

const ButtonContainer = styled.div`
	display: flex;
	position: absolute;
	top: ${ticketMargin};
	right: ${ticketMargin};
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
		<div className={className} onKeyUp={handleKeyUp}>
			<ButtonContainer>
				<SaveButton type='button' title='Save Ticket' onClick={handleTicketSubmit}>✔</SaveButton>
				<DeleteButton type='button' title='Delete Ticket' onClick={removeTicket}>✕</DeleteButton>
			</ButtonContainer>
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