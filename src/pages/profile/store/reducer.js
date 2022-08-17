import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  user: {},
  level: {},
  playlist: [],
  subPlayList: [],
  dj: [],
  audio: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER_DETAILS:
      return state.set('user', action.user)
    case actionTypes.CHANGE_USER_LEVEL:
      return state.set('level', action.level)
    case actionTypes.CHANGE_USER_PLAYLIST:
      return state.set('playlist', action.playlist)
    case actionTypes.CHANGE_USER_SUB_PLAYLIST:
      return state.set('subPlayList', action.subPlayList)
    case actionTypes.CHANGE_USER_DJ:
      return state.set('dj', action.dj)
    case actionTypes.CHANGE_USER_AUDIO:
      return state.set('audio', action.audio)
    default:
      return state
  }
}

export default reducer