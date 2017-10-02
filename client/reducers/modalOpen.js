import { FOCUS_VIEWING } from 'actions/types';

const modalOpen = (state = null, action = {}) => {
  switch (action.type) {
    case FOCUS_VIEWING:
      return action.id;
    default:
      return state;
  }
}



export default modalOpen;