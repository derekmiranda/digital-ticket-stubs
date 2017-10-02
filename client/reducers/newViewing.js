import { EDIT_NEW_VIEWING } from 'actions/types';

const newViewing = (state = {}, action = {}) => {
  switch (action.type) {
    case EDIT_NEW_VIEWING:
      return {
        ...state,
        [action.key]: action.val,
      }
    default:
      return state;
  }
}

export default newViewing;