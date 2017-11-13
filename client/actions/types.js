// modal
export const FOCUS_VIEWING = 'FOCUS_VIEWING';

// search results
export const FETCHED_SEARCH_RESULTS = 'FETCHED_SEARCH_RESULTS';

// requests
export const TICKET_SUBMIT = 'TICKET_SUBMIT';
export const START_TICKET_SUBMIT = 'START_TICKET_SUBMIT';
export const TICKET_SUBMIT_SUCCEEDED = 'TICKET_SUBMIT_SUCCEEDED';
export const REQUEST_ERROR = 'REQUEST_ERROR';

// dynamic types for actions requiring server requests
export const requestAction = baseType => `REQUEST_${baseType}`;