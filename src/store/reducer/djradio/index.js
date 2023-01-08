import { 
  DJRADIO_PROGRAM_RANKING, 
  DJRADIO_RECOMMAND_PROGRAM, 
  DJRADIO_PROGRAM_CATEGORY2, 
  DJRADIO_PROGRAM_CATEGORY6, 
  DJRADIO_PROGRAM_CATEGORY3, 
  DJRADIO_PROGRAM_CATEGORY2001, 
  DJRADIO_PROGRAM_CATEGORY5, 
} from '@/store/constant'

const init = {
  recommandProgram: [],
  programRanking: [],
  recommendRadio: [],
  lifeRadio: [],
  emotionRadio: [],
  createRadio: [],
  knowledgeRadio: []
}

export default function radioReducer(state=init, action) {

  const { type, data } = action

  switch(type){
    case DJRADIO_RECOMMAND_PROGRAM: 
      return Object.assign( {}, state, { recommandProgram: data } )
    case DJRADIO_PROGRAM_RANKING: 
      return Object.assign( {}, state, { programRanking: data } )
    case DJRADIO_PROGRAM_CATEGORY2:
      return Object.assign( {}, state, { recommendRadio: data } ) 
    case DJRADIO_PROGRAM_CATEGORY6:
      return Object.assign( {}, state, { lifeRadio: data } ) 
    case DJRADIO_PROGRAM_CATEGORY3:
      return Object.assign( {}, state, { emotionRadio: data } ) 
    case DJRADIO_PROGRAM_CATEGORY2001:
      return Object.assign( {}, state, { createRadio: data } ) 
    case DJRADIO_PROGRAM_CATEGORY5:
      return Object.assign( {}, state, { knowledgeRadio: data } ) 
    default: return state
  }
}