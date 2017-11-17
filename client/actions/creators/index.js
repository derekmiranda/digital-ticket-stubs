import * as types from '../types';

export const createSimpleActionCreator = type => () => ({ type });
export const createRequestAction = (reqAction) => ({
  ...reqAction,
  type: `REQUEST_${reqAction.type}`,
})

// modal
export const focusViewing = (viewingName) => ({
  type: types.FOCUS_VIEWING,
  viewingName,
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
export const ticketsLoadFailed = createSimpleActionCreator(types.TICKETS_LOAD_FAILED);

export const ticketsLoadSucceeded = (loadedTickets) => ({
  type: types.TICKETS_LOAD_SUCCEEDED,
  loadedTickets,
})

// ticket deletion
export const startTicketDelete = (index) => ({
  type: types.START_TICKET_DELETE,
  index,
})

export const ticketDeleteSucceeded = (index) => ({
  type: types.TICKET_DELETE_SUCCEEDED,
  index, 
})

export const ticketDeleteFailed = (index) => ({
  type: types.TICKET_DELETE_FAILED,
  index,
})