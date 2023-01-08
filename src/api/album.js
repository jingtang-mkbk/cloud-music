import request from '@/utils/request'

// 全部新碟
export const getNewAlbum = (params) => {
  return request({
    url: '/album/new',
    params
  })
}

// 热门新碟
export const getHotAlbum = (params) => {
  return request({
    url: '/top/album',
    params
  })
}