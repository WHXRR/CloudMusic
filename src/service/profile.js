import request from './request'

export function getUserDetails(uid) {
  return request({
    url: '/user/detail',
    params: {
      uid
    }
  })
}

export function getUserLevel(uid) {
  return request({
    url: '/user/level',
    params: {
      uid
    }
  })
}

export function getUserPlayList(uid) {
  return request({
    url: '/user/playlist',
    params: {
      uid
    }
  })
}

export function getUserDJ(uid) {
  return request({
    url: '/user/dj',
    params: {
      uid
    }
  })
}

export function getUserAudio(uid) {
  return request({
    url: '/user/audio',
    params: {
      uid
    }
  })
}
