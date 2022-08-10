// 常量
import * as actionTypes from './constants'
// 网络请求
import * as newDiscService from '@/service/newDisc'

// action
export const changeNewDiscAction = list => ({
  type: actionTypes.CHANGE_NEW_DISC,
  list
})

export const changeNewDiscTotalAction = total => ({
  type: actionTypes.CHANGE_NEW_DISC_TOTAL,
  total
})

// --------------------------------------------------------network--------------------------------------------------------
export const getNewDiscAction = (area, limit, offset) => {
  return dispatch => {
    newDiscService.getAlbumNew(area, limit, offset).then(res => {
      dispatch(changeNewDiscAction(res.albums))
      dispatch(changeNewDiscTotalAction(res.total))
    })
  }
}

