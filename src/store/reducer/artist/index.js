import { ARTIST_HOTSINERS, ARTIST_SETTLEDSINGERS } from '@/store/constant'


const init = {
  hotSingers: [],
  settledSingers: []
}

export default function artistReducer(state=init, action){
  const { type, data } =action

  switch(type){
    case ARTIST_HOTSINERS:
      return Object.assign({}, state, {hotSingers: data})
    case ARTIST_SETTLEDSINGERS:
      return Object.assign({}, state, {settledSingers: data})
    default: return state
  }
}