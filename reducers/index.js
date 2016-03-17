import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import paginate from './paginate'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function entities(state = { dins: {} }, action) {
  console.log("entities")
  console.dir(state)
  console.dir(action.response)

  if (action.response && Array.isArray(action.response.dins)) {
    console.log("ent merge")
    console.dir( merge({}, state, action.response) )
    return merge({}, state, action.response)
  }

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
