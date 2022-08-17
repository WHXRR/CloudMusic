import request from './request'

export function getDJCate() {
  return request({
    url: '/dj/catelist'
  })
}

export function getDJRecomment(type) {
  return request({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}

export function getDJHot(limit = 10) {
  return request({
    url: '/dj/hot',
    params: {
      limit
    }
  })
}

// 电台热门排行榜
export function getDJHotTopList(type = 'hot', limit = 20, offset) {
  return request({
    url: '/dj/toplist',
    params: {
      limit,
      offset,
      type
    }
  })
}

// 电台分类热门排行榜
export function getDJTopList(cateId, limit = 20, offset) {
  return request({
    url: '/dj/radio/hot',
    params: {
      limit,
      offset,
      cateId
    }
  })
}

export function getDJDetails(rid) {
  return request({
    url: '/dj/detail',
    params: {
      rid,
    }
  })
}

export function getDJProgram(rid, limit = 30, offset, asc) {
  return request({
    url: '/dj/program',
    params: {
      rid,
      limit,
      offset,
      asc
    }
  })
}

