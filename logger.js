const EventEmitter = require('events')
const fs = require('fs')

const emitter = new EventEmitter()

emitter.on('log', (message) => console.log(message))


function log(message){
  emitter.emit('log',message)
}

module.exports = log