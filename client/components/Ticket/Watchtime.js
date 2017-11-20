import React from 'react';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';
import curry from 'lodash/curry';

import { normalizeMonth, createDayNormalizer, normalizeYear } from './normalizers';
import { capitalize } from 'client/utils/general';

const renderInputWithBlur = ({ input, type, placeholder, handleBlur }) => {
	const customOnBlur = (...args) => {
		handleBlur(...args);
		return input.onBlur(...args);
	}
	return (
		<input {...input}
			type={type}
			onBlur={customOnBlur}
			placeholder={placeholder}
		/>
	)
}

const createTimeInputField = curry((handleBlur, name, normalize) => {
	const label = capitalize(name);
	return (
		<div className={name}>
			<label>
				{label} <Field
					name={name}
					component={renderInputWithBlur}
					placeholder={label}
					type='number'
					normalize={normalize}
					handleBlur={handleBlur}
				/>
			</label>
		</div>
	)
})

const Watchtime = ({
	name: watchtimeName,
	idx,
	handleBlur,
}) => {
	const normalizeDay = createDayNormalizer(idx);
	const createTimeInputFieldWithBlur = createTimeInputField(handleBlur);
	const monthInput = createTimeInputFieldWithBlur('month', normalizeMonth); 
	const dayInput = createTimeInputFieldWithBlur('day', normalizeDay);
	const yearInput = createTimeInputFieldWithBlur('year', normalizeYear);

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