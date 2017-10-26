import React from 'react';
import PropTypes from 'prop-types';

import getReadableFieldName from 'utils/getReadableFieldName';

const Watchtime = ({ datetime }) => {
	const watchtimeInputs = [
    'month',
    'date',
    'year',
	].map(name => <input type="text"
		placeholder={getReadableFieldName(name)}
		name={name}
		key={name}
	/>);
	
	return (
		<div className='watchtime'>
			{watchtimeInputs}
		</div>
	)
}

Watchtime.propTypes = {
	datetime: PropTypes.string,
}

export default Watchtime;