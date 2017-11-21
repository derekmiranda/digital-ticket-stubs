import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getFormValues, getFormMeta } from 'redux-form';

import Ticket from 'components/Ticket';
import { startTicketDelete } from 'actions/creators';
import { validateWatchtime, clearWatchtime } from 'actions/creators/thunks';
import { ticketsFormName as formName } from 'client/constants';
import createTicketSubmitHandler from './createTicketSubmitHandler';
import debug from 'client/utils/debug';

const formSelector = getFormValues(formName);
const metaSelector = getFormMeta(formName);

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, { idx, name }) => {
  return {
    dispatch,
  };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { submittingTickets, watchtimeErrors } = stateProps;
  const { dispatch } = dispatchProps;
  const { idx, name } = ownProps;
  
  const formState = formSelector(stateProps);
  const formMeta = metaSelector(stateProps);

  const { viewings } = formState;
  const viewing = viewings[idx];
  const viewingMeta = formMeta && formMeta.viewings[idx];

  // bool indicating whether each input in watchtime has been touched
  const allWatchtimeTouched = !!(viewingMeta && viewingMeta.watchtime &&
    Object.keys(viewingMeta.watchtime).every((key) => {
      const wt = viewingMeta.watchtime[key];
      return wt && wt.touched;
    })
  )

  const handleTicketSubmit = createTicketSubmitHandler({
    state: stateProps,
    idx,
    name,
  });
  const ticketSubmitting = submittingTickets && submittingTickets[idx];
  const watchtimeError = watchtimeErrors && watchtimeErrors[idx];

  const boundActionCreators = bindActionCreators({
    removeTicket: () => startTicketDelete(viewing.formId, viewing.id),
    handleWatchtimeBlur: () => validateWatchtime(viewing, idx),
    clearWatchtime: () => clearWatchtime(name),
    handleTicketSubmit,
  }, dispatch);

  return {
    ...ownProps,
    ...dispatchProps,
    ...boundActionCreators,
    viewing,
    allWatchtimeTouched,
    ticketSubmitting,
    watchtimeError,
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