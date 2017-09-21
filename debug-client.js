'use strict'

// client configuration
const Client = require('node-cqrs-framework').Client
const client = new Client({
  host: '172.20.0.6',
  port: 5672,
  user: 'guest',
  pass: 'guest'
})

// client subscribe handlers
const successCommandHandler = (message) => {
  console.log('successHandler', message)
  process.exit(0)
}
const errorCommandHandler = (error) => {
  console.log('errorHandler', error)
  process.exit(1)
}

// client handlers
const readyHandler = () => {
  client.send('ComputeAKazeCommand', {}, (acknowledgement) => {
    console.log('acknowledgement', acknowledgement)
  })
}
const errorHandler = (error) => {
  console.log(error)
  process.exit(1)
}

// client start sequence
client
  .subscribe('ComputeAKazeCommand.Success', successCommandHandler)
  .subscribe('ComputeAKazeCommand.Error', errorCommandHandler)
  .initialize()
  .then(readyHandler)
  .catch(errorHandler)
