// modal
export const FOCUS_VIEWING = 'FOCUS_VIEWING';

// search results
export const FETCHED_SEARCH_RESULTS = 'FETCHED_SEARCH_RESULTS';

// error handling
export const REQUEST_ERROR = 'REQUEST_ERROR';

// dynamic types for actions requiring server requests
export const requestAction = baseType => `REQUEST_${baseType}`;