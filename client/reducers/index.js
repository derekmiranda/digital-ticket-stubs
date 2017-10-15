import { combineReducers } from 'redux';

import viewings from './viewings';
import newViewings from './newViewings';
import modalOpen from './modalOpen';
import searchResults from './searchResults';

const rootReducer = combineReducers({
  viewings,
  newViewings,
  modalOpen,
  searchResults,
})

export default rootReducer;