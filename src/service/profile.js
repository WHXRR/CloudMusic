import request from './request'

export function getUserDetails(uid) {
  return request({
    url: '/user/detail',
    params: {
      uid
    }
  })
}
