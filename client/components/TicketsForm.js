import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';

import TicketContainer from 'containers/TicketContainer';
import debug from 'client/utils/debug';

const renderTicketsForm = ({ fields, addTicket, handleSubmit, meta: { submitting, submitFailed } }) => {
	return (
		<div id='tickets-form'>
			<h1>Digital Ticket Stubs</h1>
			<input type='text' placeholder='Search for a movie...' id='search'/>
			<button type='button'>Search</button>
			<div>
				<button type='button'>Sort</button>
			</div>
			<ul>
				{fields.map((member, idx) => {
					return (
						<li key={idx}>
							<TicketContainer name={member} idx={idx} />
						</li>
					)
				})}
			</ul>
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
			{submitting && <p style={{color: 'mediumaquamarine'}}>Saving all stubs...</p>}
		</div>
	)
}

const TicketsForm = ({
	handleSubmit,
	loading,
	addTicket,
}) => {
	return (
		<form>
			{loading && <p style={{color: 'green'}}>Loading...</p>}
			<FieldArray 
				name='viewings'
				component={renderTicketsForm}
				props={{ addTicket, handleSubmit }}
			/>
		</form>
	)
}

TicketsForm.propTypes = {
	handleTicketSubmit: PropTypes.func,
}

export default TicketsForm;