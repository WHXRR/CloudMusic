import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  show: false,
  forceShow: false,
  currentSong: {},
  playList: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SHOW_FLAG:
      return state.set('show', action.show)
    case actionTypes.CHANGE_FORCE_SHOW_FLAG:
      return state.set('forceShow', action.forceShow)
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.list)
    default:
      return state
  }
}

export default reducer