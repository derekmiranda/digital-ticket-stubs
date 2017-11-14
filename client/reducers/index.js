import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import modalOpen from './modalOpen';
import { ticketsFormName } from 'client/constants';
import {
  START_TICKET_SUBMIT
} from 'actions/types';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    [ticketsFormName]: (state, action = {}) => {
      switch (action.type) {
        case START_TICKET_SUBMIT: {
          const { ticketsField, index } = action;
          return {
            ...state,
            fields: {
              ...state.fields,
              [ticketsField]: state.fields[ticketsField].map((tf, i) => {
                return i === index ? {
                  ...tf,
                  ticketSubmitting: true,
                } : tf;
              }) 
            }
          }
        }
        default:
          return state;
      }
    }
  }),
  modalOpen,
})

export default rootReducer;