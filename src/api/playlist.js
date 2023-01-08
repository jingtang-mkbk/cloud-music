import request from '@/utils/request'

export const getPlayList = (cat, limit, before) => {
  return request({
    url: '/top/playlist/highquality',
    params:{
      cat,
      limit,
      before
    }
  })
}