import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  banner: [],
  hotRecommend: [],
  newDisc: [],
  listLoading: true,
  list1: {},
  list2: {},
  list3: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('banner', action.banners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.hotRecommend)
    case actionTypes.CHANGE_NEW_DISC:
      return state.set('newDisc', action.newDisc)
    case actionTypes.CHANGE_LISTS1:
      return state.set('list1', action.songs)
    case actionTypes.CHANGE_LISTS2:
      return state.set('list2', action.songs)
    case actionTypes.CHANGE_LISTS3:
      return state.set('list3', action.songs)
    case actionTypes.CHANGE_LISTS_LOADING:
      return state.set('listLoading', action.data)
    default:
      return state
  }
}

export default reducer