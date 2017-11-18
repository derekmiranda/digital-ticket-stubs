import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import submittingTickets from './submittingTickets';
import initialViewings from './initialViewings';
import { reducerFromObj } from 'client/utils/reducerUtils';
import {
  START_TICKETS_LOAD,
  TICKETS_LOAD_SUCCEEDED,
  FOCUS_VIEWING,
  LOADED_SEARCH_RESULTS,
  REMOVE_TICKET,
} from 'actions/types';
import { ticketsFormName } from 'client/constants';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    [ticketsFormName]: (state, action = {}) => {
      switch (action.type) {
        case REMOVE_TICKET:
          return {
            ...state,
            values: state.values && {
              ...state.values,
              viewings: state.values.viewings && state.values.viewings.filter(
                v => v.formId !== action.formId
              )
            }
          }
        default:
          return state;
      }
    }
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