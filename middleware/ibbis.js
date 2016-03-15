import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

const API_ROOT = 'http://localhost:3000/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export function callIBBIS(endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      const camelizedJson = camelizeKeys(json)
      console.log("normalize")
      console.dir(schema)
      console.dir(json)
      console.dir(Object.assign({}, {dins: json} ))
      return Object.assign({},
        {dins: json}
      )
    })
}

const dinSchema = new Schema('dins', {
  idAttribute: 'din'
})

export const Schemas = {
  DIN: dinSchema,
  DIN_ARRAY: arrayOf(dinSchema),
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_IBBIS = Symbol('Call IBBIS')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callibbis = action[CALL_IBBIS]
  if (typeof callibbis === 'undefined') {
    return next(action)
  }

  let { endpoint } = callibbis
  const { schema, types } = callibbis

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }
  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_IBBIS]
    return finalAction
  }
  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  return callIBBIS(endpoint, schema).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
