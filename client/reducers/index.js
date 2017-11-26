import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ticketsForm from './ticketsForm';
import submittingTickets from './submittingTickets';
import initialViewings from './initialViewings';
import watchtimeWarnings from './watchtimeWarnings';
import searchResults from './searchResults';
import { reducerFromObj } from 'client/utils/reducerUtils';
import {
  START_TICKETS_LOAD,
  TICKETS_LOAD_SUCCEEDED,
  TICKETS_LOAD_FAILED,
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
  watchtimeWarnings,
  searchResults,
  modalOpen: reducerFromObj({
    [FOCUS_VIEWING]: (_, action) => action.viewingName,
  }, null),
  loading: reducerFromObj({
    [START_TICKETS_LOAD]: () => true,
    [TICKETS_LOAD_SUCCEEDED]: () => false,
    [TICKETS_LOAD_FAILED]: () => false,
  }, false), 
})

export default rootReducer;