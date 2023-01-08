import { 
  UP_RANKING,
  NEW_RANKING, 
  ORIGIN_RANKING, 
  NEW_ALBUM, 
  CAROUSEL_PIC,
  HOT_RECOMMAND,
  SETTLED_SINGER,
  HOT_ANCHOR
} from '@/store/constant'

const init = {
  upList: [],
  newList: [],
  originList: [],
  newAlbum: [],
  carousel:[],
  hot:[],
  settledSinger: [],
  hotAnchor: []
}

export default function recommandReducer(state=init, action){
  const { type, data } = action

  switch(type){
    case UP_RANKING: // 飙升榜
      return Object.assign({}, state, {upList: data})
    case NEW_RANKING: // 新歌榜
      return Object.assign({}, state, {newList: data})
    case ORIGIN_RANKING: // 原创榜
      return Object.assign({}, state, {originList: data})
    case NEW_ALBUM: // 新碟上架
      return Object.assign({}, state, {newAlbum: data})
    case CAROUSEL_PIC: // 轮播图
      return Object.assign({}, state, {carousel: data})
    case HOT_RECOMMAND: // 热门推荐
      return Object.assign({}, state, {hot: data})
    case SETTLED_SINGER: // 入驻歌手
      return Object.assign({}, state, {settledSinger: data})
    case HOT_ANCHOR: // 热门主播
      return Object.assign({}, state, {hotAnchor: data})
    default: return state
  }
}