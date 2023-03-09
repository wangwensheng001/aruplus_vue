import request from '@/utils/request'

export function getBanners(data) {
  return request({
    url: '/news/list',
    method: 'POST',
    data
  })
}