import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getFormValues } from 'redux-form';

import Ticket from 'components/Ticket';
import { startTicketDelete } from 'actions/creators';
import { ticketsFormName as formName } from 'client/constants';
import createTicketSubmitHandler from './createTicketSubmitHandler';

const formSelector = getFormValues(formName);

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, { idx, name }) => {
  return {
    dispatch,
  };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { submittingTickets } = stateProps;
  const { dispatch } = dispatchProps;
  const { idx, name } = ownProps;

  const handleTicketSubmit = createTicketSubmitHandler({
    state: stateProps,
    idx,
    dispatch,
    name,
  });
  const ticketSubmitting = submittingTickets && submittingTickets[idx];
  const removeTicket = () => dispatch(startTicketDelete(idx));

  return {
    ...ownProps,
    ...dispatchProps,
    handleTicketSubmit,
    removeTicket,
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