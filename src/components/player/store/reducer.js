import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  show: false,
  forceShow: false
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SHOW_FLAG:
      return state.set('show', action.show)
    case actionTypes.CHANGE_FORCE_SHOW_FLAG:
      return state.set('forceShow', action.forceShow)
    default:
      return state
  }
}

export default reducer