import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getFormValues,
  change,
  arrayRemove,
  getFormSyncErrors,
  getFormAsyncErrors,
  getFormSubmitErrors
} from 'redux-form';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import { ticketsFormName as formName } from 'client/constants';
import { startTicketSubmit, stopTicketSubmit } from 'actions/creators'
import debug from 'client/utils/debug';

const formSelector = getFormValues(formName);
const syncErrorsSelector = getFormSyncErrors(formName);
const asyncErrorsSelector = getFormAsyncErrors(formName);
const submitErrorsSelector = getFormSubmitErrors(formName);

const mapStateToProps = state => state;

/* Move all this error checking to thunk/saga */
const numErrors = errObj => Object.keys(errObj).length;
const getErrorsForViewing= (state, idx, errorSelectors) => {
  if (!errorSelectors.length) return null;
  const currErrorSelector = errorSelectors[0];
  const errors = currErrorSelector(state);
  const errorsForViewing = errors && errors.viewings && errors.viewings[idx];
  return errorsForViewing && numErrors(errorsForViewing)
    ? errorsForViewing
    : getErrorsForViewing(state, idx, errorSelectors.slice(1));
}
/*  */

const mapDispatchToProps = (dispatch, { idx, name }) => {
  /* Move all this error checking to thunk/saga */
  const createSubmitHandlerWithState = (state) => () => {
    const formState = formSelector(state);
    const errors = getErrorsForViewing(state, idx, [
      syncErrorsSelector,
      asyncErrorsSelector,
      submitErrorsSelector,
    ]);

    if (errors) {
      debug('Errors:', errors);
    } else {
      const { viewings } = formState;
      const viewing = viewings[idx];
      debug('Viewing:', viewing);
      dispatch(startTicketSubmit(viewing, idx));
      // dispatch(change(formName, `${name}.id`, 1000))
    }
  }
  /* */

  const boundActionCreators = bindActionCreators({
    startTicketSubmit: () => startTicketSubmit(idx),
    removeTicket: () => arrayRemove(formName, 'viewings', idx),
  }, dispatch);

  return {
    ...boundActionCreators,
    createSubmitHandlerWithState,
  };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { createSubmitHandlerWithState } = dispatchProps;
  const { submittingTickets } = stateProps;
  const { idx } = ownProps;
  const handleTicketSubmit = createSubmitHandlerWithState(stateProps);
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