import React from 'react';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';
import styled from 'styled-components';
import curry from 'lodash/curry';

import TicketInput from 'components/styled/TicketInput';
import { normalizeMonth, createDayNormalizer, normalizeYear } from './normalizers';
import { capitalize } from 'client/utils/general';
import { renderTextField } from './TicketComponents';

const TimeSection = styled.div`
	display: inline;

	input {
		width: 4em;
		margin-left: .5em; 
		margin-right: .5em; 
	}
`

const createTimeInputField = curry((handleChange, handleBlur, name, normalize) => {
	const label = name.includes('month') ? 'Mon' : capitalize(name);
	return (
		<TimeSection className={name}>
			<Field
				name={name}
				component={renderTextField}
				placeholder={label}
				type='number'
				normalize={normalize}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
		</TimeSection>
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
			<h3>Watch Time</h3>
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