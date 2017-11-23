import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';

import Watchtime from './Watchtime';
import { isRequired } from 'validators';
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

class AutofocusTextField extends PureComponent {
	componentDidMount() {
		// don't focus if saved on db
		!(this.props.viewing && this.props.viewing.id) && this.textInput.focus();
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
	idx,
}) => {
	const handleKeyUp = (event) => {
		if (event.key === 'Enter') {
			handleTicketSubmit();
		}
	}

	return (
		<div className={className} onKeyUp={handleKeyUp}>
			<h2>{viewing.id ? 'Ticket Stub' : 'New Ticket Stub'}</h2>
			<Field
				name={`${name}.title`}	
				type='text'
				component={AutofocusTextField}
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
			<Watchtime name={`${name}.watchtime`}
				idx={idx}
				handleChange={validateWatchtime}
				handleBlur={validateWatchtime}
				allTouched={allWatchtimeTouched}
				clearValues={clearWatchtime}
				warning={watchtimeWarning}
			/>
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