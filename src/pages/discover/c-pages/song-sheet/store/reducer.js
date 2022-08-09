import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  catList: [],
  songList: [],
  total: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CAT_LIST:
      return state.set('catList', action.catList)
    case actionTypes.CHANGE_SONG_LIST:
      return state.set('songList', action.songList)
    case actionTypes.CHANGE_SONG_LIST_TOTAL:
      return state.set('total', action.total)
    default:
      return state
  }
}

export default reducer