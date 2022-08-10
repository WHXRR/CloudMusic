import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  list: [],
  hotComments: [],
  comments: [],
  currentList: {},
  total: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set('list', action.list)
    case actionTypes.CHANGE_CURRENT_TOP_LIST:
      return state.set('currentList', action.currentList)
    case actionTypes.CHANGE_HOT_COMMENT:
      return state.set('hotComments', action.hotComments)
    case actionTypes.CHANGE_COMMENT:
      return state.set('comments', action.comments)
    case actionTypes.CHANGE_TOP_LIST_TOTAL:
      return state.set('total', action.total)
    default:
      return state
  }
}

export default reducer