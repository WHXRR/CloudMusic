import request from './request'

// 获取歌手分类
// area: 
// -1:全部
// 7华语
// 96欧美
// 8:日本
// 16韩国
// 0:其他
// type: 
// -1:全部
// 1:男歌手
// 2:女歌手
// 3:乐队
// initial: 按首字母索引查找参数
export function getSingerList(area = -1, type = -1, initial, limit = 100, offset) {
  return request({
    url: '/artist/list',
    params: {
      area,
      type,
      initial,
      limit,
      offset
    }
  })
}

export function getSingerDetails(id) {
  return request({
    url: '/artist/detail',
    params: {
      id
    }
  })
}

export function getSingerHotSong(id) {
  return request({
    url: '/artist/top/song',
    params: {
      id
    }
  })
}

export function getSingerAlbum(id, limit, offset) {
  return request({
    url: '/artist/album',
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getSingerMv(id) {
  return request({
    url: '/artist/mv',
    params: {
      id
    }
  })
}

export function getSingerMvUrl(id) {
  return request({
    url: '/mv/url',
    params: {
      id
    }
  })
}

export function getSingerDesc(id) {
  return request({
    url: '/artist/desc',
    params: {
      id
    }
  })
}

export function getSimiSinger(id) {
  return request({
    url: '/simi/artist',
    params: {
      id
    }
  })
}
