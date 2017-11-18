import React from 'react';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';

import getReadableFieldName from 'client/utils/getReadableFieldName';
import {
	createAscendingOptionsRange,
	createDescendingOptionsRange
} from './optionsRangeFns';

const createTimeInputField = (name, normalize) => {
	return (
		<Field
			name={name}
			component='input'
			type='text'
			normalize={normalize}
		/>
	)
}

const Watchtime = ({ name: watchtimeName }) => {
	const monthInput = createTimeInputField('month', () => {}); 
	const dayInput = createTimeInputField('day', () => {});
	const yearInput = createTimeInputField('year', () => {});

	return (
		<FormSection name={watchtimeName} className='watchtime'>
			<h3>Watch Time</h3>
			{monthInput}
			{dayInput}
			{yearInput}
		</FormSection>
	)
}

Watchtime.propTypes = {
	name: PropTypes.string,
}

export default Watchtime;