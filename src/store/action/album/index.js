import { ALBUM_ALL_NEW, ALBUM_HOT_NEW } from '@/store/constant'

import { getNewAlbum, getHotAlbum } from '@/api/album'

const allAlbum = data => ({type: ALBUM_ALL_NEW, data})

const hotAlbum = data => ({type: ALBUM_HOT_NEW, data})

// 全部新碟
export const getAllAlbumAction = () => {
  return async(dispatch) => {
    const {data:{albums}} = await getNewAlbum()
    dispatch(allAlbum(albums))
  }
}

// 热门新碟
export const getHotAlbumAction = (params) => {
  return async (dispatch) => {
    const {data:{albums}} = await getHotAlbum(params)
    // console.log(albums)
    dispatch(hotAlbum(albums))
  }
}