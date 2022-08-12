// 常量
import * as actionTypes from './constants'
// 网络请求
import * as songListService from '@/service/songListDetails'
import { getSongDetail, getHotComment } from '@/service/songDetail'

// action
export const changeSongListDetailAction = detail => ({
  type: actionTypes.CHANGE_SONG_LIST_DETAIL,
  detail
})

export const changeSongListHotCommentAction = hotComments => ({
  type: actionTypes.CHANGE_SONG_LIST_HOT_COMMENT,
  hotComments
})

export const changeSongListCommentAction = comments => ({
  type: actionTypes.CHANGE_SONG_LIST_COMMENT,
  comments
})

export const changeSongListCommentTotalAction = total => ({
  type: actionTypes.CHANGE_SONG_LIST_COMMENT_TOTAL,
  total
})

export const changeSimiSongListAction = list => ({
  type: actionTypes.CHANGE_SIMI_SONG_LIST,
  list
})

// --------------------------------------------------------network--------------------------------------------------------
export const getSongListDetailsAction = (id) => {
  return async dispatch => {
    let res1 = {}
    let res2 = {}
    res1 = await songListService.getSongListDetail(id)
    if (res1.playlist?.trackIds?.length !== res1.playlist?.tracks?.length) {
      const ids = res1.playlist?.trackIds?.map(item => item.id).join(',')
      res2 = await getSongDetail(ids)
    }
    const obj = {
      ...res1.playlist,
      tracks: res2.songs?.map((item, idx) => ({
        ...item,
        index: idx + 1,
        name: item.name,
        dt: item.dt,
        singer: item.ar,
        al: item.al,
        id: item.id
      }))
    }
    dispatch(changeSongListDetailAction(obj))
  }
}

export const getSongListHotCommentAction = (id) => {
  return dispatch => {
    getHotComment(id, 2).then(res => {
      const comments = res.hotComments.map((item, index) => {
        return {
          ...item,
          ...item.user,
          index
        }
      })
      dispatch(changeSongListHotCommentAction(comments))
    })
  }
}

export const getSongListCommentAction = (id, limit, offset) => {
  return dispatch => {
    songListService.getSongListComment(id, limit, offset).then(res => {
      const newComments = res.comments.map((item, index) => {
        return {
          ...item,
          ...item.user,
          index
        }
      })
      dispatch(changeSongListCommentAction(newComments))
      dispatch(changeSongListCommentTotalAction(res.total))
    })
  }
}

export const getSimiSongListAction = (id) => {
  return dispatch => {
    songListService.getSimiSongList(id).then(res => {
      dispatch(changeSimiSongListAction(res.playlists))
    })
  }
}
