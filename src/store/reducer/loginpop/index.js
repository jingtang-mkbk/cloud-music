import { LOGIN_POP_VISIBLE } from '../../constant'

const init = {
  visible: false
}

export default function loginpopReducer (state=init, action) {
  const { type, data } = action 

  switch(type){
    case LOGIN_POP_VISIBLE: 
      return Object.assign({}, state, { visible: data })
    default: return state
  }
}