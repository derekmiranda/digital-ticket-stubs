import { EDIT_NEW_VIEWING } from 'actions/types';
import { editViewing } from 'actions/creators';
import { viewing } from './viewings';

const newViewing = (state = viewing(), action = {}) => {
  switch (action.type) {
    case EDIT_NEW_VIEWING:
      return viewing(state, editViewing({
        key: action.key,
        val: action.val,
      }))
    default:
      return state;
  }
}

export default newViewing;