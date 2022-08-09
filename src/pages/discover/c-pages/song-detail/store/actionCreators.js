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
export const changeLyricAction = (lyric) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyric,
})

export const changeHotCommentAction = (comment) => ({
  type: actionTypes.CHANGE_HOT_COMMENT,
  comment,
})

export const changeCommentAction = (comment) => ({
  type: actionTypes.CHANGE_COMMENT,
  comment,
})

export const changeTotalCommentAction = (total) => ({
  type: actionTypes.CHANGE_TOTAL_COMMENT,
  total,
})

export const changeSimiSongAction = (song) => ({
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
      const comments = res.hotComments.map((item, index) => {
        return {
          ...item,
          ...item.user,
          index
        }
      })
      dispatch(changeHotCommentAction(comments))
    })
  }
}

export const getCommentAction = (id, limit, offset) => {
  return (dispatch) => {
    songService.getSongComment(id, limit, offset).then((res) => {
      const newComments = res.comments.map((item, index) => {
        return {
          ...item,
          ...item.user,
          index
        }
      })
      dispatch(changeCommentAction(newComments))
      dispatch(changeTotalCommentAction(res.total))
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