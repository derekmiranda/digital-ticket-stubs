import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';

import Watchtime from './Watchtime';
import getReadableFieldName from 'client/utils/getReadableFieldName';

const TextFieldDecoration = ({
	className,
	label,
	children,
	meta: { touched, error },
}) => (
	<div className={className}>
		<h3>{label}</h3>
		{children}	
		{touched && error &&
			<p style={{color: 'red'}}>{error}</p>
		}
	</div>
)

const renderTextField = (props) => {
	const {
		input,
		type,
		label,
		className,
		meta: { touched, error },
	} = props;

	return (
		<TextFieldDecoration {...props}>
			<input type={type} {...input}/>
		</TextFieldDecoration>
	)
}

class TextFieldWithRef extends PureComponent {
	componentDidMount() {
		this.textInput.focus();
	}

	render() {
		const { input, type } = this.props;
		return ( 
			<TextFieldDecoration {...this.props}>
				<input type={type}
					{...input}
					ref={(input) => this.textInput = input}
				/>
			</TextFieldDecoration>	
		)
	}
}

const isRequired = val => val ? undefined : 'Is required';

const Ticket = ({
	name,
	className = 'ticket',
	label = 'Ticket Stub',
	handleTicketSubmit,
	handleKeyUp,
	removeTicket,
	ticketSubmitting,
	idx,
}) => {
	return (
		<div className={className} onKeyUp={handleKeyUp}>
			<h2>{label}</h2>
			<Field
				name={`${name}.title`}	
				type='text'
				component={TextFieldWithRef}
				label='Movie Title'
				className='title'
				validate={isRequired}
			/> 
			<Field
				name={`${name}.venue`}	
				type='text'
				component={renderTextField}
				label='Venue'
				className='venue'
			/> 
			<Watchtime name={`${name}.watchtime`} idx={idx}/>
			<button type='button' onClick={removeTicket}>Delete</button>
			<button type='button' onClick={handleTicketSubmit}>Save</button>
			{ticketSubmitting && <p style={{color: 'mediumaquamarine'}}>Submitting Ticket...</p>}
		</div>
	)
}

Ticket.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
}

export default Ticket;