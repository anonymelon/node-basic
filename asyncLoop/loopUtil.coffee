'use strict'

exports.asyncCall = (item, cb) ->
  console.log "Running item is: #{ item }"
  setTimeout () ->
    cb item * item
  , 1000

exports.final = (results) ->
  console.log "Done, results are: #{ results }"

exports.items = (parseInt(Math.random() * 1000) for i in [0...10])
