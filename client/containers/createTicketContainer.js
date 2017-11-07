import { connect } from 'react-redux';

import {
	editViewing,
	editNewViewing,
	editWatchtime,
	editNewWatchtime,
} from 'actions/creators';

const createTicketContainer = (TicketType, viewingReducer) => {
	const mapStateToProps = (state, ownProps) => {
		const { idx } = ownProps;
		const viewing = state[viewingReducer][idx];
		return {
			viewing,
			...ownProps,
		}
	}

	const textEditCreators = {
		viewings: editViewing,
		newViewings: editNewViewing,
	}

	const watchtimeEditCreators = {
		viewings: editWatchtime,
		newViewings: editNewWatchtime,
	}

	const mapDispatchToProps = {
		onEdit: textEditCreators[viewingReducer],
		onWatchtimeEdit: watchtimeEditCreators[viewingReducer],
	}

	return connect(mapStateToProps, mapDispatchToProps)(TicketType);
}

export default createTicketContainer;