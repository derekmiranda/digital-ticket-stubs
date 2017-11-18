// dynamic types for actions requiring server requests
export const requestAction = baseType => `REQUEST_${baseType}`;

// modal
export const FOCUS_VIEWING = 'FOCUS_VIEWING';

// search results
export const LOADED_SEARCH_RESULTS = 'LOADED_SEARCH_RESULTS'; 

// sorting
export const SORT_TICKETS = 'SORT_TICKETS';

// ticket submit
export const TICKET_SUBMIT = 'TICKET_SUBMIT';
export const START_TICKET_SUBMIT = 'START_TICKET_SUBMIT';
export const STOP_TICKET_SUBMIT = 'STOP_TICKET_SUBMIT';
export const TICKET_SUBMIT_SUCCEEDED = 'TICKET_SUBMIT_SUCCEEDED';
export const TICKET_SUBMIT_FAILED = 'TICKET_SUBMIT_FAILED';

// ticket loading
export const START_TICKETS_LOAD = 'START_TICKETS_LOAD';
export const TICKETS_LOAD_SUCCEEDED = 'TICKETS_LOAD_SUCCEEDED';

// ticket deleting
export const START_TICKET_DELETE = 'START_TICKET_DELETE';
export const TICKET_DELETE_SUCCEEDED = 'TICKET_DELETE_SUCCEEDED';
export const TICKET_DELETE_FAILED = 'TICKET_DELETE_FAILED';
export const REMOVE_TICKET = 'REMOVE_TICKET';

// general requests
export const REQUEST_ERROR = 'REQUEST_ERROR';
