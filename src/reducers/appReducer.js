import { handleActions } from 'redux-actions'
import { markAppAsLoaded } from '../actions/app';

const initialState = {}

export default handleActions({
  [markAppAsLoaded](state) {
    return {
      ...state,
      loaded: true
    }
  }
}, initialState)