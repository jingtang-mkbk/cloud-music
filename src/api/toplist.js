import request from '@/utils/request'

export const getTopList = () => {
  return request({
    url: '/toplist'
  })
}

export const getTopListDetail = (id) => {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export const getTopListComment = (id, type) => {
  return request({
    url: '/comment/new',
    params: {
      id,
      type
    }
  })
}
