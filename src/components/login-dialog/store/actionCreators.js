// 常量
import * as actionTypes from './constants'
// 网络请求
import * as loginService from '@/service/login'

import md5 from 'js-md5'

import { message } from 'antd'

import {
  LOGINBYPHONE,
  LOGINBYEMAIL,
  REGISTERACCOUNT
} from '../index'

// action
// 更改登录状态(token)
export const changeUserLoginToken = (token) => ({
  type: actionTypes.CHANGE_PROFILE_TOKEN,
  token
})

// 更改登录状态(cookie)
export const changeUserLoginCookie = (cookie) => ({
  type: actionTypes.CHANGE_PROFILE_COOKIE,
  cookie
})

// 更改登录用户信息
export const changeUserProfile = (profile) => ({
  type: actionTypes.CHANGE_PROFILE_INFO,
  profile
})

export const changeDialogVisibleAction = (isShow) => ({
  type: actionTypes.CHANGE_LOGIN_DIALOG_VISIBLE,
  isShow
})


// --------------------------------------------------------network--------------------------------------------------------
export const getLoginProfileInfo = (username, password, type) => {
  return async dispatch => {
    let res = {}
    if (type === LOGINBYPHONE) {
      res = await loginService.gotoPhoneLogin(username, null, md5(password))
    } else if (type === LOGINBYEMAIL) {
      res = await loginService.gotoEmailLogin(username, null, md5(password))
    } else if (type === REGISTERACCOUNT) {
      res = await loginService.sendRegister(username, null, md5(password))
    }
    if (res.code !== 200) {
      message.error(res.message)
    } else {
      message.success('登录成功')
      document.cookie = res.cookie
      dispatch(changeUserLoginToken(res.token))
      dispatch(changeUserLoginCookie(res.cookie))
      dispatch(changeUserProfile(res.profile))
    }
  }
}
