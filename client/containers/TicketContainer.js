import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getFormValues, getFormMeta } from 'redux-form';

import StyledTicket from 'components/styled/StyledTicket';
import { startTicketDelete, removeTicket, ticketSave } from 'actions/creators';
import { validateWatchtime, clearWatchtime } from 'actions/creators/thunks';
import { ticketsFormName as formName } from 'client/constants';
import createTicketSubmitHandler from './createTicketSubmitHandler';
import debug from 'client/utils/debug';
import { isAuthenticated } from '../auth'

const formSelector = getFormValues(formName);
const metaSelector = getFormMeta(formName);

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, { idx, name }) => {
  return {
    dispatch,
  };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    submittingTickets,
    watchtimeWarnings,
    searchResults,
  } = stateProps;
  const { dispatch } = dispatchProps;
  const { idx, name } = ownProps;
  
  const formState = formSelector(stateProps);
  const formMeta = metaSelector(stateProps);

  const { viewings } = formState;
  const viewing = viewings[idx];
  const viewingMeta = formMeta && formMeta.viewings && formMeta.viewings[idx];

  // bool indicating whether each input in watchtime has been touched
  const allWatchtimeTouched = !!(viewingMeta && viewingMeta.watchtime &&
    Object.keys(viewingMeta.watchtime).every((key) => {
      const wt = viewingMeta.watchtime[key];
      return wt && wt.touched;
    })
  )

  const ticketSubmitting = submittingTickets && submittingTickets[idx];
  const watchtimeWarning = watchtimeWarnings && watchtimeWarnings[idx];
  const loggedIn = isAuthenticated()
  
  // different actions based on login status
  const boundActionCreators = bindActionCreators({
    removeTicket: () => startTicketDelete(viewing.formId, viewing.id),
    validateWatchtime: () => validateWatchtime(viewing, idx),
    clearWatchtime: () => clearWatchtime(name),
    handleTicketSubmit: createTicketSubmitHandler({
      state: stateProps,
      idx,
      name,
      loggedIn,
    }),
  }, dispatch);

  return {
    ...ownProps,
    ...dispatchProps,
    ...boundActionCreators,
    viewing,
    loggedIn,
    allWatchtimeTouched,
    ticketSubmitting,
    watchtimeWarning,
  }
}

const TicketContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(StyledTicket);

TicketContainer.propTypes = {
  idx: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default TicketContainer;