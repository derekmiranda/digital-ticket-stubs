import { combineReducers } from 'redux';

import viewings from './viewings';
import newViewing from './newViewing';
import modalOpen from './modalOpen';

const rootReducer = combineReducers({
  viewings,
  newViewing,
  modalOpen,
})

export default rootReducer;