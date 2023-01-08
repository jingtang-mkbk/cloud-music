import { 
  CURRENT_SONG_DETAIL,
  CURRENT_SONG_URL,
  CURRENT_LYRIC,
  CURRENT_SONG_ID,
  CURRENT_SONG_ISPLAY,
  CURRENT_PLAY_LIST,
  CURRENT_SONG_INDEX
} from '@/store/constant'
import { getSongDetail, getLyric, getSongUrl } from '@/api/common'

const songDetailAction = data => ({type: CURRENT_SONG_DETAIL, data})

const songUrlAction = data => ({type: CURRENT_SONG_URL, data})

const lyricAction = data => ({type: CURRENT_LYRIC, data})

// 当前歌曲id
export const getCurrentID = data => ({type: CURRENT_SONG_ID, data})

// 当前歌曲是否播放
export const getCurrentIsPlayAction = data => ({type: CURRENT_SONG_ISPLAY, data})

// 当前id播放列表
export const getCurrentPlayListAction = data => ({type: CURRENT_PLAY_LIST, data})

// 当前播放列表索引值
export const getCurrentIndexAction = data => ({type: CURRENT_SONG_INDEX, data})

// 获取歌曲详情
export const getSongDetailAction = (id) => {
  return async(dispatch) => {
    const {data: {songs}} = await getSongDetail(id)
    if (songs){
      dispatch(songDetailAction(...songs))
    }
  }
}

// 获取歌曲URL
export const getSongUrlAction = (id) => {
  return async(dispatch) => {
    const {data:{data}} = await getSongUrl(id)
    if (data){
      dispatch(songUrlAction(...data))
    }
  }
} 

// 获取当前歌曲歌词
export const getCurrentLyricAction = (id) => {
  return async(dispatch) => {
    const {data:{lrc:{lyric}}} = await getLyric(id)
    dispatch(lyricAction(lyric))
  }
}