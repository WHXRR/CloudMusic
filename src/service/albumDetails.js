import request from './request'

export function getAlbumDetails(id) {
  return request({
    url: '/album',
    params: {
      id
    },
  })
}

export function getAlbumDetailsComment(id, limit, offset) {
  return request({
    url: '/comment/album',
    params: {
      id,
      limit,
      offset
    },
  })
}

export function getSingerOtherAlbum(id, limit = 5) {
  return request({
    url: '/artist/album',
    params: {
      id,
      limit,
    },
  })
}
