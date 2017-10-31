import React from 'react';
import PropTypes from 'prop-types';

import getReadableFieldName from 'utils/getReadableFieldName';
import {
	createAscendingOptionsRange,
	createDescendingOptionsRange
} from './optionsRangeFns';

const createTimeSelect = ({ name, options, value }) => {
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

const Watchtime = ({ datetime }) => {
	const dateObj = datetime && new Date(datetime);

	const monthSelect = createTimeSelect({
		name: 'month',
		options: createAscendingOptionsRange(1, 12, 'Month'),
		value: dateObj && dateObj.getMonth() + 1,
	})

	const daySelect = createTimeSelect({
		name: 'day',
		options: createAscendingOptionsRange(1, 30, 'Day'),
		value: dateObj && dateObj.getDate(),
	})

	const currYear = new Date().getFullYear();
	const yearOptions = createDescendingOptionsRange(currYear, 1920, 'Year');
	const yearSelect = createTimeSelect({
		name: 'year',
		options: yearOptions,
		value: dateObj && dateObj.getDate(),
	})

	return (
		<div className='watchtime'>
			{monthSelect}
			{daySelect}
			{yearSelect}
		</div>
	)
}

Watchtime.propTypes = {
	datetime: PropTypes.string,
}

export default Watchtime;