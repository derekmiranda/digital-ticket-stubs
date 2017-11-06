import { connect } from 'react-redux';
import * as creators from 'actions/creators';

const createTicketContainer = (TicketType, viewingReducer) => {
	const mapStateToProps = (state, ownProps) => {
		const { idx } = ownProps;
		const viewing = state[viewingReducer][idx];
		return {
			viewing,
			...ownProps,
		}
	}

	return connect(mapStateToProps, creators)(TicketType);
}

export default createTicketContainer;