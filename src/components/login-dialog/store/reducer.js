import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  profile: JSON.parse(localStorage.getItem('profile')) || {},
  token: localStorage.getItem('token') || '',
  cookie: '',
  isShow: false,
  globalBtnLoading: false
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PROFILE_INFO:
      return state.set('profile', action.profile)
    case actionTypes.CHANGE_PROFILE_TOKEN:
      return state.set('token', action.token)
    case actionTypes.CHANGE_PROFILE_COOKIE:
      return state.set('cookie', action.cookie)
    case actionTypes.CHANGE_LOGIN_DIALOG_VISIBLE:
      return state.set('isShow', action.isShow)
    case actionTypes.CHANGE_LOADING:
      return state.set('globalBtnLoading', action.loading)
    default:
      return state
  }
}

export default reducer