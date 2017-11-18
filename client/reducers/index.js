import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ticketsForm from './ticketsForm';
import submittingTickets from './submittingTickets';
import initialViewings from './initialViewings';
import { reducerFromObj } from 'client/utils/reducerUtils';
import {
  START_TICKETS_LOAD,
  TICKETS_LOAD_SUCCEEDED,
  FOCUS_VIEWING,
  LOADED_SEARCH_RESULTS,
} from 'actions/types';
import { ticketsFormName } from 'client/constants';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    [ticketsFormName]: ticketsForm,
  }),
  submittingTickets,
  initialViewings,
  modalOpen: reducerFromObj({
    [FOCUS_VIEWING]: (_, action) => action.viewingName,
  }, null),
  loading: reducerFromObj({
    [START_TICKETS_LOAD]: () => true,
    [TICKETS_LOAD_SUCCEEDED]: () => false,
  }, false), 
  searchResults: reducerFromObj({
    [LOADED_SEARCH_RESULTS]: (_, action) => action.results,
  }, null),
})

export default rootReducer;