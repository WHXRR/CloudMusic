// 常量
import * as actionTypes from './constants'
// 网络请求
import * as profileService from '@/service/profile'

// action
export const changeUserDetailsAction = (user) => ({
  type: actionTypes.CHANGE_USER_DETAILS,
  user
})

export const changeUserLevelAction = (level) => ({
  type: actionTypes.CHANGE_USER_LEVEL,
  level
})

export const changeUserPlayListAction = (playlist) => ({
  type: actionTypes.CHANGE_USER_PLAYLIST,
  playlist
})

export const changeUserSubPlayListAction = (subPlayList) => ({
  type: actionTypes.CHANGE_USER_SUB_PLAYLIST,
  subPlayList
})

export const changeUserDJAction = (dj) => ({
  type: actionTypes.CHANGE_USER_DJ,
  dj
})

export const changeUserAudioAction = (audio) => ({
  type: actionTypes.CHANGE_USER_AUDIO,
  audio
})

// --------------------------------------------------------network--------------------------------------------------------

export const getUserDetailsAction = (id) => {
  return dispatch => {
    profileService.getUserDetails(id).then(res => {
      dispatch(changeUserDetailsAction(res))
    })
  }
}

export const getUserLevelAction = (id) => {
  return dispatch => {
    profileService.getUserLevel(id).then(res => {
      dispatch(changeUserLevelAction(res.data))
    })
  }
}

export const getUserPlayListAction = (id) => {
  return dispatch => {
    profileService.getUserPlayList(id).then(res => {
      dispatch(changeUserPlayListAction(res.playlist.filter(item => !item.subscribed)))
      dispatch(changeUserSubPlayListAction(res.playlist.filter(item => item.subscribed)))
    })
  }
}

export const getUserDJAction = (id) => {
  return dispatch => {
    profileService.getUserDJ(id).then(res => {
      dispatch(changeUserDJAction(res.programs))
    })
  }
}

export const getUserAudioAction = (id) => {
  return dispatch => {
    profileService.getUserAudio(id).then(res => {
      dispatch(changeUserAudioAction(res.djRadios))
    })
  }
}
