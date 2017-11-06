import { connect } from 'react-redux';

import { editViewing, editNewViewing } from 'actions/creators';

const createTicketContainer = (TicketType, viewingReducer) => {
	const mapStateToProps = (state, ownProps) => {
		const { idx } = ownProps;
		const viewing = state[viewingReducer][idx];
		return {
			viewing,
			...ownProps,
		}
	}

	const editFnsByReducer = {
		viewings: editViewing,
		newViewings: editNewViewing,
	}

	const mapDispatchToProps = {
		onEdit: editFnsByReducer[viewingReducer],
	}

	return connect(mapStateToProps, mapDispatchToProps)(TicketType);
}

export default createTicketContainer;