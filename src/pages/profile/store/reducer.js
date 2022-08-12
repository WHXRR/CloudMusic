import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  user: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER_DETAILS:
      return state.set('user', action.user)
    default:
      return state
  }
}

export default reducer