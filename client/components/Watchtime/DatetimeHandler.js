import React from 'react';
import PropTypes from 'prop-types';

import WatchtimeDumb from './WatchtimeDumb';

const DatetimeHandler = ({ datetime, onDatetimeEdit }) => {
  const dateObj = datetime && new Date(datetime);
  const month = dateObj && dateObj.getMonth() + 1;
  const day = dateObj && dateObj.getDate();
  const year = dateObj && dateObj.getFullYear();

  const timeVals = {
    month,
    day,
    year,
  };

  const onTimeUnitChange = timeUnit => event => onDatetimeEdit({
    ...timeVals,
    [timeUnit]: event.target.value,
  });

  const props = { ...timeVals, onTimeUnitChange };

	return (
    <WatchtimeDumb {...props} />
  )
}

DatetimeHandler.propTypes = {
  datetime: PropTypes.string,
  onDatetimeEdit: PropTypes.func.isRequired,
}

export default DatetimeHandler;