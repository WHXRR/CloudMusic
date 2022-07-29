import request from './request'

export function getBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommend(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewDisc() {
  return request({
    url: '/album/newest'
  })
}
// 获取所有榜单概览
export function getAllLists() {
  return request({
    url: '/toplist/detail'
  })
}
// 获取单个榜单详情
export function getListDetails(id, limit) {
  return request({
    url: '/playlist/track/all',
    params: {
      id,
      limit
    }
  })
}