import request from './request'

// 获取歌曲详情
export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    }
  })
}

export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id,
    },
  })
}

export function getHotComment(id, type = 0) {
  return request({
    url: '/comment/hot',
    params: {
      id,
      type
    },
  })
}

// 歌曲评论
export function getSongComment(id, limit = 20, offset) {
  return request({
    url: '/comment/music',
    params: {
      id,
      limit,
      offset,
      timestamp: new Date().getTime()
    },
  })
}

// 相似歌曲
export function getSimiSong(id) {
  return request({
    url: '/simi/song',
    params: {
      id
    },
  })
}