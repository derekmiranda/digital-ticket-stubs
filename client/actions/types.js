// dynamic types for actions requiring server requests
export const requestAction = baseType => `REQUEST_${baseType}`;

// modal
export const FOCUS_VIEWING = 'FOCUS_VIEWING';

// search results
export const LOADED_SEARCH_RESULTS = 'LOADED_SEARCH_RESULTS'; 
export const CHOOSE_MOVIE = 'CHOOSE_MOVIE'; 
export const CLOSE_SEARCH = 'CLOSE_SEARCH'

// sorting
export const SORT_TICKETS = 'SORT_TICKETS';

// watchtime
export const VALIDATE_WATCHTIME = 'VALIDATE_WATCHTIME';
export const WATCHTIME_WARN = 'WATCHTIME_WARN';
export const WATCHTIME_VALID = 'WATCHTIME_VALID';
export const CLEAR_WATCHTIME = 'CLEAR_WATCHTIME';

// ticket submit
export const TICKET_SAVE = 'TICKET_SAVE';
export const TICKET_SUBMIT = 'TICKET_SUBMIT';
export const START_TICKET_SUBMIT = 'START_TICKET_SUBMIT';
export const STOP_TICKET_SUBMIT = 'STOP_TICKET_SUBMIT';
export const TICKET_SUBMIT_SUCCEEDED = 'TICKET_SUBMIT_SUCCEEDED';
export const TICKET_SUBMIT_FAILED = 'TICKET_SUBMIT_FAILED';

// ticket loading
export const START_TICKETS_LOAD = 'START_TICKETS_LOAD';
export const TICKETS_LOAD_SUCCEEDED = 'TICKETS_LOAD_SUCCEEDED';
export const TICKETS_LOAD_FAILED = 'TICKETS_LOAD_FAILED';

// ticket deleting
export const START_TICKET_DELETE = 'START_TICKET_DELETE';
export const TICKET_DELETE_SUCCEEDED = 'TICKET_DELETE_SUCCEEDED';
export const TICKET_DELETE_FAILED = 'TICKET_DELETE_FAILED';
export const REMOVE_TICKET = 'REMOVE_TICKET';

// general requests
export const REQUEST_ERROR = 'REQUEST_ERROR';
