import PropTypes from 'prop-types';

export const viewingSchema = {
	title: PropTypes.string,
	venue: PropTypes.string,
	watchtime: PropTypes.string,
}

export const datetimeSchema = {
	month: PropTypes.number,
	day: PropTypes.number,
	year: PropTypes.number,
}