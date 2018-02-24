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
export const loadedSearchResults = (index, results) => ({
  type: types.LOADED_SEARCH_RESULTS,
  index,
  results,
})

export const chooseMovie = ({
  title,
  overview,
  poster_path,
  backdrop_path,
  formId,
}) => ({
  type: types.CHOOSE_MOVIE,
  title,
  overview,
  poster_path,
  backdrop_path,
  formId,
})

export const closeSearch = createSimpleActionCreator(types.CLOSE_SEARCH)

// ticket requests
export const ticketSave = (formId) => ({
  type: types.TICKET_SAVE,
  formId,
})
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
export const startTicketDelete = (formId, id) => ({
  type: types.START_TICKET_DELETE,
  formId,
  id,
})

export const removeTicket = (formId) => ({
  type: types.REMOVE_TICKET,
  formId,
})

export const ticketDeleteSucceeded = (formId) => ({
  type: types.TICKET_DELETE_SUCCEEDED,
  formId, 
})

export const ticketDeleteFailed = (formId) => ({
  type: types.TICKET_DELETE_FAILED,
  formId,
})

// sorting
export const sortTickets = (criteria) => ({
  type: types.SORT_TICKETS,
  criteria,
})

// watchtime
export const clearWatchtime = (index) => ({
  type: types.CLEAR_WATCHTIME,
  index,
})

// auth
export const loggedOut = createSimpleActionCreator(types.LOGGED_OUT)
export const loginSucceeded = createSimpleActionCreator(types.LOG_IN_SUCCEEDED)
export const registerSucceeded = createSimpleActionCreator(types.REGISTER_SUCCEEDED)
