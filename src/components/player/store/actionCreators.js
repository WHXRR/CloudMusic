// 常量
import * as actionTypes from './constants'
// 网络请求
import { getSongDetail } from '@/service/songDetail'

// action
export const changeShowFlagAction = show => ({
  type: actionTypes.CHANGE_SHOW_FLAG,
  show
})

export const changeFroceShowFlagAction = forceShow => ({
  type: actionTypes.CHANGE_FORCE_SHOW_FLAG,
  forceShow
})

export const changeCurrentSongAction = currentSong => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

export const changePlayListAction = list => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  list
})

// network
export const getCurrentSongAction = id => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    getSongDetail(id).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
      if (!playList.find(item => item.id === id)) {
        const arr = [...playList, ...res.songs]
        dispatch(changePlayListAction(arr))
      }
    })
  }
}