import request from '@/utils/request'

export const getHotSingers = (type) => {
  return request({
    url: `/artist/list?limit=10&type=${type}`
  })
} 