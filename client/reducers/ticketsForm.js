import {
  REMOVE_TICKET,
  SORT_TICKETS,
} from 'actions/types';
import debug from 'client/utils/debug';

// puts viewings saved on db at the top
const putItemsThatMeetCondFirst = (cond) => (i1, i2) => {
  if (cond(i1) && !cond(i2)) {
    return -1;
  } else if (cond(i2) && !cond(i1)) {
    return 1;
  }
  return 0;
}
const putSavedViewingsFirst = putItemsThatMeetCondFirst(i => i.id);
const sortByWatchtime = (v1, v2) => {
  return putItemsThatMeetCondFirst(i => {
    const wt = i.watchtime;
    return wt && wt.month && wt.day && wt.year;
  })(v1, v2)
}

const createSortByKey = key => (o1, o2) => o1[key] > o2[key];
const getSortByCriteria = (criteria) => {
  if (criteria === 'watchtime') {
    return sortByWatchtime;
  }
  return createSortByKey(criteria || 'title');
}

const viewings = (state = [], action = {}) => {
  switch (action.type) {
    case REMOVE_TICKET:
      return state.filter(v => v.formId !== action.formId);
    case SORT_TICKETS: {
      const criteriaSort = getSortByCriteria(action.criteria);
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