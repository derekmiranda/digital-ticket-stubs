import React from 'react';
import PropTypes from 'prop-types';

import WatchtimeDumb from './WatchtimeDumb';

const DatetimeHandler = ({ datetime }) => {
  const dateObj = datetime && new Date(datetime);
  const props = {
    month: dateObj && dateObj.getMonth() + 1,
    day: dateObj && dateObj.getDate(),
    year: dateObj && dateObj.getFullYear(),
  };

	return (
    <WatchtimeDumb {...props} />
  )
}

DatetimeHandler.propTypes = {
	datetime: PropTypes.string,
}

export default DatetimeHandler;