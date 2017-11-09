import React from 'react';
import PropTypes from 'prop-types';

import getReadableFieldName from 'client/utils/getReadableFieldName';
import {
	createAscendingOptionsRange,
	createDescendingOptionsRange
} from './optionsRangeFns';

const createTimeSelect = (props, options) => {
	return (
		<select {...props}>
			{options}
		</select>
	)
}

const Watchtime = ({ name }) => {
	const monthSelect = createTimeSelect({
		name: `${name}.month`,
		value: month,
		onChange: onChangeByTimeUnit({
			...baseOnChangeParams,
			timeUnit: 'month',
		}),
	}, createAscendingOptionsRange(1, 12, 'Month'));

	const daySelect = createTimeSelect({
		name: 'day',
		value: day,
		onChange: onChangeByTimeUnit({
			...baseOnChangeParams,
			timeUnit: 'day',
		}),
  }, createAscendingOptionsRange(1, 30, 'Day'));
  
  const currYear = new Date().getFullYear();
	const yearOptions = createDescendingOptionsRange(currYear, 1920, 'Year');
	const yearSelect = createTimeSelect({
		name: 'year',
		value: year,
		onChange: onChangeByTimeUnit({
			...baseOnChangeParams,
			timeUnit: 'year',
		}),
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
	
}

export default Watchtime;