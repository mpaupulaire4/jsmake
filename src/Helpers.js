const fs = require()

class Helpers {
  constructor(args = []) {
    this.args = wrapArgs(args)
  }
  _ = require('lodash')
  v = require('voca')
  prompt = require('promptly')
}

function wrapArgs(args) {
  return {
    get: (i) => {
      if (args[i]){
        return args[i]
      } else {
        console.log(`Argument ${i} not provided on the commandline`)
      }
    }
  }
}

module.exports = Helpers