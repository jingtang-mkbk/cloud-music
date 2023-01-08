import {legacy_createStore as createStore, 
  applyMiddleware,
  combineReducers,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import recommandReducer from './reducer/recommand'
import topListReducer from './reducer/toplist'
import loginpopReducer from './reducer/loginpop'
import playReducer from './reducer/play'
import detailReducer from './reducer/detail'
import playListReducer from './reducer/playlist'
import radioReducer from './reducer/djradio'
import artistReducer from './reducer/artist'
import albumReducer from './reducer/album'

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(combineReducers({
  // 推荐
  recommandData: recommandReducer,
  // 榜单
  topListData:topListReducer,
  // 登录框visible
  loginpopData: loginpopReducer,
  // 播放栏
  playData: playReducer,
  // 列表详情  playlist
  detailData: detailReducer,
  // 歌单
  playListData: playListReducer,
  // 电台
  radioData: radioReducer,
  // 歌手
  artistData: artistReducer,
  // 新碟
  newAlbumData: albumReducer
}), composeEnhencers(applyMiddleware(thunk)))