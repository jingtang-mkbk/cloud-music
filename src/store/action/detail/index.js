import { DETAIL_SONG_LIST } from '@/store/constant'

import { getTopList } from '@/api/recommand'


const detailAction = data => ({type: DETAIL_SONG_LIST, data})

// 获取热门推荐详情
export const getDetailAction = (id) => {
  return async (dispatch) => {
    const {data:{playlist}} = await getTopList(id)
    dispatch(detailAction(playlist))
  }
}