'use strict'

const Promise = require('bluebird')

const handler = function () {
  return new Promise((resolve, reject) => {
    reject(new Error('no way dude!'))
  })
}

module.exports = handler
