import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';
import curry from 'lodash/curry';
import styled from 'styled-components';

import TicketContainer from 'containers/TicketContainer';
import getReadableFieldName from 'client/utils/getReadableFieldName';
import debug from 'client/utils/debug';

const StyledTicketsForm = styled.form`
	ul {
		padding: 0;
	}

	li {
		list-style: none;
	}

	.submitting {
		color: mediumaquamarine;
	}

	.loading {
		color: green;
	}
`

const StyledSorter = styled.div`

`

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
			{submitting && <p className='submitting'>Saving all stubs...</p>}
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
		<p className='loading'>Loading...</p>
	)

	return (
		<StyledTicketsForm>
			<div id='sort'>
				<strong>Sort by:</strong>
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
		</StyledTicketsForm>
	)
}

TicketsForm.propTypes = {
	handleTicketSubmit: PropTypes.func,
}

export default TicketsForm;