import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import modalOpen from './modalOpen';
import submittingTickets from './submittingTickets';

const rootReducer = combineReducers({
  form: formReducer,
  modalOpen,
  submittingTickets,
})

export default rootReducer;