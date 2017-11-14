import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getFormValues,
  change,
  arrayRemove,
} from 'redux-form';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import { ticketsFormName as formName } from 'client/constants';
import {
  startTicketSubmit
} from 'actions/creators';

const mapStateToProps = (_, ownProps) => ownProps;
const mapDispatchToProps = (dispatch, { idx }) => {
  const actionCreators = {
    removeTicket: () => arrayRemove(formName, 'viewings', idx),
    saveTicket: () => startTicketSubmit(formName, 'viewings', idx),
  }

  return bindActionCreators(actionCreators, dispatch);
}; 

const TicketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ticket);

TicketContainer.propTypes = {
  idx: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default TicketContainer;