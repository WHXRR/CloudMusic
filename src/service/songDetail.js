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

// 点赞
// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
// 6: 动态
export function commentLike(id, cid, t, type = 0) {
  return request({
    url: '/comment/like',
    params: {
      id,
      cid,
      t,
      type
    },
  })
}

// 评论
// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
// 6: 动态
export function handleComment(id, content, t = 1, type = 0, commentId) {
  return request({
    url: '/comment',
    params: {
      id,
      content,
      t,
      type,
      commentId
    },
  })
}