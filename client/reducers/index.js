import { combineReducers } from 'redux';

import viewings from './viewings';
import newViewing from './newViewing';
import modalOpen from './modalOpen';
import searchResults from './searchResults';

const rootReducer = combineReducers({
  viewings,
  newViewing,
  modalOpen,
  searchResults,
})

export default rootReducer;