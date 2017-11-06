import {
  ADD_VIEWING,
  REMOVE_VIEWING,
  EDIT_VIEWING,
  FETCHED_VIEWINGS,
  EDIT_WATCHTIME
} from 'actions/types';
import watchtime from './watchtime';

export const viewing = (state = {
  title: '',
  venue: '',
}, action = {}) => {
  switch (action.type) {
    case EDIT_VIEWING:
      return {
        ...state,
        [action.key]: action.val,
      }
    case EDIT_WATCHTIME:
      return {
        ...state,
        watchtime: watchtime(state.watchtime, action),
      }
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
      return state.map(v => v.id === action.id ? viewing(v, action) : v);
    case FETCHED_VIEWINGS:
      return action.viewings.concat(state);
    default:
      return state;
  }
}

export default viewings;