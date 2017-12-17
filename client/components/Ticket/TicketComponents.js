import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';
import styled from 'styled-components';

import Watchtime from './Watchtime';
import { isRequired } from 'validators';
import getReadableFieldName from 'client/utils/getReadableFieldName';

const Contents = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ErrorMsg = styled.span`
	position: absolute;
	color: red;
	right: 0;
`

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
		<div className={className}>
			<Contents>
				<input type={type} placeholder={placeholder} {...input}
					ref={(elem) => {
						if (elem) elem.width = Math.max(elem.scrollWidth, elem.offsetHeight)
					}}
				/>
				{touched && error &&
					<ErrorMsg title={error}>✕</ErrorMsg>
				}
			</Contents>
		</div>
	)
}