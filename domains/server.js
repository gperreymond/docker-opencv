'use strict'

const path = require('path')

// server configuration
const Server = require('node-cqrs-framework').Server
const server = new Server({
  bus: {
    host: '172.20.0.6',
    port: 5672,
    user: 'guest',
    pass: 'guest'
  },
  source: path.resolve(__dirname, '..'),
  patterns: [
    'domains/**/*.js'
  ]
})

// server handlers
const readyHandler = () => {
  console.log('server is ready!')
}
const errorHandler = (error) => {
  console.log(error)
  process.exit(1)
}

server
  .initialize()
  .then(readyHandler)
  .catch(errorHandler)
