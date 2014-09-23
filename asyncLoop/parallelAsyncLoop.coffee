'use strict'

lu = require './loopUtil'

items = lu.items
results = []

items.forEach (item) ->
  lu.asyncCall item, (result) ->
    results.push result
    if results.length == items.length
      lu.final results 