import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import paginate from './paginate'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { dins: {} }, action) {
  console.log("response")
  console.dir( {dins: action.response});

  if (action.response) {
      return merge({}, state, {dins: action.response})
  }
  console.log("state")
  console.dir(state)
  return state
}

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
  entities,
  errorMessage,
  routing
})

export default rootReducer
