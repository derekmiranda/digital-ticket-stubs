import { EDIT_NEW_VIEWING, EDIT_NEW_WATCHTIME, ADD_NEW_VIEWING } from 'actions/types';
import { editViewing, editWatchtime, addViewing } from 'actions/creators';
import viewings, { viewing } from './viewings';

let count = 1;
const newViewings = (state = viewings(), action = {}) => {
  switch (action.type) {
    case EDIT_NEW_VIEWING:
      return viewings(state, editViewing(action));
    case EDIT_NEW_WATCHTIME:
      return viewings(state, editWatchtime(action));
    case ADD_NEW_VIEWING:
      return viewings(state, addViewing({
        ...viewing(),
        id: count++,
      }));
    default:
      return state;
  }
}

export default newViewings;