import { ARTIST_HOTSINERS, ARTIST_SETTLEDSINGERS } from '@/store/constant'
import { getHotSingers } from '@/api/artist'
 
const hotSingers = data => ({type: ARTIST_HOTSINERS, data})
const settledSingers = data => ({type: ARTIST_SETTLEDSINGERS, data})

// 热门歌手 
// export const getHotSingersAction = () => {
//   return async (dispatch) => {
//     const {data:{artists}} = await getHotSingers()
//     dispatch(hotSingers(artists))
//   }
// }

// 入驻歌手
export const getSingersAction = (type) => {
  return async (dispatch) => {

    switch(type){
      case -1: 
        const {data:{artists}} = await getHotSingers(-1)
        dispatch(hotSingers(artists))
        break
      case 2:
        const {data:{artists:res}} = await getHotSingers(2)
        dispatch(settledSingers(res))
        break
      default: break
    }
    // const {data:{artists}} = await getHotSingers(-1)
    // dispatch(settledSingers(artists))
  }
}