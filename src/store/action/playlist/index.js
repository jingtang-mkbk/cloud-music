import { 
  PLAYLIST_DATA_LIST,
  PLAYLIST_DATA_TOTAL,
  PLAYLIST_DATA_CATAGORY
} from '@/store/constant'

import { getPlayList } from '@/api/playlist'

// 
const getPlayListData = data => ({type: PLAYLIST_DATA_LIST, data})
const getPlayListTotal = data => ({type: PLAYLIST_DATA_TOTAL, data})

export const getPlayListCatagoryID = data => ({type: PLAYLIST_DATA_CATAGORY, data})

// 获取列表数据并发送给reducer
export const getPlayListDataAction = (catagory, limit, beforeTimeStamp)=>{
  return async(dispatch) => {
    const {data} = await getPlayList(catagory, limit, beforeTimeStamp)
    dispatch(getPlayListData(data.playlists))
    dispatch(getPlayListTotal(data.total))
    console.log(data)
  }
}