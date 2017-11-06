import React from 'react';
import PropTypes from 'prop-types';

import getReadableFieldName from 'client/utils/getReadableFieldName';
import {
	createAscendingOptionsRange,
	createDescendingOptionsRange
} from './optionsRangeFns';

const WatchtimeDumb = ({ month, day, year, onTimeUnitChange }) => {
	const monthSelect = createTimeSelect({
		name: 'month',
		value: month,
		onChange: onTimeUnitChange('month'),
	}, createAscendingOptionsRange(1, 12, 'Month'));

	const daySelect = createTimeSelect({
		name: 'day',
		value: day,
		onChange: onTimeUnitChange('day'),
  }, createAscendingOptionsRange(1, 30, 'Day'));
  
  const currYear = new Date().getFullYear();
	const yearOptions = createDescendingOptionsRange(currYear, 1920, 'Year');
	const yearSelect = createTimeSelect({
		name: 'year',
		value: year,
		onChange: onTimeUnitChange('year'),
	}, yearOptions)

	return (
		<div className='watchtime'>
			{monthSelect}
			{daySelect}
			{yearSelect}
		</div>
	)
}

WatchtimeDumb.propTypes = {
	month: PropTypes.number,
	day: PropTypes.number,
	year: PropTypes.number,
}

function createTimeSelect (props, options) {
	const capitalize = str => str[0].toUpperCase() + str.slice(1);
	return (
		<select {...props}>
			{options}
		</select>
	)
}

export default WatchtimeDumb;