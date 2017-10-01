import { combineReducers } from 'redux';

import viewings from './viewings';
import newViewing from './newViewing';
import focusViewing from './focusViewing';

const rootReducer = combineReducers({
  viewings,
  newViewing,
  focusViewing,
})

export default rootReducer;