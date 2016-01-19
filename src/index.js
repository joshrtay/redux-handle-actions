/**
 * redux-handle-actions
 */

function reduxHandleActions (handler) {
  return ctx => next => action => handler(action)
}

/**
 * Exports
 */

export default reduxHandleActions
