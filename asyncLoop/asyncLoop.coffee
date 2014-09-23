'use strict'

lu = require './loopUtil'

items = lu.items
results = []

series = (item) ->
  if item
    lu.asyncCall item, (result) ->
      results.push result
      series items.shift()
  else
    final lu.results

series items.shift()