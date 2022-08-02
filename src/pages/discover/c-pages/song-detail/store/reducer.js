import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  detail: {},
  lyric: [],
  hotComment: [],
  simiSong: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_DETAIL:
      return state.set('detail', action.detail)
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set('lyric', action.lyric)
    case actionTypes.CHANGE_HOT_COMMENT:
      return state.set('hotComment', action.comment)
    case actionTypes.CHANGE_SIMI_SONG:
      return state.set('simiSong', action.song)
    default:
      return state
  }
}

export default reducer