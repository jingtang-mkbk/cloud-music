import { TOP_LIST, TOP_LIST_DETAIL, TOP_LIST_ID, TOP_LIST_COMMENT } from '@/store/constant'

const init = {
  topList: [],
  listDetail: {},
  comment: [],
  id: 19723756
}

export default function topListReducer(state=init, action){
  const {type, data} = action

  switch(type){
    case TOP_LIST: 
      return {...state, topList: data}
    case TOP_LIST_DETAIL:
      return {...state, listDetail: data}
    case TOP_LIST_ID: 
      return {...state, id: data}
    case TOP_LIST_COMMENT:
      return {...state, comment: data}
    default: return state
  }
}