import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';

import TicketContainer from 'containers/TicketContainer';
import debug from 'client/utils/debug';

const renderTicketsForm = ({ fields }) => {
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
			<button
				type='button'	
				id='add-ticket'
				onClick={() => fields.push({})}
			>+ Add Viewing</button>
		</div>
	)
}

const TicketsForm = ({
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<FieldArray 
				name='viewings'
				component={renderTicketsForm}
			/>
		</form>
	)
}

TicketsForm.propTypes = {
	handleSubmit: PropTypes.func,
}

export default TicketsForm;