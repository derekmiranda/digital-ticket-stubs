import React from 'react';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';
import styled from 'styled-components';
import curry from 'lodash/curry';

import { normalizeMonth, createDayNormalizer, normalizeYear } from './normalizers';
import { capitalize } from 'client/utils/general';
import { renderTextField } from './TicketComponents';
import { WatchtimeTextField } from 'components/styled/StyledTicketComponents';

const createTimeInputField = curry((handleChange, handleBlur, name, normalize) => {
	const label = name.includes('month') ? 'Mon' : capitalize(name);
	return (
		<Field
			className={name}
			name={name}
			component={WatchtimeTextField}
			placeholder={label}
			type='number'
			normalize={normalize}
			onChange={handleChange}
			onBlur={handleBlur}
		/>
	)
})

const Watchtime = ({
	name: watchtimeName,
	idx,
	handleChange,
	handleBlur,
	warning,
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
			<p>Watch Time</p>
			{monthInput}
			{dayInput}
			{yearInput}
			<button type='button' onClick={clearValues}>Clear</button>
			{allTouched && warning && <p style={{ color: 'goldenrod' }}>{warning.message}</p>}
		</FormSection>
	)
}

Watchtime.propTypes = {
	name: PropTypes.string,
}

export default Watchtime;