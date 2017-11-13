import React from 'react';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';

import getReadableFieldName from 'client/utils/getReadableFieldName';
import {
	createAscendingOptionsRange,
	createDescendingOptionsRange
} from './optionsRangeFns';

const createSelectRendererWithOptions = (options) => ({ input, meta: { pristine } }) => {
	// setting onBlur and onFocus to null since interfering w/ click events
	// source: https://github.com/erikras/redux-form/issues/860  
	return (
		<select {...input} onBlur={null} onFocus={null}>
			{options}
		</select>
	)
}

const createTimeSelectField = (name, options) => {
	const renderSelect = createSelectRendererWithOptions(options);
	return (
		<Field
			name={name}
			component={renderSelect}
			type='select'
		/>
	)
}

const Watchtime = ({ name: watchtimeName }) => {
	const monthSelect = createTimeSelectField(
		'month',
		createAscendingOptionsRange(1, 12, 'Month')
	)

	const daySelect = createTimeSelectField(
		'day',
		createAscendingOptionsRange(1, 30, 'Day')
	)
	
  const currYear = new Date().getFullYear();
	const yearOptions = createDescendingOptionsRange(currYear, 1920, 'Year');
	const yearSelect = createTimeSelectField(
		'year',
		yearOptions
	)

	return (
		<FormSection name={watchtimeName} className='watchtime'>
			<h3>Watch Time</h3>
			{monthSelect}
			{daySelect}
			{yearSelect}
		</FormSection>
	)
}

Watchtime.propTypes = {
	name: PropTypes.string,
}

export default Watchtime;