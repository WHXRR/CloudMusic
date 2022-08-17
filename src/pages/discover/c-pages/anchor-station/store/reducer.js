import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  cateList: [],
  hotList: [],
  djList: [],
  details: {},
  program: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_DJ_CATE:
      return state.set('cateList', action.cateList)
    case actionTypes.CHANGE_DJ_RECOMMEND:
      return state.set('hotList', action.hotList)
    case actionTypes.CHANGE_DJ_TOP_LIST:
      return state.set('djList', action.djList)
    case actionTypes.CHANGE_DJ_DETAILS:
      return state.set('details', action.details)
    case actionTypes.CHANGE_DJ_PROGRAM:
      return state.set('program', action.program)
    default:
      return state
  }
}

export default reducer