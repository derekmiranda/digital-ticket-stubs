import PropTypes from 'prop-types';

export const viewingSchema = PropTypes.shape({
	title: PropTypes.string,
	venue: PropTypes.string,
	watchtime: PropTypes.string,
})