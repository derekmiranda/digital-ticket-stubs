import React from 'react';
import PropTypes from 'prop-types';

import { viewingSchema } from 'schemas';

const GridFormat = ({ viewings }) => {
	return <div />;
}

GridFormat.propTypes = {
	viewings: PropTypes.arrayOf(viewingSchema),
}

export default GridFormat;