import { 
  DETAIL_SONG_LIST,

 } from '@/store/constant'

const init = {
  songList: {},

}

export default function detailReducer (state=init, action) {
  const { type, data } = action

  switch(type) {
    case DETAIL_SONG_LIST:
      return Object.assign({}, state, {songList: data})

    default: return state
  }
}