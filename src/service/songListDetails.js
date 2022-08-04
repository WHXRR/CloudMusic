import request from './request'

// 获取歌单详情
export function getSongListDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    }
  })
}

// 获取专辑详情
export function getAlbumDetail(id) {
  return request({
    url: '/album',
    params: {
      id,
    }
  })
}

// 获取歌单评论
export function getSongListComment(id, limit, offset) {
  return request({
    url: '/comment/playlist',
    params: {
      id,
      limit,
      offset
    }
  })
}

// 获取相关歌单
export function getSimiSongList(id) {
  return request({
    url: '/related/playlist',
    params: {
      id
    }
  })
}
