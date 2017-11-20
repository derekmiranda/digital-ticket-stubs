import React from 'react';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';

import { normalizeMonth, createDayNormalizer, normalizeYear } from './normalizers';
import { capitalize } from 'client/utils/general';

const createTimeInputField = (name, normalize) => {
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
				/>
			</label>
		</div>
	)
}

const Watchtime = ({
	name: watchtimeName,
	idx,
	handleWatchtimeBlur,
}) => {
	const normalizeDay = createDayNormalizer(idx);
	const monthInput = createTimeInputField('month', normalizeMonth); 
	const dayInput = createTimeInputField('day', normalizeDay);
	const yearInput = createTimeInputField('year', normalizeYear);

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