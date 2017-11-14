import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import modalOpen from './modalOpen';
import { ticketsFormName } from 'client/constants';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    [ticketsFormName]: (state, action = {}) => {
      switch (action.type) {
        default:
          return state;
      }
    }
  }),
  modalOpen,
})

export default rootReducer;