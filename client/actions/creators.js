import * as types from './types';

export const createSimpleAction = (type) => ({ type });
export const createRequestAction = (reqAction) => ({
  ...reqAction,
  type: `REQUEST_${reqAction.type}`,
})

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

export const editNewViewing = (key, val) => ({
  type: types.EDIT_NEW_VIEWING,
  key,
  val,
})

export const saveNewViewing = (newViewing) => ({
  type: types.SAVE_NEW_VIEWING,
  newViewing,
})

export const focusViewing = (id) => ({
  type: types.FOCUS_VIEWING,
  id,
})