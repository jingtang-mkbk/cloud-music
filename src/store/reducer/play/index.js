import { 
  CURRENT_LYRIC,
  CURRENT_SONG_DETAIL,
  CURRENT_SONG_URL,
  CURRENT_SONG_ID,
  CURRENT_SONG_ISPLAY,
  CURRENT_PLAY_LIST,
  CURRENT_SONG_INDEX
} from '@/store/constant'

const init ={
  lyric: {},
  songDetail: {},
  songUrl: {},
  id: null,
  isPlay: false,
  playList: [],
  currentIndex: 0
}

export default function playReducer (state=init, action){
  const { type, data } = action

  switch(type){
    case CURRENT_SONG_DETAIL: 
      return Object.assign({}, state, {songDetail: data})
    case CURRENT_SONG_URL:
      return Object.assign({}, state, {songUrl: data})
    case CURRENT_LYRIC:
      return Object.assign({}, state, {lyric: data}) 
    case CURRENT_SONG_ID:
      return Object.assign({}, state, {id: data})
    case CURRENT_SONG_ISPLAY:
      return Object.assign({}, state, {isPlay: data})
    case CURRENT_PLAY_LIST: 
      return Object.assign({}, state, {playList: data})
    case CURRENT_SONG_INDEX:
      return Object.assign({}, state, {currentIndex: data})
    default: return state
  }
}
 