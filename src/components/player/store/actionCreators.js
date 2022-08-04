// 常量
import * as actionTypes from './constants'
// 网络请求
import * as recommendService from '@/service/recommend'

// action
export const changeShowFlagAction = show => ({
  type: actionTypes.CHANGE_SHOW_FLAG,
  show
})

export const changeFroceShowFlagAction = forceShow => ({
  type: actionTypes.CHANGE_FORCE_SHOW_FLAG,
  forceShow
})

// network
