import { UP_RANKING,
  NEW_RANKING,
  ORIGIN_RANKING,
  NEW_ALBUM,
  CAROUSEL_PIC,
  HOT_RECOMMAND,
  SETTLED_SINGER,
  HOT_ANCHOR
 } from "@/store/constant"
import { 
  getTopList,
  getNewAlbum,
  getCarousel,
  getHot,
  getSettledSiger,
  getHotAnchor
} from '@/api/recommand'

// 轮播图
const carouselAction = (data) => ({type: CAROUSEL_PIC, data})
// 热门推荐
const hotAtcion = data => ({type: HOT_RECOMMAND, data})
// 新碟上架
const newAlbumAction = (data) => ({type: NEW_ALBUM, data})
// 榜单
const upRankingAction = (data) => ({type: UP_RANKING, data})
const newRankingAction = (data) => ({type: NEW_RANKING, data})
const originRankingAction = (data) => ({type: ORIGIN_RANKING, data})
// 入驻主播
const settledSingerAction = data => ({type: SETTLED_SINGER, data})
// 热门主播
const hotAnchorAction = data => ({type: HOT_ANCHOR, data})


// 获取轮播图
export const getCarouselAction = () => {
  return  async(dispatch) => {
    const { data: {banners} } = await getCarousel()
    dispatch(carouselAction(banners))
  }
}
// 获取榜单
export const getTopListAction = (id) => {
  return async(dispatch) => {
    const {data:{playlist:{tracks}}} = await getTopList(id)
    switch (id){
      case 19723756:
        // console.log('uplist已经发请求了')
        dispatch(upRankingAction(tracks))
        break
      case 3779629:
        // console.log('newlist已经发请求了')
        dispatch(newRankingAction(tracks))
        break
      case 2884035:
        // console.log('originlist已经发请求了')
        dispatch(originRankingAction(tracks))
        break
      default: break
    }
  }
}
// 热门推荐
export const getHotRecommand = () => {
  return async (dispatch) => {
    const {data: {result}} = await getHot(8)  // 获取8个
    dispatch(hotAtcion(result))
  }
}
// 获取新碟上架
export const getNewAlbumAction = (limit) => {
  return async(dispatch) => {
    getNewAlbum(limit).then(({data: {weekData}}) => {
    // const {data: {data:{weekData}}} = await getNewAlbum(limit)
      dispatch(newAlbumAction(weekData))
    })
  }
}
// 获取入驻歌手
export const getSettledSingerAction = num => {
  return async (dispatch) => {
    const { data: {artists} } = await getSettledSiger(num)
    dispatch(settledSingerAction(artists))
  }
}
// 获取热门主播
export const getHotAnchorAction = num => {
  return async (dispatch) => {
    const { data: {toplist} } = await getHotAnchor(num)
    dispatch(hotAnchorAction(toplist))
  }
}
