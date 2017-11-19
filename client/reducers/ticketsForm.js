import {
  REMOVE_TICKET,
  SORT_TICKETS,
} from 'actions/types';
import debug from 'client/utils/debug';

// puts viewings saved on db at the top
const putSavedViewingsFirst = (v1, v2) => {
  if (v1.id && !v2.id) {
    return -1;
  } else if (v2.id && !v1.id) {
    return 1;
  }
  return 0;
}

const sortsByCriteria = {
  title: (v1, v2) => {
    return v1.title > v2.title;
  }
}

const viewings = (state = [], action = {}) => {
  switch (action.type) {
    case REMOVE_TICKET:
      return state.filter(v => v.formId !== action.formId);
    case SORT_TICKETS: {
      const criteriaSort = sortsByCriteria[action.criteria] || sortsByCriteria.title;
      return state.slice().sort(criteriaSort).sort(putSavedViewingsFirst);
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
      return changeViewingsInState(state, action);
    default:
      return state;
  }
}