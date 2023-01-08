import { 
  DJRADIO_PROGRAM_RANKING, 
  DJRADIO_RECOMMAND_PROGRAM, 
  DJRADIO_PROGRAM_CATEGORY2, 
  DJRADIO_PROGRAM_CATEGORY6, 
  DJRADIO_PROGRAM_CATEGORY3, 
  DJRADIO_PROGRAM_CATEGORY2001, 
  DJRADIO_PROGRAM_CATEGORY5, 
} from '@/store/constant'

import { getProgramRanking, getRecommandProgram, getCategory } from '@/api/djradio'
 
const programRanking = data => ({type: DJRADIO_PROGRAM_RANKING, data})

const recommandProgram = data => ({type: DJRADIO_RECOMMAND_PROGRAM, data})

const category_2 = data => ({ type: DJRADIO_PROGRAM_CATEGORY2, data }) 
const category_6 = data => ({ type: DJRADIO_PROGRAM_CATEGORY6, data }) 
const category_3 = data => ({ type: DJRADIO_PROGRAM_CATEGORY3, data }) 
const category_2001 = data => ({ type: DJRADIO_PROGRAM_CATEGORY2001, data }) 
const category_5 = data => ({ type: DJRADIO_PROGRAM_CATEGORY5, data }) 

// 推荐节目
export const  programRankingAction = () => {
  return async(dispatch) => {
    const {data:{toplist}} = await getProgramRanking()
    dispatch(programRanking(toplist))
  }
}

// 节目排行榜
export const recommandProgramAction = () => {
  return async(dispatch) => {
    const {data:{programs}} = await getRecommandProgram()
    dispatch(recommandProgram(programs))
  }
}

// 分类
export const categoryAction = (type) => {
  return async(dispatch) => {
    const {data:{djRadios}} = await getCategory(type)
    switch(type){
      case 2: 
        dispatch(category_2(djRadios))
        break
      case 6: 
        dispatch(category_6(djRadios))
        break
      case 3: 
        dispatch(category_3(djRadios))
        break
      case 2001: 
        dispatch(category_2001(djRadios))
        break
      case 5: 
        dispatch(category_5(djRadios))
        break
      default: break
    }
  }
}

