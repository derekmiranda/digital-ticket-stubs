import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  arrayRemove,
} from 'redux-form';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import { ticketsFormName as formName } from 'client/constants';
import createTicketSubmitHandler from './createTicketSubmitHandler';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, { idx, name }) => {
  const boundActionCreators = bindActionCreators({
    removeTicket: () => arrayRemove(formName, 'viewings', idx),
  }, dispatch);

  return {
    ...boundActionCreators,
    dispatch,
  };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { submittingTickets } = stateProps;
  const { dispatch } = dispatchProps;
  const { idx } = ownProps;
  const handleTicketSubmit = createTicketSubmitHandler(stateProps, idx, dispatch);
  const ticketSubmitting = submittingTickets && submittingTickets[idx];

  return {
    ...ownProps,
    ...dispatchProps,
    handleTicketSubmit,
    ticketSubmitting,
  }
}

const TicketContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Ticket);

TicketContainer.propTypes = {
  idx: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default TicketContainer;