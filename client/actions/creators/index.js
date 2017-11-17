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
export const loadedSearchResults = (results) => ({
  type: types.LOADED_SEARCH_RESULTS,
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

export const ticketSubmitSucceeded = (index) => ({
  type: types.TICKET_SUBMIT_SUCCEEDED,
  index,
})

// initial ticket loading
export const startTicketsLoad = createSimpleActionCreator(types.START_TICKETS_LOAD);
export const ticketsLoadSucceeded = createSimpleActionCreator(types.TICKETS_LOAD_SUCCEEDED);
export const ticketsLoadFailed = createSimpleActionCreator(types.TICKETS_LOAD_FAILED);