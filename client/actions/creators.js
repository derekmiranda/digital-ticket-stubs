import * as types from './types';

export const createSimpleActionCreator = type => () => ({ type });
export const createRequestAction = (reqAction) => ({
  ...reqAction,
  type: `REQUEST_${reqAction.type}`,
})

// viewing
export const editViewing = ({ id, key, val }) => ({
  type: types.EDIT_VIEWING,
  id,
  key,
  val,
})

export const removeViewing = (id) => ({
  type: types.REMOVE_VIEWING,
  id,
})

export const addViewing = (viewing) => ({
  type: types.ADD_VIEWING,
  viewing,
})

export const fetchedViewings = (viewings) => ({
  type: types.FETCHED_VIEWINGS,
  viewings,
})

// new viewing
export const editNewViewing = (...args) => ({
  ...editViewing(...args),
  type: types.EDIT_NEW_VIEWING,
})

export const addNewViewing = createSimpleActionCreator(types.ADD_NEW_VIEWING);

export const saveNewViewing = (newViewing) => ({
  type: types.SAVE_NEW_VIEWING,
  newViewing,
})

// watchtime
export const editWatchtime = ({
  id,
  timeUnit,
  val,
}) => ({
  type: types.EDIT_WATCHTIME,
  id,
  timeUnit,
  val,
})

export const editNewWatchtime = (...args) => ({
  ...editWatchtime(...args),
  type: types.EDIT_NEW_WATCHTIME,
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