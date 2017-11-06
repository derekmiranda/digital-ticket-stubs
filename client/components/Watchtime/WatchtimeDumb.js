import React from 'react';
import PropTypes from 'prop-types';

import getReadableFieldName from 'utils/getReadableFieldName';
import {
	createAscendingOptionsRange,
	createDescendingOptionsRange
} from './optionsRangeFns';

const WatchtimeDumb = ({ month, day, year }) => {
	const monthSelect = createTimeSelect({
		name: 'month',
		options: createAscendingOptionsRange(1, 12, 'Month'),
		value: month,
	})

	const daySelect = createTimeSelect({
		name: 'day',
		options: createAscendingOptionsRange(1, 30, 'Day'),
		value: day,
  })
  
  const currYear = new Date().getFullYear();
	const yearOptions = createDescendingOptionsRange(currYear, 1920, 'Year');
	const yearSelect = createTimeSelect({
		name: 'year',
		options: yearOptions,
		value: year,
	})

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

function createTimeSelect ({ name, options, value }) {
	const capitalize = str => str[0].toUpperCase() + str.slice(1);
	return (
		<select
			name={name}
			className={name}
			value={value}
		>
			{options}
		</select>
	)
}

export default WatchtimeDumb;