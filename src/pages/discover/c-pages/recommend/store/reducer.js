import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  banner: [],
  hotRecommend: [],
  newDisc: [],
  listLoading: true,
  list: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('banner', action.banners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.hotRecommend)
    case actionTypes.CHANGE_NEW_DISC:
      return state.set('newDisc', action.newDisc)
    case actionTypes.CHANGE_LISTS:
      return state.set('list', action.list)
    case actionTypes.CHANGE_LISTS_LOADING:
      return state.set('listLoading', action.data)
    default:
      return state
  }
}

export default reducer