import { ALBUM_ALL_NEW, ALBUM_HOT_NEW } from '@/store/constant'

const init = {
  hotAlbum: [],
  allAlbum: []
}


export default function albumReducer(state=init, action){
  const { type, data } = action

  switch(type){
    case ALBUM_HOT_NEW:
      return Object.assign({}, state, {hotAlbum: data})
    case ALBUM_ALL_NEW:
      return Object.assign({}, state, {allAlbum: data})
    default: return state
  }
}