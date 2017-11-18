import {
  REMOVE_TICKET,
} from 'actions/types';

const viewings = (state = [], action = {}) => {
  switch (action.type) {
    case REMOVE_TICKET:
      return state.filter(v => v.formId !== action.formId);
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
      return changeViewingsInState(state, action);
    default:
      return state;
  }
}