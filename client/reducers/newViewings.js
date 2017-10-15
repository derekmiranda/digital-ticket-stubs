import { EDIT_NEW_VIEWING } from 'actions/types';
import { editViewing } from 'actions/creators';
import viewings from './viewings';

const newViewings = (state = viewings(), action = {}) => {
  switch (action.type) {
    case EDIT_NEW_VIEWING:
      return viewings(state, editViewing(action));
    default:
      return state;
  }
}

export default newViewings;