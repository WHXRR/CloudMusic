import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  details: {},
  hotComments: [],
  comments: [],
  total: 0,
  otherAlbum: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALBUM_DETAILS_DETAIL:
      return state.set('details', action.detail)
    case actionTypes.CHANGE_ALBUM_DETAILS_HOT_COMMENT:
      return state.set('hotComments', action.hotComments)
    case actionTypes.CHANGE_ALBUM_DETAILS_COMMENT:
      return state.set('comments', action.comments)
    case actionTypes.CHANGE_ALBUM_DETAILS_COMMENT_TOTAL:
      return state.set('total', action.total)
    case actionTypes.CHANGE_OTHER_ALBUM:
      return state.set('otherAlbum', action.list)
    default:
      return state
  }
}

export default reducer