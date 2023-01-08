import request from '@/utils/request'

// 获取推荐节目
export const getRecommandProgram = () => {
  return request({
    url: '/program/recommend'
  })
}

// 获取节目排行榜
export const getProgramRanking = () => {
  return request({
    url: '/dj/program/toplist?limit=10'
  }) 
}

// 电台分类
export const getCategory = (type) => {
  return request({
    url: '/dj/recommend/type',
    params: {
      type
    }
  }) 
}
