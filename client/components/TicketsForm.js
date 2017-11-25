import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';
import curry from 'lodash/curry';

import TicketContainer from 'containers/TicketContainer';
import getReadableFieldName from 'client/utils/getReadableFieldName';
import debug from 'client/utils/debug';

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

const createSortButton = curry(
	(handleChange, value) => (
		<button type='button'
			value={value}
			onClick={() => handleChange(value)}
		>
			{getReadableFieldName(value)}
		</button>
	)
)

const TicketsForm = ({
	handleSubmit,
	loading,
	addTicket,
	sortTickets,
}) => {
	const createSortButtonWithTarget = createSortButton(sortTickets); 
	const titleSortBtn = createSortButtonWithTarget('title');
	const venueSortBtn = createSortButtonWithTarget('venue');
	const watchtimeSortBtn = createSortButtonWithTarget('watchtime');

	const loadingMsg = (
		<p style={{color: 'green'}}>Loading...</p>
	)

	return (
		<form>
			<h1>Digital Ticket Stubs</h1>
			<div id='sort'>
				<p>Sort by:</p>
				{titleSortBtn}
				{venueSortBtn}
				{watchtimeSortBtn}
			</div>
			<div id='stub-btns'>
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
			</div>
			{loading && loadingMsg}
			<FieldArray 
				name='viewings'
				component={renderTicketsForm}
				props={{ handleSubmit }}
			/>
		</form>
	)
}

TicketsForm.propTypes = {
	handleTicketSubmit: PropTypes.func,
}

export default TicketsForm;