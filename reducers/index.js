import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form';
import { combineReducers } from 'redux'



// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}



const rootReducer = combineReducers({
  errorMessage,
  form: formReducer,
  routing
})

export default rootReducer
