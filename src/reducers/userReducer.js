import { handleActions } from 'redux-actions'

const initialState = {
  isLoggedIn: false
}

export default handleActions({
  // [logInUser](state) {
  //   return {
  //     ...state,
  //     isLoggedIn: true
  //   }
  // }
}, initialState)
