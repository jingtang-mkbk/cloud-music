import request from '../utils/request'

// 轮播图
export const getCarousel = () => {
  return request({
    url: `/banner`
  })
}

// 热门推荐
export const getHot = (limit) => {
  return request({
    url: `/personalized`,
    params:{
      limit
    }
  })
}

// 新碟上架
export const getNewAlbum = (offset, limit, area, type, year, month) => {
  return request({
    url: '/top/album',
    params: {
      offset,
      limit,
      area,
      type,
      year,
      month,
    }
  })
}


// 榜单
export const getTopList = (id) => {
  return request({
    url: `/playlist/detail`,
    params:{
      id
    }
  })
}

// 入驻歌手
export const getSettledSiger = (limit) => {
  return request({
    url: `/artist/list`,
    params:{
      limit
    }
  })
}

// 热门主播
export const getHotAnchor = (limit) => {
  return request({
    url: `/dj/toplist`,
    params:{
      limit
    }
  })
}
