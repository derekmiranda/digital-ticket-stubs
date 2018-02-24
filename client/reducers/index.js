import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ticketsForm from './ticketsForm'
import submittingTickets from './submittingTickets'
import initialViewings from './initialViewings'
import watchtimeWarnings from './watchtimeWarnings'
import searchResults from './searchResults'
import { reducerFromObj } from 'client/utils/reducerUtils'
import { ticketsFormName } from 'client/constants'
import {
  START_TICKETS_LOAD,
  TICKETS_LOAD_SUCCEEDED,
  TICKETS_LOAD_FAILED,
  FOCUS_VIEWING,
  LOADED_SEARCH_RESULTS,
  WATCHTIME_VALID,
  LOG_IN_SUCCEEDED,
  REGISTER_SUCCEEDED
} from '../actions/types'

const rootReducer = combineReducers({
  form: formReducer.plugin({
    [ticketsFormName]: ticketsForm
  }),
  submittingTickets,
  initialViewings,
  watchtimeWarnings,
  searchResults,
  loading: reducerFromObj(
    {
      [START_TICKETS_LOAD]: () => true,
      [TICKETS_LOAD_SUCCEEDED]: () => false,
      [TICKETS_LOAD_FAILED]: () => false
    },
    false
  ),
  lastValidWatchtimes: reducerFromObj(
    {
      [WATCHTIME_VALID]: (state, action) => ({
        ...state,
        [action.formId]: action.watchtime
      }),
      [TICKETS_LOAD_SUCCEEDED]: (state, action) => {
        const initialWatchtimes = action.loadedTickets.reduce(
          (accum, ticket) => {
            accum[ticket.formId] = ticket.watchtime
            return accum
          },
          {}
        )
        return { ...state, ...initialWatchtimes }
      }
    },
    {}
  ),
  loggedIn: reducerFromObj(
    {
      [LOG_IN_SUCCEEDED]: () => true,
      [REGISTER_SUCCEEDED]: () => true
    },
    false
  )
})

export default rootReducer
