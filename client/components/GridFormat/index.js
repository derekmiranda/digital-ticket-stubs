import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';

import TicketContainer from 'containers/TicketContainer';

const renderTickets = ({ fields }) => {
	return (
		<div id='tickets'>
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

const GridFormat = ({
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<FieldArray name='viewings' component={renderTickets} />
		</form>
	)
}

GridFormat.propTypes = {
	handleSubmit: PropTypes.func,
}

export default GridFormat;