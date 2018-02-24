import { TICKETS_LOAD_SUCCEEDED, TICKETS_LOAD_FAILED } from 'actions/types'
import createBaseViewing from '../meta/createBaseViewing'

const savedTickets = tix => tix.map(t => ({
	...t,
	saved: true
}))

const initialViewings = (state = {}, action = {}) => {
  switch (action.type) {
    case TICKETS_LOAD_SUCCEEDED:
      return {
        viewings: action.loadedTickets.length
          ? savedTickets(action.loadedTickets)
          : [createBaseViewing()]
      }
    case TICKETS_LOAD_FAILED:
      return {
        viewings: [createBaseViewing()]
      }
    default:
      return state
  }
}

export default initialViewings
