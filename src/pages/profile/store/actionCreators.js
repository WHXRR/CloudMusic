// 常量
import * as actionTypes from './constants'
// 网络请求
import * as profileService from '@/service/profile'

// action
// 更改登录状态(token)
export const changeUserDetailsAction = (user) => ({
  type: actionTypes.CHANGE_USER_DETAILS,
  user
})

// --------------------------------------------------------network--------------------------------------------------------

export const getUserDetailsAction = (id) => {
  return dispatch => {
    profileService.getUserDetails(id).then(res => {
      dispatch(changeUserDetailsAction(res.profile))
    })
  }
}
