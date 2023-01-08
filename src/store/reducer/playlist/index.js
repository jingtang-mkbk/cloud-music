import { 
  PLAYLIST_DATA_LIST, 
  PLAYLIST_DATA_TOTAL,
  PLAYLIST_DATA_CATAGORY
} from '@/store/constant'

const init = {
  playLists: [],
  total: 0,
  catagoryID: '全部'
}

export default function playListReducer(state=init, action) {
  const { type, data } = action

  switch(type) {
    case PLAYLIST_DATA_LIST:
      return Object.assign({}, state, {playLists: data})
    case PLAYLIST_DATA_TOTAL:
      return Object.assign({}, state, {total: data})
    case PLAYLIST_DATA_CATAGORY: 
      return Object.assign({}, state, {catagoryID: data})
    default: return state 
  }
}