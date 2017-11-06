// saved viewings
export const EDIT_VIEWING = 'EDIT_VIEWING';
export const REMOVE_VIEWING = 'REMOVE_VIEWING';
export const ADD_VIEWING = 'ADD_VIEWING';
export const FETCHED_VIEWINGS = 'FETCHED_VIEWINGS';

// new viewing
export const EDIT_NEW_VIEWING = 'EDIT_NEW_VIEWING';
export const SAVE_NEW_VIEWING = 'SAVE_NEW_VIEWING';
export const ADD_NEW_VIEWING = 'ADD_NEW_VIEWING';

// watchtime
export const EDIT_WATCHTIME = 'EDIT_WATCHTIME';
export const EDIT_NEW_WATCHTIME = 'EDIT_NEW_WATCHTIME';

// modal
export const FOCUS_VIEWING = 'FOCUS_VIEWING';

// search results
export const FETCHED_SEARCH_RESULTS = 'FETCHED_SEARCH_RESULTS';

// error handling
export const REQUEST_ERROR = 'REQUEST_ERROR';

// dynamic types for actions requiring server requests
export const requestAction = baseType => `REQUEST_${baseType}`;