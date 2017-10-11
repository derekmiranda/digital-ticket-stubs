import PropTypes from 'prop-types';

export const viewingSchema = PropTypes.shape({
	title: PropTypes.string.isRequired,
	venue: PropTypes.string,
	watchtime: PropTypes.string,
})