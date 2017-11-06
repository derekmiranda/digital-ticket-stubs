import React from 'react';
import PropTypes from 'prop-types';

import getReadableFieldName from 'client/utils/getReadableFieldName';
import {
	createAscendingOptionsRange,
	createDescendingOptionsRange
} from './optionsRangeFns';

const Watchtime = ({ month, day, year }) => {
	const monthSelect = createTimeSelect({
		name: 'month',
		value: month,
	}, createAscendingOptionsRange(1, 12, 'Month'));

	const daySelect = createTimeSelect({
		name: 'day',
		value: day,
  }, createAscendingOptionsRange(1, 30, 'Day'));
  
  const currYear = new Date().getFullYear();
	const yearOptions = createDescendingOptionsRange(currYear, 1920, 'Year');
	const yearSelect = createTimeSelect({
		name: 'year',
		value: year,
	}, yearOptions)

	return (
		<div className='watchtime'>
			{monthSelect}
			{daySelect}
			{yearSelect}
		</div>
	)
}

Watchtime.propTypes = {
	month: PropTypes.number,
	day: PropTypes.number,
	year: PropTypes.number,
	onTimeUnitChange: PropTypes.func,
}

function createTimeSelect (props, options) {
	const capitalize = str => str[0].toUpperCase() + str.slice(1);
	return (
		<select {...props}>
			{options}
		</select>
	)
}

export default Watchtime;