/**
 * Imports
 */

import test from 'tape'
import HandleActions from '../src'
import bind from '@f/bind-middleware'

/**
 * Tests
 */

test('should handle an action', (t) => {
  let io = bind([HandleActions(handler)])

  t.equal(io(0), 1)
  t.end()

  function handler (action) {
    return action + 1
  }
})
