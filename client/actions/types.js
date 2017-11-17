// dynamic types for actions requiring server requests
export const requestAction = baseType => `REQUEST_${baseType}`;

// modal
export const FOCUS_VIEWING = 'FOCUS_VIEWING';

// search results
export const LOADED_SEARCH_RESULTS = 'LOADED_SEARCH_RESULTS';

// requests
export const TICKET_SUBMIT = 'TICKET_SUBMIT';
export const START_TICKET_SUBMIT = 'START_TICKET_SUBMIT';
export const STOP_TICKET_SUBMIT = 'STOP_TICKET_SUBMIT';
export const TICKET_SUBMIT_SUCCEEDED = 'TICKET_SUBMIT_SUCCEEDED';
export const TICKET_SUBMIT_FAILED = 'TICKET_SUBMIT_FAILED';

export const START_TICKETS_LOAD = 'START_TICKETS_LOAD';
export const TICKETS_LOAD_SUCCEEDED = 'TICKETS_LOAD_SUCCEEDED';

export const REQUEST_ERROR = 'REQUEST_ERROR';
