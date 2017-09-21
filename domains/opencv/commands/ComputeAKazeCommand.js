'use strict'

const Promise = require('bluebird')

const handler = function () {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

module.exports = handler
