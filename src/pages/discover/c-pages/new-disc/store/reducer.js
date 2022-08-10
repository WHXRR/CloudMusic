import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  list: [],
  total: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_NEW_DISC:
      return state.set('list', action.list)
    case actionTypes.CHANGE_NEW_DISC_TOTAL:
      return state.set('total', action.total)
    default:
      return state
  }
}

export default reducer