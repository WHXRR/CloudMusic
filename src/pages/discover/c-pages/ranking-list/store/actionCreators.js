// 常量
import * as actionTypes from './constants'
// 网络请求
import * as topListService from '@/service/ranking-list'
import { getSongListDetail, getSongListComment } from '@/service/songListDetails'
import { getHotComment } from '@/service/songDetail'

// action
export const changeTopListAction = list => ({
  type: actionTypes.CHANGE_TOP_LIST,
  list
})

export const changeTopListTotalAction = total => ({
  type: actionTypes.CHANGE_TOP_LIST_TOTAL,
  total
})

export const changeCurrentTopListAction = currentList => ({
  type: actionTypes.CHANGE_CURRENT_TOP_LIST,
  currentList
})

export const changeHotCommentAction = hotComments => ({
  type: actionTypes.CHANGE_HOT_COMMENT,
  hotComments
})

export const changeCommentAction = comments => ({
  type: actionTypes.CHANGE_COMMENT,
  comments
})

// --------------------------------------------------------network--------------------------------------------------------
export const getTopListAction = () => {
  return dispatch => {
    topListService.getTopList().then(res => {
      dispatch(changeTopListAction(res.list))
      dispatch(getCurrentTopListAction(res.list[0].id))
    })
  }
}

export const getTopListDetailsAction = (id) => {
  return dispatch => {
    topListService.getTopList().then(res => {
      dispatch(changeTopListAction(res.list))
      dispatch(getCurrentTopListAction(id))
    })
  }
}

export const getCurrentTopListAction = (id) => {
  return dispatch => {
    getSongListDetail(id).then(res => {
      const obj = {
        ...res.playlist,
        tracks: res.playlist.tracks.map((item, index) => ({
          index: index + 1,
          ...item
        }))
      }
      dispatch(changeCurrentTopListAction(obj))
      dispatch(getHotCommentAction(obj.id))
      dispatch(getCommentAction(obj.id))
    })
  }
}

export const getHotCommentAction = (id) => {
  return dispatch => {
    getHotComment(id, 2).then(res => {
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
  return dispatch => {
    getSongListComment(id, limit, offset).then(res => {
      const newComments = res.comments.map((item, index) => {
        return {
          ...item,
          ...item.user,
          index
        }
      })
      dispatch(changeCommentAction(newComments))
      dispatch(changeTopListTotalAction(res.total))
    })
  }
}