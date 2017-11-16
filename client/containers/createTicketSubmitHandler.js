import {
  getFormValues,
  change,
  touch,
  getFormSyncErrors,
  getFormAsyncErrors,
  getFormSubmitErrors
} from 'redux-form';

import { ticketSubmit } from 'actions/creators/thunks';

import { ticketsFormName as formName } from 'client/constants';
import { getTicketFields } from 'client/utils/formUtils';
import debug from 'client/utils/debug';

const formSelector = getFormValues(formName);
const syncErrorsSelector = getFormSyncErrors(formName);
const asyncErrorsSelector = getFormAsyncErrors(formName);
const submitErrorsSelector = getFormSubmitErrors(formName);

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

const createTicketSubmitHandler = ({
  state,
  idx,
  dispatch,
  name: ticketName,
}) => () => {
  const formState = formSelector(state);
  const errors = getErrorsForViewing(state, idx, [
    syncErrorsSelector,
    asyncErrorsSelector,
    submitErrorsSelector,
  ]);

  const fieldNames = Object.keys(state.form[formName].registeredFields);
  const ticketFieldNames = getTicketFields(fieldNames, ticketName);
  const { viewings } = formState;
  const viewing = viewings[idx];

  dispatch(ticketSubmit({ viewing, errors, idx, ticketFieldNames }))

  // // touch all fields within ticket
  // dispatch(touch)

  // if (errors) {
  //   debug('Errors:', errors);
  // } else {
  //   const {
  //     viewings
  //   } = formState;
  //   const viewing = viewings[idx];
  //   debug('Viewing:', viewing);
  //   dispatch(startTicketSubmit(viewing, idx));
  //   // dispatch(change(formName, `${name}.id`, 1000))
  // }
}

export default createTicketSubmitHandler;