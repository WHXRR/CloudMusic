// 常量
import * as actionTypes from './constants'
// 网络请求
import * as songService from '@/service/songDetail'

import { parseLyric } from '@/utils/parse-lyric'

// action
export const changeSongDetailAction = res => ({
  type: actionTypes.CHANGE_SONG_DETAIL,
  detail: res.songs
})

// 改变歌词Action
const changeLyricAction = (lyric) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyric,
})

const changeHotCommentAction = (comment) => ({
  type: actionTypes.CHANGE_HOT_COMMENT,
  comment,
})

const changeSimiSongAction = (song) => ({
  type: actionTypes.CHANGE_SIMI_SONG,
  song,
})

// --------------------------------------------------------network--------------------------------------------------------
export const getBannersAction = (id) => {
  return dispatch => {
    songService.getSongDetail(id).then(res => {
      dispatch(changeSongDetailAction(res))
    })
  }
}

// 歌词network request
export const getLyricAction = (id) => {
  return async (dispatch) => {
    await songService.getLyric(id).then((res) => {
      const lyric = res.lrc && res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricAction(lyricList))
    })
  }
}

export const getHotCommentAction = (id) => {
  return (dispatch) => {
    songService.getHotComment(id).then((res) => {
      const comments = res.hotComments.map(item => {
        return {
          content: item.content,
          ...item.user,
          timeStr: item.timeStr,
          likedCount: item.likedCount,
        }
      })
      dispatch(changeHotCommentAction(comments))
    })
  }
}

export const getSimiSongAction = (id) => {
  return dispatch => {
    songService.getSimiSong(id).then(res => {
      dispatch(changeSimiSongAction(res.songs))
    })
  }
}