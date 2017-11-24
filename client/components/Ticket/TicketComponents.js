import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';

import Watchtime from './Watchtime';
import { isRequired } from 'validators';
import getReadableFieldName from 'client/utils/getReadableFieldName';

export const TextFieldDecoration = ({
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

export const renderTextField = (props) => {
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

export class AutofocusTextField extends PureComponent {
	componentDidMount() {
		// don't focus if saved on db
		this.props.viewing && !(this.props.viewing.id) && this.textInput.focus();
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