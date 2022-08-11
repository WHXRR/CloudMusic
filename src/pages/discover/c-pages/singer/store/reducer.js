import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  list: [],
  details: {},
  hotList: [],
  album: [],
  mv: [],
  mvUrl: '',
  desc: {},
  simiSinger: [],
  topSinger: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('list', action.list)
    case actionTypes.CHANGE_SINGER_DETAILS:
      return state.set('details', action.details)
    case actionTypes.CHANGE_SINGER_HOT_SONG:
      return state.set('hotList', action.hotList)
    case actionTypes.CHANGE_SINGER_ALBUM:
      return state.set('album', action.album)
    case actionTypes.CHANGE_SINGER_MV:
      return state.set('mv', action.mv)
    case actionTypes.CHANGE_SINGER_MV_URL:
      return state.set('mvUrl', action.mvUrl)
    case actionTypes.CHANGE_SINGER_DESC:
      return state.set('desc', action.desc)
    case actionTypes.CHANGE_SIMI_SINGER:
      return state.set('simiSinger', action.simiSinger)
    case actionTypes.CHANGE_TOP_SINGER:
      return state.set('topSinger', action.topSinger)
    default:
      return state
  }
}

export default reducer