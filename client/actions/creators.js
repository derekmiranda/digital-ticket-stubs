import * as types from './types';

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

// ticket submission
export const startTicketSubmit = (index) => ({
  type: types.START_TICKET_SUBMIT,
  index,
})

export const stopTicketSubmit = (index) => ({
  type: types.STOP_TICKET_SUBMIT,
  index,
})