import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';
import styled from 'styled-components';

import Watchtime from './Watchtime';
import { isRequired } from 'validators';
import getReadableFieldName from 'client/utils/getReadableFieldName';

export const TextFieldDecoration = ({
	className,
	children,
	meta: { touched, error },
}) => (
		<div className={className}>
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
			<input type={type} placeholder={placeholder} {...input}
				ref={(elem) => {
					if (elem) elem.width = Math.max(elem.scrollWidth, elem.offsetHeight)
				}}
			/>
		</TextFieldDecoration>
	)
}