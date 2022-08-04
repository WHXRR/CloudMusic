import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  songListDetails: {},
  hotComments: [],
  comments: [],
  total: 0,
  simiList: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_LIST_DETAIL:
      return state.set('songListDetails', action.detail)
    case actionTypes.CHANGE_SONG_LIST_HOT_COMMENT:
      return state.set('hotComments', action.hotComments)
    case actionTypes.CHANGE_SONG_LIST_COMMENT:
      return state.set('comments', action.comments)
    case actionTypes.CHANGE_SONG_LIST_COMMENT_TOTAL:
      return state.set('total', action.total)
    case actionTypes.CHANGE_SIMI_SONG_LIST:
      return state.set('simiList', action.list)
    default:
      return state
  }
}

export default reducer