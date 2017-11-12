import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';

import TicketContainer from 'containers/TicketContainer';

const renderTicketsForm = ({ fields, meta: { error, touched } }) => {
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
			{touched && error &&
				<p style={{ color: 'orange' }}>Can't submit till errors resolved</p>
			}
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
				validate={(value) => console.log('Array validation', value)}
			/>
		</form>
	)
}

TicketsForm.propTypes = {
	handleSubmit: PropTypes.func,
}

export default TicketsForm;