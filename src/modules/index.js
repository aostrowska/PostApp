import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import appReducer from '../reducers/appReducer'
import userReducer from '../reducers/userReducer'

export default combineReducers({
  app: appReducer,
  user: userReducer,
  routing: routerReducer
})
