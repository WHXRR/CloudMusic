import request from './request'

export function getSongDownload(id) {
  return request({
    url: '/song/download/url',
    params: {
      id
    },
  })
}
