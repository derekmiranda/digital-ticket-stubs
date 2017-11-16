import * as types from '../types';

export const createSimpleActionCreator = type => () => ({ type });
export const createRequestAction = (reqAction) => ({
  ...reqAction,
  type: `REQUEST_${reqAction.type}`,
})

// modal
export const focusViewing = (id) => ({
  type: types.FOCUS_VIEWING,
  id,
})

// search results
export const fetchedSearchResults = (results) => ({
  type: types.FETCHED_SEARCH_RESULTS,
  results,
})

// ticket requests
export const startTicketSubmit = ({ viewing, index, ticketName }) => ({
  type: types.START_TICKET_SUBMIT,
  viewing,
  index,
  ticketName,
})

export const stopTicketSubmit = (index) => ({
  type: types.STOP_TICKET_SUBMIT,
  index,
})

export const ticketSubmitSucceeded = (index, id) => ({
  type: types.TICKET_SUBMIT_SUCCEEDED,
  index,
  id,
})

export const startTicketsFetch = createSimpleActionCreator(types.START_TICKETS_FETCH);
export const ticketsFetchSucceeded = createSimpleActionCreator(types.TICKETS_FETCH_SUCCEEDED);