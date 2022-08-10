import request from './request'

// 获取新碟上架列表
export function getAlbumNew(area = 'ALL', limit, offset) {
  return request({
    url: '/album/new',
    params: {
      area,
      limit,
      offset
    }
  })
}