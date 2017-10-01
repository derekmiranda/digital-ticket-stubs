import {
  ADD_VIEWING,
  REMOVE_VIEWING,
  EDIT_VIEWING,
  FETCHED_VIEWINGS,
} from 'actions/types';

export const viewing = (state = {}, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}

const viewings = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_VIEWING:
      return state.concat(action.viewing);
    case REMOVE_VIEWING:
      return state.filter(v => v.id !== action.id);
    case EDIT_VIEWING:
      return state.map(v => v.id === action.id ? {
        ...v,
        [action.key]: action.val,
      } : v);
    case FETCHED_VIEWINGS:
      return action.viewings.concat(state);
    default:
      return state;
  }
}

export default viewings;