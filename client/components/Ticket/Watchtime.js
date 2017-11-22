import React from 'react';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';
import curry from 'lodash/curry';

import { normalizeMonth, createDayNormalizer, normalizeYear } from './normalizers';
import { capitalize } from 'client/utils/general';

const createTimeInputField = curry((handleChange, handleBlur, name, normalize) => {
	const label = capitalize(name);
	return (
		<div className={name}>
			<label>
				{label} <Field
					name={name}
					component='input'
					placeholder={label}
					type='number'
					normalize={normalize}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</label>
		</div>
	)
})

const Watchtime = ({
	name: watchtimeName,
	idx,
	handleChange,
	handleBlur,
	error,
	allTouched,
	clearValues,
}) => {
	const normalizeDay = createDayNormalizer(idx);
	const createTimeInputFieldWithHandlers = createTimeInputField(handleChange, handleBlur);
	const monthInput = createTimeInputFieldWithHandlers('month', normalizeMonth); 
	const dayInput = createTimeInputFieldWithHandlers('day', normalizeDay);
	const yearInput = createTimeInputFieldWithHandlers('year', normalizeYear);

	return (
		<FormSection name={watchtimeName} className='watchtime'>
			<h3>Watch Time</h3>
			{monthInput}
			{dayInput}
			{yearInput}
			<button type='button' onClick={clearValues}>Clear Time</button>
			{allTouched && error && <p style={{ color: 'red' }}>{error.message}</p>}
		</FormSection>
	)
}

Watchtime.propTypes = {
	name: PropTypes.string,
}

export default Watchtime;