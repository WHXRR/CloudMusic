import request from './request'

// 获取歌单分类
export function getSongListCatList() {
  return request({
    url: '/playlist/catlist',
  })
}

// 获取歌单
export function getSongList(cat, limit, offset) {
  return request({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset
    }
  })
}
