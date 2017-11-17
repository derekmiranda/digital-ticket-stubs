import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import modalOpen from './modalOpen';
import submittingTickets from './submittingTickets';
import initialViewings from './initialViewings';
import { reducerFromObj } from 'client/utils/reducerUtils';
import {
  START_TICKETS_LOAD,
  TICKETS_LOAD_SUCCEEDED,
} from 'actions/types';

const rootReducer = combineReducers({
  form: formReducer,
  modalOpen,
  submittingTickets,
  initialViewings,
  loading: reducerFromObj({
    [START_TICKETS_LOAD]: () => true,
    [TICKETS_LOAD_SUCCEEDED]: () => false,
  }, false), 
})

export default rootReducer;