import { CALL_IBBIS, Schemas } from '../middleware/ibbis'

export const DINS_REQUEST = 'DINS_REQUEST'
export const DINS_SUCCESS = 'DINS_SUCCESS'
export const DINS_FAILURE = 'DINS_FAILURE'

function fetchDINs() {
  return {
    [CALL_IBBIS]: {
      types: [ DINS_REQUEST, DINS_SUCCESS, DINS_FAILURE ],
      endpoint: `dins/`
    }
  }
}

export function loadDINs() {
  return (dispatch, getState) => {
    const dins = getState().entities.dins
    console.log("load pre")
    console.dir(getState())

    if (dins && dins.length > 0) {
      console.log("load")
      console.dir(dins)
      return null
    }

    return dispatch(fetchDINs())
  }
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
}
