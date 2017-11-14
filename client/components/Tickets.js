import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';

import TicketContainer from 'containers/TicketContainer';
import debug from 'client/utils/debug';

const renderTicketsForm = ({ fields, submittingTickets, meta: { submitting, submitFailed } }) => {
	return (
		<div id='tickets-form'>
			<ul>
				{fields.map((member, idx) => {
					return (
						<li key={idx}>
							<TicketContainer name={member} idx={idx} submittingTickets={submittingTickets} />
						</li>
					)
				})}
			</ul>
			<button
				type='button'	
				id='add-ticket'
				onClick={() => fields.push({})}
			>+ Add Viewing</button>
			<button
				id='add-ticket'
			>Submit</button>
		</div>
	)
}

const TicketsForm = ({
	handleTicketSubmit,
}) => {
	return (
		<form onSubmit={handleTicketSubmit}>
			<FieldArray 
				name='viewings'
				component={renderTicketsForm}
				props={{
					submittingTickets: {
						0: true,
					}
				}}
			/>
		</form>
	)
}

TicketsForm.propTypes = {
	handleTicketSubmit: PropTypes.func,
}

export default TicketsForm;