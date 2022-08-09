// 常量
import * as actionTypes from './constants'
// 网络请求
import * as albumDetailsService from '@/service/albumDetails'
import { getHotComment } from '@/service/songDetail'

// action
export const changeAlbumDetailsAction = detail => ({
  type: actionTypes.CHANGE_ALBUM_DETAILS_DETAIL,
  detail
})

export const changeAlbumHotCommentAction = hotComments => ({
  type: actionTypes.CHANGE_ALBUM_DETAILS_HOT_COMMENT,
  hotComments
})

export const changeAlbumCommentAction = comments => ({
  type: actionTypes.CHANGE_ALBUM_DETAILS_COMMENT,
  comments
})

export const changeAlbumCommentTotalAction = total => ({
  type: actionTypes.CHANGE_ALBUM_DETAILS_COMMENT_TOTAL,
  total
})

export const changeOtherAlbumAction = list => ({
  type: actionTypes.CHANGE_OTHER_ALBUM,
  list
})

// --------------------------------------------------------network--------------------------------------------------------
export const getAlbumDetailsAction = (id) => {
  return dispatch => {
    albumDetailsService.getAlbumDetails(id).then(res => {
      const obj = {
        album: res.album,
        songs: res.songs?.map((item, idx) => ({
          index: idx + 1,
          name: item.name,
          dt: item.dt,
          singer_name: item.ar?.map(ele => ele.name),
          id: item.id
        }))
      }
      dispatch(changeAlbumDetailsAction(obj))
    })
  }
}

export const getAlbumHotCommentAction = (id) => {
  return dispatch => {
    getHotComment(id, 3).then(res => {
      const comments = res.hotComments.map((item, index) => {
        return {
          ...item,
          ...item.user,
          index
        }
      })
      dispatch(changeAlbumHotCommentAction(comments))
    })
  }
}

export const getAlbumCommentAction = (id, limit, offset) => {
  return dispatch => {
    albumDetailsService.getAlbumDetailsComment(id, limit, offset).then(res => {
      const newComments = res.comments.map((item, index) => {
        return {
          ...item,
          ...item.user,
          index
        }
      })
      dispatch(changeAlbumCommentAction(newComments))
      dispatch(changeAlbumCommentTotalAction(res.total))
    })
  }
}

export const getOtherAlbumAction = (id) => {
  return dispatch => {
    albumDetailsService.getSingerOtherAlbum(id).then(res => {
      dispatch(changeOtherAlbumAction(res.hotAlbums))
    })
  }
}
