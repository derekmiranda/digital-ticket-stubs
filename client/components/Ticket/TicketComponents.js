import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';
import styled from 'styled-components';

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
				<p style={{ color: 'red' }}>{error}</p>
			}
		</div>
	)

export const renderTextField = (props) => {
	const {
		input,
		type,
		label,
		className,
		placeholder,
		meta: { touched, error },
	} = props;

	return (
		<TextFieldDecoration {...props}>
			<input type={type} placeholder={placeholder} {...input} />
		</TextFieldDecoration>
	)
}