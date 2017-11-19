import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';
import curry from 'lodash/curry';

import TicketContainer from 'containers/TicketContainer';
import debug from 'client/utils/debug';
import getReadableFieldName from 'client/utils/getReadableFieldName';

const renderTicketsForm = ({
	fields,
	handleSubmit,
	meta: { submitting, submitFailed }
}) => {
	return (
		<div id='tickets-form'>
			<ul>
				{fields.map((member, idx) => {
					return (
						<li key={idx}>
							<TicketContainer name={member} idx={idx} />
						</li>
					)
				})}
			</ul>
			{submitting && <p style={{color: 'mediumaquamarine'}}>Saving all stubs...</p>}
		</div>
	)
}

const createRadioInput = curry(
	(targetValue, handleChange, value) => (
		<label><input type='radio'
			value={value}
			checked={targetValue === value}
			onChange={() => handleChange(value)}
		/>
			{getReadableFieldName(value)}
		</label>
	)
)

const TicketsForm = ({
	handleSubmit,
	loading,
	addTicket,
	sortTickets,
}) => {
	const createRadioInputWithTarget = createRadioInput('title', sortTickets); 
	const titleRadio = createRadioInputWithTarget('title');
	const venueRadio = createRadioInputWithTarget('venue');
	const watchtimeRadio = createRadioInputWithTarget('watchtime');
	return (
		<form>
			<h1>Digital Ticket Stubs</h1>
			<input type='text' placeholder='Search for a movie...' id='search'/>
			<button type='button'>Search</button>
			<div id='sort'>
				<p>Sort by:</p>
				{titleRadio}
				{venueRadio}
				{watchtimeRadio}
			</div>
			{loading && <p style={{color: 'green'}}>Loading...</p>}
			<FieldArray 
				name='viewings'
				component={renderTicketsForm}
				props={{ handleSubmit }}
			/>
			<button
				type='button'	
				id='add-ticket'
				onClick={addTicket}
			>+ Add Stub</button>
			<button
				type='button'
				id='add-ticket'
				onClick={handleSubmit}
			>Save All Stubs</button>
		</form>
	)
}

TicketsForm.propTypes = {
	handleTicketSubmit: PropTypes.func,
}

export default TicketsForm;