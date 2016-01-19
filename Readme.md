
# redux-handle-actions

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Redux middleware for handling actions.

## Installation

    $ npm install redux-handle-actions

## Usage

```js
import HandleActions from 'redux-handle-actions'
import bind from '@f/bind-middleware'

let io = bind([HandleActions(add)])
io(0) // => 1

function add (action) {
  return action + 1
}

```

## API

### reduxHandleActions(handler)

- `handler` - action handler with signature `handler(action)`

**Returns:** redux middleware

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/redux-handle-actions.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/redux-handle-actions
[git-image]: https://img.shields.io/github/tag/joshrtay/redux-handle-actions.svg
[git-url]: https://github.com/joshrtay/redux-handle-actions
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/redux-handle-actions.svg?style=flat-square
[npm-url]: https://npmjs.org/package/redux-handle-actions
