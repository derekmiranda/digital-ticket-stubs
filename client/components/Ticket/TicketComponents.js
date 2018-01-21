import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, getFormValues } from 'redux-form';
import styled from 'styled-components';

import Watchtime from './Watchtime';
import { ErrorMsg } from 'components/Icons';
import { isRequired } from 'validators';
import getReadableFieldName from 'client/utils/getReadableFieldName';

const Contents = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
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
					<ErrorMsg msg={error} style={{
					  right: 0,
						height: '2rem',
						width: '2rem',	
					}}/>
				}
			</Contents>
		</div>
	)
}