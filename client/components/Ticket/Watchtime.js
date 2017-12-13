import React from 'react';
import PropTypes from 'prop-types';
import { Field, FormSection } from 'redux-form';
import styled from 'styled-components';
import curry from 'lodash/curry';

import { normalizeMonth, createDayNormalizer, normalizeYear } from './normalizers';
import { capitalize } from 'client/utils/general';
import { renderTextField } from './TicketComponents';
import { WatchtimeTextField } from 'components/styled/StyledTicketComponents';
import { ticketMargin, line } from 'constants'

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

const InputContainer = styled.div`
	margin: 0 auto ${ticketMargin};
`

const StyledFormSection = styled(FormSection)`
	&::before {
		${line}
	}
`

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
		<StyledFormSection name={watchtimeName} className='watchtime'>
			<p style={{ margin: ticketMargin }}>Watch Time</p>
			<InputContainer>
				{monthInput}
				{dayInput}
				{yearInput}
				<button type='button' onClick={clearValues}>Clear</button>
			</InputContainer>
			{allTouched && warning && <p style={{ color: 'goldenrod' }}>{warning.message}</p>}
		</StyledFormSection>
	)
}

Watchtime.propTypes = {
	name: PropTypes.string,
}

export default Watchtime;