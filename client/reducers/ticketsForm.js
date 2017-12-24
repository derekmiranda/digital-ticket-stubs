import {
  REMOVE_TICKET,
  SORT_TICKETS,
  CHOOSE_MOVIE,
} from 'actions/types';
import { getSortByCriteria, putSavedViewingsLast } from './sorters';
import debug from 'client/utils/debug';

const viewings = (state = [], action = {}) => {
  switch (action.type) {
    case REMOVE_TICKET:
      return state.filter(v => v.formId !== action.formId);
    case SORT_TICKETS: {
      const criteriaSort = getSortByCriteria(action.criteria);
      return state.slice().sort(criteriaSort).sort(putSavedViewingsLast);
    }
    case CHOOSE_MOVIE: {
      const { poster_path, backdrop_path } = action
      return state.map(v => v.formId === action.formId ? {
        ...v,
        poster_path,
        backdrop_path,
      } : v)
    }
    default:
      return state;
  }
}

const changeViewingsInState = (state, action) => {
  return {
    ...state,
    values: state.values && {
      ...state.values,
      viewings: state.values.viewings && viewings(state.values.viewings, action),
    }
  }
}

export default (state, action = {}) => {
  switch (action.type) {
    case REMOVE_TICKET:
    case SORT_TICKETS:
    case CHOOSE_MOVIE:
      return changeViewingsInState(state, action);
    default:
      return state;
  }
}