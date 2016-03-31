
export const DINS_REQUEST = 'DINS_REQUEST'
export const DINS_SUCCESS = 'DINS_SUCCESS'
export const DINS_FAILURE = 'DINS_FAILURE'

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
}
