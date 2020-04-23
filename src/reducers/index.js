import { AUTH_USER } from '../constants'

const initialState = {
  auth: '',
}

function rootReducer(state = initialState, action) {
  if (action.type === AUTH_USER) {
    return { ...state, auth: state.auth.concat(action.payload) }
  }
  return state
}

export default rootReducer
