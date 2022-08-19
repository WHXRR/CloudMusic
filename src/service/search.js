import request from './request'

export function getSearch(keywords, type, limit = 5) {
  return request({
    url: '/cloudsearch',
    params: {
      keywords,
      type,
      limit
    },
  })
}

export function getVideoURL(id) {
  return request({
    url: '/video/url',
    params: {
      id
    },
  })
}
