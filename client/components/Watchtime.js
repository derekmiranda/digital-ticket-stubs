import React from 'react';
import PropTypes from 'prop-types';

import getReadableFieldName from 'utils/getReadableFieldName';
import {
	createAscendingOptionsRange,
	createDescendingOptionsRange
} from './optionsRangeFns';

const Watchtime = ({ datetime }) => {
	const monthSelect = (
		<select
			name='month'
			className='month'
		>
			{createAscendingOptionsRange(1, 12, 'Month')}
		</select>
	);

	const daySelect = (
		<select
			name='month'
			className='month'
		>
			{createAscendingOptionsRange(1, 30, 'Day')}
		</select>
	);

	const currYear = new Date().getFullYear();
	const yearSelect = (
		<select
			name='month'
			className='month'
		>
			{createDescendingOptionsRange(currYear, 1920, 'Year')}
		</select>
	);
	
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