import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import modalOpen from './modalOpen';

const rootReducer = combineReducers({
  form: formReducer,
  modalOpen,
})

export default rootReducer;