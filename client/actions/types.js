// saved viewings
export const EDIT_VIEWING = 'EDIT_VIEWING';
export const REMOVE_VIEWING = 'REMOVE_VIEWING';
export const ADD_VIEWING = 'ADD_VIEWING';
export const FETCHED_VIEWINGS = 'FETCHED_VIEWINGS';

// new viewing
export const EDIT_NEW_VIEWING = 'EDIT_NEW_VIEWING';
export const SAVE_NEW_VIEWING = 'SAVE_NEW_VIEWING';

// modal
export const FOCUS_VIEWING = 'FOCUS_VIEWING';

// error handling
export const REQUEST_ERROR = 'REQUEST_ERROR';

// dynamic types for actions requiring server requests
export const requestAction = baseType => `REQUEST_${baseType}`;