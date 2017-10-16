import { EDIT_NEW_VIEWING, ADD_NEW_VIEWING } from 'actions/types';
import { editViewing, addViewing } from 'actions/creators';
import viewings from './viewings';

const newViewings = (state = viewings(), action = {}) => {
  switch (action.type) {
    case EDIT_NEW_VIEWING:
      return viewings(state, editViewing(action));
    case ADD_NEW_VIEWING:
      return viewings(state, addViewing({}));
    default:
      return state;
  }
}

export default newViewings;