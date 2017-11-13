import { connect } from 'react-redux';
import {
  getFormValues,
  change,
  getFormSyncErrors,
  getFormAsyncErrors,
  getFormSubmitErrors
} from 'redux-form';
import PropTypes from 'prop-types';

import Ticket from 'components/Ticket';
import { ticketsFormName as formName } from 'client/constants';
import debug from 'client/utils/debug';

const formSelector = getFormValues(formName);
const syncErrorsSelector = getFormSyncErrors(formName);
const asyncErrorsSelector = getFormAsyncErrors(formName);
const submitErrorsSelector = getFormSubmitErrors(formName);

const mapStateToProps = state => state;

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

const mapDispatchToProps = (dispatch, { idx, name }) => {
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
      dispatch(change(formName, `${name}.id`, 1000))
    }
  }
  return { createSubmitHandlerWithState };
}

const mergeProps = (state, { createSubmitHandlerWithState }, ownProps) => {
  const handleTicketSubmit = createSubmitHandlerWithState(state);
  return {
    ...ownProps,
    handleTicketSubmit,
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