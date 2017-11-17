import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import modalOpen from './modalOpen';
import submittingTickets from './submittingTickets';
import initialViewings from './initialViewings';

const rootReducer = combineReducers({
  form: formReducer,
  modalOpen,
  submittingTickets,
  initialViewings,
})

export default rootReducer;