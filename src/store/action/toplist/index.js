import { TOP_LIST, TOP_LIST_DETAIL, TOP_LIST_ID, TOP_LIST_COMMENT } from '@/store/constant'
import { getTopList, getTopListDetail, getTopListComment } from '@/api/toplist'

// 左侧
const topListAction = (data) => ({type: TOP_LIST, data})

// 右侧上
export const idAction = (data) => ({type: TOP_LIST_ID, data})

// 右侧下
const topListDetailAction = (data) => ({type:TOP_LIST_DETAIL, data })

// 评论
const topListCommentAction = (data) => ({type: TOP_LIST_COMMENT, data})

// 获取左侧
export const getTopListAction = () => {
  return async(dispatch) => {
    const {data:{list}} = await getTopList()
    dispatch(topListAction(list))
  }
}

//获取右侧下面 
export const getTopListDetailAction = (id) => {
  return async(dispatch) => {
    const {data:{playlist}} = await getTopListDetail(id)
    dispatch(topListDetailAction(playlist))
  }
}

// 获取评论
export const getCommentAction = (id, type) => {
  return async(dispatch) => {
    const {data: {data: {comments}}} = await getTopListComment(id, type)
    dispatch(topListCommentAction(comments))
  }
}