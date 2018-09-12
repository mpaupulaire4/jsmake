const path = require('path')
const fs = require('fs')

module.exports = (script, args) => {
  if (typeof script === 'function') {
    make = script({
      args,
      _: require('lodash'),
      v: require('voca'),
      prompt: require('promptly'),
    })
  } else if (typeof script === 'object' ) {
    make = script
  } else {
    console.log('Your make definition must be a plain object or a function that returns one')
    process.emit(1)
  }
  console.log('make', make)
}
